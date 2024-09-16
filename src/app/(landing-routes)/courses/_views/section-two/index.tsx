import { FC } from "react";

import { StepperCard } from "../../_components/sepper-card";
import { Course } from "../../types/index.types";

interface CourseSectionTwoProperty {
  courseList: Course[];
}

export const SectionTwo: FC<CourseSectionTwoProperty> = ({ courseList }) => {
  return (
    <section>
      {courseList.map((course) => {
        return <StepperCard key={course.id} course={course} />;
      })}
    </section>
  );
};
