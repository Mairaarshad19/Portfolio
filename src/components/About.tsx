"use client";

import { aboutContent } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function About() {
  const { paragraph, journeyMilestones } = aboutContent;
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="about" className="py-28">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-8">
          About Me
        </h2>

        {/* Bio — single full-width column */}
        <div className="space-y-4 text-sm sm:text-base text-fg-muted leading-relaxed max-w-3xl">
          {paragraph.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Journey snapshot — horizontal strip spanning full width */}
        <div className="mt-16">
          <h3 className="text-xs font-medium text-accent uppercase tracking-wider mb-8">
            Journey Snapshot
          </h3>
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-[5px] left-0 right-0 h-px bg-border" />
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {journeyMilestones.map((milestone) => (
                <li key={milestone} className="relative flex flex-col">
                  {/* Dot */}
                  <span className="relative z-10 w-[11px] h-[11px] rounded-full bg-accent border-2 border-bg shadow-sm mb-4" />
                  <span className="text-sm font-medium text-fg-muted">
                    {milestone}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}