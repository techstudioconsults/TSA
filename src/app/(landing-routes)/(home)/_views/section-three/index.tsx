import { Wrapper } from "~/components/layout/wrapper";

export const SectionThree = () => {
  return (
    <Wrapper className="my-[100px] flex flex-col items-center justify-between gap-[170px] lg:flex-row">
      <div className="flex-1">
        <span className="text-sm font-bold uppercase text-mid-blue">
          LIFE AFTER TRAINING
        </span>
        <h2 className="my-[19px] text-3xl">Where Our Graduates Work</h2>
      </div>
      <div className="flex-1">
        <p className="text-sm leading-[23px]">
          Our talented graduates flourish in leading companies across the globe,
          making significant contributions to both their personal growth and the
          organizations they serve. They work in industries ranging from
          Information technology to Telecommunication, and more.
        </p>
      </div>
      <div>{/* marquee */}</div>
    </Wrapper>
  );
};
