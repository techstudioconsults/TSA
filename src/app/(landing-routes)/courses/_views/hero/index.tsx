import { FC } from "react";

import { Wrapper } from "~/components/layout/wrapper";
// import { RegisterForm } from "../../_components/register-form";
import LeadForm from "../../_components/register-form/lead-form";
import { ProgramIntro } from "../../types/index.types";

interface CourseHeroProperty {
  intro: ProgramIntro;
  slug: string;
}

export const Hero: FC<CourseHeroProperty> = ({ intro, slug }) => {
  return (
    <header className="min-h-[737px] w-full bg-[#162143DE] bg-[url('/images/guy-on-laptop.png')] bg-cover bg-center pb-[50px] pt-[160px] text-white lg:pt-[135px]">
      <Wrapper>
        <section className="flex flex-col items-center gap-[50px] text-center lg:gap-[171px] lg:py-[150px] xl:flex-row xl:text-left">
          <div className="flex-1">
            <h1 className="mb-[26px] leading-[61px] text-white">{intro.title}</h1>
            <p>{intro.subTitle}</p>
          </div>
          <div className="flex-1">
            {/* <RegisterForm slug={slug} /> */}
            <LeadForm slug={slug} />
          </div>
        </section>
      </Wrapper>
      {/* febuary 17th */}
    </header>
  );
};
