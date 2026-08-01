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
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-8">
          About Me
        </h2>

        {/* Bio paragraphs */}
        <div className="space-y-4 text-sm sm:text-base text-fg-muted leading-relaxed">
          {paragraph.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Journey snapshot — compact horizontal mini-timeline */}
        <div className="mt-12">
          <h3 className="text-xs font-medium text-accent uppercase tracking-wider mb-6">
            Journey Snapshot
          </h3>
          <div className="relative">
            {/* Connecting line — hidden on mobile */}
            <div className="absolute top-[5px] left-0 right-0 h-px bg-border hidden md:block" />
            <ol className="stagger-container grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-0">
              {journeyMilestones.map((milestone) => (
                <li
                  key={milestone}
                  className="stagger-item relative flex items-center gap-3 md:flex-col md:text-center md:gap-3"
                >
                  {/* Dot */}
                  <span className="relative z-10 w-[11px] h-[11px] rounded-full bg-accent border-2 border-bg shadow-sm shrink-0" />
                  <span className="text-sm font-medium text-fg-muted md:max-w-[160px]">
                    {milestone}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Certifications */}
        <div className="stagger-container mt-10">
          <h3 className="text-xs font-medium text-accent uppercase tracking-wider mb-4">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
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
    </section>
  );
}