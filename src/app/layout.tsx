import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Haris | Full Stack Next.js Developer Portfolio",
  description: "Portfolio of Muhammad Haris Bin Ahson, a Full Stack Developer specializing in Next.js, automation, and premium web experiences with ~4 years of experience.",
  keywords: ["Muhammad Haris", "Haris", "Full Stack Developer", "Next.js Developer", "Portfolio", "Automation Engineer"],
  openGraph: {
    title: "Haris | Full Stack Next.js Developer Portfolio",
    description: "Full Stack Developer specializing in Next.js, automation, and premium web experiences.",
    type: "website",
  }
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-[#030303] text-white selection:bg-primary/30 selection:text-white">
        <Background />
        <Navbar />
        <main className="relative z-10 transition-opacity duration-700">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
