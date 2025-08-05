"use client";

import { ReactElement } from "react";

import { TsaAccordion } from "~/components/Accordion";
import { CarouselBanner } from "~/components/banners/carousel-banner";
import HelpBanner from "~/components/banners/help-banner";
import { Wrapper } from "~/components/layout/wrapper";
import { Gallery } from "~/views/gallery";
import { LifeAfterTraining } from "~/views/life-after-training";
import { OnlineCountdownBanner } from "../../_components/online-countdown";
import { OnlineClassAccordion } from "../online-accordion";
import { OnlineTestimonial } from "../online-testimonial";

interface SectionThreeProperties {
  slug: string;
}

export const SectionThree = ({ slug }: SectionThreeProperties): ReactElement => {
  return (
    <section>
      <div className="min-h-[495px] py-[95px]">
        <LifeAfterTraining />
      </div>
      <div className="min-h-[874px]">
        <Gallery />
      </div>
      {/* online testimonial here */}
      {slug.includes(`weekday-online-class`) && <OnlineTestimonial />}
      <Wrapper className="my-[50px] min-h-[412px] lg:my-[100px]">
        <CarouselBanner />
      </Wrapper>
      {slug.includes(`weekday-online-class`) ? (
        <Wrapper className="min-h-[952px]">
          {" "}
          <h2 className="text-center">FREQUENTLY ASKED QUESTIONS</h2>
          <OnlineClassAccordion />
        </Wrapper>
      ) : (
        <Wrapper className="min-h-[952px]">
          <h2 className="text-center">FAQs</h2>
          <TsaAccordion />
        </Wrapper>
      )}

      {slug.includes(`weekday-online-class`) ? (
        <Wrapper>
          <OnlineCountdownBanner targetDate={`11th August, 2025`} spotsRemaining={15} className="mb-20" />
        </Wrapper>
      ) : (
        <Wrapper className="py-[50px] lg:py-[120px] xl:min-h-[575px]">
          <HelpBanner />
        </Wrapper>
      )}
    </section>
  );
};
