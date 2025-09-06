"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { fetchAllCourses } from "~/action/courses.action";
import { submitRegisterForm } from "~/action/register.action";
import { Form, FormControl, FormField, FormItem, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import TsaButton from "~/lib/storybook/atoms/tsa-button";
import { RegisterFormData, registerFormSchema } from "~/schemas";
import useCoursesStore from "~/stores/course.store";

interface RegisterProperties {
  slug: string;
}

export const RegisterForm: FC<RegisterProperties> = ({ slug }) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [source, setSource] = useState("direct");
  const { allCourses } = useCoursesStore();
  const searchParameters = useSearchParams();
  const formReference = useRef<HTMLFormElement>(null);

  // Memoize the course finding logic to avoid unnecessary recalculations
  const course = useMemo(() => {
    if (allCourses.length === 0 || !slug) return null;

    return allCourses.find((course) => {
      const courseSlug = course.title
        .trim()
        .replaceAll(/[\s/]+/g, "-")
        .toLowerCase();
      return courseSlug === slug.toLowerCase();
    });
  }, [allCourses, slug]);

  // Fetch courses on mount
  useEffect(() => {
    fetchAllCourses();
  }, []);

  // Handle UTM source tracking - listen to URL changes and localStorage
  useEffect(() => {
    const utmSource = searchParameters.get("utm_source");

    if (utmSource) {
      // If UTM source is in URL, use it and store in localStorage
      setSource(utmSource);
      localStorage.setItem("utm_source", utmSource);
    } else {
      // If no UTM source in URL, set to "direct"
      // This ensures we always have the correct source, even if there was a previous UTM source
      setSource("direct");
      localStorage.setItem("utm_source", "direct");
    }
  }, [searchParameters]);

  // Load Mautic SDK
  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (!w.MauticSDKLoaded) {
        w.MauticSDKLoaded = true;
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://email.techstudioacademy.com/media/js/mautic-form.js?va272b598";
        script.addEventListener("load", () => {
          if (w.MauticSDK) w.MauticSDK.onLoad();
        });
        head?.append(script);
        w.MauticDomain = "https://email.techstudioacademy.com";
        w.MauticLang = {
          submittingMessage: "Please wait...",
        };
      } else if (w.MauticSDK) {
        w.MauticSDK.onLoad();
      }
    }
  }, []);

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
      source: "direct",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = formMethods;

  // Set courseId when course is found
  useEffect(() => {
    if (course?.id) {
      setValue("courseId", course.id);
    }
  }, [course?.id, setValue]);

  // Set source when it's available
  useEffect(() => {
    if (source) {
      setValue("source", source);
    }
  }, [source, setValue]);

  const onSubmit = useCallback(
    async (data: RegisterFormData) => {
      if (!course?.id) {
        toast.error("Course not found", {
          description: "Please refresh the page and try again.",
        });
        return;
      }

      setIsSubmitting(true);
      try {
        const formData = {
          ...data,
          source: source,
        };

        const result = await submitRegisterForm(formData);

        if (result.success) {
          // Submit to Mautic after backend success
          formReference.current?.submit();
        } else {
          toast.error("Registration failed", {
            description: result.error || "Failed to register for the course.",
          });
          setIsSubmitting(false);
        }
      } catch {
        toast.error("Connection error", {
          description: "Failed to connect to the server. Please check your internet connection and try again.",
        });
        setIsSubmitting(false);
      }
    },
    [course?.id, source],
  );

  return (
    <Form {...formMethods}>
      <form
        ref={formReference}
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="false"
        role="form"
        method="post"
        action="https://email.techstudioacademy.com/form/submit?formId=1"
        id="mauticform_tsaleadcaptureform"
        data-mautic-form="tsaleadcaptureform"
        encType="multipart/form-data"
      >
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
                        name="mauticform[first_name]"
                        placeholder="First Name"
                        className="w-full rounded-md border px-4 py-2 text-black"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                    </FormControl>
                    {errors.firstName && (
                      <FormMessage className="text-xs italic text-destructive">{errors.firstName?.message}</FormMessage>
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
                        name="mauticform[last_name]"
                        placeholder="Last Name"
                        className="w-full rounded-md border px-4 py-2 text-black"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                    </FormControl>
                    {errors.lastName && (
                      <FormMessage className="text-xs italic text-destructive">{errors.lastName?.message}</FormMessage>
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
                        name="mauticform[email]"
                        type="email"
                        placeholder="Email Address"
                        className="w-full rounded-md border px-4 py-2 text-black"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
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
                        name="mauticform[phone_number]"
                        placeholder="Phone Number"
                        className="w-full rounded-md border px-4 py-2 text-black"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
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

              {/* Hidden fields */}
              <input name="mauticform[utm_source]" value={source} type="hidden" />
              <input name="mauticform[utm_medium]" value="" type="hidden" />
              <input name="mauticform[utm_campaign]" value="" type="hidden" />
              <input name="mauticform[utm_term]" value="" type="hidden" />
              <input name="mauticform[utm_content]" value="" type="hidden" />
              <input name="mauticform[course_id]" value={course?.id || ""} type="hidden" />
              <input name="mauticform[return]" value={`/courses/${slug}/success`} type="hidden" />

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
        <input type="hidden" name="mauticform[formId]" id="mauticform_tsaleadcaptureform_id" value="1" />
        <input type="hidden" name="mauticform[return]" id="mauticform_tsaleadcaptureform_return" value="" />
        <input
          type="hidden"
          name="mauticform[formName]"
          id="mauticform_tsaleadcaptureform_name"
          value="tsaleadcaptureform"
        />
      </form>
    </Form>
  );
};
