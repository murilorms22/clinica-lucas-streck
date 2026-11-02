import { CalendarDays, CreditCard, MapPin } from "lucide-react";
import { cursoContent } from "@/content/curso";
import { CursoHeroActions, CursoHeroBadge } from "@/components/curso/curso-hero-actions";
import { Reveal } from "@/components/effects/reveal";
import { SplitText } from "@/components/effects/split-text";
import { TurfBg } from "@/components/effects/turf-bg";
import { ClinicMedia } from "@/components/ui/clinic-media";

export function CursoHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 pt-6 pb-16 sm:pt-10 sm:pb-24 lg:pt-14">
      <TurfBg />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal y={12}>
              <div className="flex flex-wrap items-center gap-2.5">
                <CursoHeroBadge />

                <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/14 bg-surface/90 px-3.5 py-1.5 text-xs font-medium text-ink">
                  <CreditCard className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                  {cursoContent.pricing.installmentBadge}
                </span>
              </div>
            </Reveal>

            <h1 className="mt-6 font-display text-4xl leading-[0.96] font-extrabold tracking-tight text-ink uppercase sm:text-6xl lg:text-[4.15rem]">
              <SplitText
                prefix="Avaliação e reabilitação do joelho: do raciocínio clínico à"
                emphasis="prática."
              />
            </h1>

            <Reveal delay={0.14}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {cursoContent.format.summary}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 grid gap-3 rounded-2xl border border-ink/12 bg-surface/80 p-4 text-xs sm:grid-cols-2 sm:p-5 sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">{cursoContent.dateDisplay}</p>
                    <p className="text-muted">Sáb 09h00 · Dom até 12h00</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-turf-glow" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">{cursoContent.location.venueLabel}</p>
                    <p className="text-muted">R. Padre Anchieta, 4708 · Bloco H 302</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <CursoHeroActions />
            </Reveal>
          </div>

          <Reveal delay={0.18} className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-2xl border border-gold/30 bg-surface shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]">
              <ClinicMedia
                src={cursoContent.media.coverImagePath}
                alt={cursoContent.media.coverAlt}
                accent="gold"
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="aspect-[2/3] w-full"
                imageClassName="object-contain"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
