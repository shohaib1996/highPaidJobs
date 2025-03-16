import React from "react";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const CareerTracksComponent = () => {
  const careerTracks = [
    "CloudOps/DevOps (AWS)",
    "Full-Stack Web/Mobile (MERN)",
    "Project/Product Management",
    "SQA Engineering",
    "Front-End Developer",
    "Back-End Developer",
    "Software Engineer",
    "AI Engineer",
    "More"
  ];

  return (
    <div className="w-full h-full lg:w-auto">
      <Card className="w-full h-full lg:w-[482px] overflow-hidden border rounded-md border-primary">
        <div className="px-6 py-4 text-xl font-semibold bg-primary text-pure-white">
          Job Prep Tracks
        </div>
        <div className="p-3 space-y-4">
          {careerTracks.map((track, index) => (
            <div
              key={index}
              className="relative flex items-center gap-3 p-3 overflow-hidden rounded-lg"
              style={{
                background:
                  "linear-gradient(to right, var(--background) 70%, var(--success-foreground) 100%)",
              }}
            >
              {/* Border with fading effect */}
              <div
                className="absolute inset-0 rounded-lg dark:border-slate-600 border-r-transparent 
             bg-gradient-to-r from-transparent via-transparent to-[var(--primary-foreground)] 
             dark:bg-gradient-to-r dark:from-transparent dark:via-transparent dark:to-[var(--dark-primary-foreground)] 
             pointer-events-none"
                style={{
                  maskImage:
                    "linear-gradient(to right, black 70%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, black 70%, transparent 100%)",
                }}
              />

              <div className="z-10 border-2 border-primary flex items-center justify-center w-6 h-6 text-primary bg-green-100 rounded-full">
                <Check className="w-4 h-4" />
              </div>
              <span className="z-10 text-black font-medium md:text-lg">
                {track}
              </span>
            </div>
          ))}

          <div className="mt-4 text-sm text-center text-black">
            All tracks include job placement 99.99% guarantee to follow our techniques.
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CareerTracksComponent;
