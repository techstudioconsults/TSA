import { Hero } from "./_views/hero";
import { SectionFive } from "./_views/section-five";
import { SectionFour } from "./_views/section-four";
import { SectionOne } from "./_views/section-one";
import { SectionThree } from "./_views/section-three";
import { SectionTwo } from "./_views/section-two";

function Home() {
  return (
    <main>
      <Hero />
      <div className="pt-[724px]">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>
    </main>
  );
}

export default Home;
