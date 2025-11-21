"use client"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import moment from "moment"
import { GA_TRACKING_ID } from "../lib/gtag"
import en from "@/locales/en"
import ja from "@/locales/ja"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

export default function Home() {
  type Skill = {
    name: string
    experience: { start: string, end: string }[]
  }
  const langs: Skill[] = [
    {
      name: "Ruby",
      experience: [
        { start: "2018-09-01", end: "2021-10-01" },
        { start: "2023-01-24", end: "2023-02-28" },
        { start: "2024-06-01", end: "2025-09-30" },
        { start: "2025-11-01", end: "current" },
      ]
    },
    {
      name: "Ruby on Rails",
      experience: [
        { start: "2018-09-01", end: "2021-10-01" },
        { start: "2023-01-24", end: "2023-02-28" },
        { start: "2024-06-01", end: "2025-09-30" },
        { start: "2025-11-01", end: "current" },
      ]
    },
    {
      name: "Javascript",
      experience: [{ start: "2018-09-01", end: "current" }]
    },
    {
      name: "Shell",
      experience: [{ start: "2018-09-01", end: "current" }]
    },
    {
      name: "Vue.js",
      experience: [{ start: "2019-08-01", end: "current" }]
    },
    {
      name: "React",
      experience: [
        { start: "2025-06-01", end: "2025-09-30" },
        { start: "2025-11-01", end: "current" },
      ]
    },
    {
      name: "Go",
      experience: [{ start: "2021-07-01", end: "2024-05-31" }]
    },
    {
      name: "Typescript",
      experience: [{ start: "2021-10-01", end: "current" }]
    },
    {
      name: "Nuxt.js",
      experience: [{ start: "2021-10-01", end: "2024-05-31" }]
    },
    {
      name: "Next.js",
      experience: [
        { start: "2025-06-01", end: "2025-09-30" },
        { start: "2024-11-01", end: "current" },
      ]
    },
    {
      name: "VB.NET",
      experience: [{ start: "2017-06-01", end: "2018-08-01" }]
    },
    {
      name: "CoffeeScript",
      experience: [{ start: "2018-09-01", end: "2019-04-01" }]
    },
    {
      name: "jQuery",
      experience: [{ start: "2018-09-01", end: "2019-04-01" }]
    },
  ]
  const libraries: Skill[] = [
    {
      name: "GraphQL",
      experience: [{ start: "2023-02-01", end: "2024-05-31" }],
    },
    {
      name: "Gorm",
      experience: [{ start: "2021-07-01", end: "2024-05-31" }]
    },
    {
      name: "Gin",
      experience: [{ start: "2021-07-01", end: "2024-05-31" }]
    },
    {
      name: "Bootstrap",
      experience: [{ start: "2019-06-01", end: "2021-10-01" }],
    },
    {
      name: "Bulma",
      experience: [{ start: "2021-10-01", end: "2024-05-31" }]
    },
    {
      name: "Buefy",
      experience: [{ start: "2021-10-01", end: "2024-05-31" }]
    },
  ]
  const infra: Skill[] = [
    {
      name: "AWS",
      experience: [{ start: "2018-09-01", end: "2021-10-01" }]
    },
    {
      name: "Docker",
      experience: [{ start: "2019-09-01", end: "current" }]
    },
    {
      name: "GCP",
      experience: [{ start: "2021-11-01", end: "2024-05-31" }]
    },
    {
      name: "GKE",
      experience: [{ start: "2021-11-01", end: "2024-05-31" }]
    },
    {
      name: "Kubernetes",
      experience: [{ start: "2021-11-01", end: "2024-05-31" }]
    },
    {
      name: "Helm",
      experience: [{ start: "2021-11-01", end: "2024-05-31" }]
    },
    {
      name: "Terraform",
      experience: [{ start: "2020-04-01", end: "2024-05-31" }]
    },
    {
      name: "Vagrant",
      experience: [{ start: "2019-06-01", end: "2020-10-01" }]
    },
    {
      name: "MySQL",
      experience: [{ start: "2018-09-01", end: "current" }]
    },
    {
      name: "SQL Server",
      experience: [{ start: "2017-09-01", end: "2018-08-01" }]
    },
  ]
  const tools: Skill[] = [
    {
      name: "Linux",
      experience: [{ start: "2018-09-01", end: "current" }]
    },
    {
      name: "mac",
      experience: [{ start: "2019-06-01", end: "current" }]
    },
    {
      name: "Windows",
      experience: [{ start: "2017-04-01", end: "2019-04-01" }]
    },
    {
      name: "JIRA",
      experience: [{ start: "2020-06-01", end: "2021-10-01" }]
    },
    {
      name: "GitLab",
      experience: [{ start: "2019-06-01", end: "2021-10-01" }]
    },
    {
      name: "GitHub",
      experience: [{ start: "2021-11-01", end: "current" }]
    },
    {
      name: "Asana",
      experience: [{ start: "2021-11-01", end: "2024-05-31" }]
    },
    {
      name: "Jenkins",
      experience: [{ start: "2019-06-01", end: "2021-09-01" }]
    },
    {
      name: "Circle CI",
      experience: [{ start: "2021-11-01", end: "2024-05-31" }]
    },
    {
      name: "Slack",
      experience: [{ start: "2018-09-01", end: "current" }]
    },
    {
      name: "Stripe",
      experience: [{ start: "2021-11-01", end: "2024-05-31" }]
    },
    {
      name: "Elasticsearch",
      experience: [{ start: "2019-06-01", end: "2021-10-01" }]
    },
    {
      name: "HTML,CSS/SCSS",
      experience: [{ start: "2018-09-01", end: "current" }]
    },
  ]
  const Content = () => {
    const searchParams = useSearchParams()
    const locale = searchParams.get("lang") || "ja"
    const t = locale === 'ja' || !locale ? ja : en

    const years = (skill: Skill) => {
      const years = moment.duration()
      for (const e of skill.experience) {
        const start = moment(e.start, "YYYY-MM-DD")
        const end = e.end === "current" ? moment() : moment(e.end, "YYYY-MM-DD")
        const duration = moment.duration(end.diff(start))
        years.add(duration)
      }
      return `${years.years()} ${t.YEAR} ${years.months()} ${t.MONTH} ${years.days()} ${t.DAYS}`
    }

    return (
      <div className="px-8">
        <Head>
          <title>{`${t.TITLE} | s.yasunaga`}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={t.DESCRIPTION} />
          <meta name="keywords" content={t.KEYWORDS} />
          {GA_TRACKING_ID != null && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          )}
        </Head>
        <div className="text-white w-full md:w-[53%] mx-auto pt-[15vh] md:py-[30vh] md:pt-[30vh]">
          <section className="mt-[5vh] mb-[50vh] last:mb-0">
            <div className="
              flex flex-col-reverse items-center justify-center text-center
              md:flex-row md:justify-between md:text-left
            ">
              <div>
                <h1 className="font-bold text-[40px] mb-5">
                  Engineer<br />
                  s.yasunaga
                </h1>
                <h2 className="
                  font-bold
                  text-[18px] md:text-[20px]
                  text-center md:text-left
                  mb-[30px]
                ">
                  {t.CATCH1}<br />
                  {t.CATCH2}
                </h2>
                <div className="flex items-center justify-center md:justify-start gap-5">
                  <a href="https://www.wantedly.com/id/shuto_yasunaga" target="_blank" rel="noreferrer">
                    <Image
                      src="/icons/wantedly.webp"
                      alt="wantedly"
                      width={20}
                      height={20}
                      className="w-full h-full object-none"
                      priority={true}
                    />
                  </a>
                  <a href="https://qiita.com/s_yasunaga" target="_blank" rel="noreferrer">
                    <Image
                      src="/icons/qiita.webp"
                      alt="qiita"
                      width={20}
                      height={20}
                      className="w-full h-full object-none"
                      priority={true}
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </a>
                </div>
              </div>
              <Image
                className="
                  rounded-full object-cover
                  w-[130px] h-[130px] mx-auto
                  md:w-[230px] md:h-[230px] md:mx-0
                "
                src="/image.webp"
                alt="image"
                width={230}
                height={230}
                priority={true}
              />
            </div>
            <div className="mt-[30px] text-center md:text-left">
              {locale === "ja"
                ? <Link href="?lang=en" className="text-base text-white inline-block hover:border-b hover:border-white">To English Page→</Link>
                : <Link href="?lang=ja" className="text-base text-white inline-block hover:border-b hover:border-white">日本語ページへ→</Link>
              }
            </div>
          </section>
          <section className="relative mt-[5vh] mb-[50vh] last:mb-0">
            <div className="hidden"></div>
            <h2 className="font-bold text-[30px] text-center mb-[50px]">{t.INTRODUCTION_TEXT}</h2>
            <p className="text-[17px] leading-[2.3]" dangerouslySetInnerHTML={{ __html: t.INTRODUCTION }}>
            </p>
          </section>
          <section className="mt-[5vh] mb-[50vh] last:mb-0">
            <h2 className="font-bold text-[30px] text-center my-[50px]">{t.SKILLS_TEXT}</h2>

            <div className="mb-6">
              <h3 className="font-bold text-[23px] text-center my-[60px]">{t.LANGS}</h3>
              <table className="w-full table-auto border-collapse bg-transparent text-white">
                <thead>
                  <tr className="text-left border-b-2 border-gray-200">
                    <td className="py-3">{t.SKILL}</td>
                    <td className="py-3">{t.EXPERIENCE}</td>
                  </tr>
                </thead>
                <tbody>
                  {langs.map((s) => (
                    <tr key={s.name} className="border-b-1 border-gray-200">
                      <td className="py-3">{s.name}</td>
                      <td className="py-3">{years(s)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-[23px] text-center my-[60px]">{t.LIBRARIES}</h3>
              <table className="w-full table-auto border-collapse bg-transparent text-white">
                <thead>
                  <tr className="text-left border-b-2 border-gray-200">
                    <th className="py-2">{t.SKILL}</th>
                    <th className="py-2">{t.EXPERIENCE}</th>
                  </tr>
                </thead>
                <tbody>
                  {libraries.map((s) => (
                    <tr key={s.name} className="border-b-1 border-gray-200">
                      <td className="py-3">{s.name}</td>
                      <td className="py-3">{years(s)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-[23px] text-center my-[60px]">{t.INFRA}</h3>
              <table className="w-full table-auto border-collapse bg-transparent text-white">
                <thead>
                  <tr className="text-left border-b-2 border-gray-200">
                    <td className="py-3">{t.SKILL}</td>
                    <td className="py-3">{t.EXPERIENCE}</td>
                  </tr>
                </thead>
                <tbody>
                  {infra.map((s) => (
                    <tr key={s.name} className="border-b-1 border-gray-200">
                      <td className="py-3">{s.name}</td>
                      <td className="py-3">{years(s)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-bold text-[23px] text-center my-[60px]">{t.OTHER}</h3>
              <table className="w-full table-auto border-collapse bg-transparent text-white">
                <thead>
                  <tr className="text-left border-b-2 border-gray-200">
                    <td className="py-3">{t.SKILL}</td>
                    <td className="py-3">{t.EXPERIENCE}</td>
                  </tr>
                </thead>
                <tbody>
                  {tools.map((s) => (
                    <tr key={s.name} className="border-b-1 border-gray-200">
                      <td className="py-3">{s.name}</td>
                      <td className="py-3">{years(s)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>

    )
  }

  return (
    <Suspense>
      <Content />
    </Suspense>
  )
}
