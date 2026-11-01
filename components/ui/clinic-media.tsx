import Image from "next/image";
import { hasPublicAsset } from "@/lib/media";
import { cn } from "@/lib/utils";

interface ClinicMediaProps {
  src: string;
  alt: string;
  label?: string;
  accent?: "turf" | "gold" | "wood" | "neutral";
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

/**
 * Exibe `next/image` otimizado (AVIF/WebP) assim que o arquivo existir em `public/images/`.
 * Enquanto fotos adicionais da estrutura/capa não chegam, exibe fundo arquitetônico escuro com textura de gramado/quadra.
 */
export function ClinicMedia({
  src,
  alt,
  label,
  accent = "turf",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  className,
  imageClassName,
}: ClinicMediaProps) {
  const exists = hasPublicAsset(src);

  const accentGradient =
    accent === "gold"
      ? "from-gold/18 via-turf/8 to-transparent"
      : accent === "wood"
        ? "from-wood/22 via-surface-2/40 to-transparent"
        : accent === "neutral"
          ? "from-ink/10 via-surface-2/30 to-transparent"
          : "from-turf/26 via-turf/8 to-transparent";

  if (exists) {
    return (
      <div className={cn("relative overflow-hidden bg-surface", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]",
            imageClassName
          )}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "bg-turf-placeholder relative overflow-hidden select-none",
        className
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br transition-transform duration-700 ease-out group-hover:scale-105",
          accentGradient
        )}
        aria-hidden="true"
      />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]"
        viewBox="0 0 400 280"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <rect
          x="18"
          y="18"
          width="364"
          height="244"
          stroke="currentColor"
          strokeWidth="1"
          className="text-ink"
        />
        <line
          x1="200"
          y1="18"
          x2="200"
          y2="262"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 6"
          className="text-ink"
        />
        <circle
          cx="200"
          cy="140"
          r="46"
          stroke="currentColor"
          strokeWidth="1"
          className="text-turf-glow"
        />
      </svg>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/35 to-transparent"
        aria-hidden="true"
      />

      {label ? (
        <div className="pointer-events-none absolute top-3.5 left-3.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/12 bg-bg/75 px-2.5 py-1 text-[11px] font-medium tracking-wider text-ink/80 uppercase backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-turf-glow" aria-hidden="true" />
            {label}
          </span>
        </div>
      ) : null}
    </div>
  );
}
