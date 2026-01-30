'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Globe, Rocket, ShieldCheck, ChevronRight, BarChart3, Layout } from 'lucide-react';
import { useState } from 'react';

const websitePlans = [
    {
        name: "Core Plan",
        subtitle: "Branding + Local SEO Site",
        description: "Best for small / cautious business owners",
        price: "1,500",
        period: "One-time",
        icon: <Layout className="w-8 h-8" />,
        features: [
            "Logo refinement or simple logo design",
            "Figma designs (5 custom pages)",
            "Custom lightweight WordPress theme",
            "On-page SEO & LocalBusiness Schema",
            "Google Business Profile setup",
            "Mobile-first, fast loading",
            "Total pages: ~20–25"
        ],
        guarantee: "50% Advance / 50% on Completion",
        highlight: false,
        timeline: "4-6 Weeks"
    },
    {
        name: "Growth Plan",
        subtitle: "Brand + City Authority System",
        description: "Flagship offer for scaling businesses",
        price: "2,000",
        maxPrice: "3,500",
        period: "per month",
        icon: <Globe className="w-8 h-8" />,
        features: [
            "Advanced Brand Identity System",
            "Figma designs (7–8 pages)",
            "Advanced site architecture (Speed & Vitals)",
            "10 cities authority targeting",
            "Service × city pages & Cost guides",
            "GBP optimization",
            "Total pages: ~150–170"
        ],
        guarantee: "City-wide Authority Domination",
        highlight: true,
        timeline: "5-6 Months"
    },
    {
        name: "Takeover Plan",
        subtitle: "Branding + Market Domination",
        description: "For aggressive, growth-focused companies",
        price: "2,500",
        maxPrice: "4,000",
        period: "per month",
        icon: <Rocket className="w-8 h-8" />,
        features: [
            "Premium Visual Identity & Extended Guide",
            "Figma designs (10+ page types)",
            "Enterprise WordPress (CPTs & ACF)",
            "300–500 SEO Pages (20–30 cities)",
            "Programmatic scalability",
            "Monthly KPI tracking & optimization",
            "Total pages: 300+"
        ],
        guarantee: "Market-wide Visibility Takeover",
        highlight: false,
        timeline: "9-12 Months"
    }
];

const seoPlans = [
    {
        name: "Local Foundation",
        subtitle: "Core SEO Plan",
        description: "Focus on indexing and local visibility",
        price: "750",
        maxPrice: "1,200",
        period: "One-time",
        icon: <Check className="w-8 h-8" />,
        features: [
            "On-page SEO (services + core pages)",
            "LocalBusiness schema implementation",
            "Technical SEO fixes (Indexing & Speed)",
            "Google Business Profile optimization",
            "1–3 services | 1 primary city",
            "~10–15 optimized pages",
            "Outcome: Keywords entering Top 50"
        ],
        guarantee: "Pages Indexed & Top 50 Entry",
        highlight: false,
        timeline: "30–45 Days"
    },
    {
        name: "City Authority",
        subtitle: "Growth SEO Plan",
        description: "Target multiple cities & steady leads",
        price: "2,000",
        maxPrice: "3,500",
        period: "per month",
        icon: <BarChart3 className="w-8 h-8" />,
        features: [
            "Service × City SEO pages",
            "Cost & FAQ pages implementation",
            "Advanced internal linking architecture",
            "Service, FAQ & Breadcrumb schema",
            "GBP ongoing optimization",
            "5 services | 10 cities targeting",
            "~120–150 SEO authority pages"
        ],
        guarantee: "Top 20 Rankings & Organic Leads",
        highlight: true,
        timeline: "4–6 Months"
    },
    {
        name: "Market Takeover",
        subtitle: "Takeover SEO Plan",
        description: "Aggressive growth for market leaders",
        price: "2,500",
        maxPrice: "4,000",
        period: "per month",
        icon: <Zap className="w-8 h-8" />,
        features: [
            "Large-scale service × city expansion",
            "Trust, Authority & Comparison content",
            "Advanced internal linking sync",
            "Monthly KPI performance tracking",
            "Conversion rate optimization (CRO)",
            "5–7 services | 20–30 cities",
            "300–500+ High-authority SEO pages"
        ],
        guarantee: "Market-wide Top 10 Dominance",
        highlight: false,
        timeline: "9–12 Months"
    }
];

export default function Pricing() {
    const [activeTab, setActiveTab] = useState<'website' | 'seo'>('website');

    return (
        <section id="pricing" className="section-padding relative overflow-hidden bg-transparent">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] opacity-50" />
            </div>

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                    >
                        ROI-Driven Pricing
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black mb-8 tracking-tighter"
                    >
                        Choose Your <span className="text-gradient-primary">Weapon.</span>
                    </motion.h2>

                    {/* Tab Switcher */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl flex gap-1">
                            <button
                                onClick={() => setActiveTab('website')}
                                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'website' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-gray-400 hover:text-white'}`}
                            >
                                Web Development
                            </button>
                            <button
                                onClick={() => setActiveTab('seo')}
                                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'seo' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-gray-400 hover:text-white'}`}
                            >
                                SEO Services
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative min-h-[800px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: activeTab === 'website' ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: activeTab === 'website' ? 20 : -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
                        >
                            {(activeTab === 'website' ? websitePlans : seoPlans).map((plan, index) => (
                                <PricingCard key={`${activeTab}-${index}`} plan={plan} index={index} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 p-10 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-10 backdrop-blur-sm group hover:border-primary/30 transition-colors"
                >
                    <div className="flex items-center gap-8">
                        <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <ShieldCheck className="w-12 h-12" />
                        </div>
                        <div>
                            <h4 className="text-3xl font-black mb-2 tracking-tight">Need a Custom Strategy?</h4>
                            <p className="text-gray-400 text-lg">We design bespoke systems for enterprise-level market disruption.</p>
                        </div>
                    </div>
                    <button className="btn btn-outline whitespace-nowrap px-12 py-5 text-lg group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                        Talk to an Expert
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

function PricingCard({ plan, index }: { plan: any, index: number }) {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouseX(e.clientX - rect.left);
        setMouseY(e.clientY - rect.top);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            className={`relative p-8 md:p-12 rounded-[3rem] flex flex-col h-full border transition-all duration-500 overflow-hidden group ${plan.highlight
                ? 'bg-[#0a0a0a] border-primary/50 shadow-[0_0_80px_-20px_rgba(255,85,0,0.15)]'
                : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
            style={{ perspective: "1000px" }}
        >
            {/* Dynamic Glow Effect */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${plan.highlight ? 'rgba(255,85,0,0.2)' : 'rgba(255,255,255,0.08)'}, transparent 40%)`
                }}
            />

            {plan.highlight && (
                <div className="absolute top-0 right-0 pt-8 pr-8">
                    <span className="bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-primary/20">
                        Most Popular
                    </span>
                </div>
            )}

            <div className={`mb-10 p-5 rounded-3xl w-fit transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${plan.highlight ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white'}`}>
                {plan.icon}
            </div>

            <div className="mb-8">
                <h3 className="text-3xl font-black mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight">{plan.name}</h3>
                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">{plan.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{plan.description}</p>
            </div>

            <div className="mb-10">
                <div className="flex flex-wrap items-baseline gap-1">
                    <span className="text-sm font-black text-gray-500 mr-1">$</span>
                    <span className="text-5xl md:text-6xl font-black tracking-tighter">{plan.price}</span>
                    {plan.maxPrice && (
                        <>
                            <span className="text-2xl font-bold text-gray-700 mx-0.5">-</span>
                            <span className="text-4xl md:text-5xl font-black tracking-tighter text-gray-300">
                                {plan.maxPrice}
                            </span>
                        </>
                    )}
                    <div className="w-full mt-1">
                        <span className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em]">
                            {plan.period}
                        </span>
                    </div>
                </div>
                {plan.timeline && (
                    <div className="mt-4 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                        <div className="text-[9px] font-black text-primary uppercase tracking-[0.2em]">
                            {plan.timeline}
                        </div>
                    </div>
                )}
            </div>

            <div className="space-y-3.5 mb-12 flex-grow">
                {plan.features.map((feature: string, i: number) => (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i + index * 0.1 }}
                        key={i}
                        className="flex items-start gap-3 group/item text-gray-400 hover:text-white transition-colors"
                    >
                        <div className={`mt-1 p-0.5 rounded-full shrink-0 transition-all group-hover/item:scale-110 ${plan.highlight ? 'bg-primary/20 text-primary' : 'bg-white/10 text-gray-500 group-hover/item:text-white'}`}>
                            <Check className="w-3 h-3" />
                        </div>
                        <span className="text-[14px] leading-snug font-bold">{feature}</span>
                    </motion.div>
                ))}
            </div>

            <div className="space-y-5">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1.5">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Target Outcome</span>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-relaxed font-bold group-hover:text-gray-300 transition-colors uppercase tracking-wider">{plan.guarantee}</p>
                </div>

                <button className={`w-full py-5 rounded-2xl font-black text-base flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 ${plan.highlight
                    ? 'bg-primary text-white hover:bg-primary-hover shadow-xl shadow-primary/20 hover:shadow-primary/40'
                    : 'bg-white text-black hover:bg-gray-100 mb-2'
                    }`}>
                    Deploy Strategy
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>
            </div>
        </motion.div>
    );
}
