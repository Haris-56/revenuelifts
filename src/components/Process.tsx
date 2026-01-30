'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { CornerRightDown, ArrowRight, ArrowDown } from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "Strategy & Analysis",
        desc: "We begin by listening, gaining a deep understanding of your goals, audience, and challenges through research."
    },
    {
        id: "02",
        title: "Design & Development",
        desc: "We breathe life into concepts, crafting intuitive UIs and robust code. Every pixel is purposeful."
    },
    {
        id: "03",
        title: "Testing & Launch",
        desc: "Rigorous testing across devices ensures a flawless experience. We manage the deployment for a smooth go-live."
    },
    {
        id: "04",
        title: "Growth & Scale",
        desc: "Post-launch, we monitor performance and iterate based on real user data to drive continuous growth."
    }
];

export default function Process() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) {
        // Vertical Layout for Mobile
        return (
            <section id="process" className="section-padding bg-transparent relative">
                <div className="container">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold leading-tight uppercase mb-4">
                            Our Working <br />
                            <span className="text-primary">Process</span>
                        </h2>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <span>Step by step</span>
                            <ArrowDown className="w-4 h-4" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-[#111] border border-white/10 rounded-[2rem] p-8 relative overflow-hidden">
                                <span className="absolute top-4 right-6 text-6xl font-black text-white/5">{step.id}</span>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Horizontal Scroll for Desktop
    return (
        <section id="process" ref={targetRef} className="relative h-[300vh] bg-transparent text-white">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                <div className="container mb-8 px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] uppercase tracking-tighter">
                            Our Working <br />
                            <span className="text-gradient-primary">Process</span>
                        </h2>
                        <div className="flex items-center gap-4 text-gray-500 mb-2 animate-bounce">
                            <span>Scroll Down</span>
                            <CornerRightDown />
                        </div>
                    </div>
                </div>

                <div className="w-full overflow-hidden pl-8 md:pl-[10vw]">
                    <motion.div style={{ x }} className="flex gap-12 w-[max-content]">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="w-[60vw] md:w-[600px] h-[50vh] md:h-[500px] bg-[#111] border border-white/10 rounded-[3rem] p-8 md:p-12 flex flex-col justify-between hover:border-primary/50 transition-colors relative group"
                            >
                                <span className="absolute top-12 right-12 text-8xl font-black text-white/5 select-none transition-colors group-hover:text-primary/10">{step.id}</span>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform bg-primary group-hover:bg-primary group-hover:text-black">
                                        <ArrowRight className="w-8 h-8 text-white group-hover:text-black" />
                                    </div>
                                    <h3 className="text-4xl font-bold mb-6">{step.title}</h3>
                                    <p className="text-xl text-gray-400 leading-relaxed max-w-sm">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
