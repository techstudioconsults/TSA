"use client";

import { TsaFooter, TsaNavbar } from "@strategic-dot/components";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import { NAV_LINKS } from "~/constants";
import { cn } from "~/lib/utils";

export const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <main>
      <TsaNavbar
        showBanner
        className="fixed"
        linkClassName={cn(
          `bg-transparent`,
          pathname === `/about` || pathname === `/explore`
            ? `text-black`
            : `text-white`,
        )}
        logoPath={
          pathname === `/about` || pathname === `/explore`
            ? `/images/logo-black.png`
            : "/images/logo-white.png"
        }
        navLinks={NAV_LINKS}
        bgScrollColor={cn(
          pathname === `/about` || pathname === `/explore`
            ? `backdrop-blur-3xl`
            : `bg-primary`,
        )}
      />
      {children}
      <TsaFooter />
    </main>
  );
};
