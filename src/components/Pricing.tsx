'use client';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Check, Zap, Globe, Rocket, ShieldCheck, ChevronRight,
    BarChart3, Layout, MessageSquare, Target, Search, Clock
} from 'lucide-react';
import { useState } from 'react';

const websitePlans = [
    {
        name: "Core Plan",
        subtitle: "Branding + Local SEO Site",
        description: "Best for small / cautious business owners looking for a professional start.",
        price: "1,500",
        period: "One-time",
        icon: <Layout className="w-8 h-8" />,
        features: [
            "Logo refinement or simple design",
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
        description: "Our flagship offer designed for businesses ready to dominate their local market.",
        price: "2,000",
        maxPrice: "3,500",
        period: "per month",
        icon: <Globe className="w-8 h-8" />,
        features: [
            "Advanced Brand Identity System",
            "Figma designs (7–8 pages)",
            "Advanced architecture (Speed & Vitals)",
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
        description: "The ultimate solution for companies aiming for total market leadership.",
        price: "2,500",
        maxPrice: "4,000",
        period: "per month",
        icon: <Rocket className="w-8 h-8" />,
        features: [
            "Premium Visual Identity Guide",
            "Figma designs (10+ page types)",
            "Enterprise WordPress (CPTs & ACF)",
            "300–500 SEO Pages (20–30 cities)",
            "Programmatic scalability",
            "Monthly KPI performance syncing",
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
        description: "Establish a solid technical foundation and begin your climb in local rankings.",
        price: "750",
        maxPrice: "1,200",
        period: "One-time",
        icon: <Check className="w-8 h-8" />,
        features: [
            "On-page SEO setup",
            "LocalBusiness schema",
            "Technical SEO audit & fix",
            "GBP optimization",
            "1–3 services | 1 city",
            "~10–15 optimized pages",
            "Top 50 Ranking entry"
        ],
        guarantee: "Pages Indexed & Visibility Growth",
        highlight: false,
        timeline: "30–45 Days"
    },
    {
        name: "City Authority",
        subtitle: "Growth SEO Plan",
        description: "Expand your reach across multiple cities and start generating consistent organic leads.",
        price: "2,000",
        maxPrice: "3,500",
        period: "per month",
        icon: <BarChart3 className="w-8 h-8" />,
        features: [
            "Service × City expansion",
            "Cost & FAQ page deployment",
            "Advanced targeting architecture",
            "Service & Breadcrumb schema",
            "Ongoing GBP management",
            "5 services | 10 cities",
            "120–150 authority pages"
        ],
        guarantee: "Top 20 Rankings & Lead Growth",
        highlight: true,
        timeline: "4–6 Months"
    },
    {
        name: "Market Takeover",
        subtitle: "Takeover SEO Plan",
        description: "Aggressive, high-velocity SEO for companies that refuse to be second place.",
        price: "2,500",
        maxPrice: "4,000",
        period: "per month",
        icon: <Zap className="w-8 h-8" />,
        features: [
            "Large-scale city expansion",
            "Authority & Comparison content",
            "Advanced internal link sync",
            "Monthly KPI performance",
            "Conversion optimization",
            "5–7 services | 30 cities",
            "500+ High-authority pages"
        ],
        guarantee: "Market-wide Top 10 Dominance",
        highlight: false,
        timeline: "9–12 Months"
    }
];

const faqs = [
    { q: "What is your typical turnaround time?", a: "Web projects usually take 4-8 weeks depending on complexity, while SEO results typically begin showing in 3-6 months." },
    { q: "Do I own everything upon completion?", a: "Yes, once the final payment is made, you own 100% of the designs, code, and content." },
    { q: "How do you handle ongoing maintenance?", a: "We offer monthly maintenance plans to keep your site fast, secure, and updated with the latest SEO standards." },
    { q: "Can I upgrade my plan later?", a: "Absolutely. Most of our clients start with a Core or Foundation plan and scale up as their revenue increases." }
];

export default function Pricing() {
    const [activeTab, setActiveTab] = useState<'website' | 'seo'>('website');
    const currentPlans = activeTab === 'website' ? websitePlans : seoPlans;
    const primaryPlan = currentPlans.find(p => p.highlight) || currentPlans[1];
    const secondaryPlans = currentPlans.filter(p => !p.highlight);

    return (
        <div className="bg-transparent text-white font-sans selection:bg-primary/30">

            {/* 1. Context / Positioning Section */}
            <section className="py-32 md:py-48 flex flex-col items-center justify-center border-b border-white/5 bg-transparent">
                <div className="w-full max-w-[65%] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Strategic Investment</span>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
                            Transparent <br />
                            <span className="text-white/20">Scalable</span> <br />
                            <span className="text-gradient-primary">Profitable.</span>
                        </h1>
                        <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                            We don't sell layouts; we sell business infrastructure. Choose the tier that matches your current growth stage and future ambitions.
                        </p>

                        {/* TAB SELECTOR - Integrated into context flow for better UX and stability */}
                        <div className="flex justify-center pt-8">
                            <div className="bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-2xl flex gap-1 shadow-2xl relative z-[70]">
                                <button
                                    onClick={() => setActiveTab('website')}
                                    className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 relative z-10 ${activeTab === 'website' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-white/40 hover:text-white'}`}
                                >
                                    Web Design
                                </button>
                                <button
                                    onClick={() => setActiveTab('seo')}
                                    className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 relative z-10 ${activeTab === 'seo' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-white/40 hover:text-white'}`}
                                >
                                    SEO Growth
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Primary Offer Block */}
            <section className="py-32 flex items-center justify-center">
                <div className="w-full max-w-[60%] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative p-12 md:p-20 rounded-[3rem] bg-white/[0.03] border border-primary/30 shadow-[0_0_100px_-20px_rgba(255,85,0,0.1)] overflow-hidden group"
                    >
                        {/* Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <span className="bg-primary text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.3em] mb-10 shadow-xl shadow-primary/20">
                                Most Recommended
                            </span>
                            <div className="mb-8 p-6 rounded-3xl bg-primary/20 text-primary">
                                {primaryPlan.icon}
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">{primaryPlan.name}</h2>
                            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-8">{primaryPlan.subtitle}</p>

                            <div className="flex items-baseline gap-2 mb-10">
                                <span className="text-2xl font-black text-gray-500">$</span>
                                <span className="text-7xl md:text-9xl font-black tracking-tighter">{primaryPlan.price}</span>
                                <span className="text-gray-500 font-bold uppercase tracking-widest text-sm ml-2">{primaryPlan.period}</span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 text-left w-full max-w-2xl mb-12">
                                {primaryPlan.features.slice(0, 6).map((f, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-400 font-bold">
                                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-sm">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full max-w-md py-6 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-lg shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                                Deploy Strategy <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Secondary / Tiered Offers */}
            <section className="py-32 flex items-center justify-center bg-white/[0.01] border-y border-white/5">
                <div className="w-full max-w-[90%] mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {secondaryPlans.map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 md:p-14 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col"
                            >
                                <div className="mb-8 p-5 rounded-2xl bg-white/10 w-fit text-white">
                                    {plan.icon}
                                </div>
                                <h3 className="text-4xl font-black tracking-tighter uppercase mb-2">{plan.name}</h3>
                                <p className="text-gray-400 font-medium mb-8 flex-grow">{plan.description}</p>

                                <div className="flex items-baseline gap-2 mb-10">
                                    <span className="text-xl font-black text-gray-500">$</span>
                                    <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                                    <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] ml-1">{plan.period}</span>
                                </div>

                                <div className="space-y-4 mb-12">
                                    {plan.features.slice(0, 5).map((f, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-gray-400 text-sm font-bold">
                                            <Check className="w-4 h-4 text-primary" />
                                            <span>{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full py-5 rounded-xl border border-white/10 hover:bg-white hover:text-black font-black uppercase tracking-widest text-xs transition-all mt-auto">
                                    Get Started
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Deliverables / Feature Expansion */}
            <section className="py-32 flex items-center justify-center">
                <div className="w-full max-w-[90%] mx-auto">
                    <div className="grid md:grid-cols-3 gap-16">
                        <FeatureGroup
                            title="Global Standards"
                            icon={<ShieldCheck className="w-6 h-6" />}
                            items={["SSL Certification", "W3C Validated Code", "GDPR Compliance", "Lighthouse 100 Score"]}
                        />
                        <FeatureGroup
                            title="Conversion Flow"
                            icon={<Target className="w-6 h-6" />}
                            items={["Heatmap Integration", "A/B Testing Ready", "Custom Lead Forms", "CRM Synchronization"]}
                        />
                        <FeatureGroup
                            title="Search Dominance"
                            icon={<Search className="w-6 h-6" />}
                            items={["Semantic HTML5", "Automated XML Sitemaps", "Breadcrumb Rich Snippets", "CDN Asset Delivery"]}
                        />
                    </div>
                </div>
            </section>

            {/* 5. Process / Methodology Section */}
            <section className="py-32 flex items-center justify-center bg-white/[0.02]">
                <div className="w-full max-w-[65%] mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Execution <span className="text-gradient-primary">Phases</span></h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        <ProcessStep number="01" title="Blueprint" desc="Deep strategy and architecture design." />
                        <ProcessStep number="02" title="Engine" desc="Custom development and backend sync." />
                        <ProcessStep number="03" title="Index" desc="SEO rollout and technical validation." />
                        <ProcessStep number="04" title="Audit" desc="Final testing and performance tuning." />
                    </div>
                </div>
            </section>

            {/* 6. Authority / Proof Section */}
            <section className="py-32 flex items-center justify-center">
                <div className="w-full max-w-[90%] mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <ProofBlock title="Guaranteed Indexing" value="100%" desc="All pages are valid & searchable." />
                        <ProofBlock title="Design Integrity" value="Pixel" desc="Exact Figma to code mirror." />
                        <ProofBlock title="Performance" value="<1s" desc="Average site load speed." />
                        <ProofBlock title="Availability" value="24/7" desc="Dedicated project tracking." />
                    </div>
                </div>
            </section>

            {/* 7. FAQ / Objection Handling */}
            <section className="py-32 flex items-center justify-center bg-white/[0.01]">
                <div className="w-full max-w-[60%] mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black tracking-tighter uppercase">Common <span className="text-gray-500 text-3xl">Puzzles</span></h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer">
                                <summary className="flex items-center justify-between text-lg font-black uppercase tracking-tight list-none">
                                    {faq.q}
                                    <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform text-primary" />
                                </summary>
                                <p className="mt-6 text-gray-400 font-medium leading-relaxed">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Final CTA Section */}
            <section className="py-48 flex items-center justify-center">
                <div className="w-full max-w-[60%] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="space-y-12"
                    >
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
                            Ready to <br />
                            <span className="text-gradient-primary">Deploy?</span>
                        </h2>
                        <p className="text-gray-400 text-xl font-medium max-w-xl mx-auto">
                            Stop chasing traffic. Start building revenue infrastructure that works while you sleep.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-12 py-6 rounded-2xl bg-primary text-white font-black uppercase tracking-widest shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                                Reserve My Growth Plan
                            </button>
                            <button className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm hover:text-primary transition-colors">
                                <MessageSquare className="w-5 h-5" /> Speak with Lead Dev
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}

function FeatureGroup({ title, icon, items }: { title: string, icon: any, items: string[] }) {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4 text-primary">
                {icon}
                <hr className="flex-grow border-white/10" />
            </div>
            <h4 className="text-2xl font-black uppercase tracking-tighter">{title}</h4>
            <div className="space-y-4">
                {items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-500 text-sm font-medium">
                        <div className="w-1 h-1 rounded-full bg-primary/40" />
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

function ProcessStep({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div className="space-y-6">
            <span className="text-4xl font-black text-white/10">{number}</span>
            <h4 className="text-xl font-black uppercase tracking-tight">{title}</h4>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">{desc}</p>
        </div>
    );
}

function ProofBlock({ title, value, desc }: { title: string, value: string, desc: string }) {
    return (
        <div className="p-10 rounded-3xl bg-white/5 border border-white/5 flex flex-col items-start gap-4 text-left">
            <span className="text-4xl font-black text-primary tracking-tighter">{value}</span>
            <div className="space-y-1">
                <h4 className="text-sm font-black uppercase tracking-widest">{title}</h4>
                <p className="text-xs text-gray-500 font-bold">{desc}</p>
            </div>
        </div>
    );
}
