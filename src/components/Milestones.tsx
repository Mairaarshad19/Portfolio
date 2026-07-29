"use client";

import { GraduationCap, Award, Briefcase, Rocket, Brain, FolderKanban } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const milestones = [
  {
    icon: GraduationCap,
    title: "CS @ UET Lahore",
    detail: "Class of 2028",
  },
  {
    icon: Award,
    title: "Honhaar Scholarship",
    detail: "Fully funded",
  },
  {
    icon: Briefcase,
    title: "2 Concurrent Internships",
    detail: "FlyRank (Backend AI + AI Fluency tracks)",
  },
  {
    icon: Rocket,
    title: "Live Client Deployment",
    detail: "Allied Shipping Agency Website (Next.js 15)",
  },
  {
    icon: Brain,
    title: "Anthropic AI Fluency Certification",
    detail: "In progress via FlyRank capstone",
  },
  {
    icon: FolderKanban,
    title: "9 Projects Built",
    detail: "Spanning backend, full-stack, security, and embedded systems",
  },
];

export default function Milestones() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="py-16">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-10">
          Milestones
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-bg-elevated border border-border rounded-xl p-5 shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center text-accent shrink-0">
                <m.icon size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-fg">{m.title}</h3>
                <p className="text-xs text-fg-muted mt-0.5 leading-relaxed">
                  {m.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}