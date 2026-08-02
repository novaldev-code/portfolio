"use client";

import { useScroll, useSpring } from "framer-motion";

/**
 * Returns a spring-smoothed scroll progress value (0 - 1) for the whole page,
 * intended to drive a top progress bar.
 */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
}
