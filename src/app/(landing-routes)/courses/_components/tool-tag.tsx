import Image from "next/image";
import { FC } from "react";

import { CourseTag } from "../types/index.types";

interface TagProp {
  tag: CourseTag;
  bgColor: string;
}

export const ToolTag: FC<TagProp> = ({ tag, bgColor }) => {
  const ifBgColorPrimary =
    bgColor === `bg-primary` || bgColor === `bg-accent`
      ? `bg-white`
      : bgColor === `bg-white`
        ? `bg-primary text-white`
        : bgColor;

  return (
    <div
      className={`flex h-[80px] w-fit items-center gap-[16px] rounded-[8px] p-[16px] ${ifBgColorPrimary}`}
    >
      <Image width={24} height={24} src={tag.img} alt={tag.text} />
      <p className="text-sm">{tag.text}</p>
    </div>
  );
};
