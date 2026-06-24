'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, TorusKnot, Sphere } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

const BRAND = '#FF5500';

function Knot() {
    const ref = useRef<THREE.Mesh>(null);
    useFrame((state, delta) => {
        if (!ref.current) return;
        ref.current.rotation.y += delta * 0.35;
        ref.current.rotation.z += delta * 0.1;
        // ease toward pointer for a parallax feel
        ref.current.rotation.x += (state.pointer.y * 0.4 - ref.current.rotation.x) * Math.min(1, delta * 2);
    });
    return (
        <Float speed={2} rotationIntensity={0.8} floatIntensity={1.4}>
            <TorusKnot ref={ref} args={[1.05, 0.34, 220, 32]}>
                <MeshDistortMaterial
                    color={BRAND}
                    emissive={BRAND}
                    emissiveIntensity={0.45}
                    distort={0.28}
                    speed={2.2}
                    roughness={0.18}
                    metalness={0.85}
                />
            </TorusKnot>
        </Float>
    );
}

function Halo() {
    return (
        <Float speed={1.2} rotationIntensity={1.6} floatIntensity={2}>
            <Sphere args={[0.28, 32, 32]} position={[2, 1.4, -1]}>
                <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.9} />
            </Sphere>
        </Float>
    );
}

export default function HeroObject() {
    return (
        <Canvas
            className="!absolute inset-0 pointer-events-none"
            dpr={[1, 1.6]}
            camera={{ position: [0, 0, 5], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <pointLight position={[4, 4, 4]} intensity={45} color={BRAND} distance={20} />
                <pointLight position={[-4, -2, 3]} intensity={25} color="#ffffff" distance={18} />
                <Knot />
                <Halo />
            </Suspense>
        </Canvas>
    );
}
