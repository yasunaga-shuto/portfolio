import type { Dictionary } from "@/locales/ja";
import { Logo } from "./Logo";

type Props = { t: Dictionary["nav"] };

const navLink =
  "inline-flex min-h-11 items-center px-3.5 py-3 text-sm text-text-2 no-underline hover:text-accent";

export function SiteHeader({ t }: Props) {
  return (
    <nav
      aria-label={t.label}
      className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-5 py-6 sm:px-8"
    >
      <a href="#top" className="text-xl text-text no-underline">
        <Logo />
      </a>
      <div className="flex flex-wrap items-center gap-2">
        <a href="#about" className={navLink}>
          {t.about}
        </a>
        <a href="#timeline" className={navLink}>
          {t.timeline}
        </a>
        <a href="#skills" className={navLink}>
          {t.skills}
        </a>
        <a
          href={t.switchHref}
          hrefLang={t.switchLang}
          className="inline-flex min-h-11 items-center rounded-full border border-border-btn px-[18px] py-2.5 font-display text-sm font-medium text-text no-underline hover:text-accent"
        >
          {t.switchLabel}
        </a>
      </div>
    </nav>
  );
}
