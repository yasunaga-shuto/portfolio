import type { Metadata } from "next";
import type { Locale } from "@/lib/duration";
import { getDictionary } from "@/lib/i18n";
import { PATHS, SITE_URL } from "@/lib/site";

// og:image / twitter:image は各ルートの opengraph-image.tsx から Next.js が自動で差し込む
export function buildMetadata(locale: Locale): Metadata {
  const { meta } = getDictionary(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: PATHS[locale],
      languages: { ja: PATHS.ja, en: PATHS.en, "x-default": PATHS.ja },
    },
    openGraph: {
      type: "website",
      url: PATHS[locale],
      siteName: "s.yasunaga",
      title: meta.title,
      description: meta.description,
      locale: meta.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    // Search Console の所有権確認（URL プレフィックス）。消すと確認が外れるので残しておく
    verification: { google: "MYweAczJZ2eHy2-hcxaKEkUkkkW67w3vScwXUj8z85I" },
  };
}
