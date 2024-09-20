import Image from "next/image";
import { FC } from "react";

import { CourseTag } from "../types/index.types";

interface TagProperty {
  tag: CourseTag;
  bgColor: string;
}

export const ToolTag: FC<TagProperty> = ({ tag, bgColor }) => {
  const ifBgColorPrimary =
    bgColor === `bg-primary` || bgColor === `bg-accent`
      ? `bg-white`
      : bgColor === `bg-white`
        ? `bg-primary text-white`
        : bgColor;

  return (
    <div
      className={`flex w-full items-center gap-[16px] rounded-[8px] px-[16px] py-[10px] lg:h-[80px] lg:w-fit lg:p-[16px] ${ifBgColorPrimary}`}
    >
      <Image width={24} height={24} src={tag.img} alt={tag.text} />
      <p className="text-[10px] lg:text-sm">{tag.text}</p>
    </div>
  );
};
