"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

/** A thin gradient progress bar fixed to the top of the viewport, tracking scroll position. */
export function ScrollProgressBar() {
  const scaleX = useScrollProgress();

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-brand"
    />
  );
}
