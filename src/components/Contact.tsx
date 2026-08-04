"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { heroContent } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Contact() {
  const { socials } = heroContent;
  const { ref, revealed } = useScrollReveal();

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const socialIcons: Record<string, React.ReactNode> = {
    GitHub: <FaGithub size={20} />,
    LinkedIn: <FaLinkedin size={20} />,
    Email: <MdEmail size={20} />,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-12">
          Contact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column — intro + links */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-lg text-fg-muted leading-relaxed">
                Open to backend, full-stack, and AI-adjacent roles. Remote or
                Lahore-based.
              </p>

              {/* Direct contact links — stacked vertically */}
              <div className="mt-10 space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-lg px-4 py-3 bg-bg-elevated border border-border hover:border-accent/30 hover:bg-accent-subtle transition-all duration-200"
                  >
                    <span className="text-[#0047FF] transition-transform duration-200 group-hover:scale-110">
                      {socialIcons[s.label]}
                    </span>
                    <span className="text-sm font-medium text-fg-muted group-hover:text-fg transition-colors">
                      {s.label === "Email"
                        ? s.href.replace("mailto:", "")
                        : s.href.replace("https://", "")}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — contact form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-fg-muted mb-2 tracking-wide"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-lg text-fg text-sm placeholder:text-fg-dim/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors shadow-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-fg-muted mb-2 tracking-wide"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-lg text-fg text-sm placeholder:text-fg-dim/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors shadow-sm"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-fg-muted mb-2 tracking-wide"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="e.g. Backend Developer Role at [Company]"
                  className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-lg text-fg text-sm placeholder:text-fg-dim/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors shadow-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-fg-muted mb-2 tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-lg text-fg text-sm placeholder:text-fg-dim/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors resize-y shadow-sm"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-lift inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold text-sm transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {/* Status message */}
              {status === "success" && (
                <p className="text-sm font-medium text-green-600">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-600">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}