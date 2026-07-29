"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const milestones = [
  {
    year: "2024",
    title: "Started BS Computer Science",
    subtitle: "UET Lahore",
    description:
      "Began the four-year degree program, building a foundation in computing theory and software development.",
  },
  {
    year: "2024 – 2025",
    title: "Core CS Foundations",
    subtitle: "Coursework",
    description:
      "Completed core coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Systems, and Computer Networks.",
  },
  {
    year: "June 2025",
    title: "Startup Project Lead Intern",
    subtitle: "Ustadam",
    description:
      "Planned the MVP roadmap and designed system architecture for an AI-based EdTech platform, including database schema, user flows, and a 5-year financial model.",
  },
  {
    year: "July 2025 – Present",
    title: "Dual Internships Begin",
    subtitle: "FlyRank",
    description:
      "Started Backend AI Engineering and AI Fluency tracks simultaneously — building RAG pipelines, structured-output workflows, and evaluation frameworks.",
  },
  {
    year: "2025 – 2026",
    title: "Live Client Project",
    subtitle: "Allied Shipping Agency",
    description:
      "Solo-built and shipped a production Next.js 15 website for a freight logistics client, now actively maintained.",
  },
  {
    year: "July 2026 – Present",
    title: "Mobile Development",
    subtitle: "DevInfantary",
    description:
      "Cross-platform Flutter app development, expanding into mobile application architecture and UI engineering.",
  },
];

export default function Journey() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="journey" className="py-28">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-12">
          Developer Journey
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div key={i} className="relative pl-8 sm:pl-10">
                {/* Timeline dot */}
                <div className="absolute left-[3px] sm:left-[3px] top-1.5 w-[9px] h-[9px] rounded-full bg-accent ring-2 ring-bg" />

                {/* Year badge */}
                <span className="inline-block mb-1.5 text-xs font-mono text-accent tracking-wide font-medium">
                  {m.year}
                </span>

                {/* Content */}
                <h3 className="text-lg font-semibold text-fg">{m.title}</h3>
                <p className="text-sm text-fg-muted mt-0.5 mb-2">{m.subtitle}</p>
                <p className="text-sm text-fg-dim leading-relaxed max-w-2xl">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}