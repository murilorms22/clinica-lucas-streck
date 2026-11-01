"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, CreditCard, MapPin } from "lucide-react";
import { cursoContent } from "@/content/curso";
import { buildWhatsAppUrl } from "@/content/site";
import { Countdown } from "@/components/effects/countdown";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { Reveal } from "@/components/effects/reveal";
import { buttonClasses } from "@/components/ui/button";
import { useCourseCountdown } from "@/lib/use-course-countdown";

export function CursoDestaqueSection() {
  const { ended } = useCourseCountdown(cursoContent.startDateIso);
  const waitlistUrl = buildWhatsAppUrl(cursoContent.ctas.waitlistWhatsappMessage);

  return (
    <section
      id="curso-destaque"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-corrugated-metal relative overflow-hidden rounded-3xl border border-gold/35 bg-surface-2 p-6 shadow-[0_30px_80px_-30px_rgba(217,164,65,0.22)] sm:p-10 lg:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gold/14 blur-3xl"
            />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/14 px-3.5 py-1.5 text-xs font-bold tracking-[0.14em] text-gold uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                    {ended ? cursoContent.ctas.endedBadge : cursoContent.shortBadge}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/14 bg-bg/70 px-3 py-1.5 text-xs font-medium text-ink/90">
                    <CreditCard className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                    {cursoContent.pricing.installmentBadge}
                  </span>
                </div>

                <h2 className="mt-5 font-display text-3xl leading-[0.98] font-extrabold tracking-tight text-ink uppercase sm:text-5xl lg:text-[3.4rem]">
                  Avaliação e reabilitação do joelho:{" "}
                  <span className="font-serif text-[1.06em] font-normal tracking-normal text-gold italic normal-case">
                    prática
                  </span>{" "}
                  e raciocínio clínico.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {cursoContent.format.summary}
                </p>

                <div className="mt-6 flex flex-col gap-2.5 text-xs text-ink/85 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 sm:text-sm">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-gold" aria-hidden="true" />
                    {cursoContent.dateDisplay} · Início sábado às 09h00
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-turf-glow" aria-hidden="true" />
                    {cursoContent.location.addressLine}
                  </span>
                </div>

                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  {ended ? (
                    <a
                      href={waitlistUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClasses({
                        variant: "gold",
                        size: "lg",
                        className: "w-full sm:w-auto",
                      })}
                    >
                      <span>{cursoContent.ctas.endedCtaLabel}</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <MagneticButton className="w-full sm:w-auto">
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
                        <span>{cursoContent.ctas.homeBuyLabel}</span>
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </MagneticButton>
                  )}

                  <Link
                    href="/curso"
                    className={buttonClasses({
                      variant: "surface",
                      size: "lg",
                      className: "w-full sm:w-auto",
                    })}
                  >
                    <span>{cursoContent.ctas.homeDetailsLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-ink/12 bg-bg/80 p-6 backdrop-blur-sm sm:p-7">
                  {ended ? (
                    <div>
                      <p className="font-display text-xl font-bold tracking-wide text-gold uppercase">
                        Turma de novembro encerrada
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        Entre na lista de espera para receber em primeira mão a data da próxima edição presencial em Pelotas.
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                        Contagem regressiva · Pelotas/RS
                      </p>
                      <div className="mt-4">
                        <Countdown targetIso={cursoContent.startDateIso} />
                      </div>
                      <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4 text-xs">
                        <span className="text-muted">Inscrições via Sympla</span>
                        <a
                          href={cursoContent.symplaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-gold transition-colors hover:text-gold-hover"
                        >
                          {cursoContent.pricing.priceLabel} →
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
