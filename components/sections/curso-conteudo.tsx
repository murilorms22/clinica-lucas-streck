import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cursoContent } from "@/content/curso";
import { Reveal } from "@/components/effects/reveal";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { buttonClasses } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * Seção 8 da Home (Curso — 2 de 2):
 * Os 8 módulos do conteúdo programático + chips da experiência presencial + CTA para /curso.
 */
export function CursoConteudoSection() {
  const { topicsSection, format } = cursoContent;

  return (
    <section className="relative border-b border-ink/8 pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow={topicsSection.eyebrow}
              headlinePrefix={topicsSection.headlinePrefix}
              headlineEmphasis={topicsSection.headlineEmphasis}
              subtitle={topicsSection.subtitle}
            />
          </Reveal>

          {/* Chips de formato */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {format.chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-turf/40 bg-turf/12 px-3 py-1.5 text-xs font-medium text-ink"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-turf-glow" aria-hidden="true" />
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Grid dos 8 tópicos */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topicsSection.topics.map((topic, idx) => (
            <Reveal key={topic.number} delay={0.04 * idx}>
              <SpotlightCard accent="gold" className="h-full p-5 sm:p-6">
                <span className="font-display text-2xl font-extrabold text-gold">
                  {topic.number}
                </span>
                <h3 className="mt-3 font-display text-xl leading-snug font-bold tracking-wide text-ink uppercase">
                  {topic.title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-muted sm:text-sm">
                  {topic.summary}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-ink/10 bg-surface p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-xl font-bold tracking-wide text-ink uppercase">
                Quer ver a programação completa, local e política de inscrição?
              </p>
              <p className="mt-1 text-sm text-muted">
                Confira todos os detalhes da imersão presencial em Pelotas na página exclusiva do curso.
              </p>
            </div>
            <Link
              href="/curso"
              className={buttonClasses({
                variant: "gold-outline",
                size: "md",
                className: "w-full shrink-0 sm:w-auto",
              })}
            >
              <span>Acessar página do curso</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

