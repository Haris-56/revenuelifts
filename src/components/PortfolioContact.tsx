'use client';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, User, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function PortfolioContact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                throw new Error('API submission failed');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus('idle');
            alert('Something went wrong. Please check your connection or try again later.');
        }
    };

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative z-10 px-4 mx-auto">
                <div className="max-w-6xl mx-auto glass-panel rounded-[2rem] md:rounded-[3.5rem] p-6 md:p-16 border-white/10 shadow-3xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">

                        {/* Left Side: Context */}
                        <div>
                            <div className="inline-flex items-center gap-2 mb-6 md:mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Let's Connect</span>
                            </div>
                            <h2 className="text-4xl md:text-7xl font-black text-white leading-[1] md:leading-[0.9] uppercase mb-8 md:mb-10 tracking-tighter">
                                Ready to <br /> <span className="text-gradient-primary">Accelerate</span> <br /> Your Vision?
                            </h2>
                            <p className="text-gray-400 text-base md:text-xl leading-relaxed mb-10 md:mb-12 max-w-md">
                                I am currently available for Full-Stack & Automation roles. Let's discuss how my expertise can drive your results.
                            </p>

                            <div className="space-y-6">
                                <ContactCard
                                    icon={<Mail className="w-6 h-6" />}
                                    title="E-mail"
                                    value="haris.bin.ahson@gmail.com"
                                    href="mailto:haris.bin.ahson@gmail.com"
                                />
                                <ContactCard
                                    icon={<div className="font-bold text-sm">WA</div>}
                                    title="WhatsApp"
                                    value="+92 310 7433377"
                                    href="https://wa.me/923107433377"
                                />
                            </div>
                        </div>

                        {/* Right Side: Interactive Form */}
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white/5 border border-white/10 rounded-[2rem] p-6 md:p-10 backdrop-blur-3xl"
                            >
                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                                            <input
                                                required
                                                type="text"
                                                placeholder="Enter your name"
                                                className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 md:py-5 pl-14 pr-6 text-white focus:border-primary/50 focus:bg-white/10 outline-none transition-all text-sm"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                                            <input
                                                required
                                                type="email"
                                                placeholder="email@example.com"
                                                className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 md:py-5 pl-14 pr-6 text-white focus:border-primary/50 focus:bg-white/10 outline-none transition-all text-sm"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Your Message</label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-6 top-6 w-5 h-5 text-white/20" />
                                            <textarea
                                                required
                                                rows={4}
                                                placeholder="Tell me about your project..."
                                                className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 md:py-5 pl-14 pr-6 text-white focus:border-primary/50 focus:bg-white/10 outline-none transition-all resize-none text-sm"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status !== 'idle'}
                                        className={`btn btn-primary w-full !py-5 md:!py-6 group text-xs md:text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 overflow-hidden relative shadow-2xl ${status !== 'idle' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {status === 'idle' && (
                                            <>Dispatch Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                                        )}
                                        {status === 'sending' && (
                                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        )}
                                        {status === 'success' && (
                                            <span className="text-white animate-bounce">Message Received!</span>
                                        )}
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.5em]">
                        © 2026 MUHAMMAD HARIS BIN AHSON • VIBE CODING ACCELERATED
                    </p>
                </div>
            </div>
        </section>
    );
}

function ContactCard({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-primary/30 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-xl">
                {icon}
            </div>
            <div>
                <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest mb-1">{title}</p>
                <p className="text-white font-bold text-lg group-hover:text-primary transition-colors">{value}</p>
            </div>
        </a>
    );
}
