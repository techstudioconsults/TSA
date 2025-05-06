import { Open_Sans } from "next/font/google";

import { Layout } from "~/components/layout";
import GotoTop from "~/components/miscellaneous/goto-top";
import { cn } from "~/lib/utils";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={cn(openSans.className)}>
      <Layout>
        <GotoTop />
        {children}
      </Layout>
    </main>
  );
}
