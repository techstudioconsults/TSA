import { TsaMarquee } from "@strategic-dot/components";
import Image from "next/image";

import { Wrapper } from "~/components/layout/wrapper";
import { COMPANIES } from "~/constants";

export const LifeAfterTraining = () => {
  const companiesList = COMPANIES.map((company, index) => {
    return (
      <Image
        width={120}
        height={100}
        key={index}
        src={company}
        alt="company"
        className="object-contain"
      />
    );
  });
  return (
    <>
      <Wrapper className="mb-[50px] grid grid-cols-1 items-center gap-[28px] gap-y-0 text-center lg:mb-[64px] lg:grid-cols-2 lg:text-left">
        <div className="flex-1">
          <span className="text-sm font-bold uppercase text-mid-blue">
            LIFE AFTER TRAINING
          </span>
          <h3 className="my-[19px]">Where Our Graduates Work</h3>
        </div>
        <div className="flex-1">
          <p className="leading-[25px]">
            Our talented graduates flourish in leading companies across the
            globe, making significant contributions to both their personal
            growth and the organizations they serve. They work in industries
            ranging from Information technology to Telecommunication, and more.
          </p>
        </div>
      </Wrapper>
      <TsaMarquee className="gap-20 p-0 lg:gap-40">{companiesList}</TsaMarquee>
    </>
  );
};
