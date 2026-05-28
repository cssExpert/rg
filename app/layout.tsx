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
  title: "Ravi Gupta | Senior Frontend Developer & UI/UX Specialist",
  description:
    "Ravi Gupta is a Senior Frontend Developer and UI/UX Specialist with 18+ years of experience building high-performance web applications using React, Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "frontend developer",
    "UI/UX designer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Tailwind CSS",
    "web developer",
    "freelance developer",
  ],
  authors: [{ name: "Ravi Gupta" }],
  creator: "Ravi Gupta",
  openGraph: {
    title: "Ravi Gupta | Senior Frontend Developer & UI/UX Specialist",
    description:
      "Building premium digital experiences with modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Gupta | Senior Frontend Developer",
    description:
      "Building premium digital experiences with modern web technologies.",
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
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
