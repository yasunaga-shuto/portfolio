import type { Dictionary } from "@/locales/ja";
import { SectionHeading } from "./SectionHeading";

type Props = { t: Dictionary["about"] };

function Card({ label, heading, children }: { label: string; heading: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-[1_1_220px] flex-col gap-4 rounded-[20px] border border-border bg-surface p-7">
      <div className="flex flex-col gap-1">
        <p className="m-0 font-mono text-xs tracking-[0.1em] text-accent">{label}</p>
        <h3 className="m-0 text-lg font-bold">{heading}</h3>
      </div>
      {children}
    </div>
  );
}

export function About({ t }: Props) {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-[1200px] flex-wrap gap-x-20 gap-y-12 px-5 py-[72px] sm:px-8 sm:py-[120px]"
    >
      <div className="flex-[1_1_260px]">
        <SectionHeading label={t.label} heading={t.heading} />
      </div>
      <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-10">
        <p className="m-0 text-[22px] font-bold leading-[1.6] sm:text-[26px]">{t.intro}</p>
        <div className="flex flex-wrap items-stretch gap-4">
          <Card label={t.strengths.label} heading={t.strengths.heading}>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {t.strengths.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-text-2">
                  <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card label={t.language.label} heading={t.language.heading}>
            <p className="m-0 flex items-baseline gap-2">
              <span className="font-display text-sm font-semibold text-text-3">TOEIC</span>
              <span className="font-display text-[40px] font-bold leading-none text-text">850</span>
              {t.language.unit && <span className="text-sm text-text-3">{t.language.unit}</span>}
            </p>
            <p className="m-0 text-[15px] text-text-2">{t.language.note}</p>
          </Card>
          <Card label={t.favorites.label} heading={t.favorites.heading}>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {t.favorites.items.map((item) => (
                <li key={item} className="rounded-full bg-accent-soft px-4 py-2 text-sm font-medium text-accent-ink">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
