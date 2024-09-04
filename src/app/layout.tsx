import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Navbar from "~/components/layout/navbar";
import LenisProvider from "~/components/lenis-provider";
import GotoTop from "~/components/miscellaneous/goto-top";

import "@strategic-dot/components/dist/style.css";
import "./globals.css";

import { Footer } from "~/components/layout/footer";
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
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
