import { FaQuidditch } from 'react-icons/fa';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { FaLinkedin, FaFacebookF } from 'react-icons/fa6';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { BiGitCompare } from 'react-icons/bi';

export const navigationItems = [
  { item: 'Home', link: 'home' },
  { item: 'Services', link: 'services' },
  { item: 'Projects', link: 'projects' },
  { item: 'Tools', link: 'tools' },
  { item: 'Contacts', link: 'contacts' },
];
export const words = ['Creative', 'Passionate', 'Innovative', 'Adaptable', 'Focused'];

export const links = [
  {
    icon: FaGithub,
    link: 'https://www.github.com/teajhaney',
  },
  {
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/yusuf-tijani-605b04167/',
  },
  {
    icon: FaTwitter,
    link: 'https://www.x.com/seobinim',
  },
  {
    icon: FaInstagram,
    link: 'https://www.instagram.com/seobissi',
  },
  {
    icon: FaFacebookF,
    link: 'https://www.facebook.com/teajhaney',
  },
];

export const services = [
  {
    id: 1,
    title: 'FRONTEND DEVELOPMENT',
    description:
      'Building responsive, scalable, and performant web applications using modern frameworks like React, Next.js, and TypeScript.',
    icon: IoCodeSlashOutline,
  },
  {
    id: 2,
    title: 'UI IMPLEMENTATION',
    description:
      'Translating design files into pixel-perfect, interactive user interfaces that follow the latest UI/UX standards and practices.',
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
    title: 'BROWSER COMPATIBILITY',
    description:
      'Ensuring consistent experiences across all major browsers and devices through thorough testing and standards-compliant code.',
    icon: BiGitCompare,
  },
];

export const projects = [
  {
    name: 'SIMVOICE',
    description:
      'SIMVOICE is a simple and efficient invoice web app that allows users to create, save, and download invoices as PDF files for streamlined billing.',
    language: 'NextJs + TailwindCSS + Firebase',
    link: 'https://simvoice.vercel.app/',
    image: 'images/simvoice.png',
  },
  {
    name: 'SIMPLY FRESH ',
    description:
      'A fully responsive e-commerce website for a local supermarket. Users can explore products, browse categories, and shop with a clean and intuitive UI.',
    language: 'ReactJS + TailwindCSS + Vite',
    link: 'https://simple-fresh-supermarket.vercel.app/',
    image: 'images/simplyfresh.png',
  },
  {
    name: 'BOOK SMART',
    description:
      'Book Smart is an online platform for browsing and buying books efficiently. It provides a seamless shopping experience with secure payment integration.',
    language: 'ReactJS + TailwindCSS + Paystack Sdk',
    link: 'https://book-smart-app-theta.vercel.app/',
    image: 'images/booksmart.png',
  },
];

import { TiHtml5 } from 'react-icons/ti';
import { IoLogoCss3 } from 'react-icons/io5';
import { FaBootstrap, FaGitAlt, FaReact, FaFigma } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandJavascript } from 'react-icons/tb';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiNextdotjs } from 'react-icons/si';
import { SiGreensock } from 'react-icons/si';
import { MdMotionPhotosOn } from 'react-icons/md';
export const tools = [
  {
    id: 0,
    title: 'Html',
    icon: TiHtml5,
  },
  {
    id: 1,
    title: 'Css',
    icon: IoLogoCss3,
  },
  {
    id: 2,
    title: 'Bootstrap',
    icon: FaBootstrap,
  },
  {
    id: 3,
    title: 'TailwindCSS',
    icon: RiTailwindCssFill,
  },

  {
    id: 4,
    title: 'JavaScript',
    icon: TbBrandJavascript,
  },
  {
    id: 5,
    title: 'TypeScript',
    icon: BiLogoTypescript,
  },
  {
    id: 6,
    title: 'ReactJs',
    icon: FaReact,
  },
  {
    id: 7,
    title: 'NextJs',
    icon: SiNextdotjs,
  },
  {
    id: 8,
    title: 'GSAP',
    icon: SiGreensock,
  },
  {
    id: 9,
    title: 'Motion',
    icon: MdMotionPhotosOn,
  },
  {
    id: 10,
    title: 'Git',
    icon: FaGitAlt,
  },
  {
    id: 11,
    title: 'Github',
    icon: FaGithub,
  },
  {
    id: 12,
    title: 'Figma',
    icon: FaFigma,
  },
];
