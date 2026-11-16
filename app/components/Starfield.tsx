"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  speed: number;
  twinklePhase: number;
  twinkleSpeed: number;
  previousX: number | null;
  previousY: number | null;
};

const STAR_COUNT = 170;
const NEAR_PLANE = 0.08;

function createStar(): Star {
  return {
    x: Math.random() * 2 - 1,
    y: Math.random() * 2 - 1,
    z: Math.random() * 0.92 + NEAR_PLANE,
    speed: Math.random() * 0.045 + 0.025,
    twinklePhase: Math.random() * Math.PI * 2,
    twinkleSpeed: Math.random() * 1.4 + 0.4,
    previousX: null,
    previousY: null,
  };
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const stars = Array.from({ length: STAR_COUNT }, createStar);
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let frame = 0;
    let lastTime = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const render = (time: number) => {
      if (motionPreference.matches) return;

      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
      lastTime = time;
      context.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      for (const star of stars) {
        star.z -= star.speed * delta;
        if (star.z <= NEAR_PLANE) {
          star.x = Math.random() * 2 - 1;
          star.y = Math.random() * 2 - 1;
          star.z = 1;
          star.previousX = null;
          star.previousY = null;
        }

        const x = centerX + (star.x * centerX) / star.z;
        const y = centerY + (star.y * centerY) / star.z;
        const depth = 1 - star.z;
        const radius = 0.35 + depth * 1.1;
        const twinkle =
          0.82 +
          Math.sin(time * 0.001 * star.twinkleSpeed + star.twinklePhase) * 0.18;
        const opacity = (0.12 + depth * 0.45) * twinkle;

        if (star.previousX !== null && star.previousY !== null) {
          context.beginPath();
          context.moveTo(star.previousX, star.previousY);
          context.lineTo(x, y);
          context.strokeStyle = `rgba(218, 227, 242, ${opacity * 0.38})`;
          context.lineWidth = radius;
          context.stroke();
        }

        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(235, 240, 248, ${opacity})`;
        context.fill();
        star.previousX = x;
        star.previousY = y;
      }

      frame = window.requestAnimationFrame(render);
    };

    const start = () => {
      window.cancelAnimationFrame(frame);
      lastTime = 0;

      if (motionPreference.matches) {
        context.clearRect(0, 0, width, height);
        for (const star of stars) {
          const x = width / 2 + (star.x * width) / 2;
          const y = height / 2 + (star.y * height) / 2;
          context.beginPath();
          context.arc(x, y, 0.7, 0, Math.PI * 2);
          context.fillStyle = "rgba(235, 240, 248, 0.2)";
          context.fill();
        }
        return;
      }

      frame = window.requestAnimationFrame(render);
    };

    const handleResize = () => {
      resize();
      start();
    };

    resize();
    start();
    window.addEventListener("resize", handleResize);
    motionPreference.addEventListener("change", start);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
      motionPreference.removeEventListener("change", start);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-48 top-1/4 h-[32rem] w-[32rem] rounded-full bg-blue-400/[0.035] blur-[140px]" />
      <div className="absolute -right-48 top-1/4 h-[36rem] w-[36rem] rounded-full bg-indigo-300/[0.035] blur-[150px]" />
      <canvas className="absolute inset-0 size-full" ref={canvasRef} />
    </div>
  );
}
