import { TsaBanner } from "@strategic-dot/components";

import { TESTIMONIALS } from "~/constants";
import { cn } from "~/lib/utils";
import { BlurImage } from "../miscellaneous/blur-image";

export const CarouselBanner = () => {
  return (
    <TsaBanner
      className={cn(
        `mx-auto flex min-h-[392px] max-w-full flex-col justify-between rounded-lg bg-primary p-4 text-background md:max-w-[1244px] md:flex-row md:p-[42px]`,
      )}
      topSlot={
        <BlurImage
          _width={112}
          _height={112}
          src="/icons/box-2.png"
          alt="icon"
        />
      }
      bottomSlot={
        <BlurImage
          className="h-[88px] w-[91px]"
          src="/icons/box-1(full).png"
          alt="icon"
          _width={91}
          _height={80}
        />
      }
      testimonials={TESTIMONIALS}
    />
  );
};
