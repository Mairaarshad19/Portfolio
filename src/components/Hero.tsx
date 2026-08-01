"use client";

import { GitBranch, Link, Mail, ArrowDown } from "lucide-react";
import Image from "next/image";
import { heroContent } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useRotatingRole } from "@/lib/useRotatingRole";
import { useEffect, useRef, useState } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";
import type { IconType } from "react-icons";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <GitBranch size={20} />,
  LinkedIn: <Link size={20} />,
  Email: <Mail size={20} />,
};

const techBadges: { label: string; icon: IconType; color: string; position: string; delay: string }[] = [
  {
    label: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    position: "-top-4 -left-4",
    delay: "float-badge-delay-1",
  },
  {
    label: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    position: "-top-4 -right-4",
    delay: "float-badge-delay-2",
  },
  {
    label: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    position: "-bottom-4 -left-6",
    delay: "float-badge-delay-3",
  },
  {
    label: "Express.js",
    icon: SiExpress,
    color: "#000000",
    position: "-bottom-4 -right-6",
    delay: "float-badge-delay-4",
  },
];

export default function Hero() {
  const { name, roles, role, buttons, socials } = heroContent;
  const { ref, revealed } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const { role: currentRole, visible: roleVisible } = useRotatingRole(roles);

  useEffect(() => {
    // Detect touch device on mount
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlightRef.current.style.left = `${x}px`;
      spotlightRef.current.style.top = `${y}px`;
      spotlightRef.current.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      if (!spotlightRef.current) return;
      spotlightRef.current.style.opacity = "0";
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isTouchDevice]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient accent — muted glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-3xl" />
      </div>

      {/* Spotlight follow cursor — disabled on touch devices */}
      {!isTouchDevice && (
        <div
          ref={spotlightRef}
          className="spotlight-follow"
          style={{ left: "50%", top: "50%", opacity: 0 }}
        />
      )}

      <div
        ref={ref}
        className={`container-content py-24 ${revealed ? "animate-fade-slide-up" : "opacity-0"}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* ── Left column — text content ── */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Pre-label */}
            <p className="text-lg font-medium text-accent mb-3 tracking-wide">
              Hello, I'm
            </p>

            {/* Name — largest, Space Grotesk bold */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-fg leading-tight">
              {name}
            </h1>

            {/* Rotating role text */}
            <div className="mt-3 h-10 flex items-center justify-center lg:justify-start">
              <span
                className={`role-text text-xl sm:text-2xl md:text-3xl font-display font-semibold text-accent ${
                  roleVisible ? "role-visible" : "role-hidden"
                }`}
              >
                {currentRole}
              </span>
            </div>

            {/* Intro paragraph */}
            <p className="mt-6 text-sm sm:text-base text-fg-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              {role}
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {buttons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(btn.href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={
                    btn.variant === "primary"
                      ? "btn-lift inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold text-sm transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 active:scale-[0.97]"
                      : "btn-lift inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border-light text-fg-muted font-medium text-sm transition-all hover:border-accent hover:text-accent active:scale-[0.97]"
                  }
                >
                  {btn.label}
                  {btn.variant === "primary" && <ArrowDown size={16} />}
                </a>
              ))}
            </div>

            {/* Resume link */}
            <p className="mt-4 text-sm text-fg-dim">
              or{" "}
              <a
                href="/Maira_Arshad_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="link-underline text-accent hover:text-accent-hover transition-colors"
              >
                download my resume
              </a>
            </p>

            {/* Social icons — circular buttons */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="icon-lift w-11 h-11 rounded-full border border-border bg-bg-elevated flex items-center justify-center text-fg-dim hover:text-accent hover:border-accent/40 hover:bg-accent-subtle transition-all duration-200 shadow-sm"
                >
                  {socialIcons[s.label]}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right column — photo with badges ── */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Soft gradient blur shape behind photo */}
              <div className="absolute -inset-6 rounded-[2.5rem] bg-accent/[0.08] blur-2xl" />

              {/* Photo frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2rem] overflow-hidden border-2 border-accent/20 shadow-xl shadow-accent/10">
                <Image
                  src="/maira-picture.jpeg"
                  alt="Maira Arshad"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, 320px"
                  priority
                />
              </div>

              {/* Floating tech badges — hidden on small screens */}
              <div className="hidden sm:block">
                {techBadges.map((badge) => {
                  const BadgeIcon = badge.icon;
                  return (
                    <div
                      key={badge.label}
                      className={`float-badge ${badge.delay} absolute ${badge.position} flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-border shadow-md`}
                    >
                      <BadgeIcon size={14} color={badge.color} />
                      <span className="text-xs font-medium text-fg">
                        {badge.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}