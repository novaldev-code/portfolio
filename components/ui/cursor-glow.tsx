"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

/**
 * A large, soft radial-gradient glow that follows the mouse across the whole page.
 * Purely decorative and disabled on touch devices / reduced-motion preference.
 */
export function CursorGlow() {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);
  const x = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 0.5 });
  const y = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 0.5 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isTouch) return;

    function handleMove(event: MouseEvent) {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] md:block"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}
