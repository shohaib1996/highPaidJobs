'use client'
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const HeroButtons = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()

    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for navbar height
        behavior: "smooth",
      })
    }
  }
  return (
    <div className="flex items-center gap-1 justify-center md:gap-4 md:justify-normal">
      <Link href="#contact"
        onClick={(e) => handleLinkClick(e, "contact")} className="hero-action-button button-1">
        Book Free Consultation <ChevronRight className="w-4 h-4 ml-2" />
      </Link>
      <Link href="#contact"  onClick={(e) => handleLinkClick(e, "contact")}>
        <button className="hero-action-button button-2 border border-white/20">
          Join Next Webinar <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      </Link>
    </div>
  );
};

export default HeroButtons;
