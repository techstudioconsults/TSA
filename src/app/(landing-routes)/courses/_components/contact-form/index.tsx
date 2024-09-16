"use client";

import { TsaButton, TsaInput } from "@strategic-dot/components";

export const ContactForm = () => {
  return (
    <section className="relative z-[2] max-w-[457px] before:absolute before:left-[66px] before:top-[-60px] before:z-[-1] before:hidden before:h-[387px] before:w-[467px] before:rounded-[15px] before:bg-[#072C5B] before:content-empty before:lg:block">
      <div className="h-full rounded-[15px] bg-white p-[29px]">
        <h6 className="mb-[27px] text-[16px] font-[700]">
          Register to learn more about the program pricing and curriculum
        </h6>
        <form className="flex flex-col gap-[21px]">
          <div className="flex justify-between gap-[21px]">
            <div className="w-full">
              <TsaInput className="text-black" placeholder={"First Name"} />
            </div>
            <div className="w-full">
              <TsaInput className="text-black" placeholder={"Last Name"} />
            </div>
          </div>
          <div>
            <TsaInput className="text-black" placeholder={"Email Address"} />
          </div>
          <div>
            <TsaInput className="text-black" placeholder={"Phone Number"} />
          </div>
          <div>
            <TsaButton
              variant="primary"
              size="lg"
              className="w-full bg-mid-blue"
            >
              Get Program Package
            </TsaButton>
          </div>
        </form>
      </div>
    </section>
  );
};
