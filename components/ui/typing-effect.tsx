"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingEffectProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

/** Cycles through a list of words with a type-and-delete effect, e.g. rotating job titles. */
export function TypingEffect({
  words,
  className,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 1800,
}: TypingEffectProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing",
  );

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < currentWord.length) {
        timeout = setTimeout(
          () => setDisplayed(currentWord.slice(0, displayed.length + 1)),
          typingSpeed,
        );
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pauseDuration);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(currentWord.slice(0, displayed.length - 1)),
          deletingSpeed,
        );
      } else {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- part of the typing animation state machine
        setWordIndex((index) => (index + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayed,
    phase,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      {displayed}
      <AnimatePresence>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[1px] bg-primary"
        />
      </AnimatePresence>
    </span>
  );
}
