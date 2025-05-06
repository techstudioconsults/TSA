"use client";

import { Calendar, Clock10 } from "lucide-react";
import { useEffect } from "react";

import { fetchCohortsByCourseId } from "~/action/cohort.action";
import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";
import TsaButton from "~/lib/storybook/atoms/tsa-button";
import { formatDateTime, formatPrice } from "~/lib/utils";
import useCohortStore from "~/stores/cohort.store";
import useCoursesStore from "~/stores/course.store";
import { CourseSkeletonLoader } from "../../_components/course-detail.skeleton";

export const CourseDetails = () => {
  const { loading, error, activeCourse } = useCoursesStore();
  const {
    cohorts,
    // loading: cohortsLoading,
    // error: cohortsError,
  } = useCohortStore();

  // console.log("Active Course:", activeCourse);
  // console.log("Cohorts:", cohorts);

  // Fetch cohorts when course is found
  useEffect(() => {
    if (activeCourse?.id) {
      fetchCohortsByCourseId(activeCourse.id);
    }
  }, [activeCourse?.id]);

  // Find weekday and weekend cohorts
  const weekdayCohort = cohorts.find((cohort) => cohort.type === "weekday");
  const weekendCohort = cohorts.find((cohort) => cohort.type === "weekend");
  const onlineCohort = cohorts.find((cohort) => cohort.type === "online");

  if (!activeCourse)
    return (
      <Wrapper className="min-h-[511px]">
        <p className="h-fit text-center">No course selected.</p>
      </Wrapper>
    );

  return (
    <section className="min-h-[511px] bg-accent py-[59px]">
      <Wrapper>
        {loading && <CourseSkeletonLoader />}
        {error && <p className="w-full text-center text-mid-danger">Error loading classes: {error}</p>}
        {!activeCourse && <p className="w-full text-mid-danger lg:text-center">No course selected.</p>}
        <section className="grid min-h-[393px] rounded-[10px] bg-background px-[20px] py-[30px] shadow-md lg:grid-cols-3 xl:px-[63px] xl:py-[48px]">
          <div className="col-span-1 hidden lg:block">
            <BlurImage
              _height={276}
              _width={333}
              src={activeCourse.imageUrl || "/gifs/certificate.gif"} // Use course image if available
              alt="course-img"
              className="h-full w-full"
            />
          </div>
          <section className="col-span-2">
<<<<<<< HEAD
            <h3 className="text-[18px] font-[600] xl:text-[24px]">
              {activeCourse.title}
            </h3>
            <p className="my-[28px] text-[12px] leading-[24px] xl:text-[16px]">
              {activeCourse.about}
            </p>
=======
            <h3 className="text-[18px] font-[600] xl:text-[24px]">{activeCourse.title}</h3>
            <p className="my-[28px] text-[12px] leading-[24px] xl:text-[16px]">{activeCourse.description}</p>
>>>>>>> 0866e3d6c92c7975adc6b923a430cc7223cd23f7
            <section className="grid grid-cols-1 gap-[20px] font-[600] lg:max-w-[300px] xl:max-w-[500px]">
              <article>
                <p className="mb-1 text-[10px] text-mid-danger">Online</p>
                <div className="flex flex-col justify-between lg:flex-row xl:items-center">
                  <span className="flex items-center space-x-[5px] xl:space-x-[10px]">
                    <Calendar className="inline w-[10px] text-mid-blue xl:w-[20px]" />
<<<<<<< HEAD
                    <span className="text-[10px] xl:text-[14px]">
                      {onlineCohort?.duration} Weeks
                    </span>
=======
                    <span className="text-[10px] xl:text-[14px]">{activeCourse.duration} Weeks</span>
>>>>>>> 0866e3d6c92c7975adc6b923a430cc7223cd23f7
                  </span>
                  <span className="flex items-center space-x-[5px] xl:space-x-[10px]">
                    <Clock10 className="inline w-[10px] text-mid-blue xl:w-[20px]" />
                    <span className="text-[10px] xl:text-[14px]">
<<<<<<< HEAD
                      {onlineCohort?.startDate
                        ? formatDateTime(onlineCohort?.startDate).date
                        : "No Date Yet"}
                    </span>
                  </span>
                  <span className="text-[12px] xl:text-[16px]">
                    {onlineCohort?.fee === undefined
                      ? "N/A"
                      : formatPrice(onlineCohort.fee)}
                  </span>
=======
                      {formatDateTime(activeCourse.classes.online[0]?.startDate).date}
                    </span>
                  </span>
                  <span className="text-[12px] xl:text-[16px]">{formatPrice(activeCourse.classes.online[0]?.fee)}</span>
>>>>>>> 0866e3d6c92c7975adc6b923a430cc7223cd23f7
                </div>
              </article>
              <article>
                <p className="mb-1 text-[10px] text-mid-danger">Weekday</p>
                <div className="flex flex-col justify-between lg:flex-row xl:items-center">
                  <span className="flex items-center space-x-[5px] xl:space-x-[10px]">
                    <Calendar className="inline w-[10px] text-mid-blue xl:w-[20px]" />
<<<<<<< HEAD
                    <span className="text-[10px] xl:text-[14px]">
                      {weekdayCohort?.duration} Weeks
                    </span>
=======
                    <span className="text-[10px] xl:text-[14px]">{activeCourse.duration} Weeks</span>
>>>>>>> 0866e3d6c92c7975adc6b923a430cc7223cd23f7
                  </span>
                  <span className="flex items-center space-x-[5px] xl:space-x-[10px]">
                    <Clock10 className="inline w-[10px] text-mid-blue xl:w-[20px]" />
                    <span className="text-[10px] xl:text-[14px]">
<<<<<<< HEAD
                      {weekdayCohort?.startDate
                        ? formatDateTime(weekdayCohort.startDate).date
                        : "No Date Yet"}
=======
                      {formatDateTime(activeCourse.classes.weekday[0]?.startDate).date}
>>>>>>> 0866e3d6c92c7975adc6b923a430cc7223cd23f7
                    </span>
                  </span>
                  <span className="text-[12px] xl:text-[16px]">
                    {weekdayCohort?.fee === undefined
                      ? "N/A"
                      : formatPrice(weekdayCohort.fee)}
                  </span>
                </div>
              </article>
<<<<<<< HEAD
              <article>
                <p className="mb-1 text-[10px] text-mid-danger">Weekend</p>
                <div className="flex flex-col justify-between lg:flex-row xl:items-center">
                  <span className="flex items-center space-x-[5px] xl:space-x-[10px]">
                    <Calendar className="inline w-[10px] text-mid-blue xl:w-[20px]" />
                    <span className="text-[10px] xl:text-[14px]">
                      {weekendCohort?.duration} Weeks
                    </span>
                  </span>
                  <span className="flex items-center space-x-[5px] xl:space-x-[10px]">
                    <Clock10 className="inline w-[10px] text-mid-blue xl:w-[20px]" />
                    <span className="text-[10px] xl:text-[14px]">
                      {weekendCohort?.startDate
                        ? formatDateTime(weekendCohort.startDate).date
                        : "No Date Yet"}
=======
              {!isFrontend && (
                <article>
                  <p className="mb-1 text-[10px] text-mid-danger">Weekend</p>
                  <div className="flex flex-col justify-between lg:flex-row xl:items-center">
                    <span className="flex items-center space-x-[5px] xl:space-x-[10px]">
                      <Calendar className="inline w-[10px] text-mid-blue xl:w-[20px]" />
                      <span className="text-[10px] xl:text-[14px]">{activeCourse.duration} Weeks</span>
                    </span>
                    <span className="flex items-center space-x-[5px] xl:space-x-[10px]">
                      <Clock10 className="inline w-[10px] text-mid-blue xl:w-[20px]" />
                      <span className="text-[10px] xl:text-[14px]">
                        {formatDateTime(activeCourse.classes.weekend[0]?.startDate).date}
                      </span>
>>>>>>> 0866e3d6c92c7975adc6b923a430cc7223cd23f7
                    </span>
                  </span>
                  <span className="text-[12px] xl:text-[16px]">
                    {weekendCohort?.fee === undefined
                      ? "N/A"
                      : formatPrice(weekendCohort.fee)}
                  </span>
                </div>
              </article>
            </section>
            <section className="mt-[32px] text-end">
              <TsaButton
                href={`/courses/${activeCourse.title
                  .trim()
                  .replaceAll(/[\s/]+/g, "-")
                  .toLowerCase()}`}
                size={`lg`}
                variant={`primary`}
                className="w-full bg-mid-blue lg:w-fit"
              >
                View Full Details
              </TsaButton>
            </section>
          </section>
        </section>
      </Wrapper>
    </section>
  );
};
