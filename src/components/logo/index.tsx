import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="" data-testid="logo">
      <Image
        src="/images/logo-black.png"
        alt="Techstudio academy logo"
        height={37}
        width={150}
        className=""
      />
    </Link>
  );
};

export default Logo;
