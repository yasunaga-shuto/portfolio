export type Locale = "ja" | "en";
export type YM = [number, number];
export type Period = { start: string; end: string | "current" };

const DAY_MS = 86_400_000;
const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

// 経験期間の日付は日本時間の 0 時として扱う（サーバーが UTC でも日付がずれないように）
function parseJstDate(value: string): number {
  const [y, m, d] = value.split("-").map(Number);
  return Date.UTC(y, m - 1, d) - JST_OFFSET_MS;
}

export function tokyoYM(now: Date): YM {
  const jst = new Date(now.getTime() + JST_OFFSET_MS);
  return [jst.getUTCFullYear(), jst.getUTCMonth() + 1];
}

// 期間が重なっていると二重に数えてしまうので、和集合にしてから合計する
export function experienceDays(periods: Period[], now: Date): number {
  const ranges = periods
    .map((p) => [parseJstDate(p.start), p.end === "current" ? now.getTime() : parseJstDate(p.end)] as const)
    .filter(([start, end]) => end > start)
    .sort((a, b) => a[0] - b[0]);

  let totalMs = 0;
  let current: [number, number] | null = null;
  for (const [start, end] of ranges) {
    if (current && start <= current[1]) {
      current[1] = Math.max(current[1], end);
    } else {
      if (current) totalMs += current[1] - current[0];
      current = [start, end];
    }
  }
  if (current) totalMs += current[1] - current[0];
  return Math.floor(totalMs / DAY_MS);
}

// 旧実装（moment.duration）と同じ表示になるよう、moment と同じ 400 年平均の換算で日数を年・月・日に分ける
export function splitDays(totalDays: number): { years: number; months: number; days: number } {
  const totalMonths = Math.floor((totalDays * 4800) / 146097);
  const days = totalDays - Math.ceil((totalMonths * 146097) / 4800);
  return { years: Math.floor(totalMonths / 12), months: totalMonths % 12, days };
}

export function formatExperience(totalDays: number, locale: Locale): string {
  const { years, months, days } = splitDays(totalDays);
  return locale === "ja"
    ? `${years} 年 ${months} ヶ月 ${days} 日`
    : `${years} years ${months} months ${days} days`;
}

const monthIndex = ([y, m]: YM) => y * 12 + (m - 1);

export function tenureMonths(start: YM, end: YM | undefined, today: YM): number {
  if (end) return monthIndex(end) - monthIndex(start) + 1;
  return Math.max(1, monthIndex(today) - monthIndex(start));
}

export function formatTenure(totalMonths: number, locale: Locale): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (locale === "ja") {
    return `${years ? `${years}年` : ""}${months ? `${months}ヶ月` : ""}` || "1ヶ月";
  }
  const parts = [];
  if (years) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  return parts.join(" ") || "1 mo";
}

export function formatYM([y, m]: YM): string {
  return `${y}.${String(m).padStart(2, "0")}`;
}
