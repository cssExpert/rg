"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { SkillsSkeleton } from "@/components/common/Skeleton";
import { useMounted } from "@/lib/useMounted";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

/*
  Dark-mode colors are design-accurate; light-mode overrides fix
  contrast failures (WCAG AA ≥ 4.5:1 on white):
    JS   #f7df1e → #7a6400  (~4.9:1)
    Re   #61dafb → #0369a1  (~8.0:1)
    Nx   #ceff00 → #527200  (~5.5:1)
    Tw   #38bdf8 → #0369a1  (~8.0:1)
*/
const skillColors: Record<
  string,
  {
    bg: string;
    text: string;
    icon: string;
    lightBg?: string;
    lightText?: string;
  }
> = {
  html: { bg: "rgba(227,76,38,0.15)", text: "#e34c26", icon: "H5" },
  css: { bg: "rgba(33,150,243,0.15)", text: "#2196f3", icon: "C3" },
  js: {
    bg: "rgba(247,223,30,0.15)",
    text: "#f7df1e",
    icon: "JS",
    lightBg: "rgba(122,100,0,0.10)",
    lightText: "#7a6400",
  },
  ts: { bg: "rgba(49,120,198,0.15)", text: "#3178c6", icon: "TS" },
  react: {
    bg: "rgba(97,218,251,0.15)",
    text: "#61dafb",
    icon: "Re",
    lightBg: "rgba(3,105,161,0.10)",
    lightText: "#0369a1",
  },
  next: {
    bg: "rgba(206,255,0,0.15)",
    text: "#ceff00",
    icon: "Nx",
    lightBg: "rgba(82,114,0,0.10)",
    lightText: "#527200",
  },
  tailwind: {
    bg: "rgba(56,189,248,0.15)",
    text: "#38bdf8",
    icon: "Tw",
    lightBg: "rgba(3,105,161,0.10)",
    lightText: "#0369a1",
  },
  bootstrap: { bg: "rgba(121,82,179,0.15)", text: "#7952b3", icon: "Bs" },
  figma: { bg: "rgba(242,78,30,0.15)", text: "#f24e1e", icon: "Fg" },
  photoshop: { bg: "rgba(0,45,80,1)", text: "#2C99EB", icon: "Ps" },
  experience: { bg: "rgba(70,0,55,1)", text: "#FF61F6", icon: "Ex" },
  illustrator: { bg: "rgba(50,0,0,1)", text: "#EB8C02", icon: "Ai" },
  wordpress: { bg: "rgba(33,117,155,0.15)", text: "#21759b", icon: "Wp" },
  git: { bg: "rgba(240,80,51,0.15)", text: "#f05033", icon: "Git" },
  node: { bg: "rgba(104,160,99,0.15)", text: "#68a063", icon: "Nj" },
  jquery: { bg: "rgba(15,105,175,1)", text: "#86CAFF", icon: "JQ" },
};

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [animated, setAnimated] = useState(false);
  const { resolvedTheme } = useTheme();

  const base = skillColors[skill.icon] ?? {
    bg: "rgba(206,255,0,0.1)",
    text: "#ceff00",
    icon: skill.name.slice(0, 2),
  };
  const isLight = resolvedTheme === "light";

  const textColor = isLight && base.lightText ? base.lightText : base.text;
  const bgColor = isLight && base.lightBg ? base.lightBg : base.bg;

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setAnimated(true), index * 80);
      return () => clearTimeout(t);
    }
  }, [inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="glass-card rounded-2xl p-5 group cursor-default"
    >
      {/* Icon badge */}
      <div
        suppressHydrationWarning
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ background: bgColor }}
      >
        <span
          suppressHydrationWarning
          className="font-mono font-bold text-md md:text-lg tracking-tight"
          style={{ color: textColor }}
        >
          {base.icon}
        </span>
      </div>

      {/* Name + percentage */}
      <div className="flex items-center justify-between mb-3">
        <p className="font-sans font-semibold text-sm text-(--text)">
          {skill.name}
        </p>
        <span
          suppressHydrationWarning
          className="font-mono text-xs font-bold"
          style={{ color: textColor }}
        >
          {skill.level}%
        </span>
      </div>

      {/* Progress bar
          Track uses --border so it's visible on both dark (rgba white/6)
          and light (rgba black/8) backgrounds.                          */}
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "var(--border)" }}
      >
        <div
          suppressHydrationWarning
          className="h-full rounded-full relative overflow-hidden"
          style={{
            width: animated ? `${skill.level}%` : "0%",
            transition: "width 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
            background: `linear-gradient(90deg, ${textColor}, ${textColor}99)`,
          }}
        >
          {/* Shimmer sweep */}
          <span className="absolute inset-0 animate-[shimmer_2.5s_infinite] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] -translate-x-full" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const mounted = useMounted();
  if (!mounted) return <SkillsSkeleton />;

  return (
    <section
      id="skills"
      className="py-24 md:py-36"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label justify-center"
          >
            What I Know
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl text-(--text) leading-none"
          >
            MY <span className="text-gradient">SKILLS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-(--text-muted) mt-4 max-w-xl mx-auto"
          >
            18+ years of hands-on experience across the full frontend stack —
            from design systems to production deployments.
          </motion.p>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Tagline banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card rounded-2xl p-8 text-center"
        >
          <p className="font-heading text-2xl sm:text-3xl text-(--text) mb-2">
            Always <span className="text-primary">LEARNING</span>, Always{" "}
            <span className="text-primary">GROWING</span>
          </p>
          <p className="font-sans text-sm text-(--text-muted)">
            Keeping up with the latest technologies to deliver future-proof
            solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
