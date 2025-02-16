import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export const about = {
  title: "About Me",
  description:
    "God gave me the breathe, hunger woke me up. Lets go get this bread",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Belo",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+27 65 149 7543)",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Congolese",
    },
    {
      fieldName: "Email",
      fieldValue: "beadrie022@student.wethinkcode.co.za",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Spoken Languages",
      fieldValue: "English, French",
    },
  ],
};

export const experience = {
  icon: "/assest/resume/badge.svg",
  title: "My Experience",
  description: "Not by might, not by power but by the spirit of the living God",
  items: [
    {
      company: "University of Johannesburg",
      position: "Development Software Tutor",
      duration: "June 2024 - November 2024",
    },

    {
      company: "University of Johannesburg",
      position: "Development Software Tutor",
      duration: "June 2024 - November 2024",
    },

    {
      company: "E-commerce Startup",
      position: "Freelance Full-Stack Web Developer",
      duration: "November 2024 - present",
    },
  ],
};

export const education = {
  icon: "/assest/resume/cap.svg",
  title: "My Education",
  description:
    "Blessed are those who hunger and thirst for righteousness, for they shall be filled",
  items: [
    {
      institution: "University of Johannesburg",
      degree: "Adv.Dip Business Information Tech",
      duration: "2022 - present",
    },
    {
      institution: "HTB Academy(Online)",
      degree: "Cyber Security",
      duration: "2024 - present",
    },
    {
      institution: "WeThinkCode_",
      degree: "Software Engineering",
      duration: "2022 - 2024",
    },
  ],
};

export const skills = {
  title: "My Skills",
  description: "I can do all things through Christ who strengthens me",
  shillList: [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "ReactJs and React Native",
      icon: <FaReact />,
    },
    {
      name: "next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "tailwind.css",
      icon: <SiTailwindcss />,
    },

    {
      name: "node.js",
      icon: <FaNodeJs />,
    },

    {
      name: "python",
      icon: <FaPython />,
    },
  ],
};
