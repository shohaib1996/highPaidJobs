'use client'
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const BookFreeConsultation = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
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
    <Button
      onClick={(e) => handleLinkClick(e, "contact")} className="bg-primary rounded-full text-white hover:bg-[#0056b3] py-2 md:py-3">
      Book Free Consultation <ChevronRight size={18} />
    </Button>
  );
};

export default BookFreeConsultation;
