"use client";

import Image from "next/image";
import React, { useEffect } from "react";

import { HeroCanvas } from "~/components/canvas/hero-canvas";
import { Wrapper } from "~/components/layout/wrapper";
import useWindowWidth from "~/hooks/util-hooks/use-window-width";
import { EmailForm } from "../../_components/email-form/email-form";

export const Hero = () => {
  const canvaReference = React.useRef<HTMLCanvasElement>(null);
  const { winWidth } = useWindowWidth();

  useEffect(() => {
    if (!canvaReference.current) return;
    canvaReference.current.style.height = `${window.innerHeight}px`;
    HeroCanvas(canvaReference.current);
  }, [winWidth]);

  return (
    <section className="hero-section absolute h-[746px] w-full items-center overflow-hidden bg-primary bg-primary-gradient text-white">
      <Wrapper>
        <section className="mx-auto flex h-full items-center justify-center bg-transparent xl:flex-row">
          <section className="mx-auto mt-[3rem] flex w-full flex-col items-center justify-between gap-[50px] lg:flex-row">
            <div className="flex flex-row gap-[7rem] lg:flex-col">
              <Image
                className="h-[32px] w-[32px] lg:h-[64px] lg:w-[64px]"
                src="/icons/javascript.png"
                alt="icon"
                width={64}
                height={64}
              />
              <Image
                className="h-[32px] w-[32px] lg:h-[64px] lg:w-[64px] lg:translate-x-[7rem]"
                src="/icons/react.png"
                alt="icon"
                width={64}
                height={64}
              />
              <Image
                className="h-[32px] w-[32px] lg:h-[64px] lg:w-[64px]"
                src="/icons/python.png"
                alt="icon"
                width={64}
                height={64}
              />
            </div>
            <article className="z-10 flex h-full flex-col items-center xl:w-[731px]">
              <div className="mb-[10px] flex w-fit items-center gap-2 rounded-full bg-mid-blue px-[14px] py-[10px] opacity-[60%]">
                <Image
                  src="/icons/star.png"
                  width={24}
                  height={24}
                  alt="star"
                />
                <p className="text-xs text-white lg:text-sm">
                  No 1 Training Institute in Lagos
                </p>
              </div>
              <h1 className="h1 text-center text-[40px] text-white lg:text-[73px] xl:leading-[99px]">
                Unlock Your{" "}
                <span className="italic text-mid-danger">
                  <br /> Tech Potential <br />
                </span>
                With Us Today!
              </h1>
              <EmailForm
                className="mt-[44px]"
                buttonTitle={"Explore Courses"}
              />
            </article>
            <div className="flex flex-row gap-[7rem] lg:flex-col">
              <Image
                className="h-[32px] w-[32px] lg:h-[64px] lg:w-[64px]"
                src="/icons/lock.png"
                alt="icon"
                width={64}
                height={64}
              />
              <Image
                className="h-[32px] w-[32px] lg:h-[64px] lg:w-[64px] lg:translate-x-[-7rem]"
                src="/icons/clickup.png"
                alt="icon"
                width={64}
                height={64}
              />
              <Image
                className="h-[32px] w-[32px] lg:h-[64px] lg:w-[64px]"
                src="/icons/figma.png"
                alt="icon"
                width={64}
                height={64}
              />
            </div>
          </section>
        </section>
      </Wrapper>
      <canvas
        className="absolute top-0 w-full"
        ref={canvaReference}
        id="particles_404"
      />
    </section>
  );
};
