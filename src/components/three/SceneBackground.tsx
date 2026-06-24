'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float, MeshDistortMaterial, Icosahedron, Torus, Octahedron } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

const BRAND = '#FF5500';

/* Drifting starfield that gently reacts to the pointer */
function StarField() {
    const ref = useRef<THREE.Points>(null);

    const positions = useMemo(() => {
        const count = 1400;
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const r = 4 + Math.random() * 9;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            arr[i * 3 + 2] = r * Math.cos(phi);
        }
        return arr;
    }, []);

    useFrame((state, delta) => {
        if (!ref.current) return;
        ref.current.rotation.y += delta * 0.03;
        ref.current.rotation.x += delta * 0.012;
        // subtle pointer parallax
        ref.current.rotation.y += (state.pointer.x * 0.15 - ref.current.rotation.y * 0) * 0;
    });

    return (
        <group rotation={[0, 0, Math.PI / 6]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.022}
                    sizeAttenuation
                    depthWrite={false}
                    opacity={0.55}
                />
            </Points>
        </group>
    );
}

/* Central morphing wireframe core */
function Core() {
    const ref = useRef<THREE.Mesh>(null);
    useFrame((state, delta) => {
        if (!ref.current) return;
        ref.current.rotation.y += delta * 0.18;
        ref.current.rotation.x += delta * 0.08;
    });
    return (
        <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
            <Icosahedron ref={ref} args={[2.1, 4]} position={[0, 0, 0]}>
                <MeshDistortMaterial
                    color={BRAND}
                    wireframe
                    distort={0.35}
                    speed={1.6}
                    roughness={0.4}
                    metalness={0.2}
                    transparent
                    opacity={0.45}
                />
            </Icosahedron>
        </Float>
    );
}

/* Solid glowing inner sphere */
function InnerOrb() {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1.2}>
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.85, 48, 48]} />
                <meshStandardMaterial
                    color={BRAND}
                    emissive={BRAND}
                    emissiveIntensity={1.4}
                    roughness={0.2}
                    metalness={0.6}
                />
            </mesh>
        </Float>
    );
}

/* Scattered floating accent geometry */
function FloatingShapes() {
    return (
        <>
            <Float speed={1.2} rotationIntensity={2} floatIntensity={2} position={[-4.5, 2, -2]}>
                <Torus args={[0.5, 0.18, 16, 48]}>
                    <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.7} wireframe />
                </Torus>
            </Float>
            <Float speed={1.6} rotationIntensity={2} floatIntensity={1.6} position={[4.8, -1.6, -1]}>
                <Octahedron args={[0.7]}>
                    <meshStandardMaterial color={BRAND} emissive={BRAND} emissiveIntensity={0.5} roughness={0.4} metalness={0.4} />
                </Octahedron>
            </Float>
            <Float speed={1} rotationIntensity={1.4} floatIntensity={2.2} position={[3.6, 3, -3]}>
                <Icosahedron args={[0.45, 0]}>
                    <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.8} wireframe />
                </Icosahedron>
            </Float>
            <Float speed={1.8} rotationIntensity={1.8} floatIntensity={1.8} position={[-4, -2.4, -2.5]}>
                <Octahedron args={[0.4]}>
                    <meshStandardMaterial color={BRAND} emissive={BRAND} emissiveIntensity={0.6} roughness={0.3} metalness={0.5} />
                </Octahedron>
            </Float>
        </>
    );
}

/* Smoothly steers the whole scene toward the pointer for parallax depth */
function Rig({ children }: { children: React.ReactNode }) {
    const group = useRef<THREE.Group>(null);
    const { pointer, viewport } = useThree();
    useFrame((_, delta) => {
        if (!group.current) return;
        const targetX = pointer.x * 0.4;
        const targetY = pointer.y * 0.3;
        group.current.rotation.y += (targetX - group.current.rotation.y) * Math.min(1, delta * 2.5);
        group.current.rotation.x += (-targetY - group.current.rotation.x) * Math.min(1, delta * 2.5);
    });
    return <group ref={group}>{children}</group>;
}

export default function SceneBackground() {
    return (
        <Canvas
            className="!absolute inset-0"
            dpr={[1, 1.6]}
            camera={{ position: [0, 0, 7], fov: 50 }}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
            <Suspense fallback={null}>
                <fog attach="fog" args={['#030303', 8, 16]} />
                <ambientLight intensity={0.4} />
                <pointLight position={[5, 5, 5]} intensity={40} color={BRAND} distance={30} />
                <pointLight position={[-6, -4, 2]} intensity={20} color="#ffffff" distance={25} />
                <Rig>
                    <Core />
                    <InnerOrb />
                    <FloatingShapes />
                </Rig>
                <StarField />
            </Suspense>
        </Canvas>
    );
}
