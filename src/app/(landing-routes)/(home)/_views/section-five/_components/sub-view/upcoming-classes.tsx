"use client";

import { TsaButton } from "@strategic-dot/components";
import { CalendarDays, Hourglass, MapPin } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import useHomePageStore from "../../../../services";
import { UpcomingClassesSkeleton } from "../skeleton/upcoming.skeleton";

export const UpcomingClasses = () => {
  const { loading, error, getUpcomingClasses, upcomingClasses } =
    useHomePageStore();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getUpcomingClasses();
  }, [getUpcomingClasses]);

  const upcomingClass = useMemo(
    () => upcomingClasses?.[index],
    [upcomingClasses, index],
  );

  const handlePrevious = () => {
    if (index > 0) {
      setIndex((previousIndex) => previousIndex - 1);
    }
  };

  const handleNext = () => {
    if (index < upcomingClasses.length - 1) {
      setIndex((previousIndex) => previousIndex + 1);
    }
  };

  if (loading) return <UpcomingClassesSkeleton />;
  if (error) return <p>Error loading classes: {error}</p>;

  if (!upcomingClass) return <p>No upcoming classes available.</p>;

  return (
    <section>
      <span className="text-sm font-bold uppercase text-mid-blue">
        Upcoming Classes
      </span>
      <h3 className="my-[19px] min-h-[8rem]">{upcomingClass.title}</h3>
      <p className="mb-[30px] min-h-[12rem]">{upcomingClass.description}</p>

      <div className="max-w-[355px]">
        <div className="flex items-center justify-between gap-[11px]">
          <span className="flex items-center gap-[11px]">
            <MapPin size={12} />
            <span>Location</span>
          </span>
          <span>{upcomingClass.preference}</span>
        </div>
        <div className="my-[11px] flex items-center justify-between gap-[11px]">
          <span className="flex items-center gap-[11px]">
            <CalendarDays size={12} />
            <span>Start Date</span>
          </span>
          <span>{upcomingClass.startDate}</span>
        </div>
        <div className="flex items-center justify-between gap-[11px]">
          <span className="flex items-center gap-[11px]">
            <Hourglass size={12} />
            <span>Duration</span>
          </span>
          <span>24 Weeks</span>
        </div>
      </div>

      <div className="mt-[33px] flex flex-col items-center justify-between gap-[20px] lg:flex-row lg:gap-0">
        <TsaButton
          variant="primary"
          size="lg"
          className="w-full bg-mid-blue lg:w-[152px]"
        >
          Enroll Now
        </TsaButton>

        <span className="flex items-center gap-5 font-semibold text-primary">
          <TsaButton
            variant="link"
            onClick={handlePrevious}
            isDisabled={index === 0}
          >
            {"<< Prev"}
          </TsaButton>
          <TsaButton
            variant="link"
            onClick={handleNext}
            isDisabled={index === upcomingClasses.length - 1}
          >
            {"Next >>"}
          </TsaButton>
        </span>
      </div>
    </section>
  );
};
