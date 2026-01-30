'use client';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowUpRight, Play, Star } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent">

            <div className="container relative z-10 px-4 mx-auto text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 shadow-2xl"
                >
                    <span className="flex h-2 w-2 rounded-full bg-primary" />
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-white/70">Scale Your Revenue Today</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[12vw] md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-10"
                >
                    WE BUILD <br />
                    <span className="text-gradient-primary">PROFITABLE</span> <br />
                    EXPERIENCES.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 font-medium"
                >
                    Engineered design and SEO systems built to turn your business into a
                    market-dominating lead generator.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link href="/pricing" className="group relative px-10 py-5 bg-primary rounded-2xl overflow-hidden active:scale-95 transition-transform shadow-2xl shadow-primary/20">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative text-white font-black uppercase tracking-widest flex items-center gap-3">
                            Explore Plans <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>

                    <button className="group flex items-center gap-4 px-10 py-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all active:scale-95">
                        <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <Play className="w-4 h-4 fill-current" />
                        </span>
                        <span className="text-white font-black uppercase tracking-widest text-sm">Watch Showreel</span>
                    </button>
                </motion.div>

                {/* Trust Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-24 pt-10 border-t border-white/5 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                >
                    <TrustBadge label="Top Rated Design" />
                    <TrustBadge label="SEO Excellence" />
                    <TrustBadge label="24/7 Support" />
                    <TrustBadge label="Fast Turnaround" />
                </motion.div>
            </div>

            {/* Side Parallax Elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-[5%] hidden xl:block w-32 h-32 glass-panel rounded-3xl p-4 flex flex-col items-center justify-center gap-2 border-primary/20"
            >
                <Star className="text-primary fill-primary w-8 h-8" />
                <span className="text-white font-black text-xl">4.9/5</span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Rating</span>
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 left-[5%] hidden xl:block w-40 h-24 glass-panel rounded-3xl p-4 flex flex-col justify-center border-white/10"
            >
                <div className="flex gap-1 mb-2">
                    {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30" />)}
                </div>
                <span className="text-white font-black text-sm uppercase tracking-tighter">50+ Active Clients</span>
            </motion.div>
        </section>
    );
}

function TrustBadge({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-black uppercase tracking-widest text-white">{label}</span>
        </div>
    );
}
