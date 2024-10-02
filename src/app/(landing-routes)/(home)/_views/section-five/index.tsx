"use client";

import HelpBanner from "~/components/banners/help-banner";
import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";
import { Gallery } from "~/views/gallery";
import { UpcomingClasses } from "./_components/sub-view/upcoming-classes";

export const SectionFive = () => {
  return (
    <section className="min-h-[2157px] py-[50px] lg:py-[100px]">
      <Wrapper className="grid min-h-[83px] grid-cols-1 items-center gap-[28px] gap-y-0 text-center lg:grid-cols-3 lg:text-left">
        <div>
          <span className="mb-[10px] text-sm font-bold uppercase text-mid-blue">
            What To Expect
          </span>
          <h3>Our Facility</h3>
        </div>
        <div className="col-span-2">
          <p>
            We have put in place a very comfortable and conducive learning
            facility where you have access to resources. We have also invested
            in unlimited internet to ensure our students don’t have hindrance in
            their learning process.
          </p>
        </div>
      </Wrapper>
      <div className="min-h-[874px]">
        <Gallery />
      </div>
      <Wrapper className="my-[100px] grid min-h-[593px] grid-cols-1 items-center gap-[28px] gap-y-0 text-center lg:grid-cols-2 lg:text-left">
        <div className="flex-1">
          <BlurImage
            src="/gifs/upcoming.gif"
            alt="upcoming"
            width={478}
            height={397}
            className="object-cover"
          />
        </div>
        <div className="flex-1 text-left">
          <UpcomingClasses />
        </div>
      </Wrapper>
      <Wrapper>
        <HelpBanner />
      </Wrapper>
    </section>
  );
};
