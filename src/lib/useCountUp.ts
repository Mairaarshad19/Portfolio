"use client";

import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  suffix?: string;
  threshold?: number;
}

export function useCountUp({
  end,
  duration = 1500,
  suffix = "",
  threshold = 0.1,
}: UseCountUpOptions) {
  const ref = useRef<HTMLSpanElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, revealed]);

  useEffect(() => {
    if (!revealed) return;

    let startTime: number | null = null;
    let rafId: number;

    function animate(now: number) {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for a smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    }

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [revealed, end, duration]);

  return { ref, count, revealed, display: `${count}${suffix}` };
}