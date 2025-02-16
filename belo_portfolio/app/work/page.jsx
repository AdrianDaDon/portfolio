"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Web development",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam similique, excepturi expedita laboriosam voluptate .",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
    name: "",
    image: "",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam similique, excepturi expedita laboriosam voluptate .",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
    name: "",
    image: "",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam similique, excepturi expedita laboriosam voluptate .",
    stack: [
      { name: "React Native" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    name: "",
    image: "",
    live: "",
    github: "",
  },
];

export default function Work() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setActiveProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:felx-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* OUTLINE NUMBER */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {activeProject.num}
              </div>

              {/* PROJECT CATEGORY */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {activeProject.category}
              </h2>

              {/* PROJECT DESCRIPTION */}
              <p className="text-white/60">{activeProject.description}</p>

              {/* STACK */}
              <ul className="flex gap-4">
                {activeProject.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== activeProject.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* BORDER */}
              <div className="border border-white/20" />

              {/* BUTTONS */}
              <div className="flex item-center gap-4">
                {/* LIVE BUTTON */}
                <Link href={activeProject.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* GITHUB BUTTON */}
                <Link href={activeProject.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* OVERLAY */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    {/* IMAGE */}
                    <div className="relative w-full h-full">
                      <Image
                        src={activeProject.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* SLIDER BUTTON */}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
