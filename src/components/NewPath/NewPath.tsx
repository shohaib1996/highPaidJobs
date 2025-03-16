"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  Clock,
  DollarSign,
  Check,
  ChevronRight,
  ArrowRight,
  GraduationCap,
  Building,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Container from "../Container";

export default function NewPath() {
  const [plan, setPlan] = useState<"assessment" | "prep" | "placement">(
    "assessment"
  );

  const pathOptions = [
    {
      id: "assessment",
      title: "Job Assessment",
      icon: <BriefcaseBusiness className="text-primary" />,
      description:
        "Find out why you're not getting jobs and get actionable feedback",
    },
    {
      id: "placement",
      title: "Job Placement",
      icon: <Building className="text-primary" />,
      description: "Get placed in your dream job with our network of employers",
    },
    {
      id: "prep",
      title: "Job Prep",
      icon: <GraduationCap className="text-primary" />,
      description: "Prepare for interviews and build the skills employers want",
    },
  ];

  const pricingPlans = {
    assessment: {
      title: "Job Assessment Only",
      subtitle: "Find out why you are not getting jobs NOW",
      price: "$49",
      period: "One time payment",
      features: [
        "30 to 120 min interview",
        "40 to 70 local recruiter access",
        "Provided recording with details report",
        "Salary negotiation blueprint",
        "Probation period hacks",
        "Help revamp the resume and tailoring for each job needs.",
      ],
      buttonText: "Get Started",
    },
    prep: {
      title: "Job Assessment + Placement",
      subtitle: "Land $100k+ job within 90 days",
      price: "$499",
      period: "Upfront deposit, $271 installment for 24 months: Interest FREE",
      popular: true,
      features: [
        "Everything in Job Assessment",
        "Access to 500+ active recruiters",
        "Complete support during interviews",
        "Sure job offer within 10 interviews",
        "Help renegotiate salary by $10k",
        "Complete support during probation period",
        "Lifetime access to materials",
      ],
      buttonText: "Schedule Consultation",
    },
    placement: {
      title: "Job Prep + Assessment + Placement",
      subtitle: "Switch career and get $100k+ job in 120 days",
      price: "$999",
      period: "Upfront deposit, $395 installment for 24 months: Interest FREE",
      features: [
        "Everything in Job Assessment + Placement",
        "One-on-one instruction",
        "Hands-on real-world projects",
        "Optional 400-hour internship",
        "Industry mentor matching",
        "Portfolio development",
        "Lifetime access to materials",
      ],
      buttonText: "Get Started",
    },
  };

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
    <section className="py-12 md:py-24 bg-background">
      <Container>
        <div className="text-black px-3">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Choose Your Path to Land Your Dream Job
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select the career path that aligns with your goals and unlock your
              professional potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
            {/* Path Selection */}
            <div className="flex flex-col gap-3">
              {pathOptions.map((option) => (
                <Card
                  key={option.id}
                  className={cn(
                    "cursor-pointer transition-all hover:shadow-md",
                    plan === option.id
                      ? "border-primary ring-2 ring-primary/20"
                      : ""
                  )}
                  onMouseOver={() => setPlan(option.id as any)}
                >
                  <CardContent className="p-3 text-black">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 rounded-full p-3">
                        {option.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl">
                          {option.title}
                        </h3>
                        {/* <p className="text-muted-foreground mt-1">
                        {option.description}
                      </p> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pricing Card */}
            <Card className="border-primary/20 shadow-lg text-black col-span-2 flex flex-col justify-between">
              {/* <CardHeader className="pb-0 text-black">
              <h3 className="text-2xl font-bold">{pricingPlans[plan].title}</h3>
              <p className="text-muted-foreground">
                {pricingPlans[plan].subtitle}
              </p>
              {pricingPlans[plan].popular && (
                <Badge className="absolute top-4 right-4 bg-amber-400 text-black hover:bg-amber-500">
                  Most Popular
                </Badge>
              )}
            </CardHeader> */}
              <CardContent className="pt-6">
                {/* <div className="mb-6">
                <p className="text-sm font-medium text-muted-foreground">
                  Starting From
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">
                    {pricingPlans[plan].price}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {pricingPlans[plan].period}
                </p>
              </div> */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pricingPlans[plan].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="text-black flex justify-center mt-auto">
                <Button
                  onClick={(e) => handleLinkClick(e, "contact")} size="lg" className="w-full md:w-auto hover:bg-blue-600 text-white">
                  {pricingPlans[plan].buttonText}
                  {plan === "prep" ? (
                    <ArrowRight className="ml-2 h-5 w-5" />
                  ) : (
                    <ChevronRight className="ml-2 h-5 w-5" />
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Tiers Grid - Shown for Assessment and Placement plans */}
          {/* {(plan === "assessment" || plan === "placement") && (
            <div className="grid md:grid-cols-3 gap-6 mt-12 text-black">
              {["Gold", "Platinum", "Diamond"].map((tier) => (
                <Card key={tier} className="border border-muted">
                  <CardHeader className="text-black">
                    <h4 className="font-semibold text-lg">{tier} Tier</h4>
                  </CardHeader>
                  <CardContent className="text-black">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <div>
                          <span className="font-medium">Starting from:</span>
                          <span className="ml-1">
                            {tier === "Gold"
                              ? "$199"
                              : tier === "Platinum"
                              ? "$299"
                              : "$399"}{" "}
                            per month
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <span>
                            {tier === "Gold"
                              ? "30"
                              : tier === "Platinum"
                              ? "50"
                              : "80"}{" "}
                            hours of training
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )} */}
        </div>
      </Container>
    </section>
  );
}
