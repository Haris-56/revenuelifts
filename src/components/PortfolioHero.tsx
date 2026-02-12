'use client';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Github, Linkedin, Mail, Code2, Cpu, Rocket, Terminal } from 'lucide-react';
import Link from 'next/link';

function SocialIcon({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors group"
        >
            <span className="w-5 h-5 group-hover:scale-110 transition-transform">{icon}</span>
            <span className="text-xs font-black uppercase tracking-widest hidden sm:block">{label}</span>
        </a>
    );
}

function FloatingTechTag({ icon, label, className, delay = 0 }: { icon: React.ReactNode, label: string, className: string, delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
            }}
            transition={{
                opacity: { duration: 0.5, delay },
                scale: { duration: 0.5, delay },
                y: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className={`absolute z-30 glass-panel px-4 py-2 rounded-xl border-white/5 flex items-center gap-2 pointer-events-none group ${className}`}
        >
            <div className="text-primary group-hover:rotate-12 transition-transform duration-300">{icon}</div>
            <span className="text-white font-black text-[9px] uppercase tracking-tighter">{label}</span>
        </motion.div>
    );
}

export default function PortfolioHero() {
    return (
        <section className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden bg-transparent">
            {/* Background Decorative Text */}
            <div className="absolute top-1/4 left-10 pointer-events-none select-none opacity-[0.03] z-0">
                <h2 className="text-[20vw] font-black leading-none uppercase tracking-tighter">Haris</h2>
            </div>

            <div className="container relative z-10 px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left: Content */}
                    <div className="lg:col-span-8 text-left order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6 md:mb-8"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-primary" />
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/70">Full Stack & Automation Expert</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="mb-6 md:mb-8"
                        >
                            <h2 className="text-lg md:text-2xl font-bold text-primary mb-3 md:mb-4 tracking-widest uppercase">Muhammad Haris Bin Ahson</h2>
                            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[110px] xl:text-[120px] font-black text-white leading-[1] md:leading-[0.8] tracking-tighter uppercase mb-4">
                                CRAFTING <br />
                                <span className="text-gradient-primary">NEXT-GEN</span> <br />
                                WEB FLOWS.
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-gray-400 text-base md:text-xl max-w-xl leading-relaxed mb-10 md:mb-12 font-medium"
                        >
                            ~4 years of engineering robust, scalable architectures.
                            Specialized in Next.js, AI automation, and premium frontend systems.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6"
                        >
                            <Link href="#projects" className="group relative px-8 md:px-10 py-4 md:py-5 bg-primary rounded-2xl overflow-hidden active:scale-95 transition-transform shadow-2xl shadow-primary/20 text-center">
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative text-white text-sm md:text-base font-black uppercase tracking-widest flex items-center justify-center gap-3">
                                    Launch Projects <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <button className="group flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all active:scale-95">
                                <Download className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-white text-sm md:text-base font-black uppercase tracking-widest">Download CV</span>
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="mt-12 md:mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center gap-6 md:gap-8"
                        >
                            <SocialIcon icon={<Github />} href="https://github.com/Haris-56" label="GitHub" />
                            <SocialIcon icon={<Linkedin />} href="https://www.linkedin.com/in/haris-web" label="LinkedIn" />
                            <SocialIcon icon={<Mail />} href="mailto:haris.bin.ahson@gmail.com" label="Email" />
                        </motion.div>
                    </div>

                    {/* Right: Integrated Profile Image */}
                    <div className="lg:col-span-4 relative order-1 lg:order-2 flex justify-center lg:justify-end mb-12 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none"
                        >
                            {/* Decorative Background Effects */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[100px] rounded-full animate-pulse hidden sm:block" />

                            {/* Image Container */}
                            <div className="relative aspect-[3/4] rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] shadow-3xl group transition-all duration-700 hover:border-primary/40">
                                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden p-2">
                                    <img
                                        src="/haris.jpeg"
                                        alt="Muhammad Haris"
                                        className="w-full h-full object-cover rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 transition-opacity duration-700" />
                                </div>

                                {/* Experience Tag */}
                                <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#0B0B0B] border border-white/10 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-3xl z-50 ring-2 sm:ring-4 ring-black">
                                    <div className="text-primary font-black text-lg sm:text-2xl italic leading-none">~4Y</div>
                                    <div className="text-white/40 text-[8px] sm:text-[9px] font-black uppercase tracking-widest mt-1">Experience</div>
                                </div>
                            </div>

                            {/* Floating Tech Stack Icons - Hidden on mobile */}
                            <div className="hidden sm:block">
                                <FloatingTechTag
                                    icon={<Terminal className="w-3 h-3" />}
                                    label="TypeScript"
                                    className="-top-12 -left-8"
                                    delay={0.5}
                                />
                                <FloatingTechTag
                                    icon={<Code2 className="w-3 h-3" />}
                                    label="Next.js 15"
                                    className="-top-14 right-0"
                                    delay={0.7}
                                />
                                <FloatingTechTag
                                    icon={<Cpu className="w-3 h-3" />}
                                    label="AI Agents"
                                    className="top-1/2 -right-12 translate-y-[-50%]"
                                    delay={0.9}
                                />
                                <FloatingTechTag
                                    icon={<Rocket className="w-3 h-3" />}
                                    label="React"
                                    className="-bottom-8 left-12"
                                    delay={1.1}
                                />
                                <FloatingTechTag
                                    icon={<Code2 className="w-3 h-3" />}
                                    label="Node.js"
                                    className="bottom-1/4 -left-16"
                                    delay={1.3}
                                />
                                <FloatingTechTag
                                    icon={<Cpu className="w-3 h-3" />}
                                    label="Playwright"
                                    className="top-1/4 -right-16"
                                    delay={1.5}
                                />
                            </div>

                            {/* CGPA Badge */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -right-4 glass-panel p-4 sm:p-5 rounded-2xl border-white/5 hidden xl:block z-30 shadow-2xl"
                            >
                                <div className="text-primary font-black text-2xl leading-none">3.75</div>
                                <div className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-1">CGPA @ TUF</div>
                            </motion.div>
                        </motion.div>

                        {/* Profile Aura */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-primary/5 blur-[120px] rounded-full z-0 pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
