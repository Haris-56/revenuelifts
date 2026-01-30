'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function About() {
    return (
        <section className="section-padding relative z-10">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                        >
                            <span className="text-primary font-bold">{`{ }`}</span>
                            <span className="text-sm font-semibold tracking-widest uppercase">About Us</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase"
                        >
                            Our process is <br />
                            <span className="text-white/20">REFINED,</span> <span className="text-white">POWERFUL,</span> <br />
                            and <span className="text-gradient-primary">SCALABLE.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-gray-400 leading-relaxed max-w-lg"
                        >
                            We don't just build websites; we build digital legacies. Our approach combines data-driven strategy with world-class aesthetics.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-4 pt-4"
                        >
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-[#FF5500] text-[#FF5500]" />
                                ))}
                            </div>
                            <span className="font-bold text-lg">5.0</span>
                            <span className="text-gray-500">(120+ client reviews)</span>
                        </motion.div>
                    </div>

                    {/* Right Content - Cards - Hover Physics */}
                    <div className="flex flex-col gap-6">
                        {[
                            { title: "Customer-Centric", desc: "Your goals are our obsession. We build around your needs." },
                            { title: "Results-Driven", desc: "Design that looks good only matters if it works. We focus on ROI." },
                            { title: "Collaboration", desc: "We work with you, not just for you. Transparency is key." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, type: 'spring' }}
                                whileHover={{ width: '105%', x: -10, backgroundColor: 'rgba(255,255,255,0.08)' }}
                                className="glass-panel p-8 rounded-2xl flex items-start gap-6 cursor-pointer w-full"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold text-xl">
                                    {i + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
