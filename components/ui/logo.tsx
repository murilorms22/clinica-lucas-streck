import Image from "next/image";
import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  compact?: boolean;
  /** Se informado (e existente em public/), renderiza o SVG oficial sem redesenhar o logo */
  svgAvailable?: boolean;
}

/**
 * Componente <Logo /> conforme Regra de Ouro #4:
 * - Aceita o SVG oficial do cliente (`siteContent.brand.logoSvgPath`, ex.: `/images/logo.svg`).
 * - Enquanto o SVG não chega, exibe um wordmark tipográfico provisório ("LUCAS STRECK / FISIOTERAPIA"),
 *   sem inventar ou redesenhar o monograma vetorial do cliente.
 */
export function Logo({ className, compact = false, svgAvailable = false }: LogoProps) {
  const { logoSvgPath, shortUpper, shortLower, name } = siteContent.brand;

  if (logoSvgPath && svgAvailable) {
    return (
      <span className={cn("inline-flex items-center", className)}>
        <Image
          src={logoSvgPath}
          alt={name}
          width={compact ? 132 : 164}
          height={compact ? 36 : 44}
          className="h-9 w-auto object-contain"
          priority
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        "group inline-flex flex-col leading-none select-none",
        className
      )}
      aria-label={name}
    >
      <span
        className={cn(
          "font-display font-extrabold tracking-[0.14em] text-ink uppercase transition-colors group-hover:text-gold",
          compact ? "text-base sm:text-lg" : "text-lg sm:text-xl"
        )}
      >
        {shortUpper}
      </span>
      <span className="mt-1 flex items-center gap-1.5">
        <span className="h-px w-3 bg-gold/80" aria-hidden="true" />
        <span
          className={cn(
            "font-sans font-medium tracking-[0.28em] text-muted uppercase",
            compact ? "text-[9px]" : "text-[10px]"
          )}
        >
          {shortLower}
        </span>
      </span>
    </span>
  );
}

