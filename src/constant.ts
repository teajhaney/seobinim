import { link } from "fs";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { FaLinkedin, FaFacebookF } from "react-icons/fa6";

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
