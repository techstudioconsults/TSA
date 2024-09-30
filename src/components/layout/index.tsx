"use client";

import { TsaFooter, TsaNavbar } from "@strategic-dot/components";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

import { cn } from "~/lib/utils";
import useCoursesStore from "~/services/courses.service";
import { NavLink } from "~/types/index.types";

export const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const defaultNavLinks: NavLink[] = [
    { route: "About Us", link: "/about" },
    {
      route: "Courses",
      link: "",
      dropdown: [],
    },
    { route: "FAQ", link: "/faq" },
    { route: "Contact Us", link: "/contact" },
  ];
  const [navLinks, setNavLinks] = useState<NavLink[]>(defaultNavLinks);

  const { allCourses, getAllCourses, loading } = useCoursesStore();

  useEffect(() => {
    getAllCourses();
  }, [getAllCourses]);

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

  return (
    <main>
      <TsaNavbar
        className="fixed"
        linkClassName={cn(
          "bg-transparent",
          pathname === "/about" || pathname === "/explore"
            ? "text-black"
            : "text-white",
        )}
        logoPath={
          pathname === "/about" || pathname === "/explore"
            ? "/images/logo-black.png"
            : "/images/logo-white.png"
        }
        navLinks={navLinks}
        bgScrollColor={cn(
          pathname === "/about" || pathname === "/explore"
            ? "backdrop-blur-3xl"
            : "bg-primary",
        )}
      />
      {children}
      <TsaFooter />
    </main>
  );
};
