"use client";

import { TsaButton, TsaFooter, TsaNavbar } from "@strategic-dot/components";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

import { fetchAllCourses } from "~/action/courses.action";
import { EmailForm } from "~/app/(landing-routes)/(home)/_components/email-form/email-form";
import { STATIC_NAV_LINK } from "~/constants";
import { cn } from "~/lib/utils";
import useCoursesStore from "~/stores/course.store";

export const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [navLinks, setNavLinks] = useState(STATIC_NAV_LINK);
  const { allCourses, loading } = useCoursesStore();

  useEffect(() => {
    fetchAllCourses();
  }, []);

  useEffect(() => {
    const coursesDropdown = allCourses.map((course) => {
      const courseSlug = course.title
        .toLowerCase()
        .trim()
        .replaceAll(/[\s/]+/g, "-");
      return {
        title: course.title,
        href: `/courses/${courseSlug}`,
        description: course.about,
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
      >
        <TsaButton
          href="/register"
          className="bg-mid-blue"
          size="lg"
          variant="primary"
        >
          Register
        </TsaButton>
      </TsaNavbar>
      {children}
      <TsaFooter
        navLinks={navLinks}
        subscribeComponent={<EmailForm buttonTitle={"Subscribe"} />}
        logoPath={""}
      />
    </main>
  );
};
