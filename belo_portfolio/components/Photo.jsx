"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 2,
            ease: "easeIn",
          },
        }}
      >
        <motion.div
          className="w-[298px] h-[298px] xl:h-[498px] xl:w-[498px] mix-blend-lighten absolute"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src="/assets/codeLogo.png"
            priority
            quality={100}
            fill
            className="object-cover imgEdit"
            alt="An Image of myself"
          />
        </motion.div>
      </motion.div>

      {/* Rotating Circle */}

      <motion.svg
        className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506]"
        fill="transparent"
        viewBox={"0 0 506 506"}
        xmlns={"https://www.w3.org/2000/svg"}
      >
        <motion.circle
          cx={"253"}
          cy={"253"}
          r={"250"}
          stroke={"rgb(111,162,255)"}
          strokeWidth={"7"}
          strokeLinejoin={"round"}
          strokeLinecap={"round"}
          initial={{strokeDasharray: "24 10 0 0"}}
          animate={{strokeDasharray: ["15 120 25 25", "16 25 97 64", "3 250 22 22"],
            rotate: [120, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.svg>
    </div>
  );
}
