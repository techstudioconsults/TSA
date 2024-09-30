"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  TsaButton,
} from "@strategic-dot/components";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { newsletterFormData, newsletterFormSchema } from "~/schemas";
import {
  useNewsletterFormStore,
  useSubmitNewsletterForm,
} from "~/services/email.service";

export const EmailForm = () => {
  const router = useRouter();
  const formMethods = useForm<newsletterFormData>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = formMethods;

  const { isSubmitting, responseMessage } = useNewsletterFormStore();
  const onSubmit = useSubmitNewsletterForm();

  if (responseMessage) {
    router.push(`/explore`);
  }

  return (
    <Form {...formMethods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[44px] flex h-[48px] max-w-[521px] items-center"
      >
        <FormField
          name="email"
          control={control}
          render={({ field }) => (
            <FormItem className="h-full">
              <FormControl>
                <Input
                  placeholder="Enter Your Email Address"
                  className="h-full rounded-none rounded-s-[5px] text-black"
                  size={384}
                  {...field}
                />
              </FormControl>
              {errors.email && (
                <FormMessage className="text-xs italic text-low-danger">
                  {errors.email?.message}
                </FormMessage>
              )}
              {responseMessage && (
                <FormMessage className="text-xs italic text-low-success">
                  {responseMessage}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <TsaButton
          type="submit"
          variant="primary"
          className="h-[100%] w-[138px] rounded-none rounded-e-[5px] bg-mid-blue"
        >
          {isSubmitting ? (
            <Loader className="animate-spin text-white" />
          ) : (
            "Explore Courses"
          )}
        </TsaButton>
      </form>
    </Form>
  );
};
