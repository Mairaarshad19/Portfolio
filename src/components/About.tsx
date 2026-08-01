"use client";

import { Award } from "lucide-react";
import { aboutContent } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function About() {
  const { paragraph, journeyMilestones, certifications } = aboutContent;
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="about" className="py-28">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* ── LEFT COLUMN — About text (~60%) ── */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-8">
              About Me
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-fg-muted leading-relaxed">
              {paragraph.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — Journey + Certifications (~40%) ── */}
          <div className="lg:col-span-2">
            {/* Journey snapshot — vertical mini-timeline */}
            <div>
              <h3 className="text-xs font-medium text-accent uppercase tracking-wider mb-6">
                Journey Snapshot
              </h3>
              <ol className="stagger-container relative border-l border-border pl-6 space-y-6">
                {journeyMilestones.map((milestone) => (
                  <li key={milestone} className="stagger-item relative">
                    {/* Dot */}
                    <span className="absolute -left-[31px] top-[5px] w-[11px] h-[11px] rounded-full bg-accent border-2 border-bg shadow-sm" />
                    <span className="text-sm font-medium text-fg-muted">
                      {milestone}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Certifications */}
            <div className="stagger-container mt-12">
              <h3 className="text-xs font-medium text-accent uppercase tracking-wider mb-4">
                Certifications
              </h3>
              <div className="flex flex-col gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="stagger-item inline-flex items-center gap-2.5 bg-accent-subtle border border-accent/20 rounded-full px-4 py-2"
                  >
                    <Award size={16} className="text-accent shrink-0" />
                    <span className="text-sm font-medium text-fg">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}