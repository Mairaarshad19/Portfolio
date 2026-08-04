"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import { heroContent } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useRotatingRole } from "@/lib/useRotatingRole";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import type { IconType } from "react-icons";
import MagneticButton from "@/components/MagneticButton";

const socialIcons: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
};

/**
 * Renders text with `**bold**` markers as <strong> elements
 * for ATS-friendly keyword highlighting.
 */
function renderBoldText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-fg">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function useLahoreTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const formatted = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZone: "Asia/Karachi",
      }).format(new Date());
      setTime(`${formatted} · Lahore`);
    };

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

export default function Hero() {
  const { name, roles, role, buttons, socials } = heroContent;
  const { ref, revealed } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const { role: currentRole, visible: roleVisible } = useRotatingRole(roles);
  const lahoreTime = useLahoreTime();

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

            {/* Intro paragraph — keyword-bolded */}
            <p className="mt-6 text-sm sm:text-base text-fg-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              {renderBoldText(role)}
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {buttons.map((btn) =>
                btn.variant === "primary" ? (
                  <MagneticButton
                    key={btn.label}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="btn-lift px-6 py-3 rounded-lg bg-accent text-white font-semibold text-sm gap-2 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 active:scale-[0.97]"
                  >
                    <Download size={16} />
                    {btn.label}
                  </MagneticButton>
                ) : (
                  <MagneticButton
                    key={btn.label}
                    href={btn.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(btn.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn-lift px-6 py-3 rounded-lg border-2 border-[#0047FF] text-[#0047FF] bg-transparent font-semibold text-sm gap-2 hover:bg-[#0047FF] hover:text-white active:scale-[0.97]"
                  >
                    {btn.label}
                  </MagneticButton>
                )
              )}
            </div>

            {/* Social icons — circular react-icons buttons */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              {socials.map((s) => {
                const SocialIcon = socialIcons[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-border bg-bg-elevated flex items-center justify-center text-fg-dim hover:text-white hover:bg-accent hover:border-accent transition-all duration-200 shadow-sm"
                  >
                    <SocialIcon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── Right column — photo with floating badges ── */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Soft gradient blur shape behind photo */}
              <div className="absolute -inset-6 rounded-[2.5rem] bg-accent/[0.08] blur-2xl" />

              {/* Photo frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2rem] overflow-hidden border-2 border-accent/20 shadow-xl shadow-accent/10">
                <Image
                  src="/maira.jpeg"
                  alt="Maira Arshad"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, 320px"
                  priority
                />
              </div>

              {/* Floating badges — hidden on small screens */}
              <div className="hidden sm:block">
                {/* Available for Opportunities */}
                <div className="float-badge float-badge-delay-1 absolute -top-5 -left-6 flex items-center gap-2 px-3.5 py-2 bg-white rounded-full border border-border shadow-md">
                  <span className="pulse-dot w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="text-xs font-medium text-fg-muted leading-none">
                    Available for Opportunities
                  </span>
                </div>

                {/* Live local time */}
                <div className="float-badge float-badge-delay-2 absolute -bottom-5 -left-8 flex items-center gap-2 px-3.5 py-2 bg-white rounded-full border border-border shadow-md">
                  <span className="text-xs font-medium text-fg-muted leading-none">
                    {lahoreTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}