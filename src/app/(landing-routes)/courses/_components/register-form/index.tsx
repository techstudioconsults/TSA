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
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import ResponseModal from "~/components/modals/response-modal";
import { RegisterFormData, registerFormSchema } from "~/schemas";
import useCoursesStore from "~/services/courses.service";
import {
  useRegisterStore,
  useSubmitRegisterForm,
} from "../../../../../services/register.service";

interface registerProperties {
  slug: string;
}

export const RegisterForm: FC<registerProperties> = ({ slug }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getAllCourses } = useCoursesStore();
  const { isSubmitting, responseMessage } = useRegisterStore();
  const onSubmit = useSubmitRegisterForm("courseId");
  const formMethods = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      course: slug,
      schedule: "weekday",
    },
  });

  useEffect(() => {
    getAllCourses();
  }, [getAllCourses]);

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = formMethods;

  useEffect(() => {
    if (responseMessage && !responseMessage.includes("Failed")) {
      setIsModalOpen(true);
      reset();
    }
  }, [responseMessage, reset]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Form {...formMethods}>
        <section className="relative z-[2] max-w-[457px] before:absolute before:left-[66px] before:top-[-60px] before:z-[-1] before:hidden before:h-[387px] before:w-[467px] before:rounded-[15px] before:bg-[#072C5B] before:content-empty before:lg:block">
          <div className="h-full rounded-[15px] bg-white p-[29px]">
            <h6 className="mb-[27px] text-[16px] font-[700]">
              Register to learn more about the program pricing and curriculum
            </h6>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-[20px]"
            >
              {/* First Name */}
              <FormField
                name="firstName"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        className="w-full rounded-md border px-4 py-2 text-black"
                        {...field}
                      />
                    </FormControl>
                    {errors.firstName && (
                      <FormMessage className="text-xs italic text-destructive">
                        {errors.firstName?.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />

              {/* Last Name */}
              <FormField
                name="lastName"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        className="w-full rounded-md border px-4 py-2 text-black"
                        {...field}
                      />
                    </FormControl>
                    {errors.lastName && (
                      <FormMessage className="text-xs italic text-destructive">
                        {errors.lastName?.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />

              {/* Email Address */}
              <FormField
                name="email"
                control={control}
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="w-full rounded-md border px-4 py-2 text-black"
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

              {/* Phone Number */}
              <FormField
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormControl>
                      <Input
                        placeholder="Phone Number"
                        className="w-full rounded-md border px-4 py-2 text-black"
                        {...field}
                      />
                    </FormControl>
                    {errors.phoneNumber && (
                      <FormMessage className="text-xs italic text-destructive">
                        {errors.phoneNumber?.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="col-span-2">
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
                    "Get Program Package"
                  )}
                </TsaButton>
              </div>
            </form>
          </div>
        </section>
      </Form>

      {/* Response Modal */}
      <ResponseModal
        title={`Course Registered Successfully`}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        responseMessage={responseMessage || ""}
        isError={!responseMessage || responseMessage.includes("Failed")}
      />
    </>
  );
};
