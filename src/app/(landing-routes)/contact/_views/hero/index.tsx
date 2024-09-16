import { FC } from "react";

import { Wrapper } from "~/components/layout/wrapper";

export const Hero: FC = () => {
  return (
    <header className="w-full bg-[url('/images/HeroBg.webp')] bg-cover bg-center pt-[135px] text-white">
      <Wrapper>
        <section className="py-[150px] text-center">
          <h1 className="text-[34px] text-white">
            We&apos;d love to hear from you
          </h1>
          <p className="mx-auto mt-4 max-w-[780px]">
            Do you have questions about any of our courses, pricing, policies,
            terms of service, benefits of enrolling with us, our team is more
            than willing to be of service.
          </p>
        </section>
      </Wrapper>
    </header>
  );
};
