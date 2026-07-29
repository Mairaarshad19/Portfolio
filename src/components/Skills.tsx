"use client";

import { skillsContent } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Skills() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="skills" className="py-28">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-12">
          Skills
        </h2>

        <div className="stagger-container grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {skillsContent.map((group) => (
            <div key={group.category} className="stagger-item">
              <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono text-fg-muted bg-bg-secondary border border-border rounded-md hover:border-accent/40 hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}