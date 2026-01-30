'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "RevenueLifts transformed our online presence. Their design sense is impeccable, and the SEO results speak for themselves.",
        author: "Sarah Jenkins",
        role: "CEO, TechFlow",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        quote: "The team is incredibly professional. They delivered a complex e-commerce site ahead of schedule and it looks absolutely stunning.",
        author: "Michael Chen",
        role: "Founder, GearUp",
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        quote: "Exceptional quality and speed. The best agency we have worked with in years.",
        author: "David Miller",
        role: "VP Marketing, SaaS Co",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        quote: "A game changer for our brand identity. The new website is converting at 2x our previous rate.",
        author: "Emma Wilson",
        role: "Director, FashionNova",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-transparent overflow-hidden relative">
            <div className="container relative z-10 mb-16">
                <div className="text-center">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
                    <h2 className="text-4xl md:text-6xl font-bold">Trusted by <span className="text-gradient-primary">Clients</span></h2>
                </div>
            </div>

            {/* Infinite Marquee */}
            <div className="flex w-full overflow-hidden mask-gradient-sides">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex gap-8 w-max px-4"
                >
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="w-[350px] md:w-[450px] p-8 md:p-10 rounded-[2rem] bg-[#0a0a0a] border border-white/5 hover:border-primary/30 transition-colors relative shrink-0"
                        >
                            <Quote className="absolute top-8 right-8 w-10 h-10 text-primary/10" />

                            <div className="mb-6 flex gap-1">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                                ))}
                            </div>

                            <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 opacity-80">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{t.author}</h4>
                                    <p className="text-xs text-uppercase tracking-wider text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
