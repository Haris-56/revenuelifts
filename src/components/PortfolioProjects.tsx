'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Bot, ShoppingBag, Search, Globe, Layout } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const projects = [
    {
        title: "Omniverse AI",
        tagline: "SaaS – AI-Powered Outreach",
        category: "Full Stack / AI Automation",
        description: "A SaaS platform that helps job seekers and freelancers automate outreach and personal branding using AI agents across Instagram, LinkedIn, and Facebook.",
        url: "https://omniverse-eight.vercel.app/",
        icon: <Bot className="w-10 h-10" />,
        color: "from-[#1a1a1a] to-[#2a2a2a]",
        features: ["Multi-Channel Automation", "AI Agent Communication", "Organic Reach Optimization"]
    },
    {
        title: "YT Champs",
        tagline: "WordPress / Content Platform",
        category: "CMS / WordPress Development",
        description: "A high-traffic WordPress platform built for content creators, featuring customized themes and optimized performance for high engagement.",
        url: "https://ytchamps.com",
        icon: <Layout className="w-10 h-10" />,
        color: "from-[#1e1e1e] to-[#2d2d2d]",
        features: ["SEO Optimization", "Custom Theme", "High Traffic Ready"]
    },
    {
        title: "DiscountTCoupon",
        tagline: "Full Stack Affiliate Platform",
        category: "Web Development / E-commerce",
        description: "A dynamic affiliate marketing platform with a centralized admin panel for managing stores and coupons, delivered via a sleek frontend.",
        url: "https://www.discountcouponn.com/",
        icon: <ShoppingBag className="w-10 h-10" />,
        color: "from-[#0f172a] to-[#1e293b]",
        features: ["Dynamic Admin Panel", "Coupon Management", "Affiliate Workflows"]
    },
    {
        title: "Review Lens",
        tagline: "Marketplace Intelligence Tool",
        category: "Next.js / AI Assistant",
        description: "Product comparison platform that aggregates pricing from Daraz, Amazon, and Alibaba, featuring an AI assistant for deep product intelligence.",
        url: "https://smart-shopper-ai.vercel.app/",
        icon: <Search className="w-10 h-10" />,
        color: "from-[#3f1606] to-[#632205]",
        features: ["Price Transformation", "AI Purchase Assistant", "Global Marketplace Data"]
    }
];

function ProjectPreview({ url, title, color }: { url: string, title: string, color: string }) {
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const [iframeError, setIframeError] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!iframeLoaded) setIframeError(true);
        }, 6000);
        return () => clearTimeout(timer);
    }, [iframeLoaded]);

    return (
        <div className={`relative w-full h-full bg-gradient-to-br ${color} overflow-hidden group/preview`}>
            <AnimatePresence mode="wait">
                {!iframeError ? (
                    <motion.div
                        key="iframe"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full relative"
                    >
                        <iframe
                            src={url}
                            className={`w-[1440px] h-[900px] border-none scale-[0.25] md:scale-[0.35] lg:scale-[0.4] origin-top-left absolute top-0 left-0 pointer-events-none select-none transition-opacity duration-1000 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => setIframeLoaded(true)}
                            loading="lazy"
                            title={title}
                        />
                        {!iframeLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                                <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                            </div>
                        )}
                        {/* Overlay to catch any accidental clicks */}
                        <div className="absolute inset-0 z-10" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="fallback"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full h-full flex flex-col items-center justify-center relative"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl md:text-[8rem] font-black text-white mix-blend-overlay opacity-20 group-hover:scale-110 transition-transform duration-700 uppercase tracking-tighter">
                                {title.split(' ')[0]}
                            </span>
                        </div>
                        <div className="relative z-10 text-center p-8">
                            <div className="w-20 h-20 rounded-3xl bg-white/5 mx-auto flex items-center justify-center text-primary mb-6 border border-white/10 group-hover:rotate-12 transition-transform duration-500 shadow-2xl">
                                <Globe className="w-10 h-10" />
                            </div>
                            <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Live Experience</h4>
                            <p className="text-white/50 text-sm font-bold uppercase tracking-widest">Click Demo to Explore</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />
        </div>
    );
}

export default function PortfolioProjects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

    return (
        <section ref={containerRef} id="projects" className="section-padding relative overflow-hidden">
            {/* Background Parallax Text */}
            <motion.div style={{ y }} className="absolute top-[5%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 opacity-[0.03]">
                <h2 className="text-[20vw] font-black text-white leading-none tracking-tighter uppercase whitespace-nowrap">
                    Projects
                </h2>
            </motion.div>

            <div className="container relative z-10 px-4 mx-auto">
                <div className="text-center mb-16 md:mb-32">
                    <div className="inline-flex items-center justify-center gap-2 mb-6 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="uppercase tracking-[0.3em] text-[10px] font-black text-white/70">Selected Works</span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-[1] md:leading-[0.85] uppercase">
                        Digital <span className="text-gradient-primary">Ventures</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-24 md:gap-40 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
                            >
                                {/* Interactive Preview Side */}
                                <div className={`relative aspect-[16/10] lg:col-span-7 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 group-hover:border-primary/40 transition-all duration-700 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] bg-[#0a0a0a] z-10 index-${index % 2 === 0 ? '0' : '1'}`}>
                                    <ProjectPreview url={project.url} title={project.title} color={project.color} />

                                    {/* Action Button */}
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-6 md:bottom-10 right-6 md:right-10 z-20 w-12 md:w-16 h-12 md:h-16 bg-primary text-white rounded-xl md:rounded-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-3xl group/btn overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform" />
                                        <ExternalLink className="relative w-5 h-5 md:w-7 md:h-7 group-hover/btn:rotate-12 transition-transform" />
                                    </a>
                                </div>

                                {/* Content Side */}
                                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 1 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    >
                                        <div className="flex items-center gap-4 mb-6 md:mb-8">
                                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shadow-xl">
                                                {project.icon}
                                            </div>
                                            <div>
                                                <p className="text-primary text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-1">{project.category}</p>
                                                <h3 className="text-3xl md:text-5xl font-black text-white leading-none uppercase tracking-tighter">{project.title}</h3>
                                            </div>
                                        </div>

                                        <p className="text-gray-400 text-base md:text-xl mb-8 md:mb-10 leading-relaxed font-medium italic">
                                            "{project.description}"
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-12">
                                            {project.features.map((feat, i) => (
                                                <span key={i} className="px-5 py-2 rounded-xl border border-white/5 bg-white/5 text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white/70 transition-colors">
                                                    {feat}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-10">
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-black uppercase tracking-[0.2em] text-white hover:text-primary transition-all flex items-center gap-3 group/link relative"
                                            >
                                                Explore Deeply
                                                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                                                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary group-hover/link:w-full transition-all duration-300" />
                                            </a>
                                            <button className="text-sm font-black uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors">
                                                Behind Code
                                            </button>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="mt-40 text-center">
                    <button className="px-12 py-6 rounded-3xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl">
                        View All Archives
                    </button>
                </div>
            </div>
        </section>
    );
}
