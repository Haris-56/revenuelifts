'use client';

import { useRef, type ReactNode } from 'react';

/**
 * Lightweight 3D tilt wrapper.
 * Rotates its children in 3D space toward the pointer for a parallax / depth feel.
 */
export default function Tilt3D({
    children,
    className = '',
    max = 10,
    scale = 1.02,
}: {
    children: ReactNode;
    className?: string;
    max?: number;
    scale?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const raf = useRef<number | null>(null);

    const handleMove = (e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rotateY = (px - 0.5) * (max * 2);
        const rotateX = (0.5 - py) * (max * 2);
        if (raf.current) cancelAnimationFrame(raf.current);
        raf.current = requestAnimationFrame(() => {
            el.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
        });
    };

    const handleLeave = () => {
        const el = ref.current;
        if (!el) return;
        if (raf.current) cancelAnimationFrame(raf.current);
        el.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className={className}
            style={{ transformStyle: 'preserve-3d', transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)', willChange: 'transform' }}
        >
            {children}
        </div>
    );
}
