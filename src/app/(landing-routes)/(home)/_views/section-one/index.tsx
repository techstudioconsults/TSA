"use client";

import { Wrapper } from "~/components/layout/wrapper";
import Card from "../../_components/card/card";

export const SectionOne = () => {
  return (
    <Wrapper className="min-h-[678px] pb-[50px] pt-[50px]">
      <section className="mx-auto w-fit text-center">
        <p className="text-sm font-[700] uppercase text-mid-blue">Why techstudio?</p>
        <h2 className="mb-[58px] mt-[33px]">We Are Customer-Centric</h2>
      </section>
      <section className="grid min-h-[403px] grid-cols-1 gap-[44px] md:grid-cols-2 lg:grid-cols-3">
        <Card
          image={"/gifs/great-learning-enviroment.gif"}
          title={"Great learning Environment"}
          description={
            "We provide exceptional learning facilities with comfortable, en-suite classrooms and high-speed internet."
          }
        />
        <Card
          image={"/gifs/expirence-tutor.gif"}
          title={"Experienced Tutor"}
          description={
            "Our tutors are experienced professionals chosen for their exceptional teaching abilities. They are dedicated to providing top-notch education to our students."
          }
        />
        <Card
          image={"/gifs/career-support.gif"}
          title={"Career Support"}
          description={
            "We provide unparalleled support both during your learning journey and after graduation. Our commitment to your success extends beyond the classroom."
          }
        />
      </section>
    </Wrapper>
  );
};
