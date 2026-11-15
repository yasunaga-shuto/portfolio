import type { Period } from "@/lib/duration";

export type Skill = { name: string; experience: Period[] };
export type SkillCategoryKey = "ai" | "langs" | "frameworks" | "infra" | "tools";
export type SkillCategory = { key: SkillCategoryKey; skills: Skill[] };

const rubyPeriods: Period[] = [
  { start: "2018-09-01", end: "2021-10-01" },
  { start: "2023-01-24", end: "2023-02-28" },
  { start: "2024-06-01", end: "2025-09-30" },
  { start: "2025-11-01", end: "current" },
];

const reactPeriods: Period[] = [
  { start: "2025-06-01", end: "2025-09-30" },
  { start: "2025-11-01", end: "current" },
];

export const skillCategories: SkillCategory[] = [
  {
    key: "ai",
    skills: [
      { name: "Claude Code", experience: [{ start: "2025-11-01", end: "current" }] },
      { name: "Codex", experience: [{ start: "2025-11-01", end: "current" }] },
      { name: "LLM API (Claude, GPT, Gemini via OpenRouter)", experience: [{ start: "2025-11-01", end: "current" }] },
    ],
  },
  {
    key: "langs",
    skills: [
      { name: "Ruby", experience: rubyPeriods },
      { name: "TypeScript", experience: [{ start: "2021-10-01", end: "current" }] },
      { name: "JavaScript", experience: [{ start: "2018-09-01", end: "current" }] },
      { name: "Go", experience: [{ start: "2021-07-01", end: "2024-05-31" }] },
      { name: "HTML / CSS (SCSS)", experience: [{ start: "2018-09-01", end: "current" }] },
      { name: "Shell", experience: [{ start: "2018-09-01", end: "current" }] },
      { name: "VB.NET", experience: [{ start: "2017-06-01", end: "2018-08-01" }] },
    ],
  },
  {
    key: "frameworks",
    skills: [
      { name: "Ruby on Rails", experience: rubyPeriods },
      { name: "Next.js", experience: reactPeriods },
      { name: "React", experience: reactPeriods },
      { name: "Vue.js", experience: [{ start: "2019-08-01", end: "current" }] },
      { name: "Nuxt.js", experience: [{ start: "2021-10-01", end: "2024-05-31" }] },
      { name: "Gin", experience: [{ start: "2021-07-01", end: "2024-05-31" }] },
      { name: "GORM", experience: [{ start: "2021-07-01", end: "2024-05-31" }] },
      { name: "GraphQL", experience: [{ start: "2023-02-01", end: "2024-05-31" }] },
      { name: "ASP.NET", experience: [{ start: "2017-06-01", end: "2018-08-01" }] },
    ],
  },
  {
    key: "infra",
    skills: [
      {
        name: "AWS",
        experience: [
          { start: "2018-09-01", end: "2021-10-01" },
          { start: "2025-11-01", end: "current" },
        ],
      },
      { name: "GCP", experience: [{ start: "2021-11-01", end: "2024-05-31" }] },
      { name: "GKE", experience: [{ start: "2021-11-01", end: "2024-05-31" }] },
      { name: "Kubernetes", experience: [{ start: "2021-11-01", end: "2024-05-31" }] },
      { name: "Helm", experience: [{ start: "2021-11-01", end: "2024-05-31" }] },
      {
        name: "Terraform",
        experience: [
          { start: "2020-04-01", end: "2024-05-31" },
          { start: "2025-11-01", end: "current" },
        ],
      },
      { name: "Docker", experience: [{ start: "2019-09-01", end: "current" }] },
      { name: "Vagrant", experience: [{ start: "2019-06-01", end: "2020-10-01" }] },
      { name: "MySQL", experience: [{ start: "2018-09-01", end: "current" }] },
      { name: "SQL Server", experience: [{ start: "2017-09-01", end: "2018-08-01" }] },
      {
        name: "Elasticsearch",
        experience: [
          { start: "2019-06-01", end: "2021-10-01" },
          { start: "2024-06-01", end: "2025-09-30" },
        ],
      },
      { name: "GitHub Actions", experience: [{ start: "2024-06-01", end: "2025-09-30" }] },
      { name: "CircleCI", experience: [{ start: "2021-11-01", end: "2024-05-31" }] },
      { name: "Jenkins", experience: [{ start: "2019-06-01", end: "2021-09-01" }] },
    ],
  },
  {
    key: "tools",
    skills: [
      { name: "GitHub", experience: [{ start: "2021-11-01", end: "current" }] },
      { name: "GitLab", experience: [{ start: "2019-06-01", end: "2021-10-01" }] },
      { name: "Jira", experience: [{ start: "2020-06-01", end: "2021-10-01" }] },
      { name: "Stripe", experience: [{ start: "2021-11-01", end: "2024-05-31" }] },
      { name: "Linux", experience: [{ start: "2018-09-01", end: "current" }] },
    ],
  },
];
