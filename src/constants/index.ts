import { NavLink, slideContentProperties } from "~/types/index.types";

export const slideContent: slideContentProperties[] = [
  {
    name: "Fullstack development",
    image: "/images/logo-black.png",
    link: "https://example.com/page1",
  },
  {
    name: "Item 2",
    image: "/images/logo-black.png",
    link: "https://example.com/page2",
  },
  {
    name: "Item 3",
    image: "/images/logo-black.png",
    link: "https://example.com/page3",
  },
  {
    name: "Item 4",
    image: "/images/logo-black.png",
    link: "https://example.com/page4",
  },
  {
    name: "Item 5",
    image: "/images/logo-black.png",
    link: "https://example.com/page5",
  },
  {
    name: "Item 6",
    image: "/images/logo-black.png",
    link: "https://example.com/page5",
  },
  {
    name: "Item 7",
    image: "/images/logo-black.png",
    link: "https://example.com/page5",
  },
  {
    name: "Item 8",
    image: "/images/logo-black.png",
    link: "https://example.com/page5",
  },
];

// Use the types to define the NAV_LINKS array
export const NAV_LINKS: NavLink[] = [
  { route: "About Us", link: "/about" },
  {
    route: "Courses",
    link: "",
    dropdown: [
      {
        title: "Alert Dialog",
        href: "/",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "Hover Card",
        href: "/",
        description:
          "For sighted users to preview content available behind a link.",
      },
      {
        title: "Progress",
        href: "/",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
      {
        title: "Scroll-area",
        href: "/",
        description: "Visually or semantically separates content.",
      },
      {
        title: "Tabs",
        href: "/",
        description:
          "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      },
      {
        title: "Tooltip",
        href: "/",
        description:
          "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
      },
    ],
  },
  { route: "Employers", link: "/employers" },
  { route: "FAQ", link: "/faq" },
  { route: "Contact Us", link: "/contact" },
];
