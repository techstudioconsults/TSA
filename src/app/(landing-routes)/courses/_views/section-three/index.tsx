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
      <div className="py-[95px]">
        <LifeAfterTraining />
      </div>
      <div>
        <Gallery />
      </div>
      <Wrapper className="my-[50px] lg:my-[100px]">
        <CarouselBanner />
      </Wrapper>
      <Wrapper>
        <h2 className="text-center">FAQs</h2>
        <TsaAccordion />
      </Wrapper>
      <Wrapper className="py-[50px] lg:py-[120px]">
        <HelpBanner />
      </Wrapper>
    </section>
  );
};
