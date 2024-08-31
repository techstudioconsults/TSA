import { Hero } from "./_views/hero";
import { SectionOne } from "./_views/section-one";
import { SectionThree } from "./_views/section-three";
import { SectionTwo } from "./_views/section-two";

function Home() {
  return (
    <main>
      <Hero />
      <div className="mt-[650px]">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </main>
  );
}

export default Home;
