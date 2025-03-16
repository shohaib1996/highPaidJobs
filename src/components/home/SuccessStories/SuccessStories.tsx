'use client'
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { ResponsiveTestimonialSection } from "./ResponsiveTestimonialSection";

export interface Testimonial {
  name: string;
  position?: string; // Optional since it might not be present in all testimonials
  company: string;
  salary: string;
  testimonial: string;
  url: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex P.",
    position: "Software Engineer",
    company: "Fortune 100",
    salary: "$108K",
    testimonial: "I got two offers within 3 months!",
    url: "https://player.vimeo.com/video/1065693603?h=0c54fe674c",
  },
  {
    name: "Maria S.",
    position: "Frontend Developer",
    company: "FAANG",
    salary: "$130K",
    testimonial: "They helped me to get extra $8k!",
    url: "https://player.vimeo.com/video/1065693522?h=9d231d3e62",
  },
  {
    name: "Jamal R.",
    position: "Cloud Engineer",
    company: "Federal Job",
    salary: "$115K",
    testimonial:
      "The interview prep was incredible, and they even helped me get the permanent offer!",
    url: "https://player.vimeo.com/video/1065693295?h=00366a3997",
  },
  {
    name: "Sarah M.",
    position: "DevOps Engineer",
    company: "Tech Startup",
    salary: "$120K",
    testimonial:
      "They gave me access to the 500+ active recruiters hungry for talents!",
    url: "https://player.vimeo.com/video/1065693202?h=b6bd98f94e",
  },
];

export default function SuccessStories() {
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
    <section className="py-5 md:py-12 bg-slate-900">
      <Container>
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-5 md:mb-12 space-y-2">
            <div className="flex justify-center gap-4">
              <span className="bg-slate-800 text-white text-sm px-3 py-1 rounded-full">
                REAL STORIES
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white">Success Stories</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Hear from people who transformed their careers with our program
            </p>
            <p className="inline-block">
              {" "}
              <span className="bg-slate-800 text-red-500 text-sm px-3 py-1 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                LIVE TESTIMONIAL
              </span>
            </p>
          </div>

          <ResponsiveTestimonialSection testimonials={testimonials} />

          {/* CTA Button */}
          <div className="text-center">
            <Button
              onClick={(e) => handleLinkClick(e, "contact")}
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold rounded-full px-8"
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
