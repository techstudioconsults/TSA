"use client";

import { CalendarDays, Hourglass, MapPin } from "lucide-react";
import { useEffect } from "react";

<<<<<<< HEAD
import {
  fetchCohortsByCourseId,
  fetchUpcomingCohorts,
} from "~/action/cohort.action";
=======
import { fetchAllCourses } from "~/action/courses.action";
import TsaButton from "~/lib/storybook/atoms/tsa-button";
>>>>>>> 0866e3d6c92c7975adc6b923a430cc7223cd23f7
import { formatDateTime } from "~/lib/utils";
import useCohortStore from "~/stores/cohort.store";
import { UpcomingClassesSkeleton } from "../skeleton/upcoming.skeleton";

export const UpcomingClasses = () => {
  const {
    loading: cohortsLoading,
    error: cohortError,
    upcomingCohorts,
    cohorts,
    pagination,
  } = useCohortStore();

  useEffect(() => {
    fetchUpcomingCohorts(pagination.page, 1);
  }, [pagination.page]);

  const handlePrevious = () => {
    fetchUpcomingCohorts(pagination.page - 1, 1);
  };

  const handleNext = () => {
    fetchUpcomingCohorts(pagination.page + 1, 1);
  };

  const cohort = upcomingCohorts[0];

  // Get cohort details by course Id
  useEffect(() => {
    if (cohort?.id) {
      fetchCohortsByCourseId(cohort.id);
    }
  }, [cohort?.id]);

  const weekdayCohort = cohorts.find((cohort) => cohort.type === "weekday");

  if (cohortsLoading) return <UpcomingClassesSkeleton />;
  if (cohortError) return <p>Error loading classes: {cohortError}</p>;
  if (!cohort) return <p>No upcoming classes available.</p>;

  return (
    <section>
<<<<<<< HEAD
      <span className="text-sm font-bold uppercase text-mid-blue">
        Upcoming Classes
      </span>
      <h3 className="my-[19px]">{cohort.title}</h3>
      <p className="mb-[30px]">{cohort.about}</p>
=======
      <span className="text-sm font-bold uppercase text-mid-blue">Upcoming Classes</span>
      <h3 className="my-[19px]">{course.title}</h3>
      <p className="mb-[30px]">{course.description}</p>
>>>>>>> 0866e3d6c92c7975adc6b923a430cc7223cd23f7

      <div className="md:max-w-[355px]">
        <div className="flex items-center justify-between gap-[11px]">
          <span className="flex items-center gap-[11px]">
            <MapPin size={12} />
            <span>Location</span>
          </span>
          <span>{weekdayCohort?.type || "Online"}</span>
        </div>
        <div className="my-[11px] flex items-center justify-between gap-[11px]">
          <span className="flex items-center gap-[11px]">
            <CalendarDays size={12} />
            <span>Start Date</span>
          </span>
<<<<<<< HEAD
          {/* <span>{formatDateTime(cohort.startDate).date}</span> */}
          {weekdayCohort?.startDate
            ? formatDateTime(weekdayCohort.startDate).date
            : "No Date Yet"}
=======
          <span>{formatDateTime(course.classes.weekday[0].startDate).date}</span>
>>>>>>> 0866e3d6c92c7975adc6b923a430cc7223cd23f7
        </div>
        <div className="flex items-center justify-between gap-[11px]">
          <span className="flex items-center gap-[11px]">
            <Hourglass size={12} />
            <span>Duration</span>
          </span>
          <span>{weekdayCohort?.duration} Weeks</span>
        </div>
      </div>

      <div className="mt-[33px] flex flex-col justify-between gap-[20px] md:flex-row lg:items-center lg:gap-0">
        <TsaButton
          href={`/courses/${cohort.title
            .trim()
            .replaceAll(/[\s/]+/g, "-")
            .toLowerCase()}`}
          variant="primary"
          size="lg"
          className="w-full bg-mid-blue lg:max-w-[136px]"
        >
          Enroll Now
        </TsaButton>

        <span className="flex items-center justify-between gap-5 font-semibold text-primary">
          {pagination.hasPreviousPage && (
            <TsaButton size="lg" variant="link" onClick={handlePrevious}>
              {"<< Prev"}
            </TsaButton>
          )}
          {pagination.hasNextPage && (
            <TsaButton size="lg" variant="link" onClick={handleNext}>
              {"Next >>"}
            </TsaButton>
          )}
        </span>
      </div>
    </section>
  );
};
