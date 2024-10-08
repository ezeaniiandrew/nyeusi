import { MdArrowOutward } from "react-icons/md";
import desktopPastProject1 from "@/assets/desktop-home-project-image-1.jpg";
import desktopPastProject2 from "@/assets/desktop-home-project-image-2.jpg";
import desktopPastProject3 from "@/assets/desktop-home-project-image-3.jpg";
import desktopPastProject4 from "@/assets/desktop-home-project-image-4.jpg";
import mobilePastProject1 from "@/assets/mobile-home-project-image-1.jpg";
import mobilePastProject2 from "@/assets/mobile-home-project-image-2.jpg";
import mobilePastProject3 from "@/assets/mobile-home-project-image-3.jpg";
import mobilePastProject4 from "@/assets/mobile-home-project-image-4.jpg";

export const navLinks = [
  { path: "/", name: "home" },
  { path: "/projects", name: "projects" },
  { path: "about", name: "about us" },
  { path: "/contact", name: "contact us", icon: MdArrowOutward },
];

export const pastProjectsData = [
  {
    text: "Contemporary interior box",
    to: "/projects",
    images: [mobilePastProject1, desktopPastProject1],
  },
  {
    text: "Snohetta",
    to: "/projects",
    images: [mobilePastProject2, desktopPastProject2],
  },
  {
    text: "The Gordon",
    to: "/projects",
    images: [mobilePastProject3, desktopPastProject3],
  },
  {
    text: "Adorable homes",
    to: "/projects",
    images: [mobilePastProject4, desktopPastProject4],
  },
];
