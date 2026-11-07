import Image from "next/image";
import photo from "@/public/image.webp";
import type { Dictionary } from "@/locales/ja";

type Props = { t: Dictionary["terminal"] };

const links = [
  { label: "wantedly", href: "https://www.wantedly.com/id/shuto_yasunaga" },
  { label: "qiita", href: "https://qiita.com/s_yasunaga" },
];

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <p className="m-0 text-on-dark-2">
      <span className="text-accent-on-dark">$</span> {children}
    </p>
  );
}

export function TerminalCard({ t }: Props) {
  return (
    <div className="w-full max-w-[420px] overflow-hidden rounded-2xl border border-navy-border bg-navy shadow-[0_24px_60px_rgba(36,87,230,0.22)]">
      <div className="flex items-center gap-2 border-b border-navy-border-2 bg-navy-2 px-[18px] py-3.5">
        <span aria-hidden="true" className="size-3 rounded-full bg-signal-red" />
        <span aria-hidden="true" className="size-3 rounded-full bg-signal-yellow" />
        <span aria-hidden="true" className="size-3 rounded-full bg-signal-green" />
        <span className="ml-auto font-mono text-xs text-on-dark-2">~/s.yasunaga — zsh</span>
      </div>
      <div className="flex flex-col gap-[18px] p-6 font-mono text-sm leading-[1.7] text-on-dark">
        <Prompt>whoami</Prompt>
        <div className="flex items-center gap-4">
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
        <Prompt>cat profile.yml</Prompt>
        <dl className="m-0 flex flex-col gap-1 pl-1">
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
        <Prompt>
          open{" "}
          {links.map((link) => (
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
          <span aria-hidden="true" className="-ml-1 inline-block h-4 w-2 bg-accent-on-dark align-[-2px]" />
        </Prompt>
      </div>
    </div>
  );
}
