import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import LenisProvider from "~/components/lenis-provider";
import GotoTop from "~/components/miscellaneous/goto-top";

import "@strategic-dot/components/dist/style.css";
import "./globals.css";

import { Layout } from "~/components/layout";
import { cn } from "~/lib/utils";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techstudio Academy",
  description: "TSA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(openSans.className)}>
        <GotoTop />
        <LenisProvider>
          <Layout>{children}</Layout>
        </LenisProvider>
      </body>
    </html>
  );
}
