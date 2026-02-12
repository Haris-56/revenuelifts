'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors duration-300"
        >
            {icon}
        </a>
    );
}

const navLinks = [
    { name: 'Projects', href: '/home#projects' },
    { name: 'Skills', href: '/home#skills' },
    { name: 'Experience', href: '/home#experience' },
    { name: 'Contact', href: '/home#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] py-4">
            <div className="container px-4 mx-auto">
                <nav className="flex items-center justify-between transition-all duration-500 rounded-[2rem] px-6 md:px-10 py-4 glass-panel mx-auto max-w-5xl shadow-2xl">
                    <Link href="/home" className="text-2xl font-black font-outfit text-white tracking-tighter hover:scale-105 transition-transform duration-300">
                        <span className="text-gradient-primary uppercase">Haris</span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 hover:text-primary transition-all duration-300 relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-4 mr-4 border-r border-white/10 pr-6">
                            <SocialIcon icon={<Github className="w-4 h-4" />} href="https://github.com/Haris-56" />
                            <SocialIcon icon={<Linkedin className="w-4 h-4" />} href="https://www.linkedin.com/in/haris-web" />
                            <SocialIcon icon={<Instagram className="w-4 h-4" />} href="https://www.instagram.com/revenuelifts/" />
                        </div>
                        <Link href="#contact" className="btn btn-primary !py-3 !px-8 text-sm font-black uppercase tracking-widest">
                            Hire Me
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[-1] bg-black/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center p-8"
                    >
                        <div className="flex flex-col items-center gap-8 w-full">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-3xl font-black uppercase tracking-tighter text-white hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                className="btn btn-primary w-full max-w-xs text-center !py-5 text-lg font-black"
                                onClick={() => setIsOpen(false)}
                            >
                                Let's Talk
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
