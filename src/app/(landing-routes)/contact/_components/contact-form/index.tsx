"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  TsaButton,
} from "@strategic-dot/components";
import { Loader } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import ResponseModal from "~/components/response-modal";
import { ContactFormData, contactFormSchema } from "~/schemas";
import { useContactFormStore, useSubmitContactForm } from "../../services";

export const ContactForm: FC = () => {
  const formMethods = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = formMethods;

  const { isSubmitting, responseMessage } = useContactFormStore();
  const onSubmit = useSubmitContactForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (responseMessage) {
      setIsModalOpen(true);
      if (!responseMessage.includes("Failed")) {
        reset();
      }
    }
  }, [responseMessage, reset]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Form {...formMethods}>
        <form
          className="max-w-[504px] rounded-lg border-t-8 border-mid-blue bg-white p-6 shadow-lg lg:p-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Full Name */}
          <FormField
            name="fullName"
            control={control}
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Full Name"
                    className="text-dark w-full rounded-md border px-4 py-2"
                    {...field}
                  />
                </FormControl>
                {errors.fullName && (
                  <FormMessage className="text-xs italic text-destructive">
                    {errors.fullName?.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            name="email"
            control={control}
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@example.com"
                    className="text-dark w-full rounded-md border px-4 py-2"
                    {...field}
                  />
                </FormControl>
                {errors.email && (
                  <FormMessage className="text-xs italic text-destructive">
                    {errors.email?.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            name="message"
            control={control}
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel>Message or Questions</FormLabel>
                <FormControl>
                  <textarea
                    className="text-dark w-full rounded-md border px-4 py-2"
                    rows={4}
                    placeholder="Type your message, questions, or inquiries here"
                    {...field}
                  />
                </FormControl>
                {errors.message && (
                  <FormMessage className="text-xs italic text-destructive">
                    {errors.message?.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div>
            <TsaButton
              size="lg"
              type="submit"
              variant="primary"
              className="w-full bg-mid-blue"
              isDisabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader className="animate-spin text-primary" />
              ) : (
                "Send Message"
              )}
            </TsaButton>
          </div>
        </form>
      </Form>

      {/* Response Modal */}
      <ResponseModal
        title={` Message Sent Successfully!`}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        responseMessage={responseMessage || ""}
        isError={!responseMessage || responseMessage.includes("Failed")}
      />
    </>
  );
};
