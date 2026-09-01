import { useEffect, useRef, useState } from "react";

/**
 * Replicates the old vanilla-JS IntersectionObserver "vintage-reveal"
 * animation. Attach the returned ref to any element, and use `revealed`
 * to toggle the "show-*" class from style.css.
 */
export default function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, revealed];
}
