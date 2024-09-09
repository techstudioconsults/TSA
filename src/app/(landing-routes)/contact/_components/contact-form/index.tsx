"use client";

import { TsaButton, TsaInput } from "@strategic-dot/components";
import { FC } from "react";

export const ContactForm: FC = () => {
  return (
    <form className="max-w-[504px] rounded-lg border-t-8 border-mid-blue bg-white p-6 shadow-lg lg:p-12">
      <div className="mb-6">
        <TsaInput placeholder={"Full Name"} label="Full Name" />
      </div>
      <div className="mb-6">
        <TsaInput
          type="email"
          placeholder={"example@example.com"}
          label="Email Address"
        />
      </div>
      <div className="mb-6">
        <TsaInput placeholder={"Subject"} label="Subject" />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="mb-2 block text-sm font-semibold">
          Message or Questions
        </label>
        <textarea
          className="text-dark w-full rounded-md border px-4 py-2"
          id="message"
          rows={4}
          placeholder="Type your message, questions or inquiries here"
        ></textarea>
      </div>
      <div>
        <TsaButton
          size="lg"
          type="submit"
          variant="primary"
          className="w-full bg-mid-blue"
        >
          Send Message
        </TsaButton>
      </div>
    </form>
  );
};
