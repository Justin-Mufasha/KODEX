"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import type { Mesh } from "three";

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

function TorusSculpture({ reducedMotion }: { reducedMotion: boolean }) {
  const sculpture = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!sculpture.current) return;

    if (reducedMotion) {
      sculpture.current.position.y = 0;
      return;
    }

    sculpture.current.rotation.x += delta * 0.12;
    sculpture.current.rotation.y += delta * 0.18;
    sculpture.current.rotation.z += delta * 0.08;
    sculpture.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.04;
  });

  return (
    <mesh ref={sculpture} rotation={[0.35, 0.2, 0]}>
      <torusKnotGeometry args={[0.78, 0.23, 180, 24, 2, 3]} />
      <meshPhysicalMaterial
        color="#cbd8e8"
        metalness={0.88}
        roughness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.12}
      />
    </mesh>
  );
}

export default function Innovation3D() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div
      aria-label="A gently rotating metallic torus knot sculpture"
      className="absolute inset-0"
      role="img"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[15%] rounded-full bg-sky-300/[0.08] blur-3xl"
      />
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 40 }}
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.65} />
        <directionalLight
          color="#ffffff"
          intensity={1.7}
          position={[3, 4, 5]}
        />
        <directionalLight
          color="#b9d5fa"
          intensity={1.1}
          position={[-4, 2, 1]}
        />
        <pointLight color="#ffffff" intensity={0.55} position={[-2, 3, 3]} />
        <pointLight color="#9dc8ff" intensity={0.6} position={[3, -2, 2]} />
        <TorusSculpture reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
