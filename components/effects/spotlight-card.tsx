"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: "gold" | "turf";
}

/**
 * Card escuro com efeito spotlight seguindo o cursor no desktop (via variáveis CSS, 0 re-renders).
 * No mobile, preserva apenas estado tátil limpo de toque.
 */
export function SpotlightCard({
  children,
  className,
  accent = "gold",
  ...props
}: SpotlightCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  const glowColor =
    accent === "turf"
      ? "rgba(91, 229, 132, 0.11)"
      : "rgba(217, 164, 65, 0.12)";

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      style={
        {
          "--spot-color": glowColor,
        } as React.CSSProperties
      }
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-ink/10 bg-surface transition-colors duration-300 hover:border-ink/20 active:bg-surface-2/90",
        className
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 50%), var(--spot-color), transparent 65%)",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

