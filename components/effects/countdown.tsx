"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCourseCountdown } from "@/lib/use-course-countdown";
import { cn } from "@/lib/utils";

interface CountdownProps {
  targetIso: string;
  compact?: boolean;
  className?: string;
}

function CountdownUnit({
  value,
  label,
  compact,
  reducedMotion,
}: {
  value: number | null;
  label: string;
  compact: boolean;
  reducedMotion: boolean;
}) {
  const formatted = value === null ? "--" : String(value).padStart(2, "0");

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-ink/12 bg-bg/75 backdrop-blur-xs",
        compact
          ? "min-w-[54px] px-2 py-1.5 sm:min-w-[62px]"
          : "min-w-[66px] px-2.5 py-3 sm:min-w-[84px] sm:px-4 sm:py-3.5"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden font-display leading-none font-extrabold tracking-tight text-ink tabular-nums",
          compact ? "h-6 text-xl sm:h-7 sm:text-2xl" : "h-8 text-3xl sm:h-10 sm:text-4xl"
        )}
      >
        {reducedMotion ? (
          <span>{formatted}</span>
        ) : (
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={formatted}
              initial={{ y: "75%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-75%", opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {formatted}
            </motion.span>
          </AnimatePresence>
        )}
      </div>
      <span
        className={cn(
          "mt-1 font-sans font-medium tracking-[0.14em] text-muted uppercase",
          compact ? "text-[9px]" : "text-[10px] sm:text-[11px]"
        )}
      >
        {label}
      </span>
    </div>
  );
}

/**
 * Contador regressivo sincronizado com o fuso ISO (`2026-11-21T09:00:00-03:00`).
 * Hydration-safe e respeita `prefers-reduced-motion`.
 */
export function Countdown({
  targetIso,
  compact = false,
  className,
}: CountdownProps) {
  const prefersReducedMotion = Boolean(useReducedMotion());
  const snapshot = useCourseCountdown(targetIso);

  if (snapshot.hydrated && snapshot.ended) {
    return null;
  }

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label="Tempo restante para o início do curso"
      className={cn("inline-flex items-center gap-2 sm:gap-3", className)}
    >
      <CountdownUnit
        value={snapshot.hydrated ? snapshot.days : null}
        label="Dias"
        compact={compact}
        reducedMotion={prefersReducedMotion}
      />
      <CountdownUnit
        value={snapshot.hydrated ? snapshot.hours : null}
        label="Horas"
        compact={compact}
        reducedMotion={prefersReducedMotion}
      />
      <CountdownUnit
        value={snapshot.hydrated ? snapshot.minutes : null}
        label="Min"
        compact={compact}
        reducedMotion={prefersReducedMotion}
      />
      <CountdownUnit
        value={snapshot.hydrated ? snapshot.seconds : null}
        label="Seg"
        compact={compact}
        reducedMotion={prefersReducedMotion}
      />
    </div>
  );
}
