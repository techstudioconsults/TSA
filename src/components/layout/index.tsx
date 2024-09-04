"use client";

import { TsaFooter, TsaNavbar } from "@strategic-dot/components";
import { ReactNode } from "react";

import { NAV_LINKS } from "~/constants";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <TsaNavbar
        linkClassName="bg-transparent text-white"
        className="bg-transparent"
        logoPath="/images/logo-white.png"
        navLinks={NAV_LINKS}
        showBanner={true}
        bgScrollColor="bg-primary"
      />
      {children}
      <TsaFooter
        className="px-[1rem]"
        footerBgColor={"default"}
        footerLayoutType={"default"}
      />
    </main>
  );
};
