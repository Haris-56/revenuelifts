import Link from 'next/link';
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-transparent py-20 relative overflow-hidden border-t border-white/5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
                    <div className="max-w-xl">
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                            Let's Work <br /> <span className="text-primary">Together!</span>
                        </h2>
                        <p className="text-gray-400 text-xl max-w-md">
                            Ready to elevate your digital presence? We are available for new projects.
                        </p>
                        <button className="mt-10 btn btn-primary px-10 py-5 text-lg rounded-full">
                            Start a Project
                        </button>
                    </div>

                    <div className="flex flex-col gap-10 text-right">
                        <div className="space-y-4">
                            <h4 className="text-gray-500 uppercase tracking-widest text-sm">Contact</h4>
                            <a href="mailto:hello@revenuelifts.com" className="text-2xl font-bold hover:text-primary transition-colors block">
                                hello@revenuelifts.com
                            </a>
                            <p className="text-2xl font-bold">+1 (555) 000-0000</p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-gray-500 uppercase tracking-widest text-sm">Socials</h4>
                            <div className="flex gap-4 justify-end">
                                {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                                    <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/10 text-gray-500 text-sm">
                    <p>&copy; 2024 RevenueLifts. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
