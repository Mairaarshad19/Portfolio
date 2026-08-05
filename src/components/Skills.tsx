"use client";

import { skillCategories } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiSharp,
  SiNextdotjs,
  SiExpress,
  SiReact,
  SiTailwindcss,
  SiFastapi,
  SiFlask,
  SiFlutter,
  SiPostgresql,
  SiNeo4J,
  SiMysql,
  SiDatabricks,
  SiGithub,
  SiDocker,
  SiVercel,
  SiNodedotjs,
  SiDotnet,
  SiGooglegemini,
} from "react-icons/si";
import { Network } from "lucide-react";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  "C++": SiCplusplus,
  "C#": SiSharp,
  "Next.js": SiNextdotjs,
  "Express.js": SiExpress,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  FastAPI: SiFastapi,
  Flask: SiFlask,
  ".NET Framework (Windows Forms)": SiDotnet,
  Flutter: SiFlutter,
  "REST API": Network,
  "Google Gemini API": SiGooglegemini,
  PostgreSQL: SiPostgresql,
  Neo4j: SiNeo4J,
  MySQL: SiMysql,
  Qdrant: SiDatabricks,
  "Git/GitHub": SiGithub,
  Docker: SiDocker,
  Vercel: SiVercel,
};

const brandColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  "C++": "#00599C",
  "C#": "#239120",
  "Next.js": "#000000",
  "Express.js": "#000000",
  React: "#61DAFB",
  "Tailwind CSS": "#06B6D4",
  "Node.js": "#5FA04E",
  FastAPI: "#009688",
  Flask: "#000000",
  ".NET Framework (Windows Forms)": "#512BD4",
  Flutter: "#02569B",
  "REST API": "#1d4ed8",
  "Google Gemini API": "#4285F4",
  PostgreSQL: "#4169E1",
  Neo4j: "#4581C3",
  MySQL: "#4479A1",
  Qdrant: "#D32F2F",
  "Git/GitHub": "#181717",
  Docker: "#2496ED",
  Vercel: "#000000",
};

function SkillPill({ skill }: { skill: string }) {
  const Icon = iconMap[skill];
  if (!Icon) return null;

  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-bg-elevated border border-border rounded-xl p-5 shadow-sm hover:border-accent/40 hover:shadow-md transition-all duration-200">
      <div className="w-10 h-10 flex items-center justify-center">
        <Icon size={28} color={brandColors[skill] ?? "#666"} aria-label={skill} />
      </div>
      <span className="text-xs font-medium text-fg-muted text-center leading-tight">
        {skill}
      </span>
    </div>
  );
}

export default function Skills() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="skills" className="py-28">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <SectionHeading>Skills</SectionHeading>

        {/* Intro paragraph */}
        <p className="text-sm sm:text-base text-fg-muted leading-relaxed max-w-2xl mb-12">
          I build backend systems and full-stack applications with TypeScript
          and Python, working across Express.js, FastAPI, and Next.js. My
          database experience spans relational, graph, and vector stores,
          including PostgreSQL, Neo4j, and Qdrant. I use Docker, Git, and
          CI/CD tooling to keep projects production-ready.
        </p>

        {/* Full category breakdown — all skills at equal visual weight */}
        <div className="space-y-10">
          {skillCategories.map((cat) => (
            <div key={cat.id}>
              <h3 className="text-xs font-medium text-accent uppercase tracking-wider mb-4">
                {cat.label}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {cat.skills.map((skill) => (
                  <SkillPill key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}