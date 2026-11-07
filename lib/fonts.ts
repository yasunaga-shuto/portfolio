import localFont from "next/font/local";

// next/font/google はビルド時に Google Fonts へ問い合わせるが、環境によって拡張子のない
// fonts.gstatic.com/l/font?kit=... 形式の URL が返ることがあり、next/font がそれを扱えずビルドが落ちる
// （Next.js 15.5 時点）。欧文フォントは小さいので woff2 をリポジトリに置いて読み込む。
// Noto Sans JP は Google の unicode-range 分割を活かすため RootDocument で <link> から読み込む。
const spaceGrotesk = localFont({
  src: "../app/fonts/SpaceGrotesk-latin-wght.woff2",
  weight: "500 700",
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "../app/fonts/JetBrainsMono-latin-wght.woff2",
  weight: "400 600",
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const fontVariables = `${spaceGrotesk.variable} ${jetbrainsMono.variable}`;

export const NOTO_SANS_JP_STYLESHEET =
  "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap";
