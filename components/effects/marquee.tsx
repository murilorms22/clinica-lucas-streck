import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: readonly string[];
  className?: string;
}

/**
 * Faixa horizontal (marquee) com tipografia condensada grande de baixo contraste em loop lento.
 * Pausa no hover e respeita `prefers-reduced-motion` via CSS.
 */
export function Marquee({ items, className }: MarqueeProps) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border-y border-ink/10 bg-surface/55 py-4 sm:py-5",
        className
      )}
    >
      {/* Máscaras laterais para fade elegante */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg to-transparent sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg to-transparent sm:w-24"
      />

      {/* Lista acessível para leitores de tela */}
      <ul className="sr-only">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div
        aria-hidden="true"
        className="animate-marquee flex w-max items-center motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-2 motion-reduce:px-4"
      >
        {repeated.map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className={cn(
              "flex shrink-0 items-center",
              idx >= items.length && "motion-reduce:hidden"
            )}
          >
            <span className="px-5 font-display text-2xl font-bold tracking-[0.08em] text-ink/35 uppercase transition-colors hover:text-ink/70 sm:px-7 sm:text-4xl">
              {item}
            </span>
            <span className="h-2 w-2 rotate-45 border border-turf/70 bg-turf/30" />
          </div>
        ))}
      </div>
    </div>
  );
}

