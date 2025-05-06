import React, { HtmlHTMLAttributes, useEffect, useState } from "react";

import { cn } from "~/lib/utils";

// Define the props type for the Banner component
interface BannerProperties extends HtmlHTMLAttributes<HTMLDivElement> {
  duration: string;
}

// Helper function to parse the duration string and convert it to milliseconds
const parseDuration = (duration: string): number => {
  const value = Number.parseInt(duration.slice(0, -1));
  const unit = duration.slice(-1);
  switch (unit) {
    case "d": {
      return value * 24 * 60 * 60 * 1000;
    }
    case "h": {
      return value * 60 * 60 * 1000;
    }
    case "m": {
      return value * 60 * 1000;
    }
    default: {
      return 0;
    }
  }
};

// Convert milliseconds to a time string format of 00days:00hrs:00mins:00secs
const formatTime = (ms: number): string => {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days.toString().padStart(2, "0")}days:${hours.toString().padStart(2, "0")}hrs:${minutes
    .toString()
    .padStart(2, "0")}mins:${seconds.toString().padStart(2, "0")}secs`;
};

// Banner component
export const Banner: React.FC<BannerProperties> = ({ duration, className, ...rest }) => {
  const [timeLeft, setTimeLeft] = useState(parseDuration(duration));
  const [message, setMessage] = useState("Expires in: ");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((previousTime) => {
        if (previousTime <= 1000) {
          clearInterval(interval);
          setMessage("Times up! ");
          return 0;
        }
        return previousTime - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={cn(`items-cente flex justify-center bg-background p-4 text-center`, className)} {...rest}>
      <p className="text-sm font-bold text-primary lg:text-lg">
        Get 10% Discount Off Our Next Cohort! &#128073;
        <span className="text-mid-danger lg:ml-5">
          {message}
          {timeLeft > 0 ? formatTime(timeLeft) : ""}
        </span>
      </p>
    </section>
  );
};
