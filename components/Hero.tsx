"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { stats } from "@/lib/data";
import Icon from "@/components/common/Icon";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const floatingCards = [
  { label: "React", color: "#61DAFB", top: "8%", right: "2%", delay: 0.8 },
  { label: "Next.js", color: "#CEFF00", top: "38%", right: "-4%", delay: 1.0 },
  {
    label: "TypeScript",
    color: "#3178C6",
    bottom: "30%",
    right: "0%",
    delay: 1.2,
  },
  {
    label: "Tailwind",
    color: "#38BDF8",
    bottom: "10%",
    left: "4%",
    delay: 1.4,
  },
];

export default function Hero() {
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
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-sans font-semibold tracking-widest uppercase">
                Available for Freelance
              </span>
            </motion.div>

            {/* Heading */}
            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-heading text-2xl sm:text-3xl tracking-widest text-(--text-muted) mb-2"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-heading text-[clamp(4rem,12vw,9rem)] leading-none tracking-wider mb-0"
            >
              <span className="text-(--text)">RAVI </span>
              <span className="text-gradient">GUPTA</span>
            </motion.h1>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 mb-3"
            >
              <div className="h-px flex-1 max-w-12 bg-primary/60" />
              <p className="font-sans text-base sm:text-lg text-(--text-muted) tracking-wide">
                Senior Frontend Developer &amp; UI/UX Specialist
              </p>
            </motion.div>

            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-sans text-(--text-muted) text-base leading-relaxed max-w-lg mb-10"
            >
              I craft pixel-perfect, high-performance web experiences that blend
              cutting-edge technology with thoughtful design. With{" "}
              <span className="text-primary font-semibold">18+ years</span> of
              expertise, I transform ideas into digital products that stand out.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 mb-12"
            >
              <button onClick={scrollToProjects} className="btn-primary group">
                View Projects
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
              <button onClick={scrollToContact} className="btn-outline">
                Contact Me
              </button>
              <a
                href="#"
                className="btn-outline flex items-center gap-2"
                aria-label="Download resume"
              >
                <Download size={15} />
                Resume
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-6 sm:gap-10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-heading text-3xl sm:text-4xl text-primary leading-none">
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs text-(--text-muted) tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – Profile + Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dashed border-primary/10"
              />

              {/* Profile image area */}
              <div className="absolute inset-8 rounded-full bg-linear-to-br from-primary/20 via-surface to-darker light:via-(--card) light:to-(--bg-2) border border-primary/20 overflow-hidden flex items-end justify-center">
                <div className="w-full h-full bg-linear-to-br from-[#1a1a1a] to-dark light:from-(--bg-2) light:to-(--card) flex items-center justify-center">
                  {/* Avatar placeholder with initials */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-linear-to-br from-primary/30 to-primary/10 border-2 border-primary/40 flex items-center justify-center">
                      <span className="font-heading text-3xl sm:text-4xl text-(--text) tracking-widest">
                        <Icon name="Brand" size="36" className="w-9 h-9" />
                      </span>
                    </div>
                    <div className="text-center">
                      <p className="font-heading text-base text-(--text) tracking-wider">
                        RAVI GUPTA
                      </p>
                      <p className="font-sans text-xs text-(--text-muted) tracking-wide">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech cards */}
              {floatingCards.map((card) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: card.delay,
                    duration: 0.5,
                    ease: "backOut",
                  }}
                  style={{
                    top: card.top,
                    right: card.right,
                    bottom: card.bottom,
                    left: card.left,
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
                </motion.div>
              ))}

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-5 py-2.5 rounded-2xl text-center whitespace-nowrap glow-primary"
              >
                <p className="font-heading text-xl text-primary leading-none">
                  18+
                </p>
                <p className="font-sans text-xs text-primary">Years Exp.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-(--text-muted) hover:text-primary transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <div className="scroll-line"></div>
        <span className="font-sans text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
