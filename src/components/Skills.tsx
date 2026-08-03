"use client";

import { coreStack, skillCategories } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";
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
  SiSqlite,
  SiDatabricks,
  SiGithub,
  SiDocker,
  SiVercel,
  SiNodedotjs,
  SiDotnet,
  SiGooglegemini,
} from "react-icons/si";
import { TbBrandVisualStudio } from "react-icons/tb";
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
  "Visual Studio": TbBrandVisualStudio,
  PostgreSQL: SiPostgresql,
  Neo4j: SiNeo4J,
  MySQL: SiMysql,
  SQLite: SiSqlite,
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
  "Visual Studio": "#5C2D91",
  PostgreSQL: "#4169E1",
  Neo4j: "#4581C3",
  MySQL: "#4479A1",
  SQLite: "#003B57",
  Qdrant: "#D32F2F",
  "Git/GitHub": "#181717",
  Docker: "#2496ED",
  Vercel: "#000000",
};

function SkillPill({
  skill,
  size = 28,
}: {
  skill: string;
  size?: number;
}) {
  const Icon = iconMap[skill];
  if (!Icon) return null;

  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-bg-elevated border border-border rounded-xl p-5 shadow-sm hover:border-accent/40 hover:shadow-md transition-all duration-200">
      <div className="w-10 h-10 flex items-center justify-center">
        <Icon size={size} color={brandColors[skill] ?? "#666"} />
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
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-6">
          Skills
        </h2>

        {/* Intro paragraph */}
        <p className="text-sm sm:text-base text-fg-muted leading-relaxed max-w-2xl mb-12">
          I build backend systems and full-stack applications with TypeScript
          and Python, working across Express.js, FastAPI, and Next.js. My
          database experience spans relational, graph, and vector stores,
          including PostgreSQL, Neo4j, and Qdrant. I use Docker, Git, and
          CI/CD tooling to keep projects production-ready.
        </p>

        {/* Core Stack — prominent row */}
        <div className="mb-14">
          <h3 className="text-xs font-medium text-accent uppercase tracking-wider mb-5">
            Core Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreStack.map((skill) => {
              const Icon = iconMap[skill];
              return (
                <div
                  key={skill}
                  className="flex flex-col items-center justify-center gap-3 bg-accent-subtle border border-accent/20 rounded-xl p-6 shadow-sm hover:border-accent/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Icon size={36} color={brandColors[skill] ?? "#666"} />
                  </div>
                  <span className="text-sm font-semibold text-fg text-center leading-tight">
                    {skill}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Full category breakdown — all visible */}
        <div className="space-y-10">
          {skillCategories.map((cat) => (
            <div key={cat.id}>
              <h3 className="text-xs font-medium text-accent uppercase tracking-wider mb-4">
                {cat.label}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {cat.skills.map((skill) => (
                  <SkillPill key={skill} skill={skill} size={28} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}