"use client";

import { GitBranch, Link, Mail } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Mairaarshad19",
    icon: GitBranch,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mairaarshad/",
    icon: Link,
  },
  {
    label: "Email",
    href: "mailto:mairaarshad019@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const { ref, revealed } = useScrollReveal();

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div
        ref={ref}
        className={`container-content flex flex-col items-center gap-4 py-10 sm:flex-row sm:justify-between scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <p className="text-sm text-fg-dim">
          &copy; {new Date().getFullYear()} Maira Arshad. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-fg-dim hover:text-accent transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}