import { Input, TsaButton } from "@strategic-dot/components";

export const EmailForm = () => {
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
      >
        Explore Courses
      </TsaButton>
    </div>
  );
};
