import { TsaButton } from "@strategic-dot/components";

import { BlurImage } from "../miscellaneous/blur-image";

const HelpBanner = () => {
  return (
    <section className="relative flex max-w-[1240px] rounded-[15px] bg-primary p-[40px] text-center text-white lg:px-[145px] lg:py-[62px] lg:text-left">
      <div className="mx-auto max-w-[500px] lg:mx-0">
        <p className="text-md mb-[1rem] font-light text-white">
          Need help choosing a course?
        </p>
        <h5 className="text-white">Talk To An Expert</h5>
        <p className="mb-[32px] mt-[20px] text-sm font-light leading-[22px]">
          Are you indecisive about what course to choose? Would you like to talk
          to a Tech expert over any tech related issue? We have professionals in
          place who are ready and willing to be of help.
        </p>
        <TsaButton
          variant="primary"
          size="lg"
          className="w-[159px] bg-mid-blue"
        >
          Get Help
        </TsaButton>
      </div>
      <div className="absolute bottom-0 right-[148px] hidden overflow-hidden lg:block">
        <BlurImage
          _width={279}
          _height={400}
          src={"/images/smiling-lady.png"}
          alt={"smiling-lady"}
        />
      </div>
      <div className="absolute left-[-2rem] top-[-2rem] hidden overflow-hidden lg:block">
        <BlurImage
          _width={116}
          _height={118}
          src={"/icons/box-2.png"}
          alt={"smiling-lady"}
        />
      </div>
      <div className="absolute bottom-[-2rem] right-[-2rem] hidden overflow-hidden lg:block">
        <BlurImage
          _width={90}
          _height={72}
          src={"/icons/box-1(transparent).png"}
          alt={"smiling-lady"}
        />
      </div>
    </section>
  );
};
export default HelpBanner;
