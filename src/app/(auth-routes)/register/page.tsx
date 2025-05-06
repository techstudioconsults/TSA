"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { fetchAllCourses } from "~/action/courses.action";
import { submitRegisterForm } from "~/action/register.action";
import { Course } from "~/action/services.type";
import ResponseModal from "~/components/modals/response-modal";
import { Form, FormControl, FormField, FormItem, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { useToast } from "~/components/ui/use-toast";
import TsaButton from "~/lib/storybook/atoms/tsa-button";
import { SignUpFormData, signUpFormSchema } from "~/schemas";
import useCoursesStore from "~/stores/course.store";

const RegistrationForm: FC = () => {
  const { allCourses, loading } = useCoursesStore();
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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

  const onSubmit = async (data: SignUpFormData) => {
    setIsSubmitting(true);

    const response = await submitRegisterForm(data, `courseID`);

    if (response.error) {
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: response.error,
      });
    } else {
      setIsModalOpen(true);
      reset();
    }

    setIsSubmitting(false);
  };

  useEffect(() => {
    if (fetchAllCourses) {
      fetchAllCourses();
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Form {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-[600px] space-y-6 p-6">
          <h2 className="text-xl font-bold">One last step, let’s get to know you</h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* First Name */}
            <FormField
              name="firstName"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="First Name" {...field} className="w-full rounded-md border px-4 py-2" />
                  </FormControl>
                  {errors.firstName && <FormMessage>{errors.firstName?.message}</FormMessage>}
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
                    <Input placeholder="Last Name" {...field} className="w-full rounded-md border px-4 py-2" />
                  </FormControl>
                  {errors.lastName && <FormMessage>{errors.lastName?.message}</FormMessage>}
                </FormItem>
              )}
            />

            {/* Schedule */}
            <FormField
              name="schedule"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
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
                  {errors.schedule && <FormMessage>{errors.schedule?.message}</FormMessage>}
                </FormItem>
              )}
            />

            {/* Course */}
            <FormField
              name="course"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {loading ? (
                          <Loader className="animate-spin" />
                        ) : (
                          allCourses?.map((course: Course) => (
                            <SelectItem key={course.id} value={course.title}>
                              {course.title}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  {errors.course && <FormMessage>{errors.course?.message}</FormMessage>}
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} className="w-full rounded-md border px-4 py-2" />
                  </FormControl>
                  {errors.phoneNumber && <FormMessage>{errors.phoneNumber?.message}</FormMessage>}
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              name="email"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      {...field}
                      className="w-full rounded-md border px-4 py-2"
                    />
                  </FormControl>
                  {errors.email && <FormMessage>{errors.email?.message}</FormMessage>}
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <TsaButton type="submit" variant="primary" isDisabled={isSubmitting} className="w-full bg-mid-blue">
            {isSubmitting ? <Loader className="animate-spin text-white" /> : "Register"}
          </TsaButton>
        </form>
      </Form>

      {isModalOpen && (
        <ResponseModal
          title={`Course Registered Successfully!`}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          responseMessage={""}
          isError={false}
        />
      )}
    </>
  );
};
export default RegistrationForm;
