import type { Locale } from "@/lib/duration";
import { getDictionary } from "@/lib/i18n";
import { PATHS, PROFILE_LINKS, SITE_URL } from "@/lib/site";

export function PersonJsonLd({ locale }: { locale: Locale }) {
  const { meta } = getDictionary(locale);
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: meta.name,
    alternateName: ["Shuto Yasunaga", "s.yasunaga"],
    jobTitle: meta.jobTitle,
    url: `${SITE_URL}${PATHS[locale]}`,
    image: `${SITE_URL}/image.webp`,
    address: { "@type": "PostalAddress", addressLocality: "Tokyo", addressCountry: "JP" },
    sameAs: PROFILE_LINKS.map((link) => link.href),
  };
  return (
    <script
      type="application/ld+json"
      // < をエスケープしないと文言に "</script>" が入ったときにタグが閉じてしまう
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
