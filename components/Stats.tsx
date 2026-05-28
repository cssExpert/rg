"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/lib/data";

function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const num = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => `${Math.round(v)}${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) animate(count, num, { duration: 2, ease: "easeOut" });
  }, [inView, count, num]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const Stats = () => {
  return (
    <>
      {stats.map((stat) => (
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="glass-card rounded-xl p-4 text-center"
          key={stat.label}
        >
          <div className="text-center sm:text-left">
            <p className="font-heading text-3xl text-primary leading-none mb-1">
              <CountUp value={stat.value} />
            </p>
            <p className="font-sans text-xs text-(--text-muted)">
              {stat.label}
            </p>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Stats;
