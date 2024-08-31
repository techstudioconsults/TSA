"use client";

import { TsaButton } from "@strategic-dot/components";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

import { HeroCanvas } from "~/components/canvas/hero-canvas";
import { Wrapper } from "~/components/layout/wrapper";
import useWindowWidth from "~/hooks/util-hooks/use-window-width";

export const Hero = () => {
  const canvaReference = React.useRef<HTMLCanvasElement>(null);
  const { winWidth } = useWindowWidth();

  useEffect(() => {
    if (!canvaReference.current) return;
    canvaReference.current.style.height = `${window.innerHeight}px`;
    HeroCanvas(canvaReference.current);
  }, [winWidth]);

  return (
    <section className="hero-section absolute left-0 top-0 h-[724px] w-full items-center overflow-hidden bg-primary bg-primary-gradient text-white">
      <Wrapper>
        <section className="mx-auto mt-16 flex h-full items-center justify-center bg-transparent">
          <div className="flex flex-1 flex-col gap-[7rem]">
            <Image
              className="translate-x-[1rem]"
              src="/icons/javascript.png"
              alt="img"
              width="64"
              height="64"
            />
            <Image
              className="translate-x-[7rem]"
              src="/icons/react.png"
              alt="img"
              width="64"
              height="64"
            />
            <Image
              className="translate-x-[-1rem]"
              src="/icons/python.png"
              alt="img"
              width="64"
              height="64"
            />
          </div>
          <article className="flex-3 relative z-10 flex max-w-[731px] flex-col items-center">
            <div className="flex w-fit items-center gap-2 rounded-full bg-mid-blue px-[14px] py-[10px]">
              <Star size="24px" className="text-warning" />
              <p className="text-sm">No 1 Training Institute in Lagos</p>
            </div>
            <h1 className="mb-5 text-center text-[48px] font-[700] text-white lg:text-[73px]">
              Unlock Your{" "}
              <span className="italic text-mid-danger">
                {" "}
                <br /> Tech Potential <br />
              </span>{" "}
              With Us Today!
            </h1>
            <div>
              <TsaButton variant="primary" className="h-[48px] bg-mid-blue">
                Explore Courses
              </TsaButton>
            </div>
          </article>
          <div className="flex-1">
            <div className="flex flex-1 flex-col gap-[7rem]">
              <Image
                className="translate-x-[11rem]"
                src="/icons/lock.png"
                alt="img"
                width="64"
                height="64"
              />
              <Image
                className="translate-x-[5rem]"
                src="/icons/marketing.png"
                alt="img"
                width="64"
                height="64"
              />
              <Image
                className="translate-x-[12rem]"
                src="/icons/figma.png"
                alt="img"
                width="64"
                height="64"
              />
            </div>
          </div>
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
