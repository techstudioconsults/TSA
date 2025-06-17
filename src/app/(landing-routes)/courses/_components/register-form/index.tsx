"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { fetchAllCourses } from "~/action/courses.action";
import { submitRegisterForm } from "~/action/register.action";
import { Course } from "~/action/services.type";
import ResponseModal from "~/components/modals/response-modal";
import { Form, FormControl, FormField, FormItem, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import TsaButton from "~/lib/storybook/atoms/tsa-button";
import useFacebookPixel from "~/lib/utils/pixel-tracker";
import { RegisterFormData, registerFormSchema } from "~/schemas";
import useCoursesStore from "~/stores/course.store";

interface RegisterProperties {
  slug: string;
}

export const RegisterForm: FC<RegisterProperties> = ({ slug }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [source, setSource] = useState("direct");
  const { allCourses } = useCoursesStore();
  const [course, setCourse] = useState<Course>();
  const { trackEvent } = useFacebookPixel("962870014990453", undefined, {
    autoConfig: true,
    debug: true,
  });

  useEffect(() => {
    const savedSource = localStorage.getItem("traffic_source");
    if (savedSource) {
      setSource(savedSource);
    }
    // Find the course using the slug
  }, []);

  useEffect(() => {
    fetchAllCourses();
    const course = allCourses.find(
      (course) =>
        course.title
          .trim()
          .replaceAll(/[\s/]+/g, "-")
          .toLowerCase() === slug,
    );
    if (course) {
      setCourse(course);
    }
  }, [allCourses, slug]);

  const formMethods = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      courseId: "",
      schedule: "weekday",
      newsletter: false,
      source: source,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
  } = formMethods;

  // Set courseId when course is found
  useEffect(() => {
    if (course?.id) {
      setValue("courseId", course.id);
    }
  }, [course, setValue]);

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    try {
      const formData = {
        ...data,
        source: source,
      };
      const result = await submitRegisterForm(formData);

      if (result.success) {
        if (source === "facebook") {
          trackEvent("Lead", {
            content_name: "Student Registration",
            ...data,
          });
        }
        setResponseMessage(result.success);
        setIsModalOpen(true);
        // Reset form but keep courseId
        reset({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          courseId: course?.id,
          schedule: "weekday",
          newsletter: false,
          source: "direct",
        });
      } else {
        toast.error("Something went wrong!", {
          description: result.error || "Failed to register for the course.",
        });
      }
    } catch {
      toast.error("Something went wrong!", {
        description: "Failed to connect to the server.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setResponseMessage(undefined);
  };

  return (
    <>
      <Form {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="relative z-[2] max-w-[457px] before:absolute before:left-[66px] before:top-[-60px] before:z-[-1] before:hidden before:h-[387px] before:w-[467px] before:rounded-[15px] before:bg-[#072C5B] before:content-empty before:lg:block">
            <div className="h-full rounded-[15px] bg-white p-[29px]">
              <h6 className="mb-[27px] text-[16px] font-[700]">
                Register to learn more about the program pricing and curriculum
              </h6>
              <div className="grid grid-cols-2 gap-[20px]">
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
                        <FormMessage className="text-xs italic text-destructive">{errors.email?.message}</FormMessage>
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

                {/* Hidden courseId field */}
                <FormField
                  name="courseId"
                  control={control}
                  render={({ field }) => (
                    <FormItem className="hidden">
                      <FormControl>
                        <Input type="hidden" {...field} />
                      </FormControl>
                      {errors.courseId && <FormMessage>{errors.courseId?.message}</FormMessage>}
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="col-span-2">
                  <TsaButton
                    type="submit"
                    size="lg"
                    variant="primary"
                    className="w-full bg-mid-blue"
                    isDisabled={isSubmitting || !course?.id}
                  >
                    {isSubmitting ? <Loader className="animate-spin text-white" /> : "Get Program Package"}
                  </TsaButton>
                </div>
              </div>
            </div>
          </section>
        </form>
      </Form>

      {/* Response Modal */}
      <ResponseModal
        title="Course Registered Successfully"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        responseMessage={responseMessage || ""}
        isError={false}
      />
    </>
  );
};
