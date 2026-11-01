import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConfirmBadgeProps {
  text: string;
  className?: string;
  compact?: boolean;
}

/**
 * Placeholder visível e honesto para dados marcados como [CONFIRMAR] no briefing.
 * Todos os textos vêm de `content/site.ts` ou `content/curso.ts`.
 */
export function ConfirmBadge({ text, className, compact = false }: ConfirmBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-dashed border-gold/45 bg-gold/10 text-gold",
        compact ? "px-2 py-0.5 text-[11px] leading-tight" : "px-2.5 py-1 text-xs leading-snug",
        className
      )}
    >
      <AlertCircle className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
      <span>{text}</span>
    </span>
  );
}

