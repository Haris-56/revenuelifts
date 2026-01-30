'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Background() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const gridY = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div ref={ref} className="fixed inset-0 z-[-1] overflow-hidden bg-[#020202]">
            {/* Layer 1: Atmospheric Morphing Gradients */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 150, -100, 0],
                        y: [0, -100, 150, 0],
                        rotate: [0, 90, 180, 0],
                    }}
                    transition={{
                        duration: 45,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-primary/10 rounded-full blur-[140px]"
                />
                <motion.div
                    animate={{
                        x: [0, -120, 100, 0],
                        y: [0, 150, -80, 0],
                        rotate: [0, -90, -180, 0],
                    }}
                    transition={{
                        duration: 55,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-orange-600/5 rounded-full blur-[140px]"
                />
            </div>

            {/* Layer 2: Frosted Glass Effect */}
            <div className="absolute inset-0 backdrop-blur-[80px]" />

            {/* Layer 3: Elegant Floating Grid */}
            <motion.div
                style={{
                    y: gridY,
                    backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
                className="absolute inset-0 opacity-[0.12] pointer-events-none transition-opacity duration-1000"
            >
                {/* Subconscious Grid Pulse */}
                <motion.div
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-transparent"
                />
            </motion.div>

            {/* Layer 4: Distant Grain Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            {/* Vibe: Deep shadows for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020202]/80" />
        </div>
    );
}
