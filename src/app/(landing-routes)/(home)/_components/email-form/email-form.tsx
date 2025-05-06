"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, HtmlHTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { submitNewsletterForm } from "~/action/email.action";
import { Form, FormControl, FormField, FormItem, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import TsaButton from "~/lib/storybook/atoms/tsa-button";
import { cn } from "~/lib/utils";
import { newsletterFormData, newsletterFormSchema } from "~/schemas";

interface EmailFormProperties extends HtmlHTMLAttributes<HTMLFormElement> {
  buttonTitle: string;
}

export const EmailForm: FC<EmailFormProperties> = ({ buttonTitle, className, ...rest }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>();

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
    reset,
  } = formMethods;

  const onSubmit = async (data: newsletterFormData) => {
    setIsSubmitting(true);

    const response = await submitNewsletterForm(data);

    if (response.error) {
      toast.error("Something went wrong!", {
        description: response.error,
      });
    } else {
      toast.success("Successfully submitted!", {
        description: response.success,
      });
      reset();
      router.push(`/explore`);
    }

    setIsSubmitting(false);
  };

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
                  {errors.email.message} {/* Client-side validation error */}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <TsaButton
          type="submit"
          variant="primary"
          isDisabled={isSubmitting}
          className="tsaButton h-[100%] w-[138px] rounded-none rounded-e-[5px] bg-mid-blue"
        >
          {isSubmitting ? <Loader className="animate-spin text-white" /> : buttonTitle}
        </TsaButton>
      </form>
    </Form>
  );
};
