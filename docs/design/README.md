# ポートフォリオ リニューアル 実装仕様

Claude Code 向けの実装指示書です。デザインの元データは同じフォルダの `Main.dc.html`（デザインツールの書き出し）。
`{{accent}}` などの `{{...}}` はデザインツールの差し込み変数で、値はこの README に記載しています。

---

## 0. 方針

- **既存コードは参考程度。一から書き直してよい。** 既存の `app/page.tsx` からは「スキルの経験期間データ」と「GA の設定」だけ引き継ぐ。
- スタックは現行を継続：**Next.js 15（App Router）/ React 19 / TypeScript / Tailwind CSS v4**。パッケージマネージャは yarn。
- `moment` は削除（日付計算は自前の小さな関数 or `date-fns`）。
- `styles/Home.module.scss` など不要なものは削除してよい。
- まず **実装計画を提示してからコードを書く**こと。

## 1. ページ構成

1 ページ構成（縦に以下の順）。ナビのリンクはページ内アンカー。

| # | セクション | id |
|---|---|---|
| – | ヘッダー（ナビ） | – |
| – | ヒーロー | `top` |
| 01 | 自己紹介 ABOUT | `about` |
| 02 | タイムライン TIMELINE | `timeline` |
| 03 | スキルセット SKILLS | `skills` |
| – | フッター | – |

## 2. デザイントークン

### カラー

| 名前 | 値 | 用途 |
|---|---|---|
| `accent` | `#2457E6` | 強調語・ボタン・ラベル・バー・タイムラインの点 |
| `accent-on-dark` | `#7DB3FF` | ターミナルカード内の強調色 |
| `accent-soft` | accent 10% + 白（≒ `#E9EFFD`） | 「好きなもの」タグ背景 |
| `accent-ink` | accent 75% + 黒（≒ `#1B41AD`） | 「好きなもの」タグ文字 |
| `hero-bg` | `#E3EEFF` | ヘッダー + ヒーロー背景 |
| `page-bg` | `#F7FAFF` | 自己紹介・スキル背景、カード背景 |
| `surface` | `#FFFFFF` | タイムライン背景、カード |
| `navy` | `#0B1A36` | 本文の主色、ターミナルカード背景、フッター背景 |
| `navy-2` | `#13264C` | ターミナルのタイトルバー |
| `text` | `#0B1A36` | 見出し・本文 |
| `text-2` | `#34496E` | 本文（2 次） |
| `text-3` | `#4D5E7C` | 補足・ラベル |
| `border` | `#E0E8F5` | カード枠・セクション境界 |
| `border-2` | `#D3DDEE` | 区切り線・タイムラインの線 |
| `border-btn` | `#B8CBEB` | アウトラインボタン枠 |
| `muted-dot` | `#A9B8D3` | タイムライン開始点 |
| ダーク上の文字 | `#FFFFFF` / `#A2B6DA` / `#C3D3EE` | ターミナル・フッター |
| 信号色（ターミナルの丸） | `#FF6B6B` `#FFC857` `#4CD18A` | 装飾のみ |

Tailwind v4 の `@theme` に CSS 変数として定義すること。

### タイポグラフィ（`next/font/google`）

| 用途 | フォント |
|---|---|
| 日本語本文・見出し | **Noto Sans JP**（400/500/700） |
| 欧文ロゴ・名前 | **Space Grotesk**（500/600/700） |
| ラベル・日付・数値・コード | **JetBrains Mono**（400/500/600） |

| 要素 | サイズ / 太さ |
|---|---|
| ヒーロー h1 | `clamp(32px, 4vw, 54px)` / 700 / line-height 1.35 |
| セクション h2 | 40px / 700 |
| セクションラベル（`01 — ABOUT`） | 13px / mono / letter-spacing .12em / accent |
| カード h3 | 18〜20px / 700 |
| 本文 | 16px / line-height 1.8 |
| 補足 | 13〜14px / text-3 |

### レイアウト

- コンテナ：`max-width: 1200px`、左右 padding 32px（スマホ 20px）
- セクション上下 padding：120px（スマホ 72px）
- 自己紹介・タイムライン：左に見出し列（約 260px）、右に本文列。幅が足りなければ縦積み（flex-wrap）
- カード角丸 20〜24px、ボタンは pill（999px）
- タッチターゲット 44px 以上

## 3. セクション詳細

### 3.1 ヘッダー
- 背景 `hero-bg`。左にロゴ `s.yasunaga` + accent 色の `.`（Space Grotesk 700 / 20px）
- 右にリンク：自己紹介 / タイムライン / スキルセット / `To English Page→`（pill アウトライン）
- スマホでは折り返し可（ハンバーガー不要でも可。崩れなければ OK）

### 3.2 ヒーロー
- 左：
  - h1（改行は維持）  
    `エンジニアリングで、` / `世の中をもっと「便利」に、` / `もっと「楽しく」。`  
    ※「便利」「楽しく」は accent 色（カギ括弧は表示しない）
  - リード文：`東京を拠点に活動するフリーランスのフルスタックエンジニア。守備範囲の広さを武器に、プロダクトの土台づくりからリードまで担当します。`
  - ボタン：`スキルセットを見る ↓`（accent 塗り・白文字 → `#skills`）、`自己紹介`（白地アウトライン → `#about`）
- 右：**ターミナル風プロフィールカード**（幅 420px、max-width 100%）
  - 背景 `navy`、角丸 16px、影 `0 24px 60px rgba(36,87,230,.22)`
  - タイトルバー：信号の丸 3 つ + 右端 `~/s.yasunaga — zsh`
  - 本文（JetBrains Mono 14px）：
    ```
    $ whoami
    [写真 88x88 角丸12 / accent-on-dark 枠]  s.yasunaga（Space Grotesk 26px）
                                              安永（やすなが）
    $ cat profile.yml
    role: フルスタックエンジニア
    base: 東京・フリーランス
    focus: [backend, infra, db]
    since: 2017
    $ open wantedly qiita▍   ← 各単語がリンク、末尾はカーソル風ブロック
    ```
  - `$` とキー名は `accent-on-dark`、区切り `:` は `#A2B6DA`
  - 写真：`/public/image.webp`（現状 277×233 と小さい。差し替え予定なので `next/image` で扱えるように）
- リンク：Wantedly `https://www.wantedly.com/id/shuto_yasunaga` / Qiita `https://qiita.com/s_yasunaga`（`target="_blank" rel="noreferrer"`）

### 3.3 自己紹介（01 — ABOUT）
- 冒頭文（26px / 700）：`はじめまして！ 東京でフリーランスのエンジニアをしています、安永（やすなが）といいます。`
- 3 枚のカード（白地・枠 border・角丸 20、横並び → 狭い画面で縦積み）
  1. `STRENGTHS` / **得意なこと**：箇条書き（accent の小さな丸）  
     バックエンドのコーディング / インフラ構築 / データベース設計
  2. `LANGUAGE` / **語学**：`TOEIC` + 大きな `850`（Space Grotesk 40px）+ `点`  
     `英語ドキュメントの翻訳とかもたまにやっています。`
  3. `FAVORITES` / **好きなもの**：pill タグ（accent-soft / accent-ink）  
     麻雀 / ギター / ビリヤード / お酒（絵文字は使わない）

### 3.4 タイムライン（02 — TIMELINE）
- 背景 `surface`（白）、上に境界線
- 右列の上部に `新しい順・全N件`
- 各項目は 3 カラム：**[日付軸 92px] [レール 16px] [カード]**
  - **日付軸**（右寄せ、カードの高さいっぱいに `justify-content: space-between`）
    - 上：終了年月（`YYYY.MM`）。現職は `現在` を accent 色で
    - 中：在籍期間（`1年4ヶ月` 形式、16px / 700）
    - 下：開始年月（`YYYY.MM`、text-3）
    - 期間を持たない項目（資格・学生時代）は上に日付のみ
  - **レール**：上に丸 16px（枠 3px accent。現職は塗り、他は白抜き）→ 縦線 2px（現職は accent、他は border-2）→ 下に小丸 10px（白抜き・muted-dot 枠）。期間のない項目は上の丸のみ
  - **カード**（背景 page-bg、枠、角丸 20、padding 24/28）
    - 会社名（13px / text-3）
    - タイトル h3（20px / 700）
    - 本文
    - 技術タグ（白地・枠・mono 12px・角丸 6px）
- **折りたたみ**：初期表示は新しい順に 3 件。それ以上ある場合のみ
  - 最後の表示カードの下に白へのフェード（高さ 140px のグラデーション、`pointer-events: none`）
  - 中央に `すべて見る（全N件）⌄` ボタン → 展開後は `閉じる ⌃`
  - `<button aria-expanded aria-controls="timeline-list">`
- **スマホ（≤640px）**：日付軸を非表示にし、代わりにカード内の会社名の前に期間（`2025.11 — 現在`、mono / accent）を表示
- 在籍期間は **開始・終了年月から自動計算**（現職は今日まで）。月数 = 終了 − 開始 + 1（現職は 今月 − 開始）

#### タイムラインデータ（`data/timeline.ts` などに外出し）

```ts
type YM = [number, number]; // [年, 月]
type TimelineItem = {
  start?: YM;         // 期間のある項目のみ
  end?: YM;           // 省略 + current: true で現職
  current?: boolean;
  dateLabel: string;  // 期間を持たない項目用（例: '2015.10', '2013頃'）
  org: string;
  title: string;
  body: string;
  tags?: string[];
};

export const timeline: TimelineItem[] = [
  { start: [2025, 11], current: true, dateLabel: '2025.11 — 現在', org: '株式会社ベースミー',
    title: '新卒向けスカウトサービス「BaseMe」の開発',
    body: 'toB側の「AIリクルーター」「AI Agent」を開発。Claude Codeなどを中心としたAIネイティブな開発で、月に数百PRを出す超高スピードな開発に従事。',
    tags: ['Next.js', 'Ruby on Rails', 'AWS', 'Terraform', 'Claude Code'] },
  { start: [2024, 6], end: [2025, 9], dateLabel: '2024.06 — 2025.09', org: '株式会社エル・ティー・エス リンク',
    title: '「assign navi」運用・保守 / 研修サービスLPの新規開発',
    body: 'Rails・Elasticsearch・MySQLのバージョンアップを主導し、ペアプロで新人育成も担当。LPはNext.jsを短期間でキャッチアップし約3ヶ月でリリース。GitHub Actionsでデプロイ時間を約10分から約3分に短縮。',
    tags: ['Ruby on Rails', 'Elasticsearch', 'React', 'Next.js', 'GitHub Actions'] },
  { start: [2021, 11], end: [2024, 5], dateLabel: '2021.11 — 2024.05', org: 'スペリス株式会社',
    title: 'レンタルスペースのプラットフォームを新規開発',
    body: 'スタートアップの共同創業に参画。GoのAPIとNuxt.jsのフロントを分離した構成で、インフラからフロントエンド・バックエンドまでフルスタックで担当。Kubernetes・Helmで各環境を構築し、Circle CIでCI/CDを整備。',
    tags: ['Go', 'Nuxt.js', 'GKE', 'Kubernetes', 'Helm', 'Circle CI'] },
  { start: [2019, 6], end: [2021, 10], dateLabel: '2019.06 — 2021.10', org: '株式会社エル・ティー・エス',
    title: '企業口コミプラットフォーム「CS Clip」の新規開発・運用 ほか',
    body: '新規開発から運用・保守までをフルスタックで担当。ECS環境とCI/CDを整備し、ビルド時間を30分から5分に短縮。開発環境のVagrantからDockerへの移行や、JIRAへの移行も主導。',
    tags: ['Ruby on Rails', 'Vue.js', 'AWS ECS', 'Docker', 'GitLab'] },
  { start: [2017, 4], end: [2019, 4], dateLabel: '2017.04 — 2019.04', org: '株式会社スタイル・フリー',
    title: 'SIerに新卒入社、業務システムからWebサービスまで',
    body: '会員制Webシステムや基幹システムの運用・保守、経理向けデスクトップアプリの新規構築を担当。規格外野菜のフリマサイト「unica」では、Ruby on Railsでの開発を提案・主導し、設計から実装まで幅広く対応。',
    tags: ['Ruby on Rails', 'VB.NET', 'ASP.NET', 'SQL Server', 'MySQL'] },
  { dateLabel: '2015.10', org: '資格', title: '基本情報技術者試験に合格',
    body: '情報処理の基礎知識を体系的に学習。' },
  { dateLabel: '2013頃', org: '大学時代', title: 'プログラミングとの出会い',
    body: '大学生時代にプログラミング（Java）に出会い、独学でゲームなどを作っていました。' },
];
```

### 3.5 スキルセット（03 — SKILLS）
- 背景 `page-bg`、上に境界線
- 見出しの右に凡例：短いバー + `バーの長さ = 経験年数`
- 4 カテゴリのカード（白地・枠・角丸 24・padding 32）を 2 列（各 `flex: 1 1 480px`、狭いと 1 列）
  - 見出し + 右に `N skills`
  - テーブル：`スキル` / `経験年数`
  - 各行：スキル名（Space Grotesk 600 / 16px）の下に**経験年数バー**（高さ 6px、トラック border、塗り accent）、右に `X 年 Y ヶ月 Z 日`（mono 14px）
  - **経験年数の長い順に並べる**
  - バーの長さ = その人のスキル中**最長の経験年数を 100%**（最小 2%）
- データは既存 `app/page.tsx` の `langs / libraries / infra / tools` をそのまま移植（`experience: {start, end|'current'}[]` の合算）
  - カテゴリ名：言語・フレームワーク / ライブラリ・ツール / インフラ・DB / OS・その他ツール

### 3.6 フッター
- 背景 `navy`、左にロゴ（白 + `accent-on-dark` の `.`）、右に `ページトップへ ↑`（`#top`）

## 4. 実装上の注意

- **日付計算と hydration**：経験年数・在籍期間は「今日」に依存する。Server Component で計算し、`export const revalidate = 86400`（1 日 1 回再生成）とする。クライアントで再計算して hydration mismatch を起こさないこと。
- 折りたたみボタンだけ Client Component に切り出す（ページ全体を `"use client"` にしない）。
- 既存の `useSearchParams` + `?lang=en` 方式はやめ、**`/`（日本語）と `/en`（英語）のルート**にする。旧 URL `/?lang=en` は `/en` へリダイレクト（`next.config.ts` の `redirects` か middleware）。
  - 英語版の新規文言（ヒーロー、自己紹介カード、タイムライン）は既存 `locales/en.ts` をベースに Claude Code が下書きし、**`// TODO: review` を付けて**ユーザー確認待ちにする。
  - 文言はロケールごとの辞書 / データファイルに分離（コンポーネントに直書きしない）。
- `metadata` API で title / description / OGP を設定。`<html lang>` をロケールに合わせる。
- GA：`GA_TRACKING_ID` が設定されている時だけ `next/script` で読み込む（既存挙動を維持）。
- 画像は `next/image`。アイコンは inline SVG（矢印・シェブロン等）。絵文字は使わない。
- アクセシビリティ：本物の `<a>` / `<button>`、装飾 SVG は `aria-hidden`、本文コントラスト 4.5:1 以上、フォーカスリングを消さない。
- `prefers-reduced-motion` のときはスムーススクロール・アニメーションを無効化。
- ダークモード対応は今回不要。

## 5. 推奨ファイル構成（目安）

```
app/
  layout.tsx            # フォント・GA・共通 metadata
  page.tsx              # 日本語トップ（Server Component）
  en/page.tsx           # 英語トップ
  globals.css           # Tailwind v4 @theme（トークン）
components/
  SiteHeader.tsx
  Hero.tsx  TerminalCard.tsx
  About.tsx
  Timeline.tsx  TimelineToggle.tsx (client)
  Skills.tsx
  SiteFooter.tsx
  SectionHeading.tsx
data/
  timeline.ja.ts  timeline.en.ts
  skills.ts
lib/
  duration.ts           # 経験年数・在籍期間の計算（ユニットテスト付き）
  gtag.ts
locales/
  ja.ts  en.ts
```

## 6. 受け入れ条件

- [ ] `yarn build` / `yarn lint` が通る
- [ ] 1440px / 768px / 375px で崩れない（横スクロールが出ない）
- [ ] タイムライン：初期 3 件 + フェード + `すべて見る（全7件）`、押すと全件・`閉じる` に変わる
- [ ] スマホ幅でタイムラインの日付軸が消え、カード内に期間が出る
- [ ] スキルは各カテゴリ内で経験年数の降順、バー長が経験年数に比例
- [ ] 在籍期間・経験年数が今日の日付から正しく計算される（`lib/duration.ts` にテスト）
- [ ] `/en` で英語版が表示され、`/?lang=en` が `/en` にリダイレクトされる
- [ ] Lighthouse の Accessibility 95 以上

## 7. 未決事項（実装時にユーザーに確認）

- 写真の高解像度版への差し替え
- 英語版の文言レビュー
- 職務経歴書の BaseMe「実績・取り組み」が未記入のため、タイムライン本文は業務内容ベース
- 公開ポートフォリオに業務委託先の社名を載せてよいか
