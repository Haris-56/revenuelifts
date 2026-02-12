'use client';
import Link from 'next/link';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-transparent py-20 relative overflow-hidden border-t border-white/5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
                    <div className="max-w-xl">
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                            Let's Build <br /> <span className="text-primary text-gradient-primary">Together.</span>
                        </h2>
                        <p className="text-gray-400 text-xl max-w-md">
                            Open for Full-Stack / Next.js opportunities and interesting freelance collaborations.
                        </p>
                    </div>

                    <div className="flex flex-col gap-10 text-right w-full md:w-auto">
                        <div className="space-y-4">
                            <h4 className="text-gray-500 uppercase tracking-widest text-sm">Inquiries</h4>
                            <a href="mailto:haris.bin.ahson@gmail.com" className="text-2xl md:text-3xl font-black hover:text-primary transition-colors block uppercase tracking-tighter">
                                haris.bin.ahson@gmail.com
                            </a>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-gray-500 uppercase tracking-widest text-sm">Social Presence</h4>
                            <div className="flex gap-4 justify-end">
                                <SocialLink icon={<Github className="w-5 h-5" />} href="https://github.com/Haris-56" />
                                <SocialLink icon={<Linkedin className="w-5 h-5" />} href="https://www.linkedin.com/in/haris-web" />
                                <SocialLink icon={<Instagram className="w-5 h-5" />} href="https://www.instagram.com/revenuelifts/" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/10 text-gray-500 text-sm font-bold uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} Haris Bin Ahson. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <span>Based in Faisalabad, PK</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ icon, href }: { icon: React.ReactNode, href: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
            {icon}
        </a>
    );
}
