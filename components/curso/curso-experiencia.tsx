import { Coffee, Dumbbell, Gift, Users } from "lucide-react";
import { cursoContent, type CourseDifferential } from "@/content/curso";
import { Reveal } from "@/components/effects/reveal";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { ClinicMedia } from "@/components/ui/clinic-media";
import { SectionHeading } from "@/components/ui/section-heading";

function DifferentialIcon({ name }: { name: CourseDifferential["iconName"] }) {
  switch (name) {
    case "dumbbell":
      return <Dumbbell className="h-5 w-5 text-turf-glow" aria-hidden="true" />;
    case "users":
      return <Users className="h-5 w-5 text-turf-glow" aria-hidden="true" />;
    case "coffee":
      return <Coffee className="h-5 w-5 text-turf-glow" aria-hidden="true" />;
    case "gift":
      return <Gift className="h-5 w-5 text-gold" aria-hidden="true" />;
  }
}

export function CursoExperiencia() {
  const { differentials } = cursoContent;

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={differentials.eyebrow}
            headlinePrefix={differentials.headlinePrefix}
            headlineEmphasis={differentials.headlineEmphasis}
            subtitle={differentials.subtitle}
            accent="turf"
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {differentials.items.map((item, idx) => (
              <Reveal key={item.id} delay={0.07 * idx}>
                <SpotlightCard accent="turf" className="h-full p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-turf/35 bg-turf/14">
                    <DifferentialIcon name={item.iconName} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-wide text-ink uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="group relative h-full min-h-[340px] overflow-hidden rounded-2xl border border-ink/12">
              <ClinicMedia
                src="/images/hero-ls.jpg"
                alt="Prática funcional no gramado sintético da clínica"
                accent="turf"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full min-h-[340px] w-full"
                imageClassName="object-center"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/85 via-transparent to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-xl font-bold tracking-wide text-ink uppercase">
                  Da avaliação ao gesto funcional
                </p>
                <p className="mt-1 text-xs text-ink/80">
                  Aplicação clínica real focada no que aparece no dia a dia do consultório e do esporte.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
