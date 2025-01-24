"use client";

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

const about = {
    title: 'About me',
    description: 'God gave me the breathe, hunger woke me up. Lets go get this bread',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Belo'
        },
        {
            fieldName: 'Phone',
            fieldValue: '(+27 65 149 7543)'
        },
        {
            fieldName: 'Experience',
            fieldValue: '5+ Years'
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'Congolese'
        },
        {
            fieldName: 'Email',
            fieldValue: 'beadrie022@student.wethinkcode.co.za'
        },
        {
            fieldName: 'Freelance',
            fieldValue: 'Available'
        },        {
            fieldName: 'Spoken Languages',
            fieldValue: 'English, French'
        },
    ]
}

const experience = {
    icon: "",
    title: "My experience",
    description: "Not by might, not by power but by the spirit of the living God",
    items: [
        {
            company: 'University of Johannesburg',
            position: 'Development Software Tutor',
            duration: "June 2024 - November 2024",
        },

        {
            company: 'University of Johannesburg',
            position: 'Development Software Tutor',
            duration: "June 2024 - November 2024",
        },

        {
            company: 'E-commerce Startup',
            position: 'Freelance Full-Stack Web Developer',
            duration: "November 2024 - present",
        }
    ]
}

export default function Resume() {
  return <div>Resume screen</div>;
}
