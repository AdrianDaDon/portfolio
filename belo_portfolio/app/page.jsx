import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row  items-center justify-between xl:pt-8 xl:pb-24">
          {/* TEXT */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hi, I'm <br />{" "}
              <span className="text-accent type-effect">Belo Adrien</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              "Faith is the substance of things hoped for and the evidence of
              things unseen"
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* DOWNLOAD BTN */}
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
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
