"use client";

import HelpBanner from "~/components/banners/help-banner";
import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";

export const SectionFour = () => {
  return (
    <section>
      <div className="h-fit w-full lg:min-h-[706px]">
        <BlurImage
          _width={1440}
          _height={706}
          src="/team/employees.png"
          alt="employees"
          className="object-contain object-top lg:object-cover"
        />
      </div>
      <div className="min-h-[375px] py-[70px] lg:py-[146px]">
        <Wrapper className="grid grid-cols-1 justify-center gap-[28px] gap-y-0 text-center lg:grid-cols-3 lg:text-left">
          <div>
            <span className="text-sm font-bold uppercase text-mid-blue">
              What To Expect
            </span>
            <h3 className="">Our Facility</h3>
          </div>
          <div className="col-span-2">
            <p>
              We have put in place a very comfortable, and conducive learning
              facilities where you have access to resources. We have also
              invested in unlimited internet to ensure our students don’t have
              hinderance in their learning process.
            </p>
          </div>
        </Wrapper>
      </div>
      <Wrapper className="mb-[116px] min-h-[335px]">
        <HelpBanner />
      </Wrapper>
    </section>
  );
};
