"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through a list of roles with a smooth crossfade + slight vertical slide.
 * Each role is shown for `intervalMs` (default 2500ms) before transitioning.
 */
export function useRotatingRole(roles: string[], intervalMs = 2500) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (roles.length <= 1) return;

    let fadeTimer: ReturnType<typeof setTimeout>;
    let switchTimer: ReturnType<typeof setTimeout>;

    const cycle = () => {
      // Fade out
      setVisible(false);

      // After fade-out completes, switch the text and fade back in
      fadeTimer = setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setVisible(true);
      }, 300); // matches the CSS transition duration

      // Schedule the next cycle
      switchTimer = setTimeout(cycle, intervalMs);
    };

    switchTimer = setTimeout(cycle, intervalMs);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(switchTimer);
    };
  }, [roles, intervalMs]);

  return {
    role: roles[index],
    visible,
  };
}