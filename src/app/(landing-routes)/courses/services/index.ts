import { EducationPrograms } from "../types/index.types";

export async function getCourseData(slug: string): Promise<EducationPrograms> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/courses.json`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  const course = data.find(
    (course: object) =>
      Object.keys(course)[0].toLowerCase() === slug.toLowerCase(),
  );

  if (!course) {
    throw new Error("Course not found");
  }

  return course[slug];
}
