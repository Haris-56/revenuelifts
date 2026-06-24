'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Global GSAP ScrollTrigger driver.
 * Targets elements via data attributes so it never fights the
 * existing Framer Motion animations on other elements:
 *   data-gsap="reveal"   -> fade + 3D rise on scroll-in
 *   data-gsap="parallax" -> vertical parallax tied to scroll
 *   data-gsap="spin"     -> rotation scrubbed by scroll
 */
export default function GsapEnhancer() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Reveal on enter
            gsap.utils.toArray<HTMLElement>('[data-gsap="reveal"]').forEach((el) => {
                gsap.fromTo(
                    el,
                    { autoAlpha: 0, y: 70, rotateX: -18, transformPerspective: 900 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        rotateX: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
                    }
                );
            });

            // Parallax drift
            gsap.utils.toArray<HTMLElement>('[data-gsap="parallax"]').forEach((el) => {
                const speed = parseFloat(el.dataset.speed || '-12');
                gsap.to(el, {
                    yPercent: speed,
                    ease: 'none',
                    scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
                });
            });

            // Scroll-scrubbed spin
            gsap.utils.toArray<HTMLElement>('[data-gsap="spin"]').forEach((el) => {
                gsap.to(el, {
                    rotate: 360,
                    ease: 'none',
                    scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return null;
}
