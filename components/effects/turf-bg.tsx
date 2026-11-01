import { cn } from "@/lib/utils";

interface TurfBgProps {
  className?: string;
  withPitchLines?: boolean;
}

/**
 * Camada atmosférica escura com faixas sutis de gramado cortado + grain leve.
 */
export function TurfBg({ className, withPitchLines = true }: TurfBgProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="bg-turf-stripes absolute inset-0" />
      {withPitchLines ? (
        <div className="pitch-grid-lines absolute inset-0 opacity-65" />
      ) : null}
      <div className="bg-grain absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/25 via-transparent to-bg" />
    </div>
  );
}

