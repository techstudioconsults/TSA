"use client";

import { TsaAccordion } from "~/components/Accordion";
import { CarouselBanner } from "~/components/banners/carousel-banner";
import HelpBanner from "~/components/banners/help-banner";
import { Wrapper } from "~/components/layout/wrapper";
import { Gallery } from "~/views/gallery";
import { LifeAfterTraining } from "~/views/life-after-training";

export const SectionThree = () => {
  return (
    <section>
      <div className="min-h-[495px] py-[95px]">
        <LifeAfterTraining />
      </div>
      <div className="min-h-[874px]">
        <Gallery />
      </div>
      <Wrapper className="my-[50px] min-h-[412px] lg:my-[100px]">
        <CarouselBanner />
      </Wrapper>
      <Wrapper className="min-h-[952px]">
        <h2 className="text-center">FAQs</h2>
        <TsaAccordion />
      </Wrapper>
      <Wrapper className="py-[50px] lg:py-[120px] xl:min-h-[575px]">
        <HelpBanner />
      </Wrapper>
    </section>
  );
};
