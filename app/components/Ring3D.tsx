"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return reducedMotion;
}

function Ring({ reducedMotion }: { reducedMotion: boolean }) {
  const ring = useRef<Group>(null);
  const pointer = useThree((state) => state.pointer);

  useFrame((_, delta) => {
    if (!ring.current) return;

    const targetX = 0.08 + pointer.y * 0.12;
    const targetY = pointer.x * 0.12;
    const easing = 1 - Math.exp(-5.5 * delta);

    ring.current.rotation.x += (targetX - ring.current.rotation.x) * easing;
    ring.current.rotation.y += (targetY - ring.current.rotation.y) * easing;

    if (!reducedMotion) {
      ring.current.rotation.z += delta * 0.12;
      ring.current.position.y = Math.sin(_.clock.elapsedTime * 0.65) * 0.045;
    }
  });

  return (
    <group ref={ring}>
      <mesh>
        <torusGeometry args={[1.05, 0.105, 32, 160]} />
        <meshPhysicalMaterial
          color="#dbe4f0"
          metalness={0.9}
          roughness={0.16}
          clearcoat={1}
          clearcoatRoughness={0.08}
        />
      </mesh>
    </group>
  );
}

export default function Ring3D() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div
      aria-label="A front-facing metallic silver ring with subtle pointer response"
      className="relative aspect-square w-full max-w-[25rem]"
      role="img"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[12%] rounded-full bg-slate-300/[0.06] blur-3xl"
      />
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 40 }}
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight
          color="#ffffff"
          intensity={1.8}
          position={[3, 4, 5]}
        />
        <directionalLight
          color="#c6d8f2"
          intensity={1.2}
          position={[-4, 2, 1]}
        />
        <pointLight color="#ffffff" intensity={0.6} position={[-2, 3, 3]} />
        <pointLight color="#b4d2ff" intensity={0.7} position={[3, -2, 2]} />
        <Ring reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
