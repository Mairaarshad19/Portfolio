"use client";

import { experienceContent } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";

/**
 * Renders text with `**bold**` markers as <strong> elements
 * for ATS-friendly keyword highlighting.
 */
function renderBoldText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-fg">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function ExperienceCard({
  exp,
}: {
  exp: (typeof experienceContent)[number];
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
      <span className="inline-block mb-2 text-xs font-medium text-accent tracking-wide">
        {exp.dates}
      </span>

      {/* Card */}
      <div className="card-lift bg-bg-elevated border border-border rounded-xl p-6 hover:border-border-light shadow-sm">
        <h3 className="text-lg font-display font-semibold text-fg">{exp.role}</h3>
        <p className="text-sm text-fg-muted mt-0.5 mb-4 flex items-center gap-2">
          {exp.company}
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-accent-subtle border border-accent/20 text-xs font-medium text-accent">
            {exp.workMode}
          </span>
        </p>

        <ul className="space-y-2">
          {exp.bullets.map((bullet, j) => (
            <li
              key={j}
              className="text-sm text-fg-muted leading-relaxed pl-4 relative"
            >
              <span className="absolute left-0 top-[0.6em] w-1.5 h-px bg-fg-dim" />
              {renderBoldText(bullet)}
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
    <section id="experience" className="py-28">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-12">
          Experience
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[3.5px] md:left-[31.5px] top-0 bottom-0 w-px bg-border" />

          <div className="stagger-container space-y-12">
            {experienceContent.map((exp, i) => (
              <div key={i} className="stagger-item">
                <ExperienceCard exp={exp} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}