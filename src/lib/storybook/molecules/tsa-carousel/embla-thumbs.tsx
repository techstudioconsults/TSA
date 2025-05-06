import Image from "next/image";
import React, { HTMLAttributes, useRef } from "react";

import { Card } from "~/components/ui/card";

interface ThumbProperties extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  index: string;
  title: string;
  onClick?: () => void;
}

export const Thumb: React.FC<ThumbProperties> = ({ selected, index, title, onClick, ...rest }) => {
  const thumbReference = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (selected && thumbReference.current) {
  //     // Scroll the selected thumbnail into view if not visible
  //     thumbReference.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "nearest",
  //       inline: "center",
  //     });
  //   }
  // }, [selected]);

  return (
    <div ref={thumbReference} {...rest}>
      <Card
        className={`relative h-[56px] w-[150px] cursor-pointer rounded-sm border-none p-2 ${
          selected ? "border border-blue-500" : ""
        }`}
        onClick={onClick}
      >
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-70 p-2">
          <p className="text-center text-xs font-semibold text-white">{title}</p>
        </div>
        <Image width={100} height={100} className="h-full w-full object-cover" src={index} alt="logo" />
      </Card>
    </div>
  );
};
