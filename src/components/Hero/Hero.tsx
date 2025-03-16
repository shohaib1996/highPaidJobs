"use client"
import React, { useState } from "react";
import Navbar from "../shared/Navbar";


import Image from "next/image";
import HeroButtons from "./HeroButtons";
import Container from "../Container";
import thumbnailUrl from "../../../public/thumbnail2.png"
import { Play } from "lucide-react";


const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  // Video details
  const videoId = "1065695538"
  const videoTitle = "High Paid Jobs"

  // Replace this with your actual thumbnail URL


  const handlePlayClick = () => {
    setIsPlaying(true)
  }
  return (
    <section className="relative overflow-hidden bg-primary text-white md:min-h-[560px] w-full md:pb-20">
      <Container>
        <div>
          <div>
            <Image
              src="/Maskgroup.png"
              alt=""
              className="absolute bottom-0 left-0 rotate-180 animate-pulse z-10"
              height={300}
              width={400}
            />
          </div>
          <div className="">
            <Image
              src="/Maskgroup.png"
              alt=""
              className="absolute top-0 right-0 animate-pulse z-10"
              height={300}
              width={400}
            />
          </div>
        </div>

        <div className="relative z-20 container flex flex-col h-full mx-auto md:p-5 lg:p-0">
          <Navbar />
          <div className="h-full flex items-center justify-between flex-col lg:flex-row lg:px-5 xl:px-0">
            <div className="flex-1 space-y-3 md:space-y-6">
              <div className="hidden md:block">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-scaleUp">
                  <span className="text-warn animate-blink">🔥</span>
                  <span>99.99%</span>
                  <span className="">GUARANTEED</span>
                  to get back your job!
                </div>
              </div>

              <h2 className="text-3xl md:text-5.5xl text-center md:text-left leading-tight font-bold text-balance">
                Get your Six-Figure <br /> job back in {" "}
                <div className="relative inline-block">
                  <span className="relative text-warn">
                    8-16 Weeks
                    <svg
                      className="absolute left-0 w-full -bottom-3"
                      height="20"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5 Q50 0, 100 5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-warn"
                      />
                    </svg>
                  </span>
                </div>{" "}
                with our proven techniques.
              </h2>

              <p className="text-sm tracking-normal leading-[20px] text-blue-100/90 max-w-xs mx-auto md:max-w-[549px] text-center md:text-left md:mx-0">
                Get access actively hiring 20+ premium recruiters today surrounding your location.
              </p>

              <div className="hidden md:block">
                <HeroButtons />
              </div>
            </div>

            <div className="flex-1 w-full space-y-3 md:space-y-6 my-5 md:my-0">
              <div className="relative w-full h-full aspect-video rounded-lg overflow-hidden">
                {!isPlaying ? (
                  <div className="absolute inset-0 cursor-pointer group" onClick={handlePlayClick}>
                    <Image src={thumbnailUrl || "/placeholder.svg"} alt={videoTitle} fill className="object-contain" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-4 group-hover:bg-black/70 transition-colors">
                        <Play className="w-10 h-10 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src={`https://player.vimeo.com/video/${videoId}?h=2a872c4ae3&autoplay=1`}
                    title={videoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                )}
              </div>
            </div>
            {/* <div className="dark:text-white w-full p-4 md:p-0 md:mt-10 lg:mt-0 lg:w-[442px] relative">
              <div className="absolute rounded-full h-[59px] w-[59px] md:h-[122px] md:w-[122px] bg-white/10 border-white/20 md:-top-10 md:-left-10 -left-1 -top-1 animate-moveAndScale" />
              <Card className="overflow-hidden transition-all duration-1000 backdrop-blur-sm bg-white/10 hover:shadow-xl hover:scale-105 border-white/20 rounded-[10px]">
                <div className="p-2">
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold dark:text-white">
                      Success Rate
                    </h3>
                    <p className="mb-2 text-sm text-blue-200/80">
                      Our placement statistics
                    </p>
                    <hr className="h-1 border-white/20" />
                  </div>

                  <div className="mb-2 text-center">
                    <div className="text-4xl md:text-6xl font-bold tracking-tight dark:text-white flex justify-center">
                      <AnimatedCounter target={99.99} />%
                    </div>
                    <div className="mt-1 text-sm text-blue-200/80 ">
                      Success Rate
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { title: "8-16", subtitle: "Week to Job" },
                      { title: "500+", subtitle: "Active Recruiters" },
                      { title: "$100k+", subtitle: "Starting Salary" },
                      { title: "100%", subtitle: "Money-Back" },
                    ].map((stat, index) => (
                      <Card
                        key={index}
                        className="p-2 bg-white/5 border-white/10 rounded-xl"
                      >
                        <div className="text-center">
                          <div className="text-xl md:text-2xl font-bold dark:text-white">
                            {stat.title}
                          </div>
                          <div className="mt-1 text-sm md:text-base text-blue-200/80">
                            {stat.subtitle}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </Card>
            </div> */}

            <div className="block md:hidden pb-4">
              <HeroButtons />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
