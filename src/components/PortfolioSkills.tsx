'use client';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe2, Layers, Layout, MessageSquare, Terminal, Wrench } from 'lucide-react';

const skillCategories = [
    {
        title: "Primary Stack",
        icon: <Layers className="w-5 h-5" />,
        skills: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
        title: "Secondary Tech",
        icon: <Cpu className="w-5 h-5" />,
        skills: ["React", "Playwright", "Puppeteer", "Vercel Hosting", "Node.js", "Express"]
    },
    {
        title: "Additional Props",
        icon: <Wrench className="w-5 h-5" />,
        skills: ["WordPress", "Figma (UI/UX)", "AI Engineering", "Vibe Coder", "Productivity Tools"]
    },
    {
        title: "Academic Focus",
        icon: <Terminal className="w-5 h-5" />,
        skills: ["C++", "Java", "Python", "Android (Java)"]
    }
];

export default function PortfolioSkills() {
    return (
        <section id="skills" className="section-padding bg-[#070707]">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-20 items-start">
                    {/* Left: Heading */}
                    <div className="lg:w-1/3">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Technical Edge</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase mb-8 tracking-tighter">
                            Architecting <br />
                            <span className="text-gradient-primary">Modern</span> Solutions.
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10">
                            Equipped with a diverse technical arsenal ranging from low-level systems programming to modern high-performance web frameworks and AI automation.
                        </p>
                        <div className="flex items-center gap-4 text-white/50 text-sm font-bold uppercase tracking-widest">
                            <Code2 className="w-5 h-5 text-primary" />
                            <span>Full-Stack Versatility</span>
                        </div>
                    </div>

                    {/* Right: Skills Grid */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        {skillCategories.map((cat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 rounded-[2rem] border border-white/5 bg-[#0a0a0a] hover:border-primary/20 transition-colors group"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase tracking-tight">{cat.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill, sIndex) => (
                                        <span
                                            key={sIndex}
                                            className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-bold text-gray-400 hover:text-white hover:border-white/20 transition-all"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
