"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";

type Props = {
  items: React.ReactNode[];
  limit: number;
  showAllLabel: string;
  closeLabel: string;
};

// 項目の中身は Server Component で描画済み（日付計算を含む）。ここでは開閉の状態だけを持つ
export function TimelineToggle({ items, limit, showAllLabel, closeLabel }: Props) {
  const [open, setOpen] = useState(false);
  const hasMore = items.length > limit;
  const collapsed = hasMore && !open;

  const toggle = () => {
    if (open) {
      // 閉じると下の内容が一気に上がって現在地を見失うので、一覧の上端が画面外ならそこへ戻す
      const section = document.getElementById("timeline");
      if (section && section.getBoundingClientRect().top < 0) section.scrollIntoView();
    }
    setOpen(!open);
  };

  return (
    <>
      <div className="relative">
        <ol id="timeline-list" className="m-0 flex list-none flex-col gap-5 p-0">
          {items.map((item, i) => (
            <li key={i} hidden={collapsed && i >= limit} className="flex scroll-mt-24 gap-4">
              {item}
            </li>
          ))}
        </ol>
        {collapsed && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[140px] bg-linear-to-b from-white/0 to-white to-85%"
          />
        )}
      </div>
      {hasMore && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="timeline-list"
            className="inline-flex min-h-12 cursor-pointer items-center gap-2.5 rounded-full border border-border-btn bg-surface px-6 text-[15px] font-bold text-text hover:text-accent"
          >
            {open ? closeLabel : showAllLabel}
            <ChevronDownIcon className={open ? "rotate-180" : undefined} />
          </button>
        </div>
      )}
    </>
  );
}
