import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  headlinePrefix: string;
  headlineEmphasis: string;
  headlineSuffix?: string;
  subtitle?: string;
  align?: "left" | "center";
  accent?: "gold" | "turf";
  className?: string;
}

/**
 * Cabeçalho editorial padrão:
 * - Eyebrow discreto em caixa-alta
 * - Título em Barlow Condensed Bold caixa-alta + 1 palavra de ênfase em Instrument Serif itálica
 */
export function SectionHeading({
  eyebrow,
  headlinePrefix,
  headlineEmphasis,
  headlineSuffix,
  subtitle,
  align = "left",
  accent = "gold",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "mb-3.5 inline-flex items-center gap-2 rounded-full border border-ink/12 bg-surface/80 px-3.5 py-1 text-xs font-medium tracking-[0.16em] text-muted uppercase",
          align === "center" && "mx-auto"
        )}
      >
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            accent === "turf" ? "bg-turf-glow" : "bg-gold"
          )}
          aria-hidden="true"
        />
        <span>{eyebrow}</span>
      </div>

      <h2 className="font-display text-4xl leading-[0.98] font-extrabold tracking-tight text-ink uppercase sm:text-5xl lg:text-6xl">
        <span>{headlinePrefix} </span>
        <span className="font-serif text-[1.08em] font-normal tracking-normal text-gold italic normal-case">
          {headlineEmphasis}
        </span>
        {headlineSuffix ? <span> {headlineSuffix}</span> : null}
      </h2>

      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

