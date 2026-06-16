"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

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

const Stats = () => {
  return (
    <>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="reveal-item glass-card rounded-xl p-4 text-center"
        >
          <p className="font-heading text-4xl md:text-5xl text-primary leading-none mb-1">
            <CountUp value={stat.value} />
          </p>
          <p className="font-sans text-sm text-(--text-muted)">{stat.label}</p>
        </div>
      ))}
    </>
  );
};

export default Stats;
