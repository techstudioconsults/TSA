"use client";

import { TsaButton, TsaCarousel } from "@strategic-dot/components";
import { CalendarDays, Hourglass, MapPin } from "lucide-react";
import Image from "next/image";

import HelpBanner from "~/components/banners/help-banner";
import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";

export const GALLARY_CONTENT = [
  <Image
    className="w-full object-bottom"
    key={0}
    width={500}
    height={50}
    src={"/images/img-1.png"}
    alt={"img"}
  />,
  <Image
    className="w-full object-bottom"
    key={1}
    width={500}
    height={50}
    src={"/images/img-2.png"}
    alt={"img"}
  />,
];

export const SectionFive = () => {
  return (
    <section className="py-[100px]">
      <Wrapper className="grid grid-cols-1 items-center gap-[28px] gap-y-0 text-center lg:grid-cols-3 lg:text-left">
        <div className="">
          <span className="text-sm font-bold uppercase text-mid-blue">
            What To Expect
          </span>
          <h3>Our Facility</h3>
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
        <TsaCarousel
          variant="gallery"
          slideContent={[]}
          galleryContent={GALLARY_CONTENT}
        />

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
      <Wrapper className="my-[100px] grid grid-cols-1 items-center gap-[28px] gap-y-0 text-center lg:grid-cols-2 lg:text-left">
        <div className="flex-1">
          <BlurImage
            _width={478}
            _height={397}
            src="/gifs/upcoming.gif"
            alt="upcoming"
            className="object-cover"
          />
        </div>
        <div className="flex-1 text-left">
          <span className="text-sm font-bold uppercase text-mid-blue">
            Upcoming Classes
          </span>
          <h3 className="my-[19px]">Javascript Fullstack Web Development</h3>
          <p className="mb-[30px]">
            With 24 intense weeks of on-campus training, you will learn to think
            and build like software developers. You move from understanding
            programming fundamentals to launching full-stack web apps. You do
            all these while learning to solve everyday problems with
            constructive, well-written programs
          </p>
          <div className="max-w-[355px]">
            <div className="flex items-center justify-between gap-[11px]">
              <span className="flex items-center gap-[11px]">
                <MapPin size={`12px`} />
                <span>Location</span>
              </span>
              <span>Physical & Online</span>
            </div>
            <div className="my-[11px] flex items-center justify-between gap-[11px]">
              <span className="flex items-center gap-[11px]">
                <CalendarDays size={`12px`} />
                <span>Start Date</span>
              </span>
              <span>28 / 01 / 2023</span>
            </div>
            <div className="flex items-center justify-between gap-[11px]">
              <span className="flex items-center gap-[11px]">
                <Hourglass size={`12px`} />
                <span>Duration</span>
              </span>
              <span>24 Weeks</span>
            </div>
          </div>
          <div className="mt-[33px] flex items-center justify-between">
            <TsaButton
              variant="primary"
              size="lg"
              className="w-[152px] bg-mid-blue"
            >
              Enroll Now
            </TsaButton>
            <span className="flex items-center gap-5 font-semibold text-primary">
              <TsaButton variant="link">{`<< Prev`}</TsaButton>
              <TsaButton variant="link">{`Next >>`}</TsaButton>
            </span>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <HelpBanner />
      </Wrapper>
    </section>
  );
};
