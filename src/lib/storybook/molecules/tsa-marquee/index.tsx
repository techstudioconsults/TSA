"use client";

import { FC } from "react";
import Marquee from "react-fast-marquee";

import { cn } from "~/lib/utils";
import { TsaMarqueeProperties } from "~/types/index.types";

export const TsaMarquee: FC<TsaMarqueeProperties> = ({ children, className, ...rest }) => {
  return (
    <Marquee speed={50}>
      <div className={cn(`mr-10 flex items-center gap-10 p-5`, className)} {...rest}>
        {children}
      </div>
    </Marquee>
  );
};
