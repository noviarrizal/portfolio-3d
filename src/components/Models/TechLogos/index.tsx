import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";
import { TechStackIcon } from "../../../sections/techStack";

interface TechIconProps {
  model: TechStackIcon;
}

const TechIcon = ({ model }: TechIconProps) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        const mesh = child as THREE.Mesh;
        if (mesh.isMesh && mesh.name === "Object_5") {
          mesh.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene]);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group
          scale={model.scale}
          rotation={model.rotation as [number, number, number]}
        >
          <primitive object={scene.scene} />
        </group>
      </Float>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIcon;
