"use client";

import { GraduationCap } from "lucide-react";
import { educationContent } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  const { degree, institution, coursework, certifications } = educationContent;
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="education" className="py-28 bg-bg-secondary">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <SectionHeading>Education & Certifications</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* ── LEFT COLUMN — Education ── */}
          <div className="card-lift bg-bg-elevated border border-border rounded-xl p-6 sm:p-8 shadow-sm h-full">
            {/* Degree row */}
            <div className="flex items-start gap-4 mb-10">
              <span className="w-12 h-12 shrink-0 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <GraduationCap size={24} className="text-accent" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-fg leading-snug">
                  {degree}
                </h3>
                <p className="text-sm text-fg-muted mt-1">{institution}</p>
              </div>
            </div>

            {/* Relevant coursework — pill tags */}
            <div>
              <h4 className="text-xs font-semibold text-fg-dim uppercase tracking-wider mb-5">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap" style={{ gap: "10px" }}>
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3.5 py-2 text-xs font-medium text-fg-muted bg-bg-secondary border border-border rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Certifications ── */}
          <div className="card-lift bg-bg-elevated border border-border rounded-xl p-6 sm:p-8 shadow-sm h-full">
            <h3 className="text-xs font-semibold text-fg-dim uppercase tracking-wider mb-6">
              Certifications
            </h3>
            <div className="flex flex-col gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="inline-flex items-center gap-3.5 bg-bg-elevated border border-border rounded-lg px-4 py-3"
                >
                  <span className="w-9 h-9 shrink-0 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <GraduationCap size={18} className="text-accent" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-fg leading-snug">
                      {cert.name}
                    </p>
                    <p className="text-xs text-fg-muted mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}