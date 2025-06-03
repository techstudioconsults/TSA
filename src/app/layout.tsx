import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import React, { Suspense } from "react";

import "./setup.ts";

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
        <Toast />
        <WhatsAppIcon />
        {children}
        <Suspense fallback={null}>
          <SourceTracker />
        </Suspense>
      </body>
    </html>
  );
}
