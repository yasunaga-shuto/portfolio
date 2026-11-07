import { timeline as timelineEn } from "@/data/timeline.en";
import { timeline as timelineJa } from "@/data/timeline.ja";
import type { Locale } from "@/lib/duration";
import en from "@/locales/en";
import ja from "@/locales/ja";

export const dictionaries = { ja, en } as const;
export const timelines = { ja: timelineJa, en: timelineEn } as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
