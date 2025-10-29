import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import React, { Suspense } from "react";

import "./setup";

import Image from "next/image";
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
      {/* Facebook Pixel Script */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '962870014990453');
            fbq('track', 'PageView');
          `}
      </Script>
      <noscript>
        <Image
          alt={`facebook-img`}
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=962870014990453&ev=PageView&noscript=1"
        />
      </noscript>

      {/* TikTok Pixel Script */}
      <Script id="tiktok-pixel" strategy="afterInteractive">
        {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
              var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
              ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

              ttq.load('D40D4FJC77U816ESB57G');
              ttq.page();
            }(window, document, 'ttq');
          `}
      </Script>

      <body className={cn(openSans.className)}>
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
