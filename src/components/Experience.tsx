"use client";

import { experienceContent } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experienceContent)[number];
  index: number;
}) {
  const { ref, revealed } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`relative pl-10 md:pl-20 scroll-reveal ${revealed ? "revealed" : ""}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-[-4.5px] md:left-[27.5px] top-1.5 w-[9px] h-[9px] rounded-full bg-accent ring-2 ring-bg" />

      {/* Date badge */}
      <span className="inline-block mb-2 text-xs font-mono text-accent tracking-wide">
        {exp.dates}
      </span>

      {/* Card */}
      <div className="bg-bg-elevated border border-border rounded-xl p-6 hover:border-border-light transition-colors">
        <h3 className="text-lg font-semibold text-fg">{exp.role}</h3>
        <p className="text-sm text-fg-muted mt-0.5 mb-4">{exp.company}</p>

        <ul className="space-y-2">
          {exp.bullets.map((bullet, j) => (
            <li
              key={j}
              className="text-sm text-fg-dim leading-relaxed pl-4 relative"
            >
              <span className="absolute left-0 top-[0.6em] w-1.5 h-px bg-fg-dim" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="experience" className="py-24">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg mb-12">
          Experience
        </h2>

        <div className="relative">
          {/* Vertical timeline line — repositioned for mobile */}
          <div className="absolute left-[3.5px] md:left-[31.5px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experienceContent.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}