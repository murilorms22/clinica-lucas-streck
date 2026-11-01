import { Activity, AlignVerticalSpaceAround, ArrowUpRight, Flame, Trophy } from "lucide-react";
import { buildWhatsAppUrl, siteContent, type SpecialtyCard } from "@/content/site";
import { Reveal } from "@/components/effects/reveal";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { SectionHeading } from "@/components/ui/section-heading";

function SpecialtyIcon({ name }: { name: SpecialtyCard["iconName"] }) {
  switch (name) {
    case "activity":
      return <Activity className="h-5 w-5 text-gold" aria-hidden="true" />;
    case "spine":
      return <AlignVerticalSpaceAround className="h-5 w-5 text-gold" aria-hidden="true" />;
    case "flame":
      return <Flame className="h-5 w-5 text-gold" aria-hidden="true" />;
    case "trophy":
      return <Trophy className="h-5 w-5 text-gold" aria-hidden="true" />;
  }
}

export function EspecialidadesSection() {
  const { especialidades } = siteContent;

  return (
    <section
      id="especialidades"
      className="relative scroll-mt-20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={especialidades.eyebrow}
            headlinePrefix={especialidades.headlinePrefix}
            headlineEmphasis={especialidades.headlineEmphasis}
            subtitle={especialidades.subtitle}
            accent="turf"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14">
          {especialidades.cards.map((card, index) => {
            const cardWhatsappUrl = buildWhatsAppUrl(card.whatsappMessage);

            return (
              <Reveal key={card.id} delay={0.07 * index}>
                <SpotlightCard accent="gold" className="h-full p-6 sm:p-8">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-bg/65 px-3 py-1 text-xs font-semibold tracking-wider text-ink/90 uppercase">
                          <span className="h-1.5 w-1.5 rounded-full bg-turf-glow" aria-hidden="true" />
                          {card.tag}
                        </span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/25 bg-gold/10">
                          <SpecialtyIcon name={card.iconName} />
                        </span>
                      </div>

                      <p className="mt-5 font-serif text-xl tracking-normal text-gold italic sm:text-2xl">
                        {card.hook}
                      </p>

                      <h3 className="mt-2 font-display text-2xl font-extrabold tracking-wide text-ink uppercase sm:text-3xl">
                        {card.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-7 border-t border-ink/10 pt-5">
                      <a
                        href={cardWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-hover"
                      >
                        <span>{card.ctaLabel}</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
