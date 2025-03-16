"use client";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Submit = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const router = useRouter();

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth - 100,
        height: window.innerHeight,
      });
    };

    // Set initial dimensions
    updateDimensions();

    // Add resize event listener to update dimensions dynamically
    window.addEventListener("resize", updateDimensions);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        className="absolute top-0 left-0 overflow-x-hidden"
        numberOfPieces={200}
        recycle={false}
      />
      <div className="flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex justify-center">
              <div className="rounded-full bg-primary/10 p-3">
                <CheckCircle2 className="h-8 md:h-12 w-8 md:w-12 text-primary" />
              </div>
            </div>
            <CardTitle className="text-center text-black text-2xl">
              Congratulations! <br /> You have submitted successfuly!
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm md:text-base text-center pt-2">
              We'll contact you soon to confirm your 15-minute career auditing
              session.
            </CardDescription>
            <Button
              onClick={() => router.push("/")}
              className="mx-auto bg-primary hover:bg-blue-500 text-white hover:text-black"
            >
              Go Back
            </Button>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Submit;
