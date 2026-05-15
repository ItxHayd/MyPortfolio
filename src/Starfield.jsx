import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Stars({ count = 5000 }) {
  const points = useRef();

  
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 2000; // x
      arr[i * 3 + 1] = (Math.random() - 0.5) * 2000; // y
      arr[i * 3 + 2] = (Math.random() - 0.5) * 2000; // z
    }

    return arr;
  }, [count]);

  useFrame(() => {
    // subtle rotation for depth effect
    points.current.rotation.y += 0.0008;
    points.current.rotation.x += 0.0002;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="white"
        size={1.2}
        sizeAttenuation
        transparent
      />
    </points>
  );
}

export default function Starfield() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "black",
      }}
      camera={{ position: [0, 0, 1] }}
    >
      <Stars count={4000} />
    </Canvas>
  );
}