"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "../Container";

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string>("item-1");

  const faqItems = [
    {
      id: "item-1",
      question: "How fast can I get a job?",
      answer:
        "Job placement only: 8 weeks. Boot camp + placement: 10-12 weeks of training + 4-6 weeks to an offer.",
    },
    {
      id: "item-2",
      question: "What if I don't get hired?",
      answer:
        "We offer ongoing support and resources until you secure employment. Our program includes career coaching and job placement assistance.",
    },
    {
      id: "item-3",
      question: "Can I work remotely?",
      answer:
        "Yes, many of our graduates secure remote positions. We prepare you for both remote and in-office opportunities based on your preferences.",
    },
    {
      id: "item-4",
      question: "Who is this program for?",
      answer:
        "Our program is designed for motivated individuals looking to start or advance their career in technology, regardless of prior experience.",
    },
    {
      id: "item-5",
      question: "Do I need prior experience?",
      answer:
        "No prior experience is required. Our curriculum is designed to take you from beginner to job-ready, with personalized support along the way.",
    },
    {
      id: "item-6",
      question: "What companies hire your graduates?",
      answer:
        "Our graduates have been hired by a wide range of companies, from startups to Fortune 500 corporations across various industries.",
    },
  ];

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
    <Container>
      <div className="px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2 text-black">{`Got Questions? We've Got Answers`}</h2>
          <p className="text-black dark:text-gray-400">
            Find answers to our most frequently asked questions
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="w-full space-y-2 md:space-y-4"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border rounded-md bg-white dark:bg-gray-950 shadow-sm"
            >
              <AccordionTrigger className="px-3 py-2 md:px-6 md:py-4 hover:no-underline">
                <span className="text-left font-medium text-black md:text-lg">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-3 py-2 md:px-6 md:pb-4 pt-0 text-slate-700 dark:text-slate-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8">
          <p className="mb-4 text-black">
            Have more questions? Ask us during your FREE consultation!
          </p>
          <Button
            onClick={(e) => handleLinkClick(e, "contact")} className="bg-primary hover:bg-blue-700 text-pure-white px-6 py-2 rounded-full">
            Book Free Consultation <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Container>
  );
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
