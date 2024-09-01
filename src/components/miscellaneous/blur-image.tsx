"use client";

import Image from "next/image";
import { FC, useState, type ComponentProps } from "react";

import { cn } from "~/lib/utils";

interface BlurImageProperties extends ComponentProps<typeof Image> {
  _width: number;
  _height: number;
}

export const BlurImage: FC<BlurImageProperties> = ({
  _width,
  _height,
  ...properties
}) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...properties}
      style={{
        width: properties.alt === `icon` ? `${_width}px` : `100%`,
        height: "auto",
      }}
      width={_width}
      height={_height}
      alt={properties.alt}
      className={cn(
        "duration-700 ease-in-out",
        isLoading ? "scale-105 blur-lg" : "scale-100 blur-0",
        properties.className,
      )}
      onLoad={() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }}
    />
  );
};
