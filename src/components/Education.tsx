"use client";

import { educationContent } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Education() {
  const { degree, institution, year, coursework, honors } = educationContent;
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="education" className="py-28">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-8">
          Education
        </h2>

        <div className="card-lift bg-bg-elevated border border-border rounded-xl p-6 sm:p-8 shadow-sm">
          {/* Degree row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-fg">
                {degree}
              </h3>
              <p className="text-sm text-fg-muted mt-0.5">{institution}</p>
            </div>
            <span className="text-xs font-mono text-accent whitespace-nowrap">
              {year}
            </span>
          </div>

          {/* Relevant coursework */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-fg-dim uppercase tracking-wider mb-3">
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="px-2.5 py-1 text-xs font-mono text-fg-muted bg-bg-secondary border border-border rounded-md"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Honors */}
          <div className="pt-4 border-t border-border">
            <span className="inline-flex items-center gap-2 text-sm text-fg-muted">
              <span className="text-accent text-base">✦</span>
              {honors}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}