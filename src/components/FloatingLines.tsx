import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

interface FloatingLinesProps {
  lineCount?: number;
  lineDistance?: number;
  animationSpeed?: number;
  bendStrength?: number;
}

const WaveLines = ({ 
  lineCount = 8, 
  lineDistance = 5, 
  animationSpeed = 1,
  bendStrength = -3
}: FloatingLinesProps) => {
  const groupRef = useRef<THREE.Group>(null);
  
  const lines = useMemo(() => {
    const linesArray = [];
    const segments = 100;
    
    for (let i = 0; i < lineCount; i++) {
      const points = [];
      const offset = (i - lineCount / 2) * lineDistance;
      
      for (let j = 0; j <= segments; j++) {
        const x = (j / segments) * 80 - 40;
        const y = offset;
        const z = 0;
        points.push(new THREE.Vector3(x, y, z));
      }
      
      const curve = new THREE.CatmullRomCurve3(points);
      const curvePoints = curve.getPoints(segments * 2);
      
      linesArray.push({
        points: curvePoints,
        offset: i * 0.2,
      });
    }
    
    return linesArray;
  }, [lineCount, lineDistance]);
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime * animationSpeed;
      
      groupRef.current.children.forEach((line, index) => {
        const geometry = line.geometry as THREE.BufferGeometry;
        const positions = geometry.attributes.position.array as Float32Array;
        
        const lineData = lines[index];
        lineData.points.forEach((point, i) => {
          const offset = lineData.offset;
          const waveOffset = Math.sin(time + point.x * 0.1 + offset) * bendStrength;
          positions[i * 3 + 1] = point.y + waveOffset;
        });
        
        geometry.attributes.position.needsUpdate = true;
      });
    }
  });
  
  return (
    <group ref={groupRef}>
      {lines.map((line, index) => {
        const points = line.points.map(p => [p.x, p.y, p.z] as [number, number, number]);
        const geometry = new THREE.BufferGeometry().setFromPoints(
          points.map(p => new THREE.Vector3(...p))
        );
        
        // Create gradient color based on position
        const hue = (index / lineCount) * 60 + 180; // Cyan to purple range
        const color = new THREE.Color(`hsl(${hue}, 100%, 60%)`);
        
        return (
          <primitive key={index} object={new THREE.Line(
            geometry,
            new THREE.LineBasicMaterial({ 
              color, 
              transparent: true, 
              opacity: 0.6 
            })
          )} />
        );
      })}
    </group>
  );
};

export const FloatingLines = (props: FloatingLinesProps) => {
  return (
    <div className="absolute inset-0 opacity-30">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <WaveLines {...props} />
      </Canvas>
    </div>
  );
};
