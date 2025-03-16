import { cn } from "@/lib/utils";
import React from "react";
import BookFreeConsultation from "./BookFreeConsultation";

const CareerStepsComponent = () => {
  const steps = [
    {
      number: "01",
      title: "Pick Your Plan",
      description:
        "Find out options among them: Placement, assessment, guidance, technical coaching, quick refine and placement.",
      hasBorder: false,
    },
    {
      number: "02",
      title: "Your Career Assessment",
      description:
        "Get one-on-one coaching and assessment until your placement in confirmed in 8 to 12 weeks.",
      hasBorder: false,
    },
    {
      number: "03",
      title: "Access 500+ Active Recruiters",
      description:
        "We'll review your resume, connect you with recruiters, and prepare you for interviews.",
      hasBorder: false,
    },
    {
      number: "04",
      title: "Ready Job Offer within 10 Interviews",
      description:
        "Our 500+ active recruiters will help you land multiple job offers within the first 10 interviews.",
      hasBorder: true,
    },
    {
      number: "05",
      title: "Renegotiation for Extra $10k",
      description:
        "When your final salary is decided, we will step in to renegotiate get you extra $10k",
      hasBorder: true,
    },
    {
      number: "06",
      title: "Support During Probation Period",
      description:
        "Receive full support during your probation period to ensure your success.",
      hasBorder: true,
    },
  ];

  return (
    <div className="relative w-full">
      {/* We'll create individual line segments between steps instead of one long line */}
      <div className="flex flex-col gap-8 md:gap-12">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-6 mt-0 relative">
            {/* Dashed line between steps (not for the last step) */}
            {index < steps.length - 1 && (
              <div
                className="absolute left-[21px] top-[42px] w-[2px]"
                style={{
                  background:
                    "repeating-linear-gradient(to bottom, #dbeafe 0, #dbeafe 6px, transparent 6px, transparent 12px)",
                  height: "calc(100% + 8px)", // Extends to the next step with gap compensation
                  zIndex: 0
                }}
              />
            )}
            <div className="relative z-10">
              <div
                className={cn(
                  "flex items-center justify-center rounded-full bg-primary-foreground text-secondary font-semibold dark:border dark:border-slate-800"
                )}
                style={{ width: "42px", height: "42px" }}
              >
                <span>{step.number}</span>
              </div>
            </div>
            <div>
              <h3 className="mb-1 text-lg md:text-xl font-semibold text-black">
                {step.title}
              </h3>
              <p className="text-sm md:text-sm text-black max-w-md">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerStepsComponent;