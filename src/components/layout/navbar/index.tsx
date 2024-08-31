"use client";

import { TsaNavbar } from "@strategic-dot/components";

import { NAV_LINKS } from "./links";

const index = () => {
  return (
    <section>
      <TsaNavbar
        linkClassName="bg-transparent text-white"
        className="bg-transparent"
        logoPath="/images/logo-white.png"
        navLinks={NAV_LINKS}
        showBanner={false}
      />
    </section>
  );
};
export default index;
