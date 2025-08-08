"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    text: "+27 65 149 7543",
    title: "Phone",
  },
  {
    icon: <FaEnvelope />,
    text: "youngkibwe@gmail.com",
    title: "Email",
  },
  {
    icon: <FaMapMarkerAlt />,
    text: "Johannesburg, South Africa",
    title: "Address",
  },
];

export default function Contact() {
  return (
    <motion.section
      initial={0}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* FORM */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              action=""
              className="flex flex-col  gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent ">Let's collaborate</h3>
              <p className="text-white/60">
                I’m always excited to work with people who share a passion for
                bringing ideas to life. Whether you need a sleek, responsive
                website, a user-friendly mobile app, or a complete digital
                experience from concept to launch, I bring creativity, technical
                expertise, and a problem-solving mindset to every project. Let’s
                combine your vision with my skills to create something impactful
                and memorable.
              </p>

              {/* INPUT FIELDS  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone" />
              </div>

              {/* SELECT */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Mobile Development</SelectItem>
                    <SelectItem value="mst">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* TEXTAREA */}
              <Textarea
                placeholder="Type your message here"
                className="h-[200px]"
              />

              {/* SEND BUTTON */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>

          {/* INFO */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div>{item.icon}</div>
                  </div>

                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.text}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
