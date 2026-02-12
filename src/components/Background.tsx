'use client';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function Background() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    // Interactive Cursor Spotlight Systems
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const gridY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    // Hyper-Responsive Tail Position (Quick & Short)
    const trailX = useSpring(mouseX, { damping: 25, stiffness: 350 });
    const trailY = useSpring(mouseY, { damping: 25, stiffness: 350 });

    // Velocity & Shape Dynamics
    const angle = useTransform(
        [mouseX, trailX, mouseY, trailY],
        ([mx, tx, my, ty]) => {
            const dx = (mx as number) - (tx as number);
            const dy = (my as number) - (ty as number);
            if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return 0;
            return Math.atan2(dy, dx) * (180 / Math.PI);
        }
    );

    const stretch = useTransform(
        [mouseX, trailX, mouseY, trailY],
        ([mx, tx, my, ty]) => {
            const dx = (mx as number) - (tx as number);
            const dy = (my as number) - (ty as number);
            const dist = Math.sqrt(dx * dx + dy * dy);
            // Compact stretch for "short" look
            return Math.min(1 + dist / 40, 2.5);
        }
    );

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div ref={ref} className="fixed inset-0 z-[-1] overflow-hidden bg-[#030303]">
            {/* Layer 1: PROPER STRUCTURAL GRID (Visible & Parallax) */}
            <motion.div
                style={{ y: gridY }}
                className="absolute inset-[-100px] z-0 pointer-events-none"
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255, 255, 255, 0.18) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.18) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                    }}
                />
            </motion.div>

            {/* Layer 2: Texture & Starfield */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(80)].map((_, i) => (
                    <div
                        key={`dot-${i}`}
                        className="absolute bg-white rounded-full opacity-[0.2]"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: '1px',
                            height: '1px',
                        }}
                    />
                ))}
            </div>

            {/* Layer 3: HYPER-RESPONSIVE CURSOR (Short & Quick) */}
            <motion.div
                className="absolute z-10 pointer-events-none"
                style={{
                    x: mouseX,
                    y: mouseY,
                    rotate: angle,
                    scaleX: stretch,
                    scaleY: useTransform(stretch, s => 1 + (s as number - 1) * 0.1),
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                {/* The Stretching Aura Beam (Compact) */}
                <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-[150px] h-[80px]"
                    style={{
                        background: 'linear-gradient(to left, rgba(255, 85, 0, 0.7) 0%, rgba(255, 85, 0, 0.2) 60%, transparent 100%)',
                        filter: 'blur(30px)',
                        borderRadius: '100% 50% 50% 100%',
                    }}
                />

                {/* The Hot Core Head Point */}
                <div
                    className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-[60px] h-[60px] opacity-[0.9]"
                    style={{
                        background: 'radial-gradient(circle, rgba(255, 85, 0, 1) 10%, rgba(255, 85, 0, 0.4) 40%, transparent 80%)',
                        filter: 'blur(10px)',
                        borderRadius: '100%',
                    }}
                />
            </motion.div>

            {/* Final Cinematic Pass */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030303]/80 z-[60] pointer-events-none" />
        </div>
    );
}
