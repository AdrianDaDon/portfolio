"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import jsPDF from "jspdf";

export default function Home() {

  const [saving, setSaving] = useState(false);

  const handleDownload = () => {
    setSaving(true);
    const doc = new jsPDF("potrait", "px", "a4", false);
    
    doc.addImage("assets/resume/Adrien_CV_latest.png", "PNG", 0, 0, 417, 653);
    
    doc.save("belo_cv.pdf");
    setSaving(false);

  }

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row  items-center justify-between xl:pt-8 xl:pb-24">
          {/* TEXT */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h2 mb-6">
              Hi, I'm <br />{" "}
              <span className="text-accent">Belo Adrien</span>
            </h1>
            <p className="max-w-[450px] mb-9 text-white/80">
             I am an aspiring software developer with a strong foundation in system software and development software,
             seeking to leverage tutoring experience and technical skills in a dynamic growth-oriented environment.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* DOWNLOAD BTN */}
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              {/* SOCIALS */}
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerSyles={"flex gap-4"}
                  iconStyles={
                    "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent  text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>

          {/* PHOTO */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
