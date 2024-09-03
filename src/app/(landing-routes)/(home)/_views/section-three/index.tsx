"use client";

import { TsaButton, TsaMarquee } from "@strategic-dot/components";

import { CarouselBanner } from "~/components/banners/carousel-banner";
import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";
import { COMPANIES } from "~/constants";

export const SectionThree = () => {
  const companiesList = COMPANIES.map((company, index) => {
    return (
      <BlurImage
        _width={85}
        _height={85}
        key={index}
        src={company}
        alt="company"
      />
    );
  });

  return (
    <section className="py-[100px]">
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
      <Wrapper className="mt-[50px] lg:mt-[100px]">
        <CarouselBanner />
      </Wrapper>
      <Wrapper className="grid grid-cols-1 items-center gap-[28px] gap-y-0 text-center lg:grid-cols-2 lg:text-left">
        <div className="flex-1">
          <BlurImage
            _width={567}
            _height={431}
            src="/gifs/certificate.gif"
            alt="certificate"
            className="mx-auto"
          />
        </div>
        <div className="flex-1">
          <span className="text-sm font-bold uppercase text-mid-blue">
            Take A Course
          </span>
          <h3 className="my-[19px]">
            Acquire a tech skill to transcend your current earning status
          </h3>
          <p>
            We provide high-quality and affordable technology training to meet
            our students’ needs. Also, we ensure all our students are equipped
            with the necessary tech skills for related work opportunities at the
            end of the program.
          </p>
          <TsaButton
            variant="primary"
            size="lg"
            className="mt-[36px] h-[48px] w-[156px] bg-mid-blue"
          >
            Get Started
          </TsaButton>
        </div>
      </Wrapper>
    </section>
  );
};
