import { useEffect, RefObject } from "react";

export function useReveal(ref: RefObject<HTMLElement | null>, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const section = ref.current;
    if (!section) return;
    const items = section.querySelectorAll<HTMLElement>(".reveal-item");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "-30px 0px" },
    );
    items.forEach((item) => obs.observe(item));
    return () => obs.disconnect();
  }, [enabled, ref]);
}
