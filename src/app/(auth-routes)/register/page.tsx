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
import { Checkbox } from "~/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import TsaButton from "~/lib/storybook/atoms/tsa-button";
import useFacebookPixel from "~/lib/utils/pixel-tracker";
import { SignUpFormData, signUpFormSchema } from "~/schemas";
import useCoursesStore from "~/stores/course.store";

const RegistrationForm: FC = () => {
  const { allCourses, loading } = useCoursesStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [source, setSource] = useState("direct");
  const { trackEvent } = useFacebookPixel("962870014990453", undefined, {
    autoConfig: true,
    debug: true,
  });

  useEffect(() => {
    const savedSource = localStorage.getItem("traffic_source");
    if (savedSource) {
      setSource(savedSource);
    }
  }, []);

  const formMethods = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      courseId: "",
      schedule: "",
      newsletter: false,
      source: source,
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
    const response = await submitRegisterForm({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      courseId: data.courseId,
      schedule: data.schedule,
      newsletter: data.newsletter,
      source: source,
    });

    if (response.error) {
      toast.error("Something went wrong!", {
        description: response.error,
      });
    } else {
      if (source === "facebook") {
        trackEvent("Lead", {
          content_name: "Student Registration",
          email: data.email,
        });
      }
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
      <div className="rounded-md p-0 shadow-none lg:p-8 lg:shadow-lg">
        <Form {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-[600px] space-y-8 p-6">
            <div className="space-y-3">
              <h2 className="text-xl font-bold">One last step, let’s get to know you</h2>
              <p>Fill in your details to get started.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {/* First Name */}
              <FormField
                name="firstName"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
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
                    <FormLabel>Last Name</FormLabel>
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
                    <FormLabel>Time Schedule</FormLabel>
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
                name="courseId"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course</FormLabel>
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
                              <SelectItem key={course.id} value={course.id}>
                                {course.title}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    {errors.courseId && <FormMessage>{errors.courseId?.message}</FormMessage>}
                  </FormItem>
                )}
              />

              {/* Phone Number */}
              <FormField
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
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
                    <FormLabel>Email Address</FormLabel>
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

            {/* Newsletter Checkbox */}
            <FormField
              name="newsletter"
              control={control}
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        field.onChange(checked);
                      }}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Send me alerts and weekly newsletters</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <TsaButton type="submit" variant="primary" isDisabled={isSubmitting} className="w-full bg-mid-blue">
              {isSubmitting ? <Loader className="animate-spin text-white" /> : "Register"}
            </TsaButton>
          </form>
        </Form>
      </div>

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

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Checkbox,
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
//   Input,
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
//   TsaButton,
//   useToast,
// } from "@strategic-dot/components";
// import { Loader } from "lucide-react";
// import { FC, useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// import { fetchAllCourses } from "~/action/courses.action";
// import { submitRegisterForm } from "~/action/register.action";
// import { Course } from "~/action/services.type";
// import ResponseModal from "~/components/modals/response-modal";
// import { SignUpFormData, signUpFormSchema } from "~/schemas";
// import useCoursesStore from "~/stores/course.store";

// // Update this interface to include courseId
// interface ExtendedSignUpFormData extends SignUpFormData {
//   courseId: string;
// }

// const RegistrationForm: FC = () => {
//   const { allCourses, loading } = useCoursesStore();
//   const { toast } = useToast();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

//   const formMethods = useForm<ExtendedSignUpFormData>({
//     resolver: zodResolver(signUpFormSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phoneNumber: "",
//       course: "",
//       schedule: "",
//       newsletter: false,
//       courseId: "", // Add default value for courseId
//     },
//   });

//   const {
//     handleSubmit,
//     formState: { errors },
//     control,
//     reset,
//     setValue,
//     watch,
//   } = formMethods;

//   // Watch the course field to update courseId when course changes
//   const selectedCourse = watch("course");

//   // Update courseId when course selection changes
//   useEffect(() => {
//     if (selectedCourse && allCourses.length > 0) {
//       const courseObject = allCourses.find(
//         (course: Course) => course.title === selectedCourse,
//       );
//       if (courseObject?.id) {
//         setValue("courseId", courseObject.id);
//       }
//     }
//   }, [selectedCourse, allCourses, setValue]);

//   const onSubmit = async (data: ExtendedSignUpFormData) => {
//     setIsSubmitting(true);

//     if (!data.courseId) {
//       toast({
//         variant: "destructive",
//         title: "Error",
//         description:
//           "Could not find course ID. Please select a course and try again.",
//       });
//       setIsSubmitting(false);
//       return;
//     }

//     console.log("Form Data (with courseId):", data);

//     // Submit the form data which now includes courseId
//     const response = await submitRegisterForm(data);

//     if (response.error) {
//       toast({
//         variant: "destructive",
//         title: "Something went wrong!",
//         description: response.error,
//       });
//     } else {
//       setIsModalOpen(true);
//       reset();
//     }

//     setIsSubmitting(false);
//   };

//   useEffect(() => {
//     if (fetchAllCourses) {
//       fetchAllCourses();
//     }
//   }, []);

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <div className="rounded-md p-0 shadow-none lg:p-8 lg:shadow-lg">
//         <Form {...formMethods}>
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="mx-auto max-w-[600px] space-y-8 p-6"
//           >
//             <div className="space-y-3">
//               <h2 className="text-xl font-bold">
//                 One last step, let's get to know you
//               </h2>
//               <p>Fill in your details to get started.</p>
//             </div>

//             <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
//               {/* First Name */}
//               <FormField
//                 name="firstName"
//                 control={control}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>First Name</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="First Name"
//                         {...field}
//                         className="w-full rounded-md border px-4 py-2"
//                       />
//                     </FormControl>
//                     {errors.firstName && (
//                       <FormMessage>{errors.firstName?.message}</FormMessage>
//                     )}
//                   </FormItem>
//                 )}
//               />

//               {/* Last Name */}
//               <FormField
//                 name="lastName"
//                 control={control}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Last Name</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Last Name"
//                         {...field}
//                         className="w-full rounded-md border px-4 py-2"
//                       />
//                     </FormControl>
//                     {errors.lastName && (
//                       <FormMessage>{errors.lastName?.message}</FormMessage>
//                     )}
//                   </FormItem>
//                 )}
//               />

//               {/* Schedule */}
//               <FormField
//                 name="schedule"
//                 control={control}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Time Schedule</FormLabel>
//                     <FormControl>
//                       <Select onValueChange={field.onChange}>
//                         <SelectTrigger className="w-full">
//                           <SelectValue placeholder="Choose a schedule" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="weekday">Weekday Class</SelectItem>
//                           <SelectItem value="weekend">Weekend Class</SelectItem>
//                           <SelectItem value="online">Online Class</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </FormControl>
//                     {errors.schedule && (
//                       <FormMessage>{errors.schedule?.message}</FormMessage>
//                     )}
//                   </FormItem>
//                 )}
//               />

//               {/* Course */}
//               <FormField
//                 name="course"
//                 control={control}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Course</FormLabel>
//                     <FormControl>
//                       <Select onValueChange={field.onChange}>
//                         <SelectTrigger className="w-full">
//                           <SelectValue placeholder="Choose a course" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {loading ? (
//                             <Loader className="animate-spin" />
//                           ) : (
//                             allCourses?.map((course: Course) => (
//                               <SelectItem key={course.id} value={course.title}>
//                                 {course.title}
//                               </SelectItem>
//                             ))
//                           )}
//                         </SelectContent>
//                       </Select>
//                     </FormControl>
//                     {errors.course && (
//                       <FormMessage>{errors.course?.message}</FormMessage>
//                     )}
//                   </FormItem>
//                 )}
//               />

//               {/* Hidden courseId field */}
//               <input type="hidden" {...formMethods.register("courseId")} />

//               {/* Phone Number */}
//               <FormField
//                 name="phoneNumber"
//                 control={control}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Phone Number</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Phone Number"
//                         {...field}
//                         className="w-full rounded-md border px-4 py-2"
//                       />
//                     </FormControl>
//                     {errors.phoneNumber && (
//                       <FormMessage>{errors.phoneNumber?.message}</FormMessage>
//                     )}
//                   </FormItem>
//                 )}
//               />

//               {/* Email */}
//               <FormField
//                 name="email"
//                 control={control}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email Address</FormLabel>
//                     <FormControl>
//                       <Input
//                         type="email"
//                         placeholder="Email Address"
//                         {...field}
//                         className="w-full rounded-md border px-4 py-2"
//                       />
//                     </FormControl>
//                     {errors.email && (
//                       <FormMessage>{errors.email?.message}</FormMessage>
//                     )}
//                   </FormItem>
//                 )}
//               />
//             </div>

//             {/* Newsletter Checkbox */}
//             <FormField
//               name="newsletter"
//               control={control}
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-start space-x-3 space-y-0">
//                   <FormControl>
//                     <Checkbox
//                       checked={field.value}
//                       onCheckedChange={(checked) => {
//                         field.onChange(checked);
//                       }}
//                     />
//                   </FormControl>
//                   <div className="space-y-1 leading-none">
//                     <FormLabel>Send me alerts and weekly newsletters</FormLabel>
//                   </div>
//                 </FormItem>
//               )}
//             />

//             {/* Submit Button */}
//             <TsaButton
//               type="submit"
//               variant="primary"
//               isDisabled={isSubmitting}
//               className="w-full bg-mid-blue"
//             >
//               {isSubmitting ? (
//                 <Loader className="animate-spin text-white" />
//               ) : (
//                 "Register"
//               )}
//             </TsaButton>
//           </form>
//         </Form>
//       </div>

//       {isModalOpen && (
//         <ResponseModal
//           title={`Course Registered Successfully!`}
//           isOpen={isModalOpen}
//           onClose={handleCloseModal}
//           responseMessage={""}
//           isError={false}
//         />
//       )}
//     </>
//   );
// };
// export default RegistrationForm;
