"use client";

import { Server, Globe, Database, Cpu } from "lucide-react";
import { capabilitiesContent } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server size={24} />,
  Globe: <Globe size={24} />,
  Database: <Database size={24} />,
  Cpu: <Cpu size={24} />,
};

function CapabilityCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  const { ref, revealed } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${revealed ? "revealed" : ""}`}
    >
      <div className="card-lift h-full bg-bg-elevated border border-border rounded-xl p-6 sm:p-7 hover:border-accent/30 shadow-sm">
        <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center text-accent mb-5">
          {iconMap[icon]}
        </div>
        <h3 className="text-lg font-semibold text-fg mb-3">{title}</h3>
        <p className="text-sm text-fg-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Capabilities() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="capabilities" className="py-28">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-12">
          What I Can Help With
        </h2>

        <div className="stagger-container grid grid-cols-1 sm:grid-cols-2 gap-6">
          {capabilitiesContent.map((cap) => (
            <div key={cap.title} className="stagger-item">
              <CapabilityCard
                title={cap.title}
                description={cap.description}
                icon={cap.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}