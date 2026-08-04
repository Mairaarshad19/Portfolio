"use client";

import { Globe, Server, Database, ShieldCheck } from "lucide-react";
import { servicesContent } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={24} />,
  Server: <Server size={24} />,
  Database: <Database size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
};

function ServiceCard({
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
    <div ref={ref} className={`scroll-reveal ${revealed ? "revealed" : ""}`}>
      <div className="card-lift h-full min-h-[220px] flex flex-col bg-bg-elevated border border-border rounded-xl p-6 sm:p-7 hover:border-accent/30 shadow-sm">
        <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center text-accent mb-5">
          {iconMap[icon]}
        </div>
        <h3 className="text-lg font-display font-semibold text-fg mb-3">
          {title}
        </h3>
        <p className="text-sm text-fg-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Capabilities() {
  const { ref, revealed } = useScrollReveal();

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="capabilities" className="py-28">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-12">
          Services
        </h2>

        {/* Service cards — single cohesive grid */}
        <div className="stagger-container grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
          {servicesContent.map((service) => (
            <div key={service.title} className="stagger-item">
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <a
            href="#contact"
            onClick={handleCtaClick}
            className="btn-lift inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-accent text-white font-semibold text-sm transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 active:scale-[0.97]"
          >
            Let's Talk About Your Project
          </a>
        </div>
      </div>
    </section>
  );
}