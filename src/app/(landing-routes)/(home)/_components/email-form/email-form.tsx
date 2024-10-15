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
import { FC, HtmlHTMLAttributes } from "react";
import { useForm } from "react-hook-form";

import { cn } from "~/lib/utils";
import { newsletterFormData, newsletterFormSchema } from "~/schemas";
import {
  useNewsletterFormStore,
  useSubmitNewsletterForm,
} from "~/services/email.service";

interface EmailFormProperties extends HtmlHTMLAttributes<HTMLFormElement> {
  buttonTitle: string;
}

export const EmailForm: FC<EmailFormProperties> = ({
  buttonTitle,
  className,
  ...rest
}) => {
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
        {...rest}
        onSubmit={handleSubmit(onSubmit)}
        className={cn(`flex h-[48px] max-w-[521px] items-center`, className)}
      >
        <FormField
          name="email"
          control={control}
          render={({ field }) => (
            <FormItem className="h-full">
              <FormControl>
                <Input
                  data-testid="email-input"
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
          className="tsaButton h-[100%] w-[138px] rounded-none rounded-e-[5px] bg-mid-blue"
        >
          {isSubmitting ? (
            <Loader className="animate-spin text-white" />
          ) : (
            buttonTitle
          )}
        </TsaButton>
      </form>
    </Form>
  );
};
