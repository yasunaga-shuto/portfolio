import { skillCategories } from "@/data/skills";
import type { Locale } from "@/lib/duration";
import { getDictionary, timelines } from "@/lib/i18n";
import { About } from "./About";
import { Hero } from "./Hero";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { Skills } from "./Skills";
import { Timeline } from "./Timeline";

export function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  // 経験年数・在籍期間はこの時点の日付で確定させる（ページは revalidate で 1 日 1 回作り直す）
  const now = new Date();

  return (
    <>
      <header className="bg-hero-bg text-text">
        <SiteHeader t={t.nav} />
        <Hero t={t.hero} terminal={t.terminal} />
      </header>
      <main>
        <About t={t.about} />
        <Timeline t={t.timeline} items={timelines[locale]} locale={locale} now={now} />
        <Skills t={t.skills} categories={skillCategories} locale={locale} now={now} />
      </main>
      <SiteFooter t={t.footer} />
    </>
  );
}
