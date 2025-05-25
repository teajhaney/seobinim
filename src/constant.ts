import { FaQuidditch } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { FaLinkedin, FaFacebookF } from "react-icons/fa6";
import { IoCodeSlashOutline } from "react-icons/io5";
import { BiGitCompare } from "react-icons/bi";

export const navigationItems = [
  { item: "Home", link: "home" },
  { item: "Service", link: "service" },
  { item: "Projects", link: "projects" },
  { item: "Contact", link: "contact" },
];

export const links = [
  {
    icon: FaGithub,
    link: "https://www.github.com/teajhaney",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/yusuf-tijani-605b04167/",
  },
  {
    icon: FaTwitter,
    link: "https://www.x.com/seobinim",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/teajhaney",
  },
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/teajhaney",
  },
];

export const services = [
  {
    id: 1,
    title: "FRONTEND DEVELOPMENT",
    description:
      "Building responsive, scalable, and performant web applications using modern frameworks like React, Next.js, and TypeScript.",
    icon: IoCodeSlashOutline,
  },
  {
    id: 2,
    title: "UI IMPLEMENTATION",
    description:
      "Translating design files into pixel-perfect, interactive user interfaces that follow the latest UI/UX standards and practices.",
    icon: FaQuidditch,
  },
  //   {
  //     id: 3,
  //     title: "PERFORMANCE & SEO OPTIMIZATION",
  //     description:
  //       "Enhancing website performance, accessibility, and SEO using tools like Lighthouse, semantic HTML, and best practices.",
  //     icon: BsGraphUpArrow,
  //   },
  {
    id: 4,
    title: "BROWSER COMPATIBILITY",
    description:
      "Ensuring consistent experiences across all major browsers and devices through thorough testing and standards-compliant code.",
    icon: BiGitCompare,
  },
];
