"use client";

import { Input, TsaButton } from "@strategic-dot/components";
import { useRouter } from "next/navigation";

export const EmailForm = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/explore");
  };
  return (
    <div className="mt-[44px] flex h-[48px] max-w-[521px] items-center">
      <Input
        placeholder="Enter Your Email Address"
        className="h-[100%] rounded-none rounded-s-[5px] text-black"
        size={384}
      />
      <TsaButton
        variant="primary"
        className="h-[100%] rounded-none rounded-e-[5px] bg-mid-blue"
        onClick={handleClick}
      >
        Explore Courses
      </TsaButton>
    </div>
  );
};
