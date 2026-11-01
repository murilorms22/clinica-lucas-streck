import {
  ArrowUpRight,
  CalendarDays,
  CreditCard,
  ExternalLink,
  MapPin,
  RotateCcw,
} from "lucide-react";
import { cursoContent } from "@/content/curso";
import { Reveal } from "@/components/effects/reveal";
import { buttonClasses } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function CursoInfoPraticas() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Informações Práticas"
            headlinePrefix="Tudo que tu precisa saber para"
            headlineEmphasis="participar."
          />
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-3xl border border-ink/12 bg-surface lg:mt-14">
          <div className="grid lg:grid-cols-12">
            <div className="divide-y divide-ink/10 p-6 sm:p-10 lg:col-span-7">
              <div className="pb-6">
                <div className="flex items-start gap-3.5">
                  <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-wide text-ink uppercase">
                      Datas e horários
                    </h3>
                    <p className="mt-1 text-sm text-ink/90">{cursoContent.dateDisplay}</p>
                    <p className="mt-0.5 text-sm text-muted">{cursoContent.scheduleDisplay}</p>
                  </div>
                </div>
              </div>

              <div className="py-6">
                <div className="flex items-start gap-3.5">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-turf-glow" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-wide text-ink uppercase">
                      Local do evento
                    </h3>
                    <p className="mt-1 text-sm text-ink/90">{cursoContent.location.addressLine}</p>
                    <a
                      href={cursoContent.location.mapsQueryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-gold hover:text-gold-hover"
                    >
                      <span>Abrir localização no Google Maps</span>
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="py-6">
                <div className="flex items-start gap-3.5">
                  <CreditCard className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-wide text-ink uppercase">
                      Investimento e pagamento
                    </h3>
                    <p className="mt-1 text-sm text-ink/90">
                      {cursoContent.pricing.installmentBadge} ·{" "}
                      <a
                        href={cursoContent.symplaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-hover"
                      >
                        {cursoContent.pricing.priceLabel}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex items-start gap-3.5">
                  <RotateCcw className="mt-1 h-5 w-5 shrink-0 text-muted" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-wide text-ink uppercase">
                      Política de cancelamento
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {cursoContent.pricing.cancellationPolicy}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href={cursoContent.symplaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses({
                      variant: "gold",
                      size: "lg",
                      className: "w-full sm:w-auto",
                    })}
                  >
                    <span>{cursoContent.ctas.buyLabel}</span>
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative min-h-[300px] border-t border-ink/10 bg-surface-2 lg:col-span-5 lg:min-h-full lg:border-t-0 lg:border-l">
              <iframe
                title={`Mapa do curso — ${cursoContent.location.addressLine}`}
                src={cursoContent.location.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[300px] w-full border-0 contrast-[1.05] grayscale-[0.25]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
