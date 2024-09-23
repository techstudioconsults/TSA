"use client";

import { useState } from "react";

import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";
import { VerticalStepper } from "~/components/stepper/vertical-stepper";
import { STEPS } from "~/constants";

export const SectionFour = () => {
  const [currentStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Image URLs
  const defaultImage = "/gifs/apply.gif";
  const hoverImage = "/gifs/scream.gif";

  return (
    <section className="min-h-[685px] bg-accent py-[76px]">
      <Wrapper className="grid grid-cols-1 items-center gap-[28px] gap-y-0 lg:grid-cols-2">
        <div className="flex-1">
          <VerticalStepper steps={STEPS} currentStep={currentStep} />
        </div>
        <div
          className="flex-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <BlurImage
            _width={440}
            _height={387}
            src={isHovered ? hoverImage : defaultImage}
            alt={"img"}
            className={`object-cover transition-opacity duration-500 ease-in-out`}
          />
        </div>
      </Wrapper>
    </section>
  );
};
