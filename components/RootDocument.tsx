import Script from "next/script";
import "@/app/globals.css";
import type { Locale } from "@/lib/duration";
import { fontVariables } from "@/lib/fonts";
import { GA_TRACKING_ID } from "@/lib/gtag";

type Props = { lang: Locale; children: React.ReactNode };

export function RootDocument({ lang, children }: Props) {
  return (
    <html lang={lang} className={fontVariables}>
      <body className="antialiased">
        {children}
        {GA_TRACKING_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
