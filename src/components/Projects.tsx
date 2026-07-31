"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsContent } from "@/data/portfolio-content";
import { ExternalLink, GitBranch, Code, Briefcase, GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useCountUp } from "@/lib/useCountUp";
import {
  SiTypescript,
  SiPython,
  SiSharp,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFastapi,
  SiFlutter,
  SiPostgresql,
  SiNeo4J,
  SiMysql,
  SiDatabricks,
  SiVercel,
  SiDotnet,
  SiGooglemaps,
  SiArduino,
} from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType | null> = {
  "Next.js 15 (App Router)": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  React: SiReact,
  Vercel: SiVercel,
  PostgreSQL: SiPostgresql,
  Neo4j: SiNeo4J,
  Qdrant: SiDatabricks,
  FastAPI: SiFastapi,
  "Google Gemini": null,
  Python: SiPython,
  "C#": SiSharp,
  ".NET": SiDotnet,
  MySQL: SiMysql,
  "Google Maps API": SiGooglemaps,
  Flutter: SiFlutter,
  ESP32: null,
  "Bluetooth Classic (SPP)": null,
  "Arduino C++": SiArduino,
};

const brandColors: Record<string, string> = {
  TypeScript: "#3178C6",
  Python: "#3776AB",
  "C#": "#239120",
  "Next.js 15 (App Router)": "#000000",
  React: "#61DAFB",
  "Tailwind CSS": "#06B6D4",
  FastAPI: "#009688",
  Flutter: "#02569B",
  PostgreSQL: "#4169E1",
  Neo4j: "#4581C3",
  MySQL: "#4479A1",
  Qdrant: "#D32F2F",
  Vercel: "#000000",
  ".NET": "#512BD4",
  "Google Maps API": "#4285F4",
  "Arduino C++": "#00878F",
};

function LandscapeImage({ screenshot, name }: { screenshot: string; name: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="relative w-full h-48 bg-bg-secondary rounded-xl border border-border mb-6 flex items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center gap-1.5">
          <Code size={20} className="text-fg-muted/30" />
          <span className="text-xs font-mono text-fg-muted/30">{name}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-48 rounded-xl overflow-hidden border border-border mb-6 shadow-sm">
      <Image
        src={screenshot}
        alt={`${name} screenshot`}
        fill
        className="object-cover"
        onError={() => setError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

function VoxlinkImage() {
  const [appError, setAppError] = useState(false);
  const [hwError, setHwError] = useState(false);

  return (
    <div className="relative w-full h-48 rounded-xl overflow-hidden border border-border mb-6 shadow-sm flex">
      {/* Left panel — mobile app screenshot with phone frame */}
      <div className="relative w-1/2 h-full bg-bg-secondary flex items-center justify-center">
        {!appError ? (
          <div className="relative w-[42%] h-[85%] rounded-[18px] border-2 border-fg-muted/30 overflow-hidden shadow-sm bg-white">
            <Image
              src="/projects/voxlink.png"
              alt="VOXLINK mobile app screenshot"
              fill
              className="object-contain"
              onError={() => setAppError(true)}
              sizes="25vw"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1.5">
            <Code size={18} className="text-fg-muted/30" />
            <span className="text-[10px] font-mono text-fg-muted/30">App</span>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="w-px bg-border self-stretch" />

      {/* Right panel — hardware photo */}
      <div className="relative w-1/2 h-full bg-bg-secondary flex items-center justify-center">
        {!hwError ? (
          <Image
            src="/projects/voxlink-hardware.jpg"
            alt="VOXLINK hardware setup"
            fill
            className="object-cover"
            onError={() => setHwError(true)}
            sizes="25vw"
          />
        ) : (
          <div className="flex flex-col items-center gap-1.5">
            <Code size={18} className="text-fg-muted/30" />
            <span className="text-[10px] font-mono text-fg-muted/30">Hardware</span>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projectsContent)[number];
}) {
  const { ref, revealed } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`card-lift border-2 border-accent/30 bg-bg-elevated rounded-2xl p-8 flex flex-col shadow-sm scroll-reveal ${revealed ? "revealed" : ""}`}
    >
      {/* Header — centered */}
      <div className="text-center mb-5">
        <h3 className="text-xl font-bold text-fg">{project.name}</h3>
        <p className="mt-1 text-sm font-mono text-accent tracking-wide">
          {project.tagline}
        </p>
      </div>

      {/* Per-project image treatment */}
      {project.name === "VOXLINK" ? (
        <VoxlinkImage />
      ) : project.screenshot ? (
        <LandscapeImage screenshot={project.screenshot} name={project.name} />
      ) : (
        <div className="relative w-full h-48 bg-bg-secondary rounded-xl border border-border mb-6 flex items-center justify-center overflow-hidden">
          <div className="flex flex-col items-center gap-1.5">
            <Code size={20} className="text-fg-muted/30" />
            <span className="text-xs font-mono text-fg-muted/30">{project.name}</span>
          </div>
        </div>
      )}

      {/* Description */}
      <p className="text-sm text-fg-muted leading-relaxed text-center mb-6">
        {project.description}
      </p>

      {/* Tech stack pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {project.techStack.map((tech) => {
          const TechIcon = iconMap[tech];

          return (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-fg-muted bg-bg-secondary border border-border rounded-full"
            >
              {TechIcon && (
                <TechIcon size={12} color={brandColors[tech] ?? "#666"} />
              )}
              {tech}
            </span>
          );
        })}
      </div>

      {/* Buttons — centered */}
      {(project.links.github || project.links.live) && (
        <div className="flex items-center justify-center gap-3 mt-auto">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-mono font-medium rounded-full bg-accent text-white hover:bg-accent-hover transition-all duration-200 shadow-sm"
            >
              <GitBranch size={14} />
              View Code
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-mono font-medium rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200"
            >
              <ExternalLink size={14} />
              Live Visit
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function StatItem({
  icon: Icon,
  label,
  count,
  suffix = "",
}: {
  icon: React.ElementType;
  label: string;
  count: number;
  suffix?: string;
}) {
  const { ref, display } = useCountUp({ end: count, suffix });

  return (
    <div className="flex flex-col items-center gap-1.5">
      <Icon size={20} className="text-accent" />
      <span
        ref={ref}
        className="text-2xl font-display font-bold text-fg tabular-nums"
      >
        {display}
      </span>
      <span className="text-xs text-fg-muted font-mono">{label}</span>
    </div>
  );
}

export default function Projects() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="projects" className="py-28">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-12">
          Projects
        </h2>

        {/* Stats row — counts up on scroll into view */}
        <div className="grid grid-cols-3 gap-6 mb-12 pb-12 border-b border-border">
          <StatItem icon={Code} label="Projects Built" count={5} suffix="+" />
          <StatItem icon={Briefcase} label="Live Internships" count={2} />
          <StatItem icon={GraduationCap} label="Graduation" count={2028} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsContent.map((project) => (
            <div key={project.name} className="stagger-item">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}