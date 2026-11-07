import type { Period } from "@/lib/duration";

export type Skill = { name: string; experience: Period[] };
export type SkillCategoryKey = "langs" | "libraries" | "infra" | "tools";
export type SkillCategory = { key: SkillCategoryKey; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    key: "langs",
    skills: [
      {
        name: "Ruby",
        experience: [
          { start: "2018-09-01", end: "2021-10-01" },
          { start: "2023-01-24", end: "2023-02-28" },
          { start: "2024-06-01", end: "2025-09-30" },
          { start: "2025-11-01", end: "current" },
        ],
      },
      {
        name: "Ruby on Rails",
        experience: [
          { start: "2018-09-01", end: "2021-10-01" },
          { start: "2023-01-24", end: "2023-02-28" },
          { start: "2024-06-01", end: "2025-09-30" },
          { start: "2025-11-01", end: "current" },
        ],
      },
      { name: "Javascript", experience: [{ start: "2018-09-01", end: "current" }] },
      { name: "Shell", experience: [{ start: "2018-09-01", end: "current" }] },
      { name: "Vue.js", experience: [{ start: "2019-08-01", end: "current" }] },
      {
        name: "React",
        experience: [
          { start: "2025-06-01", end: "2025-09-30" },
          { start: "2025-11-01", end: "current" },
        ],
      },
      { name: "Go", experience: [{ start: "2021-07-01", end: "2024-05-31" }] },
      { name: "Typescript", experience: [{ start: "2021-10-01", end: "current" }] },
      { name: "Nuxt.js", experience: [{ start: "2021-10-01", end: "2024-05-31" }] },
      {
        name: "Next.js",
        experience: [
          { start: "2025-06-01", end: "2025-09-30" },
          { start: "2024-11-01", end: "current" },
        ],
      },
      { name: "VB.NET", experience: [{ start: "2017-06-01", end: "2018-08-01" }] },
      { name: "CoffeeScript", experience: [{ start: "2018-09-01", end: "2019-04-01" }] },
      { name: "jQuery", experience: [{ start: "2018-09-01", end: "2019-04-01" }] },
    ],
  },
  {
    key: "libraries",
    skills: [
      { name: "GraphQL", experience: [{ start: "2023-02-01", end: "2024-05-31" }] },
      { name: "Gorm", experience: [{ start: "2021-07-01", end: "2024-05-31" }] },
      { name: "Gin", experience: [{ start: "2021-07-01", end: "2024-05-31" }] },
      { name: "Bootstrap", experience: [{ start: "2019-06-01", end: "2021-10-01" }] },
      { name: "Bulma", experience: [{ start: "2021-10-01", end: "2024-05-31" }] },
      { name: "Buefy", experience: [{ start: "2021-10-01", end: "2024-05-31" }] },
    ],
  },
  {
    key: "infra",
    skills: [
      { name: "AWS", experience: [{ start: "2018-09-01", end: "2021-10-01" }] },
      { name: "Docker", experience: [{ start: "2019-09-01", end: "current" }] },
      { name: "GCP", experience: [{ start: "2021-11-01", end: "2024-05-31" }] },
      { name: "GKE", experience: [{ start: "2021-11-01", end: "2024-05-31" }] },
      { name: "Kubernetes", experience: [{ start: "2021-11-01", end: "2024-05-31" }] },
      { name: "Helm", experience: [{ start: "2021-11-01", end: "2024-05-31" }] },
      { name: "Terraform", experience: [{ start: "2020-04-01", end: "2024-05-31" }] },
      { name: "Vagrant", experience: [{ start: "2019-06-01", end: "2020-10-01" }] },
      { name: "MySQL", experience: [{ start: "2018-09-01", end: "current" }] },
      { name: "SQL Server", experience: [{ start: "2017-09-01", end: "2018-08-01" }] },
    ],
  },
  {
    key: "tools",
    skills: [
      { name: "Linux", experience: [{ start: "2018-09-01", end: "current" }] },
      { name: "mac", experience: [{ start: "2019-06-01", end: "current" }] },
      { name: "Windows", experience: [{ start: "2017-04-01", end: "2019-04-01" }] },
      { name: "JIRA", experience: [{ start: "2020-06-01", end: "2021-10-01" }] },
      { name: "GitLab", experience: [{ start: "2019-06-01", end: "2021-10-01" }] },
      { name: "GitHub", experience: [{ start: "2021-11-01", end: "current" }] },
      { name: "Asana", experience: [{ start: "2021-11-01", end: "2024-05-31" }] },
      { name: "Jenkins", experience: [{ start: "2019-06-01", end: "2021-09-01" }] },
      { name: "Circle CI", experience: [{ start: "2021-11-01", end: "2024-05-31" }] },
      { name: "Slack", experience: [{ start: "2018-09-01", end: "current" }] },
      { name: "Stripe", experience: [{ start: "2021-11-01", end: "2024-05-31" }] },
      { name: "Elasticsearch", experience: [{ start: "2019-06-01", end: "2021-10-01" }] },
      { name: "HTML,CSS/SCSS", experience: [{ start: "2018-09-01", end: "current" }] },
    ],
  },
];
