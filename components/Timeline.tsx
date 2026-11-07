import type { TimelineItem } from "@/data/timeline";
import { formatTenure, formatYM, type Locale, tenureMonths, tokyoYM } from "@/lib/duration";
import type { Dictionary } from "@/locales/ja";
import { SectionHeading } from "./SectionHeading";
import { TimelineToggle } from "./TimelineToggle";

type Props = { t: Dictionary["timeline"]; items: TimelineItem[]; locale: Locale; now: Date };

const INITIAL_VISIBLE = 3;

function Entry({ item, t, locale, now }: { item: TimelineItem; t: Dictionary["timeline"]; locale: Locale; now: Date }) {
  const { start, end, current } = item;
  const endLabel = current ? t.current : end ? formatYM(end) : item.dateLabel;
  const tenure = start ? formatTenure(tenureMonths(start, end, tokyoYM(now)), locale) : null;

  return (
    <>
      <div
        aria-hidden="true"
        className="flex flex-[0_0_92px] flex-col items-end justify-between gap-2 pt-[25px] pb-0.5 text-right max-sm:hidden"
      >
        <span className={`font-mono text-sm font-semibold leading-[1.3] ${current ? "text-accent" : "text-text"}`}>
          {endLabel}
        </span>
        {start && (
          <>
            <span className="text-base font-bold leading-[1.3] text-text">{tenure}</span>
            <span className="font-mono text-[13px] leading-[1.3] text-text-3">{formatYM(start)}</span>
          </>
        )}
      </div>
      <div aria-hidden="true" className="flex flex-[0_0_16px] flex-col items-center pt-7 pb-1.5">
        <span className={`size-4 shrink-0 rounded-full border-[3px] border-accent ${current ? "bg-accent" : "bg-white"}`} />
        {start && (
          <>
            <span className={`my-1 w-0.5 flex-auto ${current ? "bg-accent" : "bg-border-2"}`} />
            <span className="size-2.5 shrink-0 rounded-full border-2 border-muted-dot bg-white" />
          </>
        )}
      </div>
      <div className="flex min-w-0 flex-auto flex-col gap-2 rounded-[20px] border border-border bg-page-bg px-5 py-6 sm:px-7">
        <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
          <p className="m-0 hidden font-mono text-sm font-medium text-accent max-sm:block">{item.dateLabel}</p>
          {/* 日付軸は装飾扱い（aria-hidden）なので、スクリーンリーダー向けに期間をテキストで持たせる */}
          <p className="sr-only max-sm:hidden">{tenure ? `${item.dateLabel}, ${tenure}` : item.dateLabel}</p>
          <p className="m-0 text-[13px] text-text-3">{item.org}</p>
        </div>
        <h3 className="m-0 text-xl font-bold leading-normal">{item.title}</h3>
        <p className="m-0 text-text-2">{item.body}</p>
        {item.tags && item.tags.length > 0 && (
          <ul className="mt-1 mb-0 flex list-none flex-wrap gap-1.5 p-0">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-border-2 bg-white px-2.5 py-[3px] font-mono text-xs text-text-2"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export function Timeline({ t, items, locale, now }: Props) {
  return (
    <section id="timeline" className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-20 gap-y-12 px-5 py-[72px] sm:px-8 sm:py-[120px]">
        <div className="flex-[1_1_260px]">
          <SectionHeading label={t.label} heading={t.heading} />
        </div>
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-6">
          <p className="m-0 text-sm text-text-3">{t.summary(items.length)}</p>
          <TimelineToggle
            limit={INITIAL_VISIBLE}
            showAllLabel={t.showAll(items.length)}
            closeLabel={t.close}
            items={items.map((item) => (
              <Entry key={`${item.dateLabel}-${item.title}`} item={item} t={t} locale={locale} now={now} />
            ))}
          />
        </div>
      </div>
    </section>
  );
}
