"use client";

import { useEffect, useRef } from "react";

export default function Logo() {
  const markRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const mark = markRef.current;
    if (!mark) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let animation: Animation | undefined;

    const updateAnimation = () => {
      animation?.cancel();
      animation = undefined;

      if (!motionPreference.matches) {
        animation = mark.animate(
          [
            { transform: "translateY(0)" },
            { transform: "translateY(-8px)" },
            { transform: "translateY(0)" },
          ],
          {
            duration: 3600,
            iterations: Infinity,
            easing: "ease-in-out",
          },
        );
      }
    };

    updateAnimation();
    motionPreference.addEventListener("change", updateAnimation);

    return () => {
      animation?.cancel();
      motionPreference.removeEventListener("change", updateAnimation);
    };
  }, []);

  return (
    <a
      aria-label="KODEX home"
      className="fixed bottom-6 left-6 z-30 size-14 rounded-full shadow-[0_0_24px_rgba(190,205,225,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      href="#home"
    >
      <span
        aria-hidden="true"
        className="flex size-full items-center justify-center rounded-full border border-white/20 bg-black text-xl font-bold tracking-tight text-white"
        ref={markRef}
      >
        K
      </span>
    </a>
  );
}
