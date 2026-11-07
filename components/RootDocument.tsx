import Script from "next/script";
import { preconnect } from "react-dom";
import "@/app/globals.css";
import type { Locale } from "@/lib/duration";
import { fontVariables, NOTO_SANS_JP_STYLESHEET } from "@/lib/fonts";
import { GA_TRACKING_ID } from "@/lib/gtag";

type Props = { lang: Locale; children: React.ReactNode };

export function RootDocument({ lang, children }: Props) {
  preconnect("https://fonts.googleapis.com");
  preconnect("https://fonts.gstatic.com", { crossOrigin: "" });

  return (
    <html lang={lang} className={fontVariables}>
      <body className="antialiased">
        <link rel="stylesheet" href={NOTO_SANS_JP_STYLESHEET} precedence="default" />
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
