'use client'
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Container from "../Container";
import Link from "next/link";

export default function PricingSection() {
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
    <div className="py-4 md:py-12 bg-foreground">
      <Container>
        <div className="text-center">
          <h1 className="max-w-[320px] md:max-w-[739px] mx-auto text-2xl md:text-5xl font-bold text-black leading-tight mb-2 md:mb-4">
            Unlock Your Career Freedom!
          </h1>
          <p className="text-[#5C5958] max-w-[270px] mx-auto md:max-w-full dark:text-gray text-base md:text-lg mb-4 md:mb-6">
            Choose the assessment plan that works best for you with our flexible payment options
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 container md:mx-auto">
          {/* Job Assessment Only */}
          <div className="bg-[#F3F5F7] dark:bg-[#434345] rounded-lg shadow border border-gray-200 dark:border-gray-600 p-6 flex flex-col mx-4 md:mx-0">
            <div className="mb-6">
              <h3 className="font-bold text-black">Plan: Starter </h3>
              <p className="text-sm text-black text-[#5C5958] dark:text-gray">
                Quick 30 min interview
              </p>
            </div>
            <div className="mb-6">
              <p className="text-sm font-medium mt-1 text-black">
                Starting from
              </p>
              <p className="text-4xl font-bold text-black">$49.99</p>
              <p className="text-xs mt-1 text-black">One time payment</p>
            </div>
            <hr className="my-2 bg-border" />
            <div className="space-y-3 mb-8 flex-grow">
              <div className="flex items-start">
                <Check className="h-4 w-5 text-primary dark:text-gray bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0" />
                <span className="text-black">30 Min Interview.</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-5 text-primary dark:text-gray bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0" />
                <span className="text-black">
                  Provide Recording.
                </span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-5 text-primary dark:text-gray bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0" />
                <span className="text-black">
                  Interview Assessment.
                </span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-5 text-primary dark:text-gray bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0" />
                <span className="text-black"> Delivery: 1 to 3 days.</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-5 text-primary dark:text-gray bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0" />
                <span className="text-black">Receive: details report and next action plan.</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-5 text-primary dark:text-gray bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0" />
                <span className="text-black">Provide 30 Local recruiter (small to large companies for open position)</span>
              </div>
            </div>
            <Link href="https://square.link/u/Y6eCsqc1"
             target="_blank" className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-full flex items-center justify-center">
              Pay Now
              <ChevronRight className="ml-1 mt-1 h-6 w-6 text-lg font-bold" />
            </Link>
          </div>

          {/* Job Assessment + Placement */}
          <div className="bg-primary rounded-lg border border-blue-600 p-6 flex flex-col relative mx-4 md:mx-0">
            <div className="absolute top-10 -right-2">
              <div className="bg-[#F6A934] text-xs md:text-sm font-medium text-black px-3 py-1 rounded-t rounded-bl">
                Most Popular
              </div>
              <div className="absolute top-6 md:top-7 right-0">
                <svg
                  width="7.903320"
                  height="7.903320"
                  viewBox="0 0 7.90332 7.90332"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector 80"
                    d="M0 0L7.9 0L0 7.9L0 0Z"
                    fill="#F6A934"
                    fillOpacity="1.000000"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-bold text-white">
                Plan: Essential
              </h3>
              <p className="text-sm text-blue-200">
                60 min technical interview and resume <br /> assessment
              </p>
            </div>
            <div className="mb-6">
              <p className="text-sm font-medium text-blue-200">Starting From</p>
              <p className="text-4xl font-bold text-white">$99.99</p>
              <p className="text-xs mt-1 text-blue-200">
                Upfront deposit, $99.99 installment for 24 months: Interest FREE
              </p>
            </div>
            <hr className="my-2 opacity-50 bg-border" />
            <div className="space-y-3 mb-6 flex-grow">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                <span className="text-white"> 60 min interview.</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                <span className="text-white">
                  Deliver: Recording Interview, Resume Assessment and guidance!
                </span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                <span className="text-white">
                  Receive: details report and next action plan
                </span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                <span className="text-white">
                  50 Local recruiter (small to large companies for open position)
                </span>
              </div>
              {/* <div className="flex items-start">
                <Check className="h-5 w-5 text-white bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                <span className="text-white">
                  Help renegotiate salary by $10k
                </span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                <span className="text-white">
                  Complete support during probation period
                </span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                <span className="text-white">Lifetime access to materials</span>
              </div> */}
            </div>
            <Link href="https://square.link/u/yUTuECr2" target="_blank"
              className="w-full mb-1 bg-foreground hover:bg-primary text-blue-600 hover:text-white font-medium py-3 px-4 rounded-full flex items-center justify-center dark:text-white">
             Pay Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Job Prep + Assessment + Placement */}
          <div className="bg-[#F3F5F7] dark:bg-[#434345] rounded-lg shadow border border-gray-200 dark:border-gray-600 p-6 flex flex-col mx-4 md:mx-0">
            <div className="mb-6">
              <h3 className="font-bold text-black">
                Plan: Premium
              </h3>
              <p className="text-sm text-black text-[#5C5958] dark:text-gray">
                Interview, resume and current job application assessment
              </p>
            </div>
            <div className="mb-6">
              <p className="text-sm font-medium mt-1 text-black">
                Starting From
              </p>
              <p className="text-4xl font-bold text-black">$149.99</p>
              <p className="text-xs mt-1 text-black">
                Upfront deposit, $149.99 installment for 24 months: Interest FREE
              </p>
            </div>
            <hr className="my-2 bg-border" />
            <div className="space-y-3 mb-8 flex-grow">
              <div className="flex items-start">
                <Check className="h-4 w-5 text-primary dark:text-gray bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0" />
                <span className="text-black">
                  Duration: 2 Hours
                </span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-5 text-primary dark:text-gray bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0" />
                <span className="text-black">Recruiter Interview</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-5 text-primary dark:text-gray bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0" />
                <span className="text-black">Tech Interview</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-5 text-primary dark:text-gray bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0" />
                <span className="text-black">Behavior interview</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-5 text-primary dark:text-gray bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0" />
                <span className="text-black">Resume Assessment</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-5 text-primary dark:text-gray bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0" />
                <span className="text-black">Current job application assessment</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-5 text-primary dark:text-gray bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0" />
                <span className="text-black">Receive: details report and next action plan</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-5 text-primary dark:text-gray bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0" />
                <span className="text-black">70 Local recruiter (small to large companies for open position)</span>
              </div>
            </div>
            <Link href="https://square.link/u/Mlk5akgA" target="_blank"
               className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-full flex items-center justify-center">
              Pay Now
              <ChevronRight className="ml-1 mt-1 h-6 w-6 text-lg font-bold" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
