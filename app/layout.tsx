import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import RecaptchaProvider from "@/components/RecaptchaProvider";
import Icon from "@/components/common/Icon";
import LoaderDismiss from "@/components/common/LoaderDismiss";

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
      <head>
        {/* Loader styles injected into <head> so they render before any JS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          #rg-loader {
            position: fixed;
            inset: 0;
            z-index: 9999;
            background: #fff;
            overflow: hidden;
            transition: opacity 0.5s ease, visibility 0.5s ease;
          }
          #rg-loader.is-hidden {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
          }

          /* Brand anchor — top left */
          #rg-loader-brand {
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.3);
            display: inline-flex;
            align-items: flex-end;
            gap: 0.5rem;
          }

          /* Large counter — bottom right */
          #rg-loader-counter {
            position: fixed;
            bottom: 3.5rem;
            right: 4vw;
            font-size: clamp(5rem, 18vw, 15rem);
            font-weight: 900;
            color: #050505;
            line-height: 0.85;
            letter-spacing: -0.04em;
            font-variant-numeric: tabular-nums;
            font-feature-settings: "tnum";
            will-change: transform;
            user-select: none;
          }
          #rg-loader-counter sup {
            font-size: 0.28em;
            font-weight: 700;
            letter-spacing: 0.05em;
            vertical-align: super;
            margin-left: 0.15em;
            opacity: 0.75;
          }

          /* Progress line — full width at very bottom */
          #rg-loader-line-track {
            position: fixed;
            top: calc(50% - 0.125rem);
            left: 0;
            right: 0;
            height: 0.25rem;
            background: rgba(5,5,5,0.07);
          }
          #rg-loader-line {
            height: 100%;
            background: #050505;
            transform-origin: left center;
            transform: scaleX(0);
            animation: lineGrow 1.85s cubic-bezier(0.4, 0, 0.15, 1) forwards;
          }
          @keyframes lineGrow {
            0%   { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }

          /* Expanding circle from center */
          #rg-loader-circle {
            position: fixed;
            width: 250vmax;
            height: 250vmax;
            border-radius: 50%;
            background: #050505;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: circleExpand 0.72s cubic-bezier(0.76, 0, 0.24, 1) 1.85s forwards;
            will-change: transform;
          }
          @keyframes circleExpand {
            0%   { transform: translate(-50%, -50%) scale(0); }
            100% { transform: translate(-50%, -50%) scale(1); }
          }
        `,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {/* Pure-HTML loader — visible before any JS runs */}
        <div id="rg-loader" aria-hidden="true">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 w-full">
            <div id="rg-loader-brand">
              <span className="text-[#000] group-hover:text-primary transition-colors duration-300">
                <Icon name="Brand" size="24" className="w-6 h-6" />
              </span>
              <span className="text-primary">&bull;</span>
            </div>
          </div>
          <div id="rg-loader-counter">
            <span id="rg-loader-num">0</span>
            <sup>%</sup>
          </div>
          <div id="rg-loader-line-track">
            <div id="rg-loader-line" />
          </div>
          <div id="rg-loader-circle" />
        </div>

        {/* LoaderDismiss animates the counter and removes the loader after hydration */}
        <LoaderDismiss />
        <ThemeProvider>
          <RecaptchaProvider>{children}</RecaptchaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
