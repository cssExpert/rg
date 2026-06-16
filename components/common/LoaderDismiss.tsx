"use client";

import { useEffect } from "react";

export default function LoaderDismiss() {
  useEffect(() => {
    const loader = document.getElementById("rg-loader");
    const numEl = document.getElementById("rg-loader-num");
    if (!loader) return;

    // Animate counter 0 → 100 over 1.85s with ease-out curve
    let rafId: number;
    let startTs: number | null = null;
    const duration = 1000;

    function tick(ts: number) {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 2.4);
      if (numEl) numEl.textContent = String(Math.floor(eased * 100));
      if (p < 1) rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    // Hide after line finishes + circle expansion completes (1.85s + 0.72s)
    const timer = setTimeout(() => {
      loader.classList.add("is-hidden");
    }, 2050);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, []);

  return null;
}
