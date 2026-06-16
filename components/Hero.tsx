"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { stats } from "@/lib/data";
import Icon from "@/components/common/Icon";
import { HeroSkeleton } from "@/components/common/Skeleton";
import { useMounted } from "@/lib/useMounted";

function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const duration = 2000;
        function tick(now: number) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(ease * target));
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const floatingCards = [
  { label: "React", color: "#61DAFB", top: "8%", right: "2%", delay: 800 },
  { label: "Next.js", color: "#CEFF00", top: "38%", right: "-4%", delay: 1000 },
  {
    label: "TypeScript",
    color: "#3178C6",
    bottom: "30%",
    right: "0%",
    delay: 1200,
  },
  {
    label: "Tailwind",
    color: "#38BDF8",
    bottom: "10%",
    left: "4%",
    delay: 1400,
  },
];

export default function Hero() {
  const mounted = useMounted();
  if (!mounted) return <HeroSkeleton />;

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-primary/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen lg:min-h-0 lg:py-40">
          {/* Left – Text Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
              style={{
                animation:
                  "fade-up-hero 0.7s cubic-bezier(0.22,1,0.36,1) 0ms both",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-sans font-semibold tracking-widest uppercase">
                Available for Freelance
              </span>
            </div>

            {/* Heading */}
            <p
              className="font-heading text-2xl sm:text-3xl tracking-widest text-(--text-muted) mb-2"
              style={{
                animation:
                  "fade-up-hero 0.7s cubic-bezier(0.22,1,0.36,1) 120ms both",
              }}
            >
              Hi, I&apos;m
            </p>

            <h1
              className="font-heading text-[clamp(4rem,12vw,9rem)] leading-none tracking-wider mb-0"
              style={{
                animation:
                  "fade-up-hero 0.7s cubic-bezier(0.22,1,0.36,1) 240ms both",
              }}
            >
              <span className="text-(--text)">RAVI </span>
              <span className="text-gradient">GUPTA</span>
            </h1>

            <div
              className="flex items-center gap-3 mb-3"
              style={{
                animation:
                  "fade-up-hero 0.7s cubic-bezier(0.22,1,0.36,1) 360ms both",
              }}
            >
              <div className="h-px flex-1 max-w-12 bg-primary/60" />
              <p className="font-sans text-base sm:text-lg text-(--text-muted) tracking-wide">
                Senior Frontend Developer &amp; UI/UX Specialist
              </p>
            </div>

            <p
              className="font-sans text-(--text-muted) text-base leading-relaxed max-w-lg mb-10"
              style={{
                animation:
                  "fade-up-hero 0.7s cubic-bezier(0.22,1,0.36,1) 480ms both",
              }}
            >
              I bridge the gap between design and engineering — crafting digital
              products that feel as good as they perform. With{" "}
              <span className="text-primary font-semibold">18+ years</span> of
              expertise, I turn ambitious ideas into fast, beautiful,
              production-ready products.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col gap-4 mb-12"
              style={{
                animation:
                  "fade-up-hero 0.7s cubic-bezier(0.22,1,0.36,1) 600ms both",
              }}
            >
              <div className="flex flex-wrap gap-4">
                <button onClick={scrollToProjects} className="btn-primary group">
                  View Projects
                  <Icon
                    name="LongArrow"
                    size="20"
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
                <button
                  onClick={scrollToContact}
                  className="btn-outline bg-white dark:bg-dark"
                >
                  Let&apos;s Work Together
                </button>
              </div>
              <p className="font-sans text-xs text-(--text-muted) tracking-wide">
                Available for freelance worldwide&nbsp;&middot;&nbsp;No-commitment first call
              </p>
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10"
              style={{
                animation:
                  "fade-up-hero 0.7s cubic-bezier(0.22,1,0.36,1) 720ms both",
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-heading text-4xl md:text-5xl text-primary leading-none">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="font-sans text-xs text-(--text-muted) tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Profile + Floating Cards */}
          <div
            className="relative flex justify-center lg:justify-end"
            style={{
              animation:
                "fade-in-scale 0.9s cubic-bezier(0.22,1,0.36,1) 400ms both",
            }}
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Rotating rings — CSS only */}
              <div
                className="absolute inset-0 rounded-full border border-dashed border-primary/20"
                style={{ animation: "spin-cw 20s linear infinite" }}
              />
              <div
                className="absolute inset-4 rounded-full border border-dashed border-primary/10"
                style={{ animation: "spin-ccw 30s linear infinite" }}
              />

              {/* Profile image area */}
              <div className="absolute inset-8 rounded-full bg-linear-to-br from-primary/20 via-surface to-darker light:via-(--card) light:to-(--bg-2) border border-primary/20 overflow-hidden flex items-end justify-center">
                <div className="w-full h-full bg-linear-to-br from-[#1a1a1a] to-dark light:from-(--bg-2) light:to-(--card) flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-linear-to-br from-primary/30 to-primary/10 border-2 border-primary/40 flex items-center justify-center">
                      <span className="font-heading text-3xl sm:text-4xl text-(--text) tracking-widest">
                        <Icon name="Brand" size="36" className="w-9 h-9" />
                      </span>
                    </div>
                    <div className="text-center">
                      <p className="font-heading text-base md:text-xl text-(--text) tracking-wider">
                        RAVI GUPTA
                      </p>
                      <p className="font-sans text-xs text-(--text-muted) tracking-wide">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech cards — CSS fade-in with delay */}
              {floatingCards.map((card) => (
                <div
                  key={card.label}
                  style={{
                    top: card.top,
                    right: card.right,
                    bottom: card.bottom,
                    left: card.left,
                    animation: `fade-in-scale 0.5s ease ${card.delay}ms both`,
                  }}
                  className="absolute z-10 glass-card px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: card.color }}
                  />
                  <span className="font-sans text-xs font-semibold text-(--text) whitespace-nowrap">
                    {card.label}
                  </span>
                </div>
              ))}

              {/* Experience badge — CSS bob */}
              <div
                className="absolute -bottom-4 glass-card border border-dark bg-dark light:bg-white light:border-dark/15 px-5 py-2.5 rounded-lg text-center whitespace-nowrap glow-primary"
                style={{
                  animation:
                    "bob 3s ease-in-out 2s infinite, fade-in-scale 0.5s ease 1.2s both",
                }}
              >
                <p className="font-heading text-xl md:text-2xl lg:text-3xl text-primary leading-none">
                  18+
                </p>
                <p className="font-sans text-xs text-primary">Years Exp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        style={{ animation: "fade-up-hero 0.5s ease 2s both" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-(--text-muted) hover:text-primary transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <div className="scroll-line"></div>
        <span className="font-sans text-xs tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown
          size={18}
          style={{ animation: "bounce-y 1.5s ease-in-out infinite" }}
        />
      </button>
    </section>
  );
}
