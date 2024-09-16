import Image from "next/image";
import { FC } from "react";

interface CardProperties {
  image: string;
  text: string;
}

export const Card: FC<CardProperties> = ({ image, text }) => {
  return (
    <div className="mx-auto flex max-w-[349px] flex-col items-center gap-[20px] lg:mx-0">
      <div>
        <Image width={72} height={67} src={image} alt={"icon"} />
      </div>
      <div>
        <p className="font-[400] text-high-grey-III">{text}</p>
      </div>
    </div>
  );
};
