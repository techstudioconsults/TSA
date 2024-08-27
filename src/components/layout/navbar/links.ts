export const NAV_LINKS = [
  { route: "About Us", link: "/about" },
  { route: "Employers", link: "/employers" },
  { route: "FAQ", link: "/faq" },
  { route: "Contact Us", link: "/contact" },
  {
    route: "Courses",
    link: undefined,
    dropdownLinks: [
      {
        route: "course",
        link: "/",
      },
    ],
  },
];
