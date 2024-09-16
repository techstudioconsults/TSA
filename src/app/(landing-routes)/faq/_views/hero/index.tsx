"use client";

import { TsaInput } from "@strategic-dot/components";
import { FC } from "react";

import { Wrapper } from "~/components/layout/wrapper";

export const Hero: FC = () => {
  return (
    <header className="w-full bg-[url('/images/HeroBg.webp')] bg-cover bg-center pt-[135px] text-white">
      <Wrapper>
        <section className="pt-[84px] text-center">
          <h1 className="text-[34px] text-white">
            Frequently Asked Questions <br /> (FAQS)
          </h1>
          <p className="mx-auto mt-4 max-w-[780px]">
            You have questions? We are here to help
          </p>
        </section>
        <TsaInput
          className="mx-auto mb-[59px] mt-[37px] h-[65px] max-w-[780px] text-black"
          placeholder={"Search for a question..."}
        />
      </Wrapper>
    </header>
  );
};
