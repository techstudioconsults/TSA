"use client";

import { TsaFooter, TsaNavbar } from "@strategic-dot/components";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

import { EmailForm } from "~/app/(landing-routes)/(home)/_components/email-form";
import { STATIC_NAV_LINK } from "~/constants";
import { cn } from "~/lib/utils";
import useCoursesStore from "~/services/courses.service";

export const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [navLinks, setNavLinks] = useState(STATIC_NAV_LINK);
  const { allCourses, getAllCourses, loading } = useCoursesStore();

  // Fetch all courses
  useEffect(() => {
    getAllCourses();
  }, [getAllCourses]);

  // Update navLinks when courses data changes
  useEffect(() => {
    const coursesDropdown = allCourses.map((course) => {
      const courseSlug = course.title
        .toLowerCase()
        .trim()
        .replaceAll(/[\s/]+/g, "-");
      return {
        title: course.title,
        href: `/courses/${courseSlug}`,
        description: course.description,
      };
    });

    setNavLinks([
      { route: "About Us", link: "/about" },
      {
        route: "Courses",
        link: "",
        dropdown: loading
          ? [
              {
                title: `Loading course data...please wait`,
                href: "",
                description: "",
              },
            ]
          : coursesDropdown,
      },
      { route: "FAQ", link: "/faq" },
      { route: "Contact Us", link: "/contact" },
    ]);
  }, [allCourses, loading]);

  // Determine logoPath and text color based on current pathname
  const isDarkMode = pathname === "/about" || pathname === "/explore";
  const logoPath = isDarkMode
    ? "/images/logo-black.png"
    : "/images/logo-white.png";
  const linkClassName = cn(isDarkMode ? "text-black" : "text-white");
  const bgScrollColor = cn(isDarkMode ? "backdrop-blur-3xl" : "bg-primary");

  return (
    <main>
      <TsaNavbar
        className="fixed"
        linkClassName={cn("bg-transparent", linkClassName)}
        logoPath={logoPath}
        navLinks={navLinks}
        bgScrollColor={bgScrollColor}
      />
      {children}
      <TsaFooter
        navLinks={navLinks}
        subscribeComponent={<EmailForm buttonTitle={"Subscribe"} />}
        logoPath={""}
      />
    </main>
  );
};
