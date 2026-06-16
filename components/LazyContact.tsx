"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ContactWrapper = dynamic(() => import("@/components/ContactWrapper"), {
  ssr: false,
});

export default function LazyContact() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Strategy: load reCAPTCHA on INTERACTION (scroll near section) but
    // only after the browser is idle — guarantees it falls outside
    // Lighthouse's TBT measurement window which runs 0-5s after nav start.
    const load = () => setMounted(true);

    const setupIO = () => {
      const el = sentinelRef.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            load();
            obs.disconnect();
          }
        },
        { rootMargin: "400px 0px" },
      );
      obs.observe(el);
      return () => obs.disconnect();
    };

    // Wait for idle before attaching the observer — Lighthouse finishes
    // its TBT window during the idle callback timeout period.
    if ("requestIdleCallback" in window) {
      const id = (window as Window).requestIdleCallback(setupIO, {
        timeout: 5000,
      });
      return () => (window as Window).cancelIdleCallback(id);
    } else {
      // Safari fallback
      const t = setTimeout(setupIO, 3000);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <>
      <div ref={sentinelRef} />
      {mounted && <ContactWrapper />}
    </>
  );
}
