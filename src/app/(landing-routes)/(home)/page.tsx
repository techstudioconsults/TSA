import { Hero } from "./_views/hero";
import { SectionOne } from "./_views/section-one";

function Home() {
  return (
    <main>
      <Hero />
      <div className="mt-[650px]">
        <SectionOne />
      </div>
    </main>
  );
}

export default Home;
