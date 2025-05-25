import { FaQuidditch } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { FaLinkedin, FaFacebookF } from "react-icons/fa6";
import { IoCodeSlashOutline } from "react-icons/io5";
import { BiGitCompare } from "react-icons/bi";

export const navigationItems = [
  { item: "Home", link: "home" },
  { item: "Services", link: "services" },
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


export const projects = [
  {
    name: "Anon Truth",
    description: "AnonTruth is an anonymous group chat app where messages are sent without revealing the sender’s identity. Over 500 users are already sharing unfiltered thoughts freely. 🚀",
    language: "ReactJS + TailwindCSS + NODE + MONGODB + EXPRESSJS",
    link: "https://anon-truth-owpm.vercel.app/",
  },
  {
    name: "CARE CONNECT",
    description: "CareConnect is a web-based creche management system that connects parents, staff, and admins. It offers real-time updates on children’s activities, attendance, and events, while enabling secure fee payments and streamlined operations.",
    language: "ReactJS + TailwindCSS + Firebase + ReCharts",
    link: "https://care-connect-wine.vercel.app/",
  },
  {
    name: "NZ Dine",
    description: "Welcome to NZdine, a modern, responsive restaurant website. Explore the menu, make reservations, and contact the restaurant easily with a sleek, user-friendly interface.",
    language: "ReactJS + TailwindCSS + Firebase",
    link: "https://nz-dine.vercel.app/",
  },
  {
    name: "BILLIE-TALK",
    description: "BILLIE-TALK is a non-anonymous chat app where users can message anyone with an account. New users are automatically added to the chat list of all existing users, making it easy to connect instantly.",
    language: "ReactJS + TailwindCSS + Firebase",
    link: "https://chat-app-mu-ebon.vercel.app/",
  },
  {
    name: "NZ BOT",
    description: "NZ Bot is an AI-powered tool built for teens to easily ask questions and get helpful answers. Powered by the Gemini API, it’s designed with a simple, accessible interface—no complicated pages, just direct and easy conversations.",
    language: "ReactJS + TailwindCSS + GEMINI API",
    link: "https://nami-bot-beta.vercel.app/",
  },
  {
    name: "REDEFINE GAMING",
    description: "REDEFINE GAMING is a gaming website showcasing details about a company's newly launched game. The project’s primary goal was to practice and implement smooth GSAP animations for an engaging user experience.",
    language: "ReactJS + TailwindCSS + GSAP ANIMATION",
    link: "https://gamify-gules.vercel.app/",
  },
];
  