"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense, useRef } from "react";
import styles from "../SidebarBall.module.css";

function RotatingOrb({ emissiveColor }) {
  const waterSplashTexture = useLoader(THREE.TextureLoader, "/blue-aura.png");
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.03;
    }
  });

  return (
    <mesh rotation={[0, 0, 0]} ref={meshRef}>
      <sphereGeometry args={[2, 60, 60]} />
      <meshStandardMaterial
        color={0x000000}
        emissive={emissiveColor}
        emissiveIntensity={0.4}
        alphaMap={waterSplashTexture}
        transparent={true}
      />
    </mesh>
  );
}

export default function ThemeSwitcherCanvasThree({
  emissiveColor = "#00d4ff",
}) {
  return (
    <div className={styles.orbPreview}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        onCreated={() => console.log("Canvas Created")}
      >
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <ambientLight color={0x6dd7fd} intensity={1} />

        <Suspense fallback={null}>
          <RotatingOrb emissiveColor={emissiveColor} />
        </Suspense>
      </Canvas>
    </div>
  );
}
