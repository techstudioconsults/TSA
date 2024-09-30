"use client";

import { TsaButton } from "@strategic-dot/components";
import { CalendarDays, Hourglass, MapPin } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { formatDateTime } from "~/lib/utils";
import useCoursesStore from "~/services/courses.service";
import { UpcomingClassesSkeleton } from "../skeleton/upcoming.skeleton";

export const UpcomingClasses = () => {
  const { loading, error, getAllCourses, allCourses } = useCoursesStore();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getAllCourses();
  }, [getAllCourses]);

  const course = useMemo(() => allCourses?.[index], [allCourses, index]);

  const handlePrevious = () => {
    if (index > 0) {
      setIndex((previousIndex) => previousIndex - 1);
    }
  };

  const handleNext = () => {
    if (index < allCourses.length - 1) {
      setIndex((previousIndex) => previousIndex + 1);
    }
  };

  if (loading) return <UpcomingClassesSkeleton />;
  if (error) return <p>Error loading classes: {error}</p>;

  if (!course) return <p>No upcoming classes available.</p>;

  return (
    <section>
      <span className="text-sm font-bold uppercase text-mid-blue">
        Upcoming Classes
      </span>
      <h3 className="my-[19px]">{course.title}</h3>
      <p className="mb-[30px]">{course.description}</p>

      <div className="md:max-w-[355px]">
        <div className="flex items-center justify-between gap-[11px]">
          <span className="flex items-center gap-[11px]">
            <MapPin size={12} />
            <span>Location</span>
          </span>
          <span>{course.classes.weekday[0].preference}</span>
        </div>
        <div className="my-[11px] flex items-center justify-between gap-[11px]">
          <span className="flex items-center gap-[11px]">
            <CalendarDays size={12} />
            <span>Start Date</span>
          </span>
          <span>
            {formatDateTime(course.classes.weekday[0].startDate).date}
          </span>
        </div>
        <div className="flex items-center justify-between gap-[11px]">
          <span className="flex items-center gap-[11px]">
            <Hourglass size={12} />
            <span>Duration</span>
          </span>
          <span>24 Weeks</span>
        </div>
      </div>

      <div className="mt-[33px] flex flex-col justify-between gap-[20px] md:flex-row lg:items-center lg:gap-0">
        <TsaButton
          href={`/courses/${course.title.replaceAll(/\s+/g, "-").toLowerCase()}`}
          variant="primary"
          size="lg"
          className="w-full bg-mid-blue lg:max-w-[136px]"
        >
          Enroll Now
        </TsaButton>

        <span className="flex items-center justify-between gap-5 font-semibold text-primary">
          {index > 0 && (
            <TsaButton size="lg" variant="link" onClick={handlePrevious}>
              {"<< Prev"}
            </TsaButton>
          )}
          {index < allCourses.length - 1 && (
            <TsaButton size="lg" variant="link" onClick={handleNext}>
              {"Next >>"}
            </TsaButton>
          )}
        </span>
      </div>
    </section>
  );
};
