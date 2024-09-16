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
        className="fixed"
        linkClassName={cn(
          `bg-transparent`,
          pathname === `/about` ? `text-black` : `text-white`,
        )}
        logoPath={
          pathname === `/about`
            ? `/images/logo-black.png`
            : "/images/logo-white.png"
        }
        navLinks={NAV_LINKS}
        showBanner={true}
        bgScrollColor={cn(
          pathname === `/about` ? `backdrop-blur-3xl` : `bg-primary`,
        )}
      />
      {children}
      <TsaFooter className="mt-[40px]" />
    </main>
  );
};
