"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={ref}
      className="relative inline-block text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-12"
    >
      {children}
      <span
        className={`absolute left-0 -bottom-2 h-[3px] bg-accent transition-transform duration-700 ease-out origin-left ${
          visible ? "scale-x-100" : "scale-x-0"
        }`}
        style={{ width: "100%" }}
      />
    </h2>
  );
}