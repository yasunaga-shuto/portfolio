import type { Dictionary } from "./ja";

// TODO: review（ヒーロー・自己紹介カード・タイムライン周りの英語は下書き。ユーザー確認待ち）
const en: Dictionary = {
  meta: {
    title: "portfolio | s.yasunaga",
    description: "Portfolio of s.yasunaga, a full-stack engineer in Tokyo: about, career timeline and years of experience by skill.",
    ogLocale: "en_US",
  },
  nav: {
    label: "Main",
    about: "About",
    timeline: "Timeline",
    skills: "Skills",
    switchLabel: "日本語ページへ→",
    switchHref: "/",
    switchLang: "ja",
  },
  hero: {
    lines: [
      ["Engineering to make the world", "", ""],
      ["more ", "convenient", ","],
      ["and more ", "fun", "."],
    ],
    lead: "A freelance full-stack engineer based in Tokyo. With a wide range of coverage as my strength, I take on everything from laying a product's foundation to leading the team.",
    primaryCta: "See my skills",
    secondaryCta: "About me",
  },
  terminal: {
    nameSub: "Shuto Yasunaga",
    photoAlt: "Profile photo of Yasunaga",
    profile: [
      ["role", "Full-stack engineer"],
      ["base", "Tokyo / Freelance"],
      ["focus", "[backend, infra, db]"],
      ["since", "2017"],
    ],
  },
  about: {
    label: "01 — ABOUT",
    heading: "About",
    intro: "Hi! I'm Yasunaga, a freelance engineer based in Tokyo.",
    strengths: {
      label: "STRENGTHS",
      heading: "What I'm good at",
      items: ["Backend development", "Building infrastructure", "Database design"],
    },
    language: {
      label: "LANGUAGE",
      heading: "Languages",
      unit: "",
      note: "I sometimes translate English documentation, too.",
    },
    favorites: {
      label: "FAVORITES",
      heading: "Things I like",
      items: ["Mahjong", "Guitar", "Pool", "Drinking"],
    },
  },
  timeline: {
    label: "02 — TIMELINE",
    heading: "Timeline",
    summary: (total: number) => `Newest first · ${total} items`,
    current: "Present",
    showAll: (total: number) => `Show all (${total})`,
    close: "Close",
  },
  skills: {
    label: "03 — SKILLS",
    heading: "Skill Set",
    legend: "Bar length = years of experience",
    skill: "Skill",
    experience: "Years of experience",
    count: (n: number) => `${n} skills`,
    categories: {
      langs: "Languages, Frameworks",
      libraries: "Libraries, Tools",
      infra: "Infrastructure, Database",
      tools: "OS, Other Tools",
    },
  },
  footer: {
    toTop: "Back to top ↑",
  },
};

export default en;
