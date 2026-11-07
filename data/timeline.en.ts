import type { TimelineItem } from "./timeline";

// TODO: review（英語版の文言は下書き。社名の英語表記も含めてユーザー確認待ち）
export const timeline: TimelineItem[] = [
  {
    start: [2025, 11],
    current: true,
    dateLabel: "2025.11 — Present",
    org: "BaseMe Inc.",
    title: "Building BaseMe, a scouting service for new graduates",
    body: "Developing the B2B \"AI Recruiter\" and \"AI Agent\" features. Working in an AI-native workflow centered on Claude Code, shipping hundreds of PRs a month at very high velocity.",
    tags: ["Next.js", "Ruby on Rails", "AWS", "Terraform", "Claude Code"],
  },
  {
    start: [2024, 6],
    end: [2025, 9],
    dateLabel: "2024.06 — 2025.09",
    org: "LTS Link Inc.",
    title: "Maintaining \"assign navi\" / Building a new LP for a training service",
    body: "Led version upgrades of Rails, Elasticsearch and MySQL, and mentored junior engineers through pair programming. Quickly picked up Next.js and released the LP in about three months. Cut deploy time from about 10 minutes to about 3 with GitHub Actions.",
    tags: ["Ruby on Rails", "Elasticsearch", "React", "Next.js", "GitHub Actions"],
  },
  {
    start: [2021, 11],
    end: [2024, 5],
    dateLabel: "2021.11 — 2024.05",
    org: "Spalice Inc.",
    title: "Building a rental space platform from scratch",
    body: "Joined a startup as a co-founding member. Worked full stack, from infrastructure to frontend and backend, on an architecture with a Go API and a separate Nuxt.js frontend. Built each environment with Kubernetes and Helm, and set up CI/CD on CircleCI.",
    tags: ["Go", "Nuxt.js", "GKE", "Kubernetes", "Helm", "Circle CI"],
  },
  {
    start: [2019, 6],
    end: [2021, 10],
    dateLabel: "2019.06 — 2021.10",
    org: "LTS Inc.",
    title: "Building and running \"CS Clip\", a company review platform, and more",
    body: "Handled everything full stack, from initial development to operations and maintenance. Set up an ECS environment and CI/CD, cutting build time from 30 minutes to 5. Also led the migration of the dev environment from Vagrant to Docker, and the move to JIRA.",
    tags: ["Ruby on Rails", "Vue.js", "AWS ECS", "Docker", "GitLab"],
  },
  {
    start: [2017, 4],
    end: [2019, 4],
    dateLabel: "2017.04 — 2019.04",
    org: "Style Free Inc.",
    title: "Joined an SIer as a new graduate, from business systems to web services",
    body: "Maintained a members-only web system and core business systems, and built a new desktop app for accounting. On \"unica\", a marketplace for non-standard vegetables, proposed and led development with Ruby on Rails, covering everything from design to implementation.",
    tags: ["Ruby on Rails", "VB.NET", "ASP.NET", "SQL Server", "MySQL"],
  },
  {
    dateLabel: "2015.10",
    org: "Certification",
    title: "Passed the Fundamental Information Technology Engineer Examination",
    body: "Studied the fundamentals of information technology systematically.",
  },
  {
    dateLabel: "c. 2013",
    org: "University",
    title: "First encounter with programming",
    body: "Discovered programming (Java) in university and taught myself by making games and other things.",
  },
];
