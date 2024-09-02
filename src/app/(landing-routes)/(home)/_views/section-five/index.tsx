"use client";

import { TsaCarousel } from "@strategic-dot/components";

import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";

export const GALLARY_CONTENT = [
  <BlurImage
    key={0}
    _width={500}
    _height={500}
    src={"/images/img-1.png"}
    alt={"img"}
  />,
  <BlurImage
    key={1}
    _width={500}
    _height={500}
    src={"/images/img-2.png"}
    alt={"img"}
  />,
];

export const SectionFive = () => {
  return (
    <section className="py-[100px]">
      <Wrapper className="grid grid-cols-1 items-center gap-[28px] gap-y-0 lg:grid-cols-3">
        <div className="">
          <span className="text-sm font-bold uppercase text-mid-blue">
            What To Expect
          </span>
          <h3 className="my-[19px]">Our Facility</h3>
        </div>
        <div className="col-span-2">
          <p>
            We have put in place a very comfortable, and conducive learning
            facilities where you have access to resources. We have also invested
            in unlimited internet to ensure our students don’t have hinderance
            in their learning process.
          </p>
        </div>
      </Wrapper>
      <Wrapper className="relative items-center gap-[28px] gap-y-0 pt-[100px] lg:flex">
        <div className="hidden lg:block">
          <TsaCarousel
            variant="gallery"
            slideContent={[]}
            galleryContent={GALLARY_CONTENT}
          />
        </div>
        <div className="right-10 z-10 max-w-[458px] rounded-lg bg-background px-[28px] py-[47px] shadow-lg lg:absolute">
          <div>
            <h6 className="font-bold">A World-Class Learning Facility</h6>
            <p className="my-[25px] leading-[26px]">
              At Tech Studio Academy, we have created a conducive environment
              for learning, combining exceptional school structures, inspiring
              classrooms, and dedicated tutors. We understand that the physical
              surroundings greatly impact the educational experience, and we
              strive to provide a nurturing setting that fosters academic
              growth, creativity, and personal development.
            </p>
            <p className="leading-[26px]">
              Our classrooms are carefully designed to facilitate effective
              teaching and learning to enable tutors to deliver dynamic and
              engaging lessons that captivate students attention and spark their
              curiosity.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
