"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Resume",
        path: "/resume"
    },
    {
        name: "Work",
        path: "/work"
    },
    {
        name: "Contact",
        path: "/contact"
    },

]


export default function MobileNav() {
    const pathName = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center" >
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>

            <SheetContent className="flex flex-col" >
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href={'/'}>
                        <h1 className="text-4xl font-semibold">
                            Belo <span className="text-accent">.</span>
                        </h1> 
                    </Link>
                </div>

                <nav className="flex flex-col justify-center items-center gap-8" >
                    {
                        links.map((item, index)=>(
                            <Link 
                                href={item.path}
                                key={index}
                                className={`${item.path === pathName && "text-accent border-b-2 border-accent"} text-xl hover:text-accent transition-all`}
                            >
                                {item.name}
                            </Link>
                        ))
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )
}