'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Layout, Smartphone, LineChart, ArrowUpRight } from 'lucide-react';

const services = [
    {
        icon: Layout,
        title: "Conversion-Led Websites",
        desc: "High-performance custom sites engineered to turn browsing visitors into paying clients using advanced conversion psychology."
    },
    {
        icon: Smartphone,
        title: "City Authority Systems",
        desc: "Dominate local searches by targeting multiple cities with hyper-optimized service-area pages and custom internal linking."
    },
    {
        icon: LineChart,
        title: "Market Takeover SEO",
        desc: "Aggressive SEO campaigns designed to capture your entire market share and make your brand the primary lead generator."
    }
];

export default function Services() {
    return (
        <section id="services" className="section-padding relative z-10 overflow-hidden">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div>
                        <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter uppercase leading-[0.85]">Our <span className="text-gradient-primary">Solutions</span></h2>
                        <p className="text-gray-400 text-xl max-w-md font-medium">
                            Hyper-targeted digital systems built for scalability and performance.
                        </p>
                    </div>
                    <button className="btn btn-primary !py-4 !px-10 text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20">
                        View All Services
                    </button>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <TiltCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TiltCard({ service, index }: { service: any, index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
            onMouseMove={handleMouseMove}
            className="group relative rounded-[2rem] bg-[#121212] border border-white/5 overflow-hidden"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(255, 85, 0, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative p-10 h-full flex flex-col items-start z-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    <service.icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-1">
                    {service.desc}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/50 group-hover:text-primary transition-colors">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
}
