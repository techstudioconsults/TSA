import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen flex-col xl:grid xl:grid-cols-2">
      <section className="h-[20rem] xl:h-screen">
        <Link
          className="absolute left-[1rem] top-[1rem] hover:animate-pulse"
          href={`/`}
        >
          <Image width={48} height={48} src={"/icons/logo.png"} alt="logo" />
        </Link>
        <Image
          width={742}
          height={900}
          className="h-[100%] w-full object-cover xl:h-full"
          src="/images/model.png"
          alt="model"
        />
      </section>
      <section className="flex h-full w-full items-center justify-center">
        {children}
      </section>
      <p className="absolute bottom-[1rem] right-[1rem] font-[700]">
        &copy; {new Date().getFullYear()} TechStudio Academy
      </p>
    </main>
  );
}
