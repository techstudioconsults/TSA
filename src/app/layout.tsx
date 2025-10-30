import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import React, { Suspense } from "react";

import "./setup";

import Script from "next/script";

import { WhatsAppIcon } from "~/components/miscellaneous/whatsapp";
import { Toast } from "~/components/Toast";
import { cn } from "~/lib/utils";
import { SourceTracker } from "~/lib/utils/source-tracker";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techstudio Academy",
  description: "TSA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(openSans.className)}>
        {/* Google Tag Manager (noscript) — place immediately after opening body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-59JZDXK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="gtm"
          />
        </noscript>

        {/* Google Tag Manager base script */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-59JZDXK');`}
        </Script>
        <Toast />
        <WhatsAppIcon />
        <Suspense fallback={null}>
          <SourceTracker />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
