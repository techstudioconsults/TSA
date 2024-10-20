import { notFound } from "next/navigation";

import { getCourseData } from "~/action/courses.action";
import { DurationBanner } from "../_components/duration-banner";
import { Hero } from "../_views/hero";
import { SectionOne } from "../_views/section-one";
import { SectionThree } from "../_views/section-three";
import { SectionTwo } from "../_views/section-two";

const Courses = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  try {
    const course = await getCourseData(slug);

    return (
      <main>
        <Hero slug={slug} intro={course.intro} />
        <DurationBanner slug={slug} />
        <SectionOne sectionOne={course.sectionOne} />
        <SectionTwo courseList={course.courseList} />
        <SectionThree />
      </main>
    );
  } catch (error) {
    if ((error as Error).message === "Course not found") {
      return notFound();
    }
    return <div>Error: {(error as Error).message}</div>;
  }
};

export default Courses;
