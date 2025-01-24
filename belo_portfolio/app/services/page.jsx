"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Mobile Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nisi, eum, mollitia non error numquam sunt itaque magnam rerum quasi reprehenderit aspernatur quos nihil repellat aperiam. Consectetur reprehenderit tempora eos!",
    href: "",
  },
  {
    num: "02",
    title: "Web Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nisi, eum, mollitia non error numquam sunt itaque magnam rerum quasi reprehenderit aspernatur quos nihil repellat aperiam. Consectetur reprehenderit tempora eos!",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nisi, eum, mollitia non error numquam sunt itaque magnam rerum quasi reprehenderit aspernatur quos nihil repellat aperiam. Consectetur reprehenderit tempora eos!",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}

          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline group-hover:text-outline-hover text-transparent transition-all duration-500">{item.num}</div>

                  <Link href={item.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{item.title}</h2>
                <p className="text-white/60">{item.description}</p>
                <div className="border-b border-white"></div>
          
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
