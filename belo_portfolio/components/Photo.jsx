"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function Photo() {
    return(
        <div className="w-full h-full relative">
            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: 2.4,
                        delay: 0.4,
                        ease: 'easeInOut'
                    }
                }}

            >
                <div
                    className="w-[298px] h-[298px] xl:h-[498px] xl:w-[498px] mix-blend-lighten"
                >
                    <Image
                        src="/assets/IMG_0005.JPG"
                        priority
                        quality={100}
                        fill
                        className="object-contain"
                        // alt="graduation picture of Adrian"
                    />
                </div>
            </motion.div>
        </div>
    )
}
