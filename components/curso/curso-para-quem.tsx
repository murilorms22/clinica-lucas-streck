import { GraduationCap, ShieldCheck, Stethoscope } from "lucide-react";
import { cursoContent, type CourseAudienceCard } from "@/content/curso";
import { Reveal } from "@/components/effects/reveal";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { SectionHeading } from "@/components/ui/section-heading";

function AudienceIcon({ name }: { name: CourseAudienceCard["iconName"] }) {
  switch (name) {
    case "graduation":
      return <GraduationCap className="h-5 w-5 text-gold" aria-hidden="true" />;
    case "stethoscope":
      return <Stethoscope className="h-5 w-5 text-gold" aria-hidden="true" />;
    case "shield":
      return <ShieldCheck className="h-5 w-5 text-gold" aria-hidden="true" />;
  }
}

export function CursoParaQuem() {
  const { audience } = cursoContent;

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={audience.eyebrow}
            headlinePrefix={audience.headlinePrefix}
            headlineEmphasis={audience.headlineEmphasis}
            headlineSuffix={audience.headlineSuffix}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14">
          {audience.cards.map((card, idx) => (
            <Reveal key={card.id} delay={0.08 * idx}>
              <SpotlightCard accent="gold" className="h-full p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-ink/12 bg-bg/70 px-3 py-1 text-xs font-semibold tracking-wider text-muted uppercase">
                    {card.tag}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/25 bg-gold/10">
                    <AudienceIcon name={card.iconName} />
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-extrabold tracking-wide text-ink uppercase sm:text-3xl">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {card.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

