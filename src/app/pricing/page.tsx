'use client';
import Pricing from "@/components/Pricing";
import { motion } from 'framer-motion';

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-[#050505] pt-20">
            <Pricing />

            {/* Trust Section */}
            <section className="pb-32 container px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-black mb-4 tracking-tight">No Hidden Fees. Seriously.</h3>
                        <p className="text-gray-400 font-medium leading-relaxed">Our pricing includes everything mentioned. No surprise surcharges for maintenance or "premium" features later on. What you see is exactly what you get.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-2xl font-black mb-4 tracking-tight">Performance First</h3>
                        <p className="text-gray-400 font-medium leading-relaxed">Our monthly SEO plans are built on results. If we don't deliver indexed pages and visibility growth, we don't scale. Our reputation is built on your ROI.</p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
