"use client";

import { useRef, useState } from "react";

export default function MagneticButton({
  children,
  className = "",
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    // Clamp to max ~7px shift
    const max = 7;
    const dx = Math.max(-max, Math.min(max, x * 0.2));
    const dy = Math.max(-max, Math.min(max, y * 0.2));
    setOffset({ x: dx, y: dy });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex items-center justify-center transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
      {...props}
    >
      {children}
    </a>
  );
}