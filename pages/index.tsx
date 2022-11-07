import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import 'bulma/css/bulma.css'
import moment from "moment"
import { GA_TRACKING_ID } from '../lib/gtag'

export default function Home() {
  type Skill = {
    name: string
    start: string
    end: string
  }
  const langs: Skill[] = [
    { name: "Ruby", start: "2018-09-01", end: "2021-10-01" },
    { name: "Ruby on Rails", start: "2018-09-01", end: "2021-10-01" },
    { name: "Javascript", start: "2018-09-01", end: "current" },
    { name: "Shell", start: "2018-09-01", end: "current" },
    { name: "Vue.js", start: "2019-08-01", end: "current" },
    { name: "Go", start: "2021-07-01", end: "current" },
    { name: "Typescript", start: "2021-10-01", end: "current" },
    { name: "Nuxt.js", start: "2021-10-01", end: "current" },
    { name: "VB.NET", start: "2017-06-01", end: "2018-08-01" },
    { name: "CoffeeScript", start: "2018-09-01", end: "2019-04-01" },
    { name: "jQuery", start: "2018-09-01", end: "2019-04-01" },
  ]
  const infra: Skill[] = [
    { name: "AWS", start: "2018-09-01", end: "2021-10-01" },
    { name: "Docker", start: "2019-09-01", end: "current" },
    { name: "GCP", start: "2021-11-01", end: "current" },
    { name: "GKE", start: "2021-11-01", end: "current" },
    { name: "Kubernetes", start: "2021-11-01", end: "current" },
    { name: "Helm", start: "2021-11-01", end: "current" },
    { name: "Terraform", start: "2020-04-01", end: "current" },
    { name: "Vagrant", start: "2019-06-01", end: "2020-10-01" },
    { name: "MySQL", start: "2018-09-01", end: "current" },
    { name: "SQL Server", start: "2017-09-01", end: "2018-08-01" },
  ]
  const tools: Skill[] = [
    { name: "Linux", start: "2018-09-01", end: "current" },
    { name: "mac", start: "2019-06-01", end: "current" },
    { name: "Windows", start: "2017-04-01", end: "2019-04-01" },
    { name: "JIRA", start: "2020-06-01", end: "2021-10-01" },
    { name: "GitLab", start: "2019-06-01", end: "2021-10-01" },
    { name: "GitHub", start: "2021-11-01", end: "current" },
    { name: "Asana", start: "2021-11-01", end: "current" },
    { name: "Jenkins", start: "2019-06-01", end: "2021-09-01" },
    { name: "Circle CI", start: "2021-11-01", end: "current" },
    { name: "Elasticsearch", start: "2019-06-01", end: "2021-10-01" },
    { name: "HTML,CSS/SCSS", start: "2018-09-01", end: "current" },
  ]
  const years = (skill: Skill) => {
    const start = moment(skill.start)
    const end = skill.end === "current" ? moment() : moment(skill.end)
    const duration = moment.duration(end.diff(start))
    return `${duration.years()}年 ${duration.months()}ヶ月 ${duration.days()}日`
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>ポートフォリオ | s.yasunaga</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="エンジニアs.yasunagaのポートフォリオ、自己紹介・技術の経験年数などを紹介しています。" />
        <meta name="keywords" content="経験年数,ruby,engineer,yasunaga,エンジニアリングで世の中を,もっと便利で楽しい世界へ" />
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
        <section className={`${styles.firstView} ${styles.section}`}>
          <div>
            <h1 className={styles.title}>
              Engineer<br />
              s.yasunaga
            </h1>
            <h2 className={styles.sub}>
              エンジニアリングで世の中を<br />
              もっと便利で楽しい世界へ
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
        </section>
        <section className={`${styles.introduction} ${styles.section}`}>
          <div className={styles.box}></div>
          <h2 className={styles.sub}>自己紹介</h2>
          <p className={styles.text}>
            はじめまして！
            東京でエンジニアをしています、安永（やすなが）といいます<br />
            2013年頃、大学時代にプログラミング（Java）に出会い、独学でプログラムを書き、その楽しさに目覚めました。<br />
            2017年4月から、SIerの企業に新卒で入社をし、現在に至るまでフルスタックエンジニアとして
            さまざまな企業でエンジニアリングをリード。
            得意なのは、バックエンドのコーディング・インフラ構築・データベース設計など。<br />
            好きなものは、麻雀🀄️・ギター🎸・ビリヤード🎱・お酒🍺
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sub}>スキルセット</h2>
          <div className="mb-6">
            <h3 className={styles.sub}>言語・フレームワーク</h3>
            <table className={`${styles.table} table is-fullwidth`}>
              <thead>
                <tr>
                  <td>スキル</td>
                  <td>経験年数</td>
                </tr>
              </thead>
              <tbody>
                {langs.map((s) => <tr key={s.name}><td>{s.name}</td><td>{years(s)}</td></tr>)}
              </tbody>
            </table>
          </div>
          <div className="mb-6">
            <h3 className={styles.sub}>インフラ・DB</h3>
            <table className={`${styles.table} table is-fullwidth`}>
              <thead>
                <tr>
                  <td>スキル</td>
                  <td>経験年数</td>
                </tr>
              </thead>
              <tbody>
                {infra.map((s) => <tr key={s.name}><td>{s.name}</td><td>{years(s)}</td></tr>)}
              </tbody>
            </table>
          </div>
          <div>
            <h3 className={styles.sub}>OS・その他ツール</h3>
            <table className={`${styles.table} table is-fullwidth`}>
              <thead>
                <tr>
                  <td>スキル</td>
                  <td>経験年数</td>
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
