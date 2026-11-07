import { describe, expect, it } from "vitest";
import {
  experienceDays,
  formatExperience,
  formatTenure,
  formatYM,
  splitDays,
  tenureMonths,
  tokyoYM,
} from "./duration";

// 2025-11-07 12:00 JST
const NOW = new Date("2025-11-07T03:00:00Z");

describe("experienceDays", () => {
  it("counts days of a closed period", () => {
    expect(experienceDays([{ start: "2018-09-01", end: "2021-10-01" }], NOW)).toBe(1126);
  });

  it("counts a current period up to now", () => {
    expect(experienceDays([{ start: "2025-11-01", end: "current" }], NOW)).toBe(6);
  });

  it("sums disjoint periods", () => {
    expect(
      experienceDays(
        [
          { start: "2025-01-01", end: "2025-01-11" },
          { start: "2025-02-01", end: "2025-02-06" },
        ],
        NOW,
      ),
    ).toBe(15);
  });

  it("does not double count overlapping periods", () => {
    const overlapping = experienceDays(
      [
        { start: "2025-06-01", end: "2025-09-30" },
        { start: "2024-11-01", end: "current" },
      ],
      NOW,
    );
    expect(overlapping).toBe(experienceDays([{ start: "2024-11-01", end: "current" }], NOW));
  });

  it("merges partially overlapping periods", () => {
    expect(
      experienceDays(
        [
          { start: "2025-01-01", end: "2025-01-21" },
          { start: "2025-01-11", end: "2025-01-31" },
        ],
        NOW,
      ),
    ).toBe(30);
  });

  it("ignores empty periods", () => {
    expect(experienceDays([{ start: "2025-01-01", end: "2025-01-01" }], NOW)).toBe(0);
  });
});

describe("splitDays / formatExperience", () => {
  it("matches the old moment.duration output", () => {
    // 旧サイトの AWS（2018-09-01〜2021-10-01）は「3 年 0 ヶ月 30 日」だった
    expect(splitDays(1126)).toEqual({ years: 3, months: 0, days: 30 });
    expect(formatExperience(1126, "ja")).toBe("3 年 0 ヶ月 30 日");
    expect(formatExperience(1126, "en")).toBe("3 years 0 months 30 days");
  });

  it("handles less than a month", () => {
    expect(splitDays(6)).toEqual({ years: 0, months: 0, days: 6 });
  });
});

describe("tenureMonths", () => {
  it("includes both start and end months for a closed period", () => {
    expect(tenureMonths([2024, 6], [2025, 9], [2025, 11])).toBe(16);
  });

  it("counts a single-month period as 1", () => {
    expect(tenureMonths([2024, 6], [2024, 6], [2025, 11])).toBe(1);
  });

  it("counts a current period up to (excluding) this month", () => {
    expect(tenureMonths([2024, 11], undefined, [2025, 11])).toBe(12);
  });

  it("is at least 1 month for a period that started this month", () => {
    expect(tenureMonths([2025, 11], undefined, [2025, 11])).toBe(1);
  });
});

describe("formatTenure", () => {
  it("formats in Japanese", () => {
    expect(formatTenure(16, "ja")).toBe("1年4ヶ月");
    expect(formatTenure(24, "ja")).toBe("2年");
    expect(formatTenure(5, "ja")).toBe("5ヶ月");
    expect(formatTenure(0, "ja")).toBe("1ヶ月");
  });

  it("formats in English", () => {
    expect(formatTenure(16, "en")).toBe("1 yr 4 mos");
    expect(formatTenure(25, "en")).toBe("2 yrs 1 mo");
    expect(formatTenure(0, "en")).toBe("1 mo");
  });
});

describe("tokyoYM / formatYM", () => {
  it("uses the Tokyo calendar month", () => {
    // UTC では 10/31 だが JST では 11/1
    expect(tokyoYM(new Date("2025-10-31T16:00:00Z"))).toEqual([2025, 11]);
  });

  it("zero-pads the month", () => {
    expect(formatYM([2024, 6])).toBe("2024.06");
  });
});
