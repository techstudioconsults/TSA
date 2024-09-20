import Image from "next/image";
import { FC } from "react";

import { Wrapper } from "~/components/layout/wrapper";
import { Course } from "../types/index.types";
import { ToolTag } from "./tool-tag";

interface StepperCardProperty {
  course: Course;
}

export const StepperCard: FC<StepperCardProperty> = ({ course }) => {
  const ifBgColorPrimary = course.bgColor === `bg-primary` ? `text-white` : ``;

  return (
    <section className={`${course.bgColor} py-[70px]`}>
      <Wrapper className="flex flex-col-reverse items-end justify-between lg:flex-row">
        <div className="flex-1">
          <h6
            className={`text-[12px] font-[700] uppercase ${ifBgColorPrimary}`}
          >
            {course.caption}
          </h6>
          <h3
            className={`text-[20px] font-[700] lg:text-[33px] ${ifBgColorPrimary}`}
          >
            {course.title}
          </h3>
          <p
            className={`mb-[50px] mt-[16px] text-sm leading-[28px] ${ifBgColorPrimary}`}
          >
            {course.desc}
          </p>
          <div className="flex flex-wrap items-center gap-[17px]">
            {course.tags.map((tag, index) => {
              return <ToolTag key={index} tag={tag} bgColor={course.bgColor} />;
            })}
          </div>
        </div>
        <div className="hidden flex-1 lg:block">
          <Image
            width={450}
            height={400}
            src={course.img}
            alt="gifs"
            className="ml-auto"
          />
        </div>
      </Wrapper>
    </section>
  );
};
