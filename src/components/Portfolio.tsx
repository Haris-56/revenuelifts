'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const projects = [
    {
        title: "Nimo WordPress Theme",
        category: "WordPress / Development",
        color: "from-[#1a1a1a] to-[#2a2a2a]"
    },
    {
        title: "Fintech Dashboard",
        category: "Next.js / Dashboard",
        color: "from-[#0f172a] to-[#1e293b]"
    },
    {
        title: "E-Commerce Drift",
        category: "Shopify / Design",
        color: "from-[#3f1606] to-[#632205]"
    }
];

export default function Portfolio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section ref={containerRef} id="work" className="section-padding relative overflow-hidden">
            {/* Background Large Text Parallax */}
            <motion.div style={{ y }} className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 opacity-50">
                <h2 className="text-[12vw] md:text-[15vw] font-black text-transparent leading-none tracking-tighter uppercase whitespace-nowrap"
                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.05)' }}>
                    Some of Works
                </h2>
            </motion.div>

            <div className="container relative z-10 pt-20">
                <div className="text-center mb-24 relative">
                    <div className="inline-flex items-center justify-center gap-2 mb-6 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="uppercase tracking-[0.3em] text-[10px] font-black text-white/70">Selected Works</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-[0.85] uppercase">
                        Digital <span className="text-gradient-primary">Craftsmanship</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-24 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <div key={index} className="group md:odd:translate-x-[-2rem] md:even:translate-x-[2rem]">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Card Container */}
                                <div className="relative rounded-[2rem] overflow-hidden bg-[#0A0A0A] border border-white/5 group-hover:border-primary/30 transition-all duration-500 shadow-2xl">

                                    {/* Image Area */}
                                    <div className={`relative aspect-[4/3] md:aspect-[16/9] bg-gradient-to-br ${project.color} overflow-hidden`}>

                                        {/* Center Text (Mock Image) */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-6xl md:text-[8rem] font-black text-white mix-blend-overlay opacity-10 group-hover:scale-110 transition-transform duration-700">
                                                {project.title.split(' ')[0]}
                                            </span>
                                        </div>

                                        {/* Floating UI Elements */}
                                        <div className="absolute top-6 right-6 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
                                            <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold hover:scale-110 transition-transform">
                                                <ArrowRight className="w-5 h-5 -rotate-45" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Content Bar */}
                                    <div className="p-8 md:px-10 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#111]">
                                        <div>
                                            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="px-6 py-2 rounded-full border border-white/10 text-sm font-medium hover:bg-white hover:text-black transition-colors cursor-pointer">
                                                View Case Study
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="mt-32 text-center">
                    <button className="btn btn-outline text-lg px-12 py-5 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all">View All Work</button>
                </div>
            </div>
        </section>
    );
}
