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
  title: "Web Design (Figma, Wordpress & Next.js) & SEO | Portfolio",
  description: "Expert web design and SEO services specializing in Figma, Wordpress, and Next.js. Production-ready, aesthetic websites that rank.",
  keywords: ["Web Design", "Figma", "Wordpress", "Next.js", "SEO", "Portfolio", "Revenuelifts"],
  openGraph: {
    title: "Web Design (Figma, Wordpress & Next.js) & SEO | Portfolio",
    description: "Expert web design and SEO services specializing in Figma, Wordpress, and Next.js.",
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
