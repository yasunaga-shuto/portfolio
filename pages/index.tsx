import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Home.module.scss"
import "bulma/css/bulma.css"
import moment from "moment"
import { GA_TRACKING_ID } from "../lib/gtag"
import { useLocale } from "../hooks/useLocale"
import { useRouter } from "next/router"

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
        { start: "2023-01-24", end: "2023-02-28" }
      ]
    },
    {
      name: "Ruby on Rails",
      experience: [
        { start: "2018-09-01", end: "2021-10-01" },
        { start: "2023-01-24", end: "2023-02-28" }
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
      name: "Go",
      experience: [{ start: "2021-07-01", end: "current" }]
    },
    {
      name: "Typescript",
      experience: [{ start: "2021-10-01", end: "current" }]
    },
    {
      name: "Nuxt.js",
      experience: [{ start: "2021-10-01", end: "current" }]
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
      experience: [{ start: "2021-11-01", end: "current" }]
    },
    {
      name: "GKE",
      experience: [{ start: "2021-11-01", end: "current" }]
    },
    {
      name: "Kubernetes",
      experience: [{ start: "2021-11-01", end: "current" }]
    },
    {
      name: "Helm",
      experience: [{ start: "2021-11-01", end: "current" }]
    },
    {
      name: "Terraform",
      experience: [{ start: "2020-04-01", end: "current" }]
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
      experience: [{ start: "2021-11-01", end: "current" }]
    },
    {
      name: "Jenkins",
      experience: [{ start: "2019-06-01", end: "2021-09-01" }]
    },
    {
      name: "Circle CI",
      experience: [{ start: "2021-11-01", end: "current" }]
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
  const years = (skill: Skill) => {
    const years = moment.duration()
    for (const e of skill.experience) {
      const start = moment(e.start)
      const end = e.end === "current" ? moment() : moment(e.end)
      const duration = moment.duration(end.diff(start))
      years.add(duration)
    }
    return `${years.years()} ${t.YEAR} ${years.months()} ${t.MONTH} ${years.days()} ${t.DAYS}`
  }
  const { locale } = useRouter()
  const { t } = useLocale()

  return (
    <div className={styles.container}>
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
      <div className={styles.inner}>
        <section className={styles.section}>
          <div className={styles.firstView}>
            <div>
              <h1 className={styles.title}>
                Engineer<br />
                s.yasunaga
              </h1>
              <h2 className={styles.sub}>
                {t.CATCH1}<br />
                {t.CATCH2}
              </h2>
              <div className={styles.links}>
                <a href="https://twitter.com/shu_engineer" target="_blank" rel="noreferrer">
                  <Image
                    src="/icons/twitter.webp"
                    alt="twitter"
                    width={20}
                    height={20}
                    className={styles.icon}
                    priority={true}
                  />
                </a>
                <a href="https://www.wantedly.com/id/shuto_yasunaga" target="_blank" rel="noreferrer">
                  <Image
                    src="/icons/wantedly.webp"
                    alt="wantedly"
                    width={20}
                    height={20}
                    className={styles.icon}
                    priority={true}
                  />
                </a>
                <a href="https://qiita.com/s_yasunaga" target="_blank" rel="noreferrer">
                  <Image
                    src="/icons/qiita.webp"
                    alt="qiita"
                    width={20}
                    height={20}
                    className={styles.icon}
                    priority={true}
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </a>
              </div>
            </div>
            <Image
              className={styles.image}
              src="/image.webp"
              alt="image"
              width={230}
              height={230}
              priority={true}
            />
          </div>
          <div className={styles.toLocale}>
            {locale === "ja"
              ? <Link href="/en" locale="en">To English Page→</Link>
              : <Link href="/ja" locale="ja">日本語ページへ→</Link>
            }
          </div>
        </section>
        <section className={`${styles.introduction} ${styles.section}`}>
          <div className={styles.box}></div>
          <h2 className={styles.sub}>{t.INTRODUCTION_TEXT}</h2>
          <p className={styles.text} dangerouslySetInnerHTML={{ __html: t.INTRODUCTION }}>
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sub}>{t.SKILLS_TEXT}</h2>
          <div className="mb-6">
            <h3 className={styles.sub}>{t.LANGS}</h3>
            <table className={`${styles.table} table is-fullwidth`}>
              <thead>
                <tr>
                  <td>{t.SKILL}</td>
                  <td>{t.EXPERIENCE}</td>
                </tr>
              </thead>
              <tbody>
                {langs.map((s) => <tr key={s.name}><td>{s.name}</td><td>{years(s)}</td></tr>)}
              </tbody>
            </table>
          </div>
          <div className="mb-6">
            <h3 className={styles.sub}>{t.INFRA}</h3>
            <table className={`${styles.table} table is-fullwidth`}>
              <thead>
                <tr>
                  <td>{t.SKILL}</td>
                  <td>{t.EXPERIENCE}</td>
                </tr>
              </thead>
              <tbody>
                {infra.map((s) => <tr key={s.name}><td>{s.name}</td><td>{years(s)}</td></tr>)}
              </tbody>
            </table>
          </div>
          <div>
            <h3 className={styles.sub}>{t.OTHER}</h3>
            <table className={`${styles.table} table is-fullwidth`}>
              <thead>
                <tr>
                  <td>{t.SKILL}</td>
                  <td>{t.EXPERIENCE}</td>
                </tr>
              </thead>
              <tbody>
                {tools.map((s) => <tr key={s.name}><td>{s.name}</td><td>{years(s)}</td></tr>)}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
