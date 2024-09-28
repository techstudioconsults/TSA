"use client";

import { TsaButton } from "@strategic-dot/components";
import { Loader } from "lucide-react";
import { useEffect } from "react";

import { Wrapper } from "~/components/layout/wrapper";
import { cn } from "~/lib/utils";
import useGlobalStore from "~/services";

export const Hero = () => {
  const {
    loading,
    error,
    allCourses,
    setActiveCourse,
    activeCourse,
    getAllCourses,
  } = useGlobalStore();

  useEffect(() => {
    getAllCourses();
  }, []);

  // {
  //   !allCourses.length && (
  //     <div className="w-full">
  //       <p className="h-fit text-center">No upcoming class available</p>
  //     </div>
  //   );
  // }

  return (
    <header className="min-h-[364px] w-full pt-[135px]">
      <Wrapper className="mb-[67px] mt-[41px] space-y-[68px]">
        <div className="space-y-[22px]">
          <h3 className="text-[24px]">Our Courses</h3>
          <p>Select any of our courses to get started on your tech journey</p>
        </div>
        <div
          className={cn(
            `grid min-h-[36px] gap-[10px] xl:flex xl:flex-wrap xl:gap-[31px]`,
            loading ? `grid-cols-1` : `grid-cols-2`,
          )}
        >
          {loading && (
            <div className="flex w-full justify-center gap-1">
              <Loader className="animate-spin text-primary" />
              <span className="h-fit text-center text-[12px] lg:text-[16px]">
                Getting All Courses... please wait.
              </span>
            </div>
          )}
          {error && (
            <p className="w-full text-mid-danger lg:text-center">
              Error loading classes: {error}
            </p>
          )}
          {allCourses.map((course) => (
            <TsaButton
              key={course.id}
              onClick={() => setActiveCourse(course)}
              className={`w-full rounded-[5px] px-[20px] py-[15px] text-center text-[10px] font-[600] xl:w-fit xl:text-[14px] ${
                activeCourse?.id === course.id
                  ? "bg-mid-blue text-white" // Active styles
                  : "bg-[#EBEBEB] text-black" // Default styles
              }`}
            >
              {course.title}
            </TsaButton>
          ))}
        </div>
      </Wrapper>
    </header>
  );
};
