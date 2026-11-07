import { JetBrains_Mono, Noto_Sans_JP, Space_Grotesk } from "next/font/google";

// 日本語フォントは分割ファイルが多く preload すると重いので、unicode-range による遅延読み込みに任せる
const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
});

const spaceGrotesk = Space_Grotesk({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const fontVariables = `${notoSansJp.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`;
