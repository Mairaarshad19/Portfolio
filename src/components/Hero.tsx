"use client";

import { GitBranch, Link, Mail, ArrowDown } from "lucide-react";
import { heroContent } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useEffect, useRef, useState } from "react";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <GitBranch size={20} />,
  LinkedIn: <Link size={20} />,
  Email: <Mail size={20} />,
};

export default function Hero() {
  const { name, role, intro, buttons, socials } = heroContent;
  const { ref, revealed } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

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
        <div className="max-w-2xl mx-auto text-center">
          {/* Pre-label */}
          <p className="font-mono text-sm text-accent mb-4 tracking-wide">
            Hello, I'm
          </p>

          {/* Name — serif display */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-fg leading-tight">
            {name}
          </h1>

          {/* Role */}
          <p className="mt-3 text-lg sm:text-xl md:text-2xl text-fg-muted font-medium">
            {role}
          </p>

          {/* Intro */}
          <div className="mt-6 space-y-3 text-sm sm:text-base text-fg-dim leading-relaxed max-w-xl mx-auto">
            {intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {buttons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                {...(btn.href.startsWith("#")
                  ? {
                      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
                        e.preventDefault();
                        const el = document.querySelector(btn.href);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      },
                    }
                  : {})}
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

          {/* Social icons */}
          <div className="mt-12 flex items-center justify-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="icon-lift text-fg-dim hover:text-accent"
              >
                {socialIcons[s.label]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}