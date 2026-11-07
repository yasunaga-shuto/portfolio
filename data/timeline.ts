import type { YM } from "@/lib/duration";

export type TimelineItem = {
  start?: YM;
  end?: YM;
  current?: boolean;
  dateLabel: string;
  org: string;
  title: string;
  body: string;
  tags?: string[];
};
