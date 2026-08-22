"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Footer() {
  const { ref, revealed } = useScrollReveal();

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div
        ref={ref}
        className={`container-content flex flex-col items-center gap-2 py-14 text-center scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <p className="text-2xl font-bold tracking-wide text-fg">
          MAIRA ARSHAD
        </p>
        <p className="text-sm text-fg-muted">
          Backend-Focused Full-Stack Developer
        </p>
        <p className="text-xs text-fg-dim mt-2">
          &copy; 2026 Maira Arshad. All rights reserved.
        </p>
      </div>
    </footer>
  );
}