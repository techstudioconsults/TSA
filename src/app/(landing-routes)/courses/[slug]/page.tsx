// "use client";

// import { notFound, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// import { getCourseData } from "~/action/courses.action";
// import { EducationPrograms } from "~/types"; // Assuming this type exists
// import { DurationBanner } from "../_components/duration-banner";
// import { Hero } from "../_views/hero";
// import { SectionOne } from "../_views/section-one";
// import { SectionThree } from "../_views/section-three";
// import { SectionTwo } from "../_views/section-two";

// const Courses = ({ params }: { params: { slug: string } }) => {
//   const { slug } = params;
//   const router = useRouter();
//   const [course, setCourse] = useState<EducationPrograms | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCourseData = async () => {
//       try {
//         setLoading(true);
//         const courseData = await getCourseData(slug);
//         setCourse(courseData);
//         setError(null);
//       } catch (error_) {
//         if ((error_ as Error).message === "Course not found") {
//           router.push("/not-found");
//         } else {
//           setError((error_ as Error).message);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourseData();
//   }, [slug, router]);

//   if (loading) {
//     return <div>Loading course information...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!course) {
//     return null; // This should rarely happen as errors should be caught above
//   }

//   return (
//     <main>
//       <Hero slug={slug} intro={course.intro} />
//       <DurationBanner slug={slug} />
//       <SectionOne sectionOne={course.sectionOne} />
//       <SectionTwo courseList={course.courseList} />
//       <SectionThree />
//     </main>
//   );
// };

// export default Courses;

// "use client";

import { notFound } from "next/navigation";

import { getCourseData } from "~/action/courses.action";
import { WeekdayCountdownBanner } from "../_components/countdown-timer";
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
        {slug.includes(`weekday-online-class`) ? (
          <WeekdayCountdownBanner targetDate={`11th August, 2025`} />
        ) : (
          <DurationBanner slug={slug} />
        )}
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
