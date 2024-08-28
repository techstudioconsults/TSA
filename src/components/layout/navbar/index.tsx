"use client";

import { TsaNavbar } from "@strategic-dot/components";

import { NAV_LINKS } from "./links";

const index = () => {
  return (
    <section>
      {/* <p className="relative top-0 z-30 bg-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tenetur
        quidem cum ratione ipsum ullam explicabo sunt fuga cupiditate nemo, eos
        voluptatibus recusandae quaerat in. Debitis beatae illo sequi officiis.
      </p> */}
      <TsaNavbar
        linkClassName="bg-transparent text-white"
        className="bg-transparent"
        logoPath="/images/logo-white.png"
        navLinks={NAV_LINKS}
      />
    </section>
  );
};
export default index;
