"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiFigma,
  SiProton,
  SiFramer,
  SiGsap,
  SiThreedotjs,
  SiNodedotjs,
  SiLaravel,
  SiMysql,
  SiGraphql,
  SiSanity,
  SiWordpress,
  SiGit,
  SiVercel,
  SiDocker,
  SiJira,
  SiPostman,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { SkillsSkeleton } from "@/components/common/Skeleton";
import { useMounted } from "@/lib/useMounted";
import { skillCategories } from "@/lib/data";

/* All icons bundled locally — zero CDN requests */
const ICON_MAP: Record<string, IconType> = {
  react: SiReact,
  nextdotjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html5: SiHtml5,
  css: SiCss,
  css3: SiCss,
  proton: SiProton,
  tailwindcss: SiTailwindcss,
  figma: SiFigma,
  framer: SiFramer,
  greensock: SiGsap,
  gsap: SiGsap,
  threedotjs: SiThreedotjs,
  nodedotjs: SiNodedotjs,
  laravel: SiLaravel,
  mysql: SiMysql,
  graphql: SiGraphql,
  sanity: SiSanity,
  wordpress: SiWordpress,
  git: SiGit,
  vercel: SiVercel,
  docker: SiDocker,
  jira: SiJira,
  postman: SiPostman,
};

type SkillItem = {
  name: string;
  slug: string | null;
  color: string;
  darkSlug?: boolean;
};

/* ─── Skill chip ─── */
function SkillChip({ skill }: { skill: SkillItem }) {
  const [hovered, setHovered] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  const chipColor = skill.darkSlug && !isDark ? "#000000" : skill.color;
  const iconColor = skill.darkSlug
    ? isDark
      ? "#ffffff"
      : "#000000"
    : skill.color;

  const IconComponent = skill.slug ? ICON_MAP[skill.slug] : null;

  return (
    <motion.span
      suppressHydrationWarning
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.08, y: -3 }}
      transition={{ type: "spring", stiffness: 500, damping: 26 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-sans font-medium cursor-default select-none"
      style={{
        borderColor: hovered ? chipColor : "var(--border)",
        backgroundColor: hovered ? `${chipColor}18` : "rgba(255,255,255,0.03)",
        boxShadow: hovered
          ? `0 0 18px ${chipColor}45, 0 0 6px ${chipColor}25, inset 0 0 0 1px ${chipColor}35`
          : "none",
        color: hovered ? chipColor : "var(--text-muted)",
        transition:
          "border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      {IconComponent ? (
        <IconComponent
          suppressHydrationWarning
          size={14}
          style={{
            color: iconColor,
            flexShrink: 0,
          }}
          aria-hidden="true"
        />
      ) : (
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ backgroundColor: chipColor }}
        />
      )}
      {skill.name}
    </motion.span>
  );
}

/* ─── Category card with mouse-tracking spotlight ─── */
function CategoryCard({
  cat,
  index,
  className = "",
}: {
  cat: (typeof skillCategories)[0];
  index: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect();
    setSpot({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      onMouseMove={onMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`glass-card relative overflow-hidden rounded-2xl p-6 ${className}`}
      style={{
        borderColor: active ? `${cat.accent}55` : undefined,
        transition: "border-color 0.35s ease",
      }}
    >
      {/* Mouse-tracking spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(420px circle at ${spot.x}px ${spot.y}px, ${cat.accent}15 0%, transparent 68%)`,
          transition: "opacity 0.35s ease",
        }}
      />

      {/* Card header */}
      <div className="relative z-10 flex items-start justify-between mb-5">
        <h3 className="font-heading text-2xl md:text-3xl tracking-wider text-(--text) leading-none">
          {cat.category.toUpperCase()}
        </h3>
        <span
          className="font-mono text-base font-bold px-2.5 py-1 rounded-lg shrink-0 ml-3 border"
          style={{
            backgroundColor: `${cat.accent}18`,
            color: cat.accent,
            borderColor: `${cat.accent}35`,
          }}
        >
          {cat.skills.length}
        </span>
      </div>

      {/* Skill chips */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {cat.skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.75, y: 8 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.32,
              delay: index * 0.04 + i * 0.045,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
          >
            <SkillChip skill={skill} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Section ─── */
export default function Skills() {
  const mounted = useMounted();
  if (!mounted) return <SkillsSkeleton />;

  const totalSkills = skillCategories.reduce(
    (sum, c) => sum + c.skills.length,
    0,
  );

  return (
    <section
      id="skills"
      className="py-24 md:py-36"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="w-full text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label justify-center"
          >
            What I Know
          </motion.span>

          <div className="flex items-end justify-center gap-4 sm:gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl text-(--text) leading-none"
            >
              SKILLS & <span className="text-gradient">TECHNOLOGIES</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-(--text-muted) mt-3 max-w-lg mx-auto"
          >
            Over 18 years, I&rsquo;ve built a deep, battle-tested toolkit.
            Here&rsquo;s what I bring to every project:
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-heading text-6xl sm:text-8xl lg:text-9xl text-[#F76235] leading-none select-none mt-4"
            aria-hidden="true"
          >
            {totalSkills}+
          </motion.div>
        </div>

        {/* ── Bento grid ──
            Row 1: Frontend (2/3) | UI & Design (1/3)
            Row 2: Animation (1/3) | Backend & CMS (1/3) | Tools (1/3)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          <CategoryCard
            cat={skillCategories[0]}
            index={0}
            className="md:col-span-2 lg:col-span-2"
          />
          <CategoryCard cat={skillCategories[1]} index={1} />
          <CategoryCard cat={skillCategories[2]} index={2} />
          <CategoryCard cat={skillCategories[3]} index={3} />
          <CategoryCard cat={skillCategories[4]} index={4} />
        </div>

        {/* ── Tagline banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card rounded-2xl p-8 text-center"
        >
          <p className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-(--text) mb-2">
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
