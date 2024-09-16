"use client";

import { useState } from "react";

import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";
import { VerticalStepper } from "~/components/stepper/vertical-stepper";
import { STEPS } from "~/constants";

export const SectionFour = () => {
  const [currentStep] = useState(0);

  return (
    <section className="bg-accent py-[76px]">
      <Wrapper className="grid grid-cols-1 items-center gap-[28px] gap-y-0 lg:grid-cols-2">
        <div className="flex-1">
          <VerticalStepper steps={STEPS} currentStep={currentStep} />
        </div>
        <div className="flex-1">
          <BlurImage
            _width={440}
            _height={387}
            src="https://techstudio.nyc3.cdn.digitaloceanspaces.com/tsa-2.0/gifs/apply.gif"
            alt={"img"}
            className="object-cover"
          />
        </div>
      </Wrapper>
    </section>
  );
};
