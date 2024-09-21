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
import { FC } from "react";
import { useForm } from "react-hook-form";

import { ContactFormData, contactFormSchema } from "~/schemas";
import { useContactFormStore, useSubmitContactForm } from "../../services";

export const ContactForm: FC = () => {
  const formMethods = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = formMethods;

  const { isSubmitting, responseMessage } = useContactFormStore();
  const onSubmit = useSubmitContactForm();

  return (
    <Form {...formMethods}>
      <form
        className="max-w-[504px] rounded-lg border-t-8 border-mid-blue bg-white p-6 shadow-lg lg:p-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p>{responseMessage}</p>
        {/* Full Name */}
        <FormField
          name="fullName"
          control={control} // Pass control here
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
                <FormMessage className="text-red-600">
                  {errors.fullName?.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          name="email"
          control={control} // Pass control here
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
                <FormMessage className="text-red-600">
                  {errors.email?.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          name="message"
          control={control} // Pass control here
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
                <FormMessage className="text-red-600">
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
  );
};
