import { Wrapper } from "~/components/layout/wrapper";
import BlurImage from "~/components/miscellaneous/blur-image";
import { TsaCaroussel } from "~/components/tsa-caroussel";

export const SectionTwo = () => {
  return (
    <section className="relative overflow-hidden bg-accent py-[85px]">
      <Wrapper>
        <section className="flex flex-col items-center justify-between gap-[28px] text-center lg:flex-row lg:text-left">
          <div>
            <span className="text-sm font-bold uppercase text-mid-blue">
              what we offer
            </span>
            <h2 className="my-[19px] text-3xl">
              Certified Tech Training Courses and{" "}
            </h2>
            <p className="text-sm leading-[23px] text-mid-grey-III">
              Explore our extensive selection of highly sought-after
              beginner-friendly tech courses, meticulously designed to empower
              and inspire learners at every step of their educational journey.
              <BlurImage
                src={"/icons/scribble.png"}
                alt={"img"}
                width={34}
                height={31}
              />
            </p>
          </div>
          <TsaCaroussel />
        </section>
      </Wrapper>
      <BlurImage
        className="absolute left-[-2rem] top-[-2rem]"
        src={"/icons/dotted-box.png"}
        alt={"img"}
        width={112}
        height={112}
      />
      <BlurImage
        className="absolute bottom-[-2rem] right-[-2rem]"
        src={"/icons/box-1.png"}
        alt={"img"}
        width={91}
        height={88}
      />
    </section>
  );
};
