import type { MetadataRoute } from "next";
import { PATHS, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { ja: `${SITE_URL}${PATHS.ja}`, en: `${SITE_URL}${PATHS.en}` };
  return (["ja", "en"] as const).map((locale) => ({
    url: `${SITE_URL}${PATHS[locale]}`,
    changeFrequency: "monthly",
    priority: locale === "ja" ? 1 : 0.8,
    alternates: { languages },
  }));
}
