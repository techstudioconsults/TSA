import { Wrapper } from "~/components/layout/wrapper";
import { TeamCard } from "../../_components/team-card";

export const SectionThree = () => {
  return (
    <section className="min-h-[1149px] bg-accent py-[70px]">
      <Wrapper>
        <header className="mx-auto mb-[63px] min-h-[129px] max-w-[650px] text-center">
          <h2 className="mb-[22px] text-[24px] lg:text-[35px]">
            Meet the Team
          </h2>
          <p>
            Our team comprises a dynamic group of young and vibrant
            professionals who possess an unwavering commitment to go the extra
            mile in delivering exceptional service.
          </p>
        </header>
        <section className="grid grid-cols-1 gap-[44px] md:grid-cols-2 xl:grid-cols-3">
          <TeamCard
            image="/team/wasiu.png"
            name="Wasiu Yusuf"
            role="Chief Operations Officer"
            linkedIn=""
          />
          <TeamCard
            image="/team/tosin.png"
            name="Tosin Sanya"
            role="Chief Operations Officer"
            linkedIn=""
          />
          <TeamCard
            image=""
            name={"Akinwumi Aishat"}
            role={"Product Lead"}
            linkedIn=""
          />
          <TeamCard
            image=""
            name="Arikawe Omolayo"
            role="Marketing Lead"
            linkedIn=""
          />
          <TeamCard
            image="/team/busola.png"
            name="Adebusola Adebowale"
            role="Sales & Marketing"
            linkedIn=""
          />
          <TeamCard
            image="/team/blessing.png"
            name="Patrick Blessing"
            role="Sales & Marketing"
            linkedIn=""
          />
        </section>
      </Wrapper>
    </section>
  );
};
