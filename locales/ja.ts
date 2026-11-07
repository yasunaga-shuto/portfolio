const ja = {
  meta: {
    title: "portfolio | s.yasunaga",
    description: "エンジニアs.yasunagaのポートフォリオ。自己紹介・職歴タイムライン・技術の経験年数を紹介しています。",
    ogLocale: "ja_JP",
  },
  nav: {
    label: "メイン",
    about: "自己紹介",
    timeline: "タイムライン",
    skills: "スキルセット",
    switchLabel: "To English Page→",
    switchHref: "/en",
    switchLang: "en",
  },
  hero: {
    // [通常, 強調, 通常] を1行ずつ
    lines: [
      ["エンジニアリングで、", "", ""],
      ["世の中をもっと", "便利", "に、"],
      ["もっと", "楽しく", "。"],
    ],
    lead: "東京を拠点に活動するフリーランスのフルスタックエンジニア。守備範囲の広さを武器に、プロダクトの土台づくりからリードまで担当します。",
    primaryCta: "スキルセットを見る",
    secondaryCta: "自己紹介",
  },
  terminal: {
    nameSub: "安永（やすなが）",
    photoAlt: "安永のプロフィール写真",
    profile: [
      ["role", "フルスタックエンジニア"],
      ["base", "東京・フリーランス"],
      ["focus", "[backend, infra, db]"],
      ["since", "2017"],
    ],
  },
  about: {
    label: "01 — ABOUT",
    heading: "自己紹介",
    intro: "はじめまして！ 東京でフリーランスのエンジニアをしています、安永（やすなが）といいます。",
    strengths: {
      label: "STRENGTHS",
      heading: "得意なこと",
      items: ["バックエンドのコーディング", "インフラ構築", "データベース設計"],
    },
    language: {
      label: "LANGUAGE",
      heading: "語学",
      unit: "点",
      note: "英語ドキュメントの翻訳とかもたまにやっています。",
    },
    favorites: {
      label: "FAVORITES",
      heading: "好きなもの",
      items: ["麻雀", "ギター", "ビリヤード", "お酒"],
    },
  },
  timeline: {
    label: "02 — TIMELINE",
    heading: "タイムライン",
    summary: (total: number) => `新しい順・全${total}件`,
    current: "現在",
    showAll: (total: number) => `すべて見る（全${total}件）`,
    close: "閉じる",
  },
  skills: {
    label: "03 — SKILLS",
    heading: "スキルセット",
    legend: "バーの長さ = 経験年数",
    skill: "スキル",
    experience: "経験年数",
    count: (n: number) => `${n} skills`,
    categories: {
      langs: "言語・フレームワーク",
      libraries: "ライブラリ・ツール",
      infra: "インフラ・DB",
      tools: "OS・その他ツール",
    },
  },
  footer: {
    toTop: "ページトップへ ↑",
  },
};

export type Dictionary = typeof ja;
export default ja;
