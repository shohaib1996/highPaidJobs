'use client'
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import ctaLeft from "../../../public/cta-left.png";
import ctaRight from "../../../public/cta-right.png";
import Container from "../Container";
import Link from "next/link";

export default function CTASection() {
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
    <section className="relative overflow-hidden md:py-8 mb-4">
      {/* Background circles */}

      {/* Content */}
      <div className="px-4">
        <Container>
          <div className="relative bg-primary rounded-lg p-4 md:p-12 text-center overflow-hidden">
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <Image
                src={ctaLeft}
                alt="Cta Left"
                className="h-full w-full scale-[2] md:scale-[5] object-contain animate-pulse delay-[3000]"
              />
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <Image
                src={ctaRight}
                alt="Cta Left"
                className="h-full w-full scale-[2] md:scale-[5] object-contain animate-pulse delay-[3000]"
              />
            </div>
            <div className="z-20">
              <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4">
                Secure Your $100K+ Future Today!
              </h2>

              <p className="text-blue-100 text-base md:text-lg mb-3 md:mb-8 max-w-2xl mx-auto">
                Spots are filling FAST! Join our next hiring wave and start your
                journey to a high-paying tech career.
              </p>

              <div className="flex flex-row justify-center gap-2 md:gap-4 md:mb-8">
                <Link href="#contact"
                  onClick={(e) => handleLinkClick(e, "contact")} className="hero-action-button button-1 text-nowrap">
                  Book a Free 15-Min Call <ChevronRight size={18} />
                </Link>
                <Link href="#contact"
                  onClick={(e) => handleLinkClick(e, "contact")} className="hero-action-button bg-white/30 text-nowrap">
                  Join Next Webinar <ChevronRight size={18} />
                </Link>
              </div>

              <p className="text-white/90 flex items-center justify-center gap-2 text-base md:text-base mt-3">
                🚀 HighPaidJobs.us – The Fastest Path to a $100K+ Career!
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
