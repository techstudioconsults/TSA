"use client";

import { Loader } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { fetchCohortsByCourseId } from "~/action/cohort.action";
import { getLatestMarketingCycle, submitLeadForm } from "~/action/lead-form.action";
import type { LeadFormData } from "~/schemas/lead-form";
import useCohortStore from "~/stores/cohort.store";
import useCoursesStore from "~/stores/course.store";

const LeadForm = ({ slug }: { slug: string }) => {
  const router = useRouter();
  const searchParameters = useSearchParams();
  const { allCourses } = useCoursesStore();
  const { cohorts, loading: cohortsLoading, error: cohortsError } = useCohortStore();
  const [formData, setFormData] = useState<LeadFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    courseId: "",
    cohortId: "",
    joinNewsLetter: false,
    utm_source: "",
    utm_medium: "",
    utm_content: "",
    utm_term: "",
  });
  const [marketingCycleId, setMarketingCycleId] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Find the course using the slug
  const course = allCourses.find(
    (course) =>
      course.title
        .trim()
        .replaceAll(/[\s/]+/g, "-")
        .toLowerCase() === slug,
  );

  // Fetch cohorts when course is found
  useEffect(() => {
    if (course?.id) {
      fetchCohortsByCourseId(course.id);
    }
  }, [course?.id]);

  // Set course and cohort IDs when available
  useEffect(() => {
    if (course?.id && cohorts.length > 0) {
      setFormData((previous) => ({
        ...previous,
        courseId: course.id,
        cohortId: cohorts[0].id,
      }));
    }
  }, [course?.id, cohorts]);

  useEffect(() => {
    const fetchMarketingCycle = async () => {
      setIsLoading(true);
      try {
        const cycle = await getLatestMarketingCycle();
        // console.log(cycle);
        setMarketingCycleId(cycle.data.id);
      } catch {
        setMessage({ type: "error", text: "Failed to load form data" });
      } finally {
        setIsLoading(false);
      }
    };
    fetchMarketingCycle();
  }, []);

  // Populate UTM parameters from URL query
  useEffect(() => {
    const utmSource = searchParameters.get("utm_source") || "google";
    const utmMedium = searchParameters.get("utm_medium") || "cpc";
    const utmContent = searchParameters.get("utm_content") || "banner_ad";
    const utmTerm = searchParameters.get("utm_term") || "bootcamp";

    setFormData((previous) => ({
      ...previous,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_content: utmContent,
      utm_term: utmTerm,
    }));
  }, [searchParameters]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage(null);

    if (cohortsLoading || isLoading) {
      setMessage({ type: "error", text: "Please wait while we load the form" });
      return;
    }
    if (cohortsError) {
      setMessage({ type: "error", text: "Error loading course data" });
      return;
    }
    if (!formData.courseId || !formData.cohortId) {
      setMessage({ type: "error", text: "Course or cohort not available" });
      return;
    }
    if (!marketingCycleId) {
      setMessage({ type: "error", text: "Unable to submit form at this time" });
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitLeadForm(formData, marketingCycleId);
      if (result.error) {
        setMessage({ type: "error", text: result.error });
      } else if (result.success) {
        setMessage({ type: "success", text: result.success });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          courseId: course?.id || "",
          cohortId: cohorts[0]?.id || "",
          joinNewsLetter: false,
          utm_source: searchParameters.get("utm_source") || "google",
          utm_medium: searchParameters.get("utm_medium") || "cpc",
          utm_content: searchParameters.get("utm_content") || "banner_ad",
          utm_term: searchParameters.get("utm_term") || "bootcamp",
        });
        // Route to success page
        const message = result.success || "Registration successful.";
        router.push(`/courses/${slug}/success?msg=${encodeURIComponent(message)}`);
      }
    } catch {
      setMessage({ type: "error", text: "Failed to submit form" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  return (
    <section className="relative z-[2] max-w-[457px] before:absolute before:left-[66px] before:top-[-60px] before:z-[-1] before:hidden before:h-[387px] before:w-[467px] before:rounded-[15px] before:bg-[#072C5B] before:content-empty before:lg:block">
      <div className="h-full rounded-[15px] bg-white p-[29px]">
        <h6 className="mb-[27px] text-[16px] font-[700]">
          Register to learn more about the program pricing and curriculum
        </h6>
        {/* {(message || cohortsError) && (
          <div
            className={`mb-4 rounded p-3 ${
              message?.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {message?.text || cohortsError}
          </div>
        )} */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-[20px]">
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 text-black"
                placeholder="First Name"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 text-black"
                placeholder="Last Name"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="col-span-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 text-black"
                placeholder="Email Address"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="col-span-2">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 text-black"
                placeholder="Phone Number"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="col-span-2 flex items-center">
              <input
                type="checkbox"
                name="joinNewsLetter"
                checked={formData.joinNewsLetter}
                onChange={handleChange}
                className="mr-2"
                disabled={isSubmitting}
              />
              <label className="text-sm text-gray-600">Subscribe to newsletter</label>
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-mid-blue py-2 text-white hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? <Loader className="mr-2 h-5 w-5 animate-spin" /> : null}
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
