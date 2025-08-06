import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import React from "react";

import "./setup.ts";

import Image from "next/image.js";
import Script from "next/script.js";

import { WhatsAppIcon } from "~/components/miscellaneous/whatsapp";
import { Toast } from "~/components/Toast";
import { cn } from "~/lib/utils";

// import { SourceTracker } from "~/lib/utils/source-tracker";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techstudio Academy",
  description: "TSA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
            fbq('init', '1171106073347114');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <Image
            alt={`facebook-img`}
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1171106073347114&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={cn(openSans.className)}>
        <Toast />
        <WhatsAppIcon />
        {children}
      </body>
    </html>
  );
}
