"use client";

import { useState } from "react";
import Image from "next/image";
import { Code } from "lucide-react";

interface ProjectImageProps {
  screenshot: string;
  name: string;
  priority?: boolean;
}

export default function ProjectImage({
  screenshot,
  name,
  priority = false,
}: ProjectImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="relative w-full aspect-video bg-bg-secondary rounded-xl border border-border mb-6 flex items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center gap-1.5">
          <Code size={20} className="text-fg-muted/30" />
          <span className="text-xs text-fg-muted/30">{name} screenshot failed to load</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-bg-secondary mb-6 shadow-sm select-none">
      {/* BACKGROUND LAYER: stretched/scaled with object-fit: cover, blurred and dimmed */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src={screenshot}
          alt=""
          fill
          priority={priority}
          className="object-cover blur-[20px] scale-[1.1] brightness-[0.7] opacity-60 transition-opacity duration-300"
          onError={() => setError(true)}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* FOREGROUND LAYER: centered, object-fit: contain, full clarity */}
      <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
        <div className="relative w-full h-full">
          <Image
            src={screenshot}
            alt={`${name} screenshot`}
            fill
            priority={priority}
            className="object-contain drop-shadow-md"
            onError={() => setError(true)}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
