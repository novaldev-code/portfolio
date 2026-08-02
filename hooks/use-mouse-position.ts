"use client";

import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

/** Tracks the viewport-relative mouse position, used for cursor-glow / spotlight effects. */
export function useMousePosition() {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
}
