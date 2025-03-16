"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CountdownProps {
  targetDate: Date | string | number;
  className?: string;
  onComplete?: () => void;
  format?: "full" | "compact";
}

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function Countdown({
  targetDate,
  className,
  onComplete,
  format = "full",
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsComplete(true);
        onComplete?.();
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  //   const formatNumber = (num: number) => (num < 10 ? `0${num}` : num.toString());

  return (
    <div className={cn("flex items-center gap-2 md:gap-4", className)}>
      {!isComplete ? (
        <>
          {(timeLeft.days > 0 || format === "full") && (
            <TimeUnit label="Days" value={timeLeft.days} format={format} />
          )}
          <TimeUnit label="Hours" value={timeLeft.hours} format={format} />
          <TimeUnit label="Minutes" value={timeLeft.minutes} format={format} />
          <TimeUnit label="Seconds" value={timeLeft.seconds} format={format} />
        </>
      ) : (
        <div className="text-center font-medium text-primary">
          Countdown Complete!
        </div>
      )}
    </div>
  );
}

interface TimeUnitProps {
  label: string;
  value: number;
  format: "full" | "compact";
}

function TimeUnit({ label, value, format }: TimeUnitProps) {
  const formattedValue = value < 10 ? `0${value}` : value.toString();
  const digits = formattedValue.split("");

  return (
    <div className="flex flex-col items-center bg-red-600 text-white py-2 px-6 min-w-[75px] rounded-md">
      <div className="flex">
        {digits.map((digit, index) => (
          <div
            key={`${label}-${index}`}
            className="relative overflow-hidden rounded-md bg-primary/10 text-center"
          >
            <AnimatePresence mode="popLayout">
              <motion.span
                key={digit}
                className="block text-xl font-bold md:text-6xl tracking-"
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {digit}
              </motion.span>
            </AnimatePresence>
          </div>
        ))}
      </div>
      {format === "full" && (
        <span className="mt-1 text-xs text-white md:text-lg">{label}</span>
      )}
    </div>
  );
}
