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
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          obs.disconnect();
        }
      },
      { rootMargin: "600px 0px" }, // start loading 600px before user reaches it
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} />
      {mounted && <ContactWrapper />}
    </>
  );
}
