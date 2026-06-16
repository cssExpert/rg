"use client";

import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import TiltCard from "./TiltCard";
import Stats from "./Stats";
import { AboutSkeleton } from "@/components/common/Skeleton";
import { useMounted } from "@/lib/useMounted";
import { useReveal } from "@/lib/useReveal";

const expertise = [
  "React.js & Next.js Applications",
  "TypeScript & Modern JavaScript",
  "Tailwind CSS & Bootstrap Styling",
  "WordPress Custom Themes",
  "Figma Design to Code",
  "Performance Optimization & SEO",
];

export default function About() {
  const mounted = useMounted();
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  if (!mounted) return <AboutSkeleton />;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "var(--bg-2)" }}
    >
      {/* Ambient glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-125 h-125 bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:gap-24 items-center lg:grid-cols-[1fr_2fr]">
          {/* Left – Visual */}
          <div className="reveal-item relative" style={{ transitionDelay: "0ms" }}>
            <TiltCard className="p-4 sm:p-6">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-900 light:border-(--border) aspect-4/5 max-w-sm mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-linear-to-br from-[#1a1a1a] via-[#111] to-darker light:from-(--bg-2) light:via-(--card) light:to-(--card)" />
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  {/* Code snippet style decoration */}
                  <div className="glass-card rounded-xl p-5 w-64 font-mono text-xs h-[calc(full - 100px)]">
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <p className="text-(--text-muted)">
                      <span className="text-primary">const</span>{" "}
                      <span className="text-blue-400">developer</span> = &#123;
                    </p>
                    <p className="text-(--text-muted) pl-4">
                      name:{" "}
                      <span className="text-green-400">
                        &apos;Ravi Gupta&apos;
                      </span>
                      ,
                    </p>
                    <p className="text-(--text-muted) pl-4">
                      exp:{" "}
                      <span className="text-primary">
                        &apos;18+ years&apos;
                      </span>
                      ,
                    </p>
                    <p className="text-(--text-muted) pl-4">
                      stack:{" "}
                      <span className="text-yellow-400">
                        [&apos;React&apos;, &apos;Next.js&apos;]
                      </span>
                      ,
                    </p>
                    <p className="text-(--text-muted) pl-4">
                      passion:{" "}
                      <span className="text-green-400">
                        &apos;Premium UI&apos;
                      </span>
                    </p>
                    <p className="text-(--text-muted)">&#125;</p>
                  </div>

                  {/* Availability badge */}
                  <div className="glass-card rounded-full px-5 py-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="font-sans text-xs font-medium text-(--text)">
                      Open to new projects
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Stats overlay cards */}
            <div className="grid grid-cols-2 gap-3 mt-4 max-w-sm mx-auto lg:mx-0">
              <Stats />
            </div>
          </div>

          {/* Right – Content */}
          <div>
            <span
              className="reveal-item section-label"
              style={{ transitionDelay: "100ms" }}
            >
              Who I Am
            </span>

            <h2
              className="reveal-item font-heading text-5xl sm:text-6xl lg:text-7xl text-(--text) leading-none mb-6"
              style={{ transitionDelay: "200ms" }}
            >
              ABOUT <span className="text-gradient">ME</span>
            </h2>

            <p
              className="reveal-item font-sans text-(--text-muted) leading-relaxed mb-5"
              style={{ transitionDelay: "300ms" }}
            >
              I didn&apos;t stumble into web development — I grew up with it.
              Over the past{" "}
              <strong className="text-primary">18+ years</strong>, I&apos;ve
              worked across industries, company sizes, and tech stacks — always
              staying at the frontier of what the web can do.
            </p>

            <p
              className="reveal-item font-sans text-(--text-muted) leading-relaxed mb-8"
              style={{ transitionDelay: "380ms" }}
            >
              My work sits at the intersection of{" "}
              <strong className="text-(--text)">engineering precision</strong>{" "}
              and{" "}
              <strong className="text-(--text)">design intuition</strong>. I
              think in components, but I feel in pixels — I care just as much
              about how a button feels to click as I do about the Lighthouse
              score behind it. Whether it&apos;s a complex SaaS dashboard or a
              conversion-focused landing page, I bring the same level of
              craftsmanship to every project.
            </p>

            {/* Expertise list */}
            <div
              className="reveal-item grid sm:grid-cols-2 gap-3 mb-10"
              style={{ transitionDelay: "460ms" }}
            >
              {expertise.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-primary shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="font-sans text-sm text-(--text-muted)">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="reveal-item flex flex-wrap gap-4"
              style={{ transitionDelay: "540ms" }}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary"
              >
                Work With Me
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-outline"
              >
                My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
