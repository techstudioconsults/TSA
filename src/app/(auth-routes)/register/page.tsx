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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  TsaButton,
} from "@strategic-dot/components";
import { Loader } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import ResponseModal from "~/components/response-modal";
import { SignUpFormData, signUpFormSchema } from "~/schemas";
import useCoursesStore from "~/services/courses.service";
import {
  useRegisterStore,
  useSubmitRegisterForm,
} from "~/services/register.service";

const RegistrationForm: FC = () => {
  const { allCourses, getAllCourses } = useCoursesStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isSubmitting, responseMessage } = useRegisterStore();
  const onSubmit = useSubmitRegisterForm("courseId");

  const formMethods = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      course: "",
      schedule: "",
      newsletter: false,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = formMethods;

  useEffect(() => {
    getAllCourses();
    if (responseMessage) {
      setIsModalOpen(true);
      if (!responseMessage.includes("Failed")) {
        reset();
      }
    }
  }, [responseMessage, reset, getAllCourses]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Form {...formMethods}>
        <div className="mx-auto max-w-[600px] rounded-lg border-t-8 border-mid-blue bg-white p-6 shadow-lg lg:p-12">
          <h2 className="text-dark-blue mb-1 text-xl font-bold lg:text-2xl">
            One last step, let’s get to know you
          </h2>
          <p className="mb-8 text-base text-gray-500">
            Create an account with Us
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
              {/* First Name */}
              <FormField
                name="firstName"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        className="text-dark w-full rounded-md border px-4 py-2"
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
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        className="text-dark w-full rounded-md border px-4 py-2"
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

              {/* Schedule */}
              <FormField
                name="schedule"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="schedule">Time Schedule</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange} // Handle value change
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choose a schedule" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekday">Weekday Class</SelectItem>
                          <SelectItem value="weekend">Weekend Class</SelectItem>
                          <SelectItem value="online">Online Class</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    {errors.schedule && (
                      <FormMessage className="text-xs italic text-destructive">
                        {errors.schedule?.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />

              {/* Course */}
              <FormField
                name="course"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange} // Handle value change
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choose a course" />
                        </SelectTrigger>
                        <SelectContent>
                          {allCourses?.map((course) => {
                            return (
                              <SelectItem key={course.id} value={course.title}>
                                {course.title}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    {errors.course && (
                      <FormMessage className="text-xs italic text-destructive">
                        {errors.course?.message}
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
                  <FormItem className="mb-6">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Phone Number"
                        className="text-dark w-full rounded-md border px-4 py-2"
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

              {/* Email */}
              <FormField
                name="email"
                control={control}
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email Address"
                        type="email"
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

              {/* Newsletter Checkbox */}
              {/* <FormField
                name="newsletter"
                control={control}
                render={({ field }) => (
                  <FormItem className="col-span-2 flex items-center space-x-2">
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="newsletter" {...field} />
                        <FormLabel
                          htmlFor="newsletter"
                          className="text-sm font-medium leading-none"
                        >
                          Send me alerts and Weekly Newsletters
                        </FormLabel>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              /> */}
            </div>

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
                  "Register"
                )}
              </TsaButton>
            </div>
          </form>
        </div>
      </Form>

      {isModalOpen && (
        <ResponseModal
          title={`Course Registered Successfully!`}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          responseMessage={responseMessage || ""}
          isError={!responseMessage || responseMessage.includes("Failed")}
        />
      )}
    </>
  );
};

export default RegistrationForm;
