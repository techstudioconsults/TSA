import Image from "next/image";

import { Wrapper } from "~/components/layout/wrapper";
// import { ABOUTONLINECOURSE } from "~/constants";
import { ONLINETESTIMONIAL } from "~/constants";
import TsaButton from "~/lib/storybook/atoms/tsa-button";

export const OnlineTestimonial = () => {
  return (
    <section className="min-h-[508px] bg-accent py-[50px]">
      <Wrapper className="max-w-6xl text-center">
        <h2 className="mb-[55px] text-[24px] lg:text-[36px]">Real Student Success Stories</h2>
        <div className="mb-14 grid grid-cols-1 items-center justify-around gap-5 lg:grid-cols-3">
          {ONLINETESTIMONIAL.map((testimony) => (
            <div key={testimony.id} className="flex min-h-[215px] flex-col gap-3 rounded-xl bg-white p-5">
              <div className="flex items-center gap-4 text-left">
                <Image src={testimony.image} width={50} height={50} alt="user-image" />
                <div>
                  <h6>{testimony.name}</h6>
                  <p>Tech Studio Alumni</p>
                </div>
              </div>
              <div>
                <p className="text-left">{testimony.message}</p>
              </div>
            </div>
          ))}
        </div>
        <TsaButton href="/" variant="primary" size="lg" className="w-[323px] bg-mid-blue">
          Ask a Question on whatsapp
        </TsaButton>
      </Wrapper>
    </section>
  );
};
