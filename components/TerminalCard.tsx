import type { CSSProperties } from "react";
import Image from "next/image";
import photo from "@/public/image.webp";
import { PROFILE_LINKS } from "@/lib/site";
import type { Dictionary } from "@/locales/ja";

type Props = { t: Dictionary["terminal"] };

const CHAR_MS = 55;
const PAUSE_MS = 350;
const openCommand = ["open", ...PROFILE_LINKS.map((link) => link.label)].join(" ");

// コマンドを打つ → 出力が出る、を上から順に再生する。各行の開始時刻（ms）を前の行の長さから積み上げる
const schedule = (() => {
  let at = 300;
  const next = (duration: number) => {
    const start = at;
    at += duration + PAUSE_MS;
    return start;
  };
  return {
    whoami: next("whoami".length * CHAR_MS),
    name: next(0),
    cat: next("cat profile.yml".length * CHAR_MS),
    profile: next(0),
    open: next(openCommand.length * CHAR_MS),
    cursor: next(0),
  };
})();

const delay = (ms: number, chars?: number) =>
  ({ "--delay": `${ms}ms`, ...(chars !== undefined && { "--chars": chars }) }) as CSSProperties;

function Prompt({
  command,
  at,
  trailing,
  children,
}: {
  command: string;
  at: number;
  trailing?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <p className="term-reveal m-0 text-on-dark-2" style={delay(at)}>
      <span className="text-accent-on-dark">$</span>{" "}
      <span className="term-type" style={delay(at, command.length)}>
        {children ?? command}
      </span>
      {trailing}
    </p>
  );
}

export function TerminalCard({ t }: Props) {
  return (
    <div
      style={{ "--char-ms": `${CHAR_MS}ms` } as CSSProperties}
      className="w-full max-w-[420px] overflow-hidden rounded-2xl border border-navy-border bg-navy shadow-[0_24px_60px_rgba(36,87,230,0.22)]">
      <div className="flex items-center gap-2 border-b border-navy-border-2 bg-navy-2 px-[18px] py-3.5">
        <span aria-hidden="true" className="size-3 rounded-full bg-signal-red" />
        <span aria-hidden="true" className="size-3 rounded-full bg-signal-yellow" />
        <span aria-hidden="true" className="size-3 rounded-full bg-signal-green" />
        <span className="ml-auto font-mono text-xs text-on-dark-2">~/s.yasunaga — zsh</span>
      </div>
      <div className="flex flex-col gap-[18px] p-6 font-mono text-sm leading-[1.7] text-on-dark">
        <Prompt command="whoami" at={schedule.whoami} />
        <div className="term-reveal flex items-center gap-4" style={delay(schedule.name)}>
          <Image
            src={photo}
            alt={t.photoAlt}
            sizes="88px"
            priority
            className="size-22 shrink-0 rounded-xl border-2 border-accent-on-dark object-cover object-[50%_30%]"
          />
          <div className="flex min-w-0 flex-col gap-0.5">
            <p className="m-0 font-display text-[26px] font-bold text-on-dark">s.yasunaga</p>
            <p className="m-0 font-sans text-[13px] text-on-dark-2">{t.nameSub}</p>
          </div>
        </div>
        <Prompt command="cat profile.yml" at={schedule.cat} />
        <dl className="term-reveal m-0 flex flex-col gap-1 pl-1" style={delay(schedule.profile)}>
          {t.profile.map(([key, value]) => (
            <div key={key}>
              <dt className="inline text-accent-on-dark">{key}</dt>
              <span className="text-on-dark-2" aria-hidden="true">
                :{" "}
              </span>
              <dd className={`m-0 inline ${/^[\x20-\x7e]+$/.test(value) ? "" : "font-sans"}`}>{value}</dd>
            </div>
          ))}
        </dl>
        <Prompt
          command={openCommand}
          at={schedule.open}
          trailing={
            <span
              aria-hidden="true"
              className="term-cursor ml-1 inline-block h-4 w-2 bg-accent-on-dark align-[-2px]"
              style={delay(schedule.cursor)}
            />
          }
        >
          open{" "}
          {PROFILE_LINKS.map((link) => (
            <span key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-block py-2.5 text-on-dark underline underline-offset-[3px] hover:text-accent-on-dark"
              >
                {link.label}
              </a>{" "}
            </span>
          ))}
        </Prompt>
      </div>
    </div>
  );
}
