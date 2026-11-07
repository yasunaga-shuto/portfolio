import { Fragment } from "react";
import type { Dictionary } from "@/locales/ja";
import { ArrowDownIcon } from "./icons";
import { TerminalCard } from "./TerminalCard";

type Props = { t: Dictionary["hero"]; terminal: Dictionary["terminal"] };

const button =
  "inline-flex min-h-[52px] items-center gap-2.5 rounded-full px-6 text-[15px] font-bold no-underline";

export function Hero({ t, terminal }: Props) {
  return (
    <div
      id="top"
      className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-[72px] gap-y-14 px-5 pt-14 pb-20 sm:px-8 sm:pt-[88px] sm:pb-28"
    >
      <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-8">
        <h1 className="m-0 text-[clamp(32px,4vw,54px)] font-bold leading-[1.35] tracking-[-0.02em] text-text">
          {t.lines.map(([before, emphasis, after], i) => (
            <Fragment key={i}>
              {i > 0 && <br />}
              {before}
              {emphasis && <span className="text-accent">{emphasis}</span>}
              {after}
            </Fragment>
          ))}
        </h1>
        <p className="m-0 max-w-[560px] text-[17px] leading-[1.9] text-text-2">{t.lead}</p>
        <div className="mt-1 flex flex-wrap gap-3">
          <a href="#skills" className={`${button} bg-accent text-white hover:bg-accent-ink`}>
            {t.primaryCta}
            <ArrowDownIcon />
          </a>
          <a href="#about" className={`${button} border border-border-btn bg-surface text-text hover:text-accent`}>
            {t.secondaryCta}
          </a>
        </div>
      </div>
      <div className="flex flex-[1_1_320px] justify-center">
        <TerminalCard t={terminal} />
      </div>
    </div>
  );
}
