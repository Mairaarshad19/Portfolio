"use client";

import { Globe, Server, Database, ShieldCheck } from "lucide-react";
import { servicesContent } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import MagneticButton from "@/components/MagneticButton";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={24} aria-label="Web Development" />,
  Server: <Server size={24} aria-label="Backend & API Development" />,
  Database: <Database size={24} aria-label="Database Design" />,
  ShieldCheck: <ShieldCheck size={24} aria-label="Secure Production Code" />,
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
    <div
      ref={ref}
      className={`scroll-reveal h-full ${revealed ? "revealed" : ""}`}
    >
      <div className="card-lift h-full flex flex-col bg-bg-elevated border-2 border-accent/30 rounded-2xl p-6 sm:p-7 shadow-sm hover:border-accent/50 hover:shadow-md transition-all duration-200">
        {/* Header row — icon badge + title on the same line */}
        <div className="flex items-center gap-3.5 mb-4 sm:mb-5">
          <span className="w-11 h-11 shrink-0 rounded-lg bg-accent-subtle flex items-center justify-center text-accent">
            {iconMap[icon]}
          </span>
          <h3 className="text-base sm:text-lg font-display font-semibold text-fg leading-snug">
            {title}
          </h3>
        </div>
        <p className="text-sm text-fg-muted leading-relaxed text-justify">
          {description}
        </p>
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
        <SectionHeading>Services</SectionHeading>

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
          <MagneticButton
            href="#contact"
            onClick={handleCtaClick}
            className="btn-lift px-8 py-3.5 rounded-lg bg-accent text-white font-semibold text-sm hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 active:scale-[0.97]"
          >
            Let's Talk About Your Project
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}