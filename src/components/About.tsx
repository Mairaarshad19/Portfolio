"use client";

import { aboutContent } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function About() {
  const { paragraph, quickFacts } = aboutContent;
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="about" className="py-24">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-center">
          {/* Photo column */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-2xl overflow-hidden bg-bg-elevated border border-border">
              {/* Placeholder — swap with <Image /> when you have a photo */}
              <div className="w-full h-full flex items-center justify-center text-fg-dim text-sm font-mono">
                photo
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="md:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg mb-6">
              About Me
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-fg-dim leading-relaxed">
              {paragraph.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Quick facts */}
            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {quickFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-mono text-accent uppercase tracking-wider mb-1">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-fg-muted">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}