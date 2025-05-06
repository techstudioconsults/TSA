import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { LogoProperties } from "~/types/index.types";

const Logo: FC<LogoProperties> = ({ logo }) => {
  return (
    <Link href="/" className="" data-testid="logo">
      {logo ? (
        <Image priority src={logo} alt="Techstudio academy logo" height={37} width={120} className="" />
      ) : (
        <p className="text-xl font-bold">LOGO</p>
      )}
    </Link>
  );
};

export default Logo;
