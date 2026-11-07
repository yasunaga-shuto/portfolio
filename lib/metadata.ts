import type { Metadata } from "next";
import type { Locale } from "@/lib/duration";
import { getDictionary } from "@/lib/i18n";

const SITE_URL = "https://portfolio-yasunaga-shuto.vercel.app";
const PATHS: Record<Locale, string> = { ja: "/", en: "/en" };

export function buildMetadata(locale: Locale): Metadata {
  const { meta } = getDictionary(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: PATHS[locale],
      languages: { ja: PATHS.ja, en: PATHS.en },
    },
    openGraph: {
      type: "website",
      url: PATHS[locale],
      siteName: "s.yasunaga",
      title: meta.title,
      description: meta.description,
      locale: meta.ogLocale,
      images: [{ url: "/image.webp" }],
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
    },
  };
}
