"use client";

import { GitBranch, Link as LinkIcon, Mail, Send } from "lucide-react";
import { heroContent } from "@/data/portfolio-content";

export default function Contact() {
  const { socials } = heroContent;

  const socialIcons: Record<string, React.ReactNode> = {
    GitHub: <GitBranch size={20} />,
    LinkedIn: <LinkIcon size={20} />,
    Email: <Mail size={20} />,
  };

  return (
    <section id="contact" className="py-24">
      <div className="container-content">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg mb-12">
          Contact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column — intro + links */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-lg text-fg-muted leading-relaxed">
                Open to backend, full-stack, and AI-adjacent roles &mdash; remote or Lahore-based.
              </p>

              {/* Direct contact links */}
              <div className="mt-10 space-y-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-fg-dim hover:text-accent transition-colors group"
                  >
                    <span className="text-fg-dim group-hover:text-accent transition-colors">
                      {socialIcons[s.label]}
                    </span>
                    <span className="text-sm font-mono">
                      {s.label === "Email" ? s.href.replace("mailto:", "") : s.href.replace("https://", "")}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — contact form */}
          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-mono text-fg-muted mb-2 tracking-wide"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-lg text-fg text-sm placeholder:text-fg-dim/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-mono text-fg-muted mb-2 tracking-wide"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-lg text-fg text-sm placeholder:text-fg-dim/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-mono text-fg-muted mb-2 tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-lg text-fg text-sm placeholder:text-fg-dim/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors resize-y"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg font-semibold text-sm transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 active:scale-[0.97]"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}