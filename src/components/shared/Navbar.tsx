"use client";

import Link from "next/link";
import { ModeToggle } from "../global/ModeToggle";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()

    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }
  return (
    <div>
      <header className="flex justify-between items-center border-b border-slate-500 pb-3 md:mb-16 pt-3 px-3">
        <h1 className="text-lg md:text-xl font-bold">High Paid Jobs</h1>
        <div className="flex items-center gap-1 md:gap-4">
          <ModeToggle />
          <Link
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="flex items-center justify-between rounded-full bg-white hover:bg-gray-100 text-slate-900 px-3 md:px-5 py-1.5 cursor-pointer text-sm md:text-base"
          >
            Get Started <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
