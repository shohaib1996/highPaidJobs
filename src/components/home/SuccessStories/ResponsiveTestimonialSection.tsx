"use client";

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { TestimonialCard } from "./testimonial-card";
import { Testimonial } from "./SuccessStories";
import { NavigationOptions } from "swiper/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Create a new responsive testimonial section
export function ResponsiveTestimonialSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [isMobile, setIsMobile] = useState(false);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  // Check if we're on mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Update swiper controls when swiper instance is available
  useEffect(() => {
    if (swiper) {
      if (swiper.params.navigation) {
        (swiper.params.navigation as NavigationOptions).prevEl =
          prevRef.current;
        (swiper.params.navigation as NavigationOptions).nextEl =
          nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }
  }, [swiper]);

  // For mobile: Swiper slider
  if (isMobile) {
    return (
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{
            enabled: true,
          }}
          pagination={false}
          className="testimonial-swiper"
          onSwiper={setSwiper}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:text-black text-black backdrop-blur-sm rounded-full w-7 h-7 flex items-center justify-center border border-white/20 transition-all"
        >
          <ChevronLeft className="dark:text-slate-900" />
        </button>

        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 backdrop-blur-sm bg-white text-black dark:text-black rounded-full w-7 h-7 flex items-center justify-center border border-white/20 transition-all"
        >
          <ChevronRight className="dark:text-slate-900" />
        </button>

        {/* Custom styles for Swiper pagination */}
        <style jsx global>{`
          .testimonial-swiper {
            padding-bottom: 40px;
            padding-left: 16px;
            padding-right: 16px;
          }
          .testimonial-swiper .swiper-pagination-bullet {
            background: white;
            opacity: 0.5;
          }
          .testimonial-swiper .swiper-pagination-bullet-active {
            background: #10b981;
            opacity: 1;
          }
          /* Hide default navigation buttons */
          .testimonial-swiper .swiper-button-next,
          .testimonial-swiper .swiper-button-prev {
            display: none;
          }
        `}</style>
      </div>
    );
  }

  // For desktop: Grid layout
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
}
