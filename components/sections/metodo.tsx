import { siteContent } from "@/content/site";
import { Reveal } from "@/components/effects/reveal";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function MetodoSection() {
  const { metodo, brand } = siteContent;

  return (
    <section
      id="metodo"
      className="bg-corrugated-metal relative scroll-mt-20 overflow-hidden border-b border-ink/8 py-20 sm:py-28"
    >
      {/* Monograma tipográfico LS grande e discreto ao fundo (sem redesenhar vetor do cliente) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-2 select-none font-display text-[15rem] leading-none font-extrabold tracking-tighter text-ink/[0.03] sm:right-8 sm:text-[22rem] lg:text-[28rem]"
      >
        {brand.monogram}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow={metodo.eyebrow}
              headlinePrefix={metodo.headlinePrefix}
              headlineEmphasis={metodo.headlineEmphasis}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              {metodo.lead}
            </p>
          </Reveal>
        </div>

        {/* 3 Pilares */}
        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
          {metodo.pillars.map((pillar, index) => (
            <Reveal key={pillar.number} delay={0.08 * index}>
              <SpotlightCard accent="turf" className="h-full p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl font-extrabold tracking-tight text-gold">
                    {pillar.number}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-gold/40 via-ink/10 to-transparent ml-4" />
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold tracking-wide text-ink uppercase sm:text-3xl">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {pillar.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

