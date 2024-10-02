import { FC } from "react";

import { Wrapper } from "~/components/layout/wrapper";
import { Card } from "../../_components/card";
import { ProgramSectionOne } from "../../types/index.types";

interface CourseSectionOneProperty {
  sectionOne: ProgramSectionOne;
}

export const SectionOne: FC<CourseSectionOneProperty> = ({ sectionOne }) => {
  return (
    <section className="min-h-[508px] py-[50px]">
      <Wrapper className="text-center">
        <h2 className="mb-[55px] text-[24px] lg:text-[36px]">Our Process</h2>
        <div className="flex flex-col justify-between gap-[20px] lg:flex-row">
          <Card image="/icons/no1.webp" text={sectionOne.cards[0].text} />
          <Card image="/icons/no2.webp" text={sectionOne.cards[1].text} />
          <Card image="/icons/no3.webp" text={sectionOne.cards[2].text} />
        </div>
      </Wrapper>
    </section>
  );
};
