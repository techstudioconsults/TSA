"use client";

import { TsaButton } from "@strategic-dot/components";

import { CarouselBanner } from "~/components/banners/carousel-banner";
import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";
import { LifeAfterTraining } from "~/views/life-after-training";

export const SectionThree = () => {
  return (
    <section className="min-h-[1577px] py-[100px]">
      <div className="min-h-[305px]">
        <LifeAfterTraining />
      </div>
      <Wrapper className="my-[50px] min-h-[412px] lg:my-[100px]">
        <CarouselBanner />
      </Wrapper>
      <Wrapper className="grid min-h-[431px] grid-cols-1 items-center gap-[28px] gap-y-0 text-center lg:grid-cols-2 lg:text-left">
        <div className="">
          <BlurImage
            _width={567}
            _height={431}
            src="/gifs/certificate.gif"
            alt="certificate"
            className="mx-auto object-cover"
          />
        </div>
        <div className="">
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
            href="/explore"
            variant="primary"
            size="lg"
            className="mt-[36px] h-[48px] w-[156px] bg-mid-blue"
          >
            Enroll Now
          </TsaButton>
        </div>
      </Wrapper>
    </section>
  );
};
