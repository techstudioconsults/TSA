import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@strategic-dot/components/dist/style.css";
import "./globals.css";

import LenisProvider from "~/components/lenis-provider";
import GotoTop from "~/components/miscellaneous/goto-top";

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
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
