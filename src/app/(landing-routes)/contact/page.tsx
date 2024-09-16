import Link from "next/link";

import { BlurImage } from "~/components/miscellaneous/blur-image";
import { Hero } from "./_views/hero";
import { SectionOne } from "./_views/section-one";

const Contact = () => {
  return (
    <div>
      <Hero />
      <SectionOne />
      <Link
        target="_blank"
        href={`https://www.google.com/maps/place/Tech+Studio+Academy+%7C+Tech+Training+Institute+in+Lagos/@6.5355864,3.3653758,19z/data=!3m1!4b1!4m6!3m5!1s0x103b8dba7bad97cb:0xae0bc176821041e5!8m2!3d6.5355851!4d3.3660195!16s%2Fg%2F11h4zqnp1s?authuser=0&entry=ttu`}
      >
        <section className="mb-[-40px] lg:pt-[80px]">
          <BlurImage
            className="object-contain object-top lg:object-cover"
            _width={1440}
            _height={312}
            src="/images/location.png"
            alt="map"
          />
        </section>
      </Link>
    </div>
  );
};

export default Contact;
