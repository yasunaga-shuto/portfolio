import type { Dictionary } from "@/locales/ja";
import { Logo } from "./Logo";

type Props = { t: Dictionary["footer"] };

export function SiteFooter({ t }: Props) {
  return (
    <footer className="bg-navy text-on-dark-2">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-5 py-10 sm:px-8">
        <Logo className="text-lg text-on-dark" dotClassName="text-accent-on-dark" />
        <a href="#top" className="inline-flex min-h-11 items-center text-sm text-on-dark-3 no-underline hover:text-white">
          {t.toTop}
        </a>
      </div>
    </footer>
  );
}
