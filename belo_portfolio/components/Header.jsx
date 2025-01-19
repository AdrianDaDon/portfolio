import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
  return (
    <header className="py-4 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
                Belo <span className="text-accent">.</span>
            </h1>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={'/contacts'}>
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* MOBILE DEVICE NAVIGATION */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  );
}


export default Header;