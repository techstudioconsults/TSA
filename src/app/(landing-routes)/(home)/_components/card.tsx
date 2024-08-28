import { FC, HTMLAttributes } from "react";

import BlurImage from "~/components/miscellaneous/blur-image";

interface CardProperties extends HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
}

export const Card: FC<CardProperties> = ({
  image,
  title,
  description,
  ...rest
}) => {
  return (
    <section className="mx-auto w-full max-w-[376px]" {...rest}>
      <BlurImage
        className="mx-auto"
        width={337}
        height={190}
        src={image}
        alt={"card-img"}
      />
      <div className="mt-[1rem] p-[1rem] text-center">
        <h4 className="text-high-grey-III mb-[1rem] text-lg font-[700]">
          {title}
        </h4>
        <p className="text-high-grey-II text-sm leading-[25px]">
          {description}
        </p>
      </div>
    </section>
  );
};
