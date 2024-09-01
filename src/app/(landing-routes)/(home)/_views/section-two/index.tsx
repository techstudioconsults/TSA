import Image from "next/image";

import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";
import { TsaCaroussel } from "~/components/tsa-caroussel";

export const SectionTwo = () => {
  return (
    <section className="relative overflow-hidden bg-accent py-[85px]">
      <Wrapper>
        <section className="grid grid-cols-1 items-center gap-[28px] lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="relative z-10 text-sm font-bold uppercase text-mid-blue">
              what we offer
            </span>
            <h3 className="my-[19px]">Certified Tech Training Courses and</h3>
            <p className="leading-[23px]">
              Explore our extensive selection of highly sought-after
              beginner-friendly tech courses, meticulously designed to empower
              and inspire learners at every step of their educational journey.
              <BlurImage
                src={"/icons/scribble.png"}
                alt={"icon"}
                _width={34}
                _height={31}
              />
            </p>
          </div>
          <TsaCaroussel />
        </section>
      </Wrapper>
      <Image
        className="absolute left-[-1rem] top-[-1rem]"
        src={"/icons/box-2.png"}
        alt={"img"}
        width={112}
        height={112}
      />
      <Image
        className="absolute bottom-0 right-0"
        src={"/icons/box-1.png"}
        alt={"img"}
        width={91}
        height={88}
      />
    </section>
  );
};
