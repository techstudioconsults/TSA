import { NavLink, slideContentProperties } from "~/types/index.types";

export const SLIDE_CONTENT: slideContentProperties[] = [
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

export const COMPANIES = [
  "/companies/btc.png",
  "/companies/access-bank.png",
  "/companies/interswitch.png",
  "/companies/loyalty-solution.png",
  "/companies/pwc.png",
  "/companies/stutern.png",
  "/companies/uba.png",
];

export const TESTIMONIALS = [
  {
    message: `I came into techStudio Academy with practically no prior knowledge in software development. However, within a few weeks, I was able to grasp the crux of software development and also master the soft skills required for being a software developer. So far so good, the skills acquired have given me a mind-blowing push in my career as a software developer.`,
    image: `/images/joseph.jpg`,
    name: `JOSEPH DARAMOLA`,
    job: `Frontend Developer`,
  },
  {
    message: `TechStudio Academy has been one of the big push I needed to get in the real world space. I had an immense learning that was really different from the self learning I started with. The learning was fun and there were some internship job opportunities that were presented to us. I got my first gig immediately after the program. Thank you TechStudio for that push I needed.`,
    image: `/images/peter.jpg`,
    name: `PETER EDEAWE`,
    job: `Software Developer`,
  },
  {
    message: `I bless the day the Instagram algorithm pop up TechStudio Academy to my news feed. I read through their curriculum and other details about the Bootcamp and I told myself this is the opportunity I've been waiting for. I wasn't disappointed, the environment was well ventilated and conducive, with competent instructors. Here I am today at OT&T Consulting, fulfilling my dreams thanks to TechStudio Academy.`,
    image: `/images/rilwan.jpg`,
    name: `RILWAN AJIBOLA`,
    job: `Software Developer`,
  },
];
