import { Quote, Star } from "lucide-react";
import { siteContent } from "@/content/site";
import { Reveal } from "@/components/effects/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function ProvaSocialSection() {
  const { provaSocial, googleRating } = siteContent;

  return (
    <section className="relative overflow-hidden border-y border-ink/8 bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow={provaSocial.eyebrow}
              headlinePrefix={provaSocial.headlinePrefix}
              headlineEmphasis={provaSocial.headlineEmphasis}
              subtitle={provaSocial.subtitle}
              accent="gold"
            />
          </Reveal>

          {/* Selo grande Nota 5,0 Google */}
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-4 rounded-2xl border border-gold/30 bg-bg/90 px-5 py-4">
              <span className="font-display text-5xl leading-none font-extrabold text-gold">
                {googleRating.score}
              </span>
              <div>
                <div className="flex items-center gap-1 text-gold" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-1 text-xs font-medium text-muted">
                  Baseado em {googleRating.count} avaliações no Google Maps
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Frases de destaque do Google */}
        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {provaSocial.highlights.map((phrase) => (
              <span
                key={phrase}
                className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-bg/75 px-4 py-1.5 text-xs font-medium text-ink/90 sm:text-sm"
              >
                <Quote className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                <span>“{phrase}”</span>
              </span>
            ))}
          </div>
        </Reveal>

        {/* Cards das 3 avaliações reais com leve rotação/hover no desktop */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {provaSocial.reviews.map((review, idx) => (
            <Reveal key={review.id} delay={0.08 * idx}>
              <article
                className={cn(
                  "flex h-full flex-col justify-between rounded-2xl border border-ink/12 bg-bg p-6 transition-all duration-300 hover:translate-y-[-4px] hover:rotate-0 hover:border-gold/35 sm:p-7",
                  idx === 0 && "md:-rotate-1",
                  idx === 2 && "md:rotate-1"
                )}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5 text-gold" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium tracking-wider text-muted uppercase">
                      {review.source}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-ink/90 sm:text-base">
                    {review.isLiteralQuote ? `“${review.quote}”` : review.quote}
                  </p>
                </div>

                <div className="mt-6 border-t border-ink/10 pt-4">
                  <p className="font-display text-lg font-bold tracking-wide text-ink uppercase">
                    {review.author}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
