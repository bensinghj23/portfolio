"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CursorFollower() {
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const ringX = useSpring(dotX, { stiffness: 180, damping: 22 });
  const ringY = useSpring(dotY, { stiffness: 180, damping: 22 });

  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(true);
  const rAF = useRef<number>(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(rAF.current);
      rAF.current = requestAnimationFrame(() => {
        dotX.set(e.clientX);
        dotY.set(e.clientY);
        setHidden(false);
      });
    };

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const hide = () => setHidden(true);

    // Attach hover detection to all interactive elements
    const interactiveSelector = "a, button, [role='button'], input, textarea, select, [data-cursor='pointer']";

    const attachListeners = () => {
      document.querySelectorAll<HTMLElement>(interactiveSelector).forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    };

    // Initial attachment + re-run on DOM changes
    attachListeners();
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", hide);

    return () => {
      cancelAnimationFrame(rAF.current);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", hide);
      observer.disconnect();
    };
  }, [dotX, dotY]);

  return (
    <>
      {/* Outer ring — follows with spring lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        animate={{
          width: hovering ? 44 : clicking ? 18 : 32,
          height: hovering ? 44 : clicking ? 18 : 32,
          opacity: hidden ? 0 : 0.7,
        }}
        transition={{ duration: 0.15 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderWidth: 1.5,
          borderStyle: "solid",
          borderColor: hovering ? "var(--foreground)" : "color-mix(in srgb, var(--foreground) 40%, transparent)",
          borderRadius: 9999,
          mixBlendMode: "difference",
        }}
      />

      {/* Inner dot — follows exactly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block rounded-full bg-foreground"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{
          width: clicking ? 6 : hovering ? 4 : 5,
          height: clicking ? 6 : hovering ? 4 : 5,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
