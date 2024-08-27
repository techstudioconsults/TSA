import type { Metadata } from "next";
import { Inter } from "next/font/google";

import LenisProvider from "~/components/lenis-provider";
import GotoTop from "~/components/miscellaneous/goto-top";

import "@strategic-dot/components/dist/style.css";
import "./globals.css";

import Navbar from "~/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Techstudio Academy",
  description: "TSA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GotoTop />
        <LenisProvider>
          <main>
            <Navbar />
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
