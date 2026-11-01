"use client";

import { motion, useReducedMotion } from "motion/react";
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingAthletePillProps {
  name: string;
  role: string;
  className?: string;
}

/**
 * Bullet flutuante posicionado ao lado da imagem da Hero na estética escura/dourado/gramado do site.
 * Respeita `prefers-reduced-motion`.
 */
export function FloatingAthletePill({
  name,
  role,
  className,
}: FloatingAthletePillProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 14, y: 8 }}
      animate={
        prefersReducedMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              x: 0,
              y: [0, -6, 0],
            }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0.35 }
          : {
              opacity: { duration: 0.55, delay: 0.35 },
              x: { duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
              y: {
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.9,
              },
            }
      }
      className={cn(
        "z-20 inline-flex items-center gap-3 rounded-2xl border border-gold/45 bg-[#0A0A0B]/92 px-3.5 py-2.5 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.9),0_0_24px_-8px_rgba(217,164,65,0.3)] backdrop-blur-md",
        className
      )}
    >
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gold/35 bg-gold/12">
        <Trophy className="h-4 w-4 text-gold" aria-hidden="true" />
        <span
          className="absolute -top-1 -right-1 flex h-2.5 w-2.5"
          aria-hidden="true"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-turf-glow opacity-75 motion-reduce:hidden" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full border border-bg bg-turf-glow" />
        </span>
      </span>

      <div className="pr-1 leading-tight">
        <p className="font-display text-base leading-none font-extrabold tracking-wide text-ink uppercase sm:text-lg">
          {name}
        </p>
        <p className="mt-1 text-[11px] font-medium text-gold sm:text-xs">
          {role}
        </p>
      </div>
    </motion.div>
  );
}

