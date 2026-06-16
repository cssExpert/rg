"use client";

import { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import {
  Group,
  Mesh,
  MeshStandardMaterial,
  Color,
  Box3,
  Vector3,
} from "three";

const LIME = new Color("#ceff00");

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url, "/draco/");
  const ref = useRef<Group>(null);

  useEffect(() => {
    // Center model at origin via bounding box
    const box = new Box3().setFromObject(scene);
    const center = box.getCenter(new Vector3());
    scene.position.sub(center);

    // Collect meshes first, then apply material
    const meshes: Mesh[] = [];
    scene.traverse((child) => {
      if (child instanceof Mesh) meshes.push(child);
    });

    meshes.forEach((child) => {
      child.material = new MeshStandardMaterial({
        color: LIME,
        emissive: LIME,
        emissiveIntensity: 0.12,
        metalness: 0.6,
        roughness: 0.3,
      });
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.4;
  });

  return <primitive ref={ref} object={scene} />;
}

useGLTF.preload("/RG.glb", "/draco/");

export default function HeroModel({ url = "/model.glb" }: { url?: string }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.5], fov: 45 }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} />
        <directionalLight position={[-5, -2, -5]} intensity={0.4} color="#ceff00" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
        <Model url={url} />
      </Suspense>
    </Canvas>
  );
}
