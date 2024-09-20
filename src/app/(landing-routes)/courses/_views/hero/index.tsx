import { FC } from "react";

import { Wrapper } from "~/components/layout/wrapper";
import { ContactForm } from "../../_components/contact-form";
import { ProgramIntro } from "../../types/index.types";

interface CourseHeroProperty {
  intro: ProgramIntro;
}

export const Hero: FC<CourseHeroProperty> = ({ intro }) => {
  return (
    <header className="min-h-[737px] w-full bg-[url('/images/guy-on-laptop.png')] bg-cover bg-center pb-[50px] pt-[185px] text-white lg:pt-[135px]">
      <Wrapper>
        <section className="flex flex-col items-center gap-[50px] text-center lg:flex-row lg:gap-[171px] lg:py-[150px] lg:text-left">
          <div className="flex-1">
            <h1 className="mb-[26px] leading-[61px] text-white">
              {intro.title}
            </h1>
            <p>{intro.subTitle}</p>
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </section>
      </Wrapper>
      {/* febuary 17th */}
    </header>
  );
};
