"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export const AnimatedCounter = ({ target = 99.99 }: { target: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => value.toFixed(2));

  useEffect(() => {
    count.set(0);
    animate(count, target, { duration: 2, ease: "easeOut" });
  }, [count, target]);

  return <motion.div>{rounded}</motion.div>;
};
