import { FC } from "react";

import { Wrapper } from "~/components/layout/wrapper";
import { Card } from "../../_components/card";
import { AboutCard } from "../../types/index.types";

interface AboutCourseProperty {
  aboutCourse: AboutCard[];
}

export const OnlineCardSection: FC<AboutCourseProperty> = ({ aboutCourse }) => {
  return (
    <section className="min-h-[508px] py-[50px]">
      <Wrapper className="max-w-6xl text-center">
        <h2 className="mb-[55px] text-[24px] lg:text-[36px]">This Course Is For You If...</h2>
        <div className="grid grid-cols-1 items-center justify-around gap-5 lg:grid-cols-2">
          {aboutCourse.map((about) => (
            <Card
              className="max-w-[518px] space-y-3 rounded-lg border-b border-l border-r border-t-8 border-t-blue-950 p-5"
              key={about.id}
              image="/icons/checkbox-fill.svg"
              heading={about.heading}
              text={about.message}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
