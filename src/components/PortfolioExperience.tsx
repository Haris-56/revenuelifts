'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Milestone } from 'lucide-react';

export default function PortfolioExperience() {
    return (
        <section id="experience" className="section-padding relative">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Education Section */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <GraduationCap className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Academic Journey</h3>
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Base of Knowledge</p>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <TimelineItem
                                title="BS Computer Science"
                                subtitle="The University of Faisalabad (TUF)"
                                duration="November 2022 – Present"
                                description="Currently in 8th Semester. Maintaining a consistent high academic standing while actively building industry-level projects."
                                highlights={["CGPA: 3.75", "Final Year Project: Omniverse AI"]}
                            />
                        </div>
                    </div>

                    {/* Professional & Skills Section */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
                                <Award className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Professional Profile</h3>
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Execution & Results</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-[2rem] border border-white/5 bg-[#0a0a0a] relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-6 text-white/5 group-hover:text-primary/10 transition-colors">
                                    <Milestone className="w-24 h-24" />
                                </div>
                                <h4 className="text-2xl font-black text-white uppercase mb-4 tracking-tight">~4 Years Experience</h4>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    A track record of delivering end-to-end full-stack applications. Specialized in Next.js and automation engineering.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-xl bg-white/5 text-[10px] font-black uppercase text-primary border border-primary/20">Strong Communication</div>
                                    <div className="px-4 py-2 rounded-xl bg-white/5 text-[10px] font-black uppercase text-white/70 border border-white/10">Full Stack Expert</div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="p-8 rounded-[2rem] border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
                            >
                                <h4 className="text-2xl font-black text-white uppercase mb-2 tracking-tight">Career Objective</h4>
                                <p className="text-white/80 leading-relaxed font-medium">
                                    Actively seeking a <strong>Full Stack / Next.js Developer</strong> role where I can contribute to high-impact projects and bring architectural excellence to the team.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ title, subtitle, duration, description, highlights }: { title: string, subtitle: string, duration: string, description: string, highlights: string[] }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-10 border-l border-white/10"
        >
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-[#030303]" />
            <span className="text-primary text-xs font-black uppercase tracking-widest mb-2 block">{duration}</span>
            <h4 className="text-3xl font-black text-white uppercase mb-2 tracking-tight">{title}</h4>
            <p className="text-white font-bold text-lg mb-4">{subtitle}</p>
            <p className="text-gray-400 leading-relaxed mb-6 italic">"{description}"</p>
            <div className="flex flex-wrap gap-3">
                {highlights.map((h, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white/90">
                        {h}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
