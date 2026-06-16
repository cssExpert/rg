import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ravi Gupta | Senior Frontend Developer & UI/UX Specialist (18+ Yrs)",
  description:
    "Ravi Gupta is a Senior Frontend Developer with 18+ years of experience building fast, beautiful web apps with React, Next.js & Tailwind CSS. Open for freelance worldwide.",
  keywords: [
    "Senior Frontend Developer for hire",
    "React developer",
    "Next.js specialist",
    "UI/UX designer",
    "Tailwind CSS expert",
    "Figma to code",
    "web application developer",
    "TypeScript developer",
    "hire senior frontend developer freelance",
    "Next.js developer for startup",
    "Figma to React developer",
    "premium UI developer for web apps",
    "frontend developer with 18 years experience",
  ],
  authors: [{ name: "Ravi Gupta" }],
  creator: "Ravi Gupta",
  openGraph: {
    title:
      "Ravi Gupta · Frontend Dev & UI/UX Specialist · Crafting Premium Web Experiences",
    description:
      "18+ years turning ambitious ideas into high-performance web products. React, Next.js, Figma to Code, and beyond. Let's build something great.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ravi Gupta · Frontend Dev & UI/UX Specialist · Crafting Premium Web Experiences",
    description:
      "18+ years turning ambitious ideas into high-performance web products. React, Next.js, Figma to Code, and beyond. Let's build something great.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bebasNeue.variable} ${inter.variable}`}
    >
      <head></head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
