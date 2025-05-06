"use client";

import { FC } from "react";

import { Wrapper } from "~/components/layout/wrapper";
import { Input } from "~/components/ui/input";

export const Hero: FC = () => {
  return (
    <header className="w-full bg-[url('/images/HeroBg.webp')] bg-cover bg-center pt-[70px] text-white xl:pt-[135px]">
      <Wrapper>
        <section className="pt-[84px] text-center">
          <h1 className="text-[34px] text-white">
            Frequently Asked Questions <br /> (FAQS)
          </h1>
          <p className="mx-auto mt-4 max-w-[780px]">You have questions? We are here to help</p>
        </section>
        <div className="pb-[59px] pt-[37px]">
          <Input
            disabled
            className="mx-auto h-[65px] max-w-[780px] text-black"
            placeholder={"Search for a question..."}
          />
        </div>
      </Wrapper>
    </header>
  );
};
