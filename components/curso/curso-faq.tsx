"use client";

import { ArrowUpRight } from "lucide-react";
import { cursoContent } from "@/content/curso";
import { buildWhatsAppUrl } from "@/content/site";
import { Countdown } from "@/components/effects/countdown";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { Reveal } from "@/components/effects/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonClasses } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useCourseCountdown } from "@/lib/use-course-countdown";

export function CursoFaqAndCta() {
  const { faq } = cursoContent;
  const { hydrated, ended, days, hours, minutes, seconds } = useCourseCountdown(
    cursoContent.startDateIso
  );

  const mobileTimerText =
    hydrated && !ended
      ? `${days}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`
      : "";

  const waitlistUrl = buildWhatsAppUrl(cursoContent.ctas.waitlistWhatsappMessage);

  return (
    <>
      <section className="relative border-t border-ink/10 py-20 pb-28 sm:py-28 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow={faq.eyebrow}
                headlinePrefix={faq.headlinePrefix}
                headlineEmphasis={faq.headlineEmphasis}
              />
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <Accordion type="single" collapsible className="space-y-3">
                {faq.items.map((item, idx) => (
                  <AccordionItem key={item.question} value={`cfaq-${idx}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>
                      <p>{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="bg-corrugated-metal mt-20 overflow-hidden rounded-3xl border border-gold/40 bg-surface-2 p-6 text-center sm:p-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/45 bg-gold/14 px-3.5 py-1 text-xs font-bold tracking-[0.14em] text-gold uppercase">
                {ended ? cursoContent.ctas.endedBadge : cursoContent.shortBadge}
              </span>

              <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl leading-[0.98] font-extrabold tracking-tight text-ink uppercase sm:text-5xl">
                Garanta teu lugar nos dois dias de{" "}
                <span className="font-serif text-[1.08em] font-normal tracking-normal text-gold italic normal-case">
                  imersão
                </span>{" "}
                em Pelotas.
              </h2>

              {!ended ? (
                <div className="mt-7 flex justify-center">
                  <Countdown targetIso={cursoContent.startDateIso} />
                </div>
              ) : null}

              <div className="mt-8 flex flex-col items-center justify-center gap-3">
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
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                ) : (
                  <>
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
                        <span>{cursoContent.ctas.buyLabel}</span>
                        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </MagneticButton>
                    <p className="text-xs text-muted">
                      {cursoContent.pricing.installmentBadge} · Inscrição segura via Sympla
                    </p>
                  </>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {!ended ? (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-bg/95 px-3.5 py-3 shadow-[0_-12px_30px_rgba(0,0,0,0.85)] backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-lg items-center justify-between gap-2.5">
            <div className="min-w-0">
              <p className="truncate font-mono text-[11px] font-bold tracking-tight text-gold tabular-nums">
                {mobileTimerText ? `Faltam ${mobileTimerText}` : "21 e 22/11 · Pelotas"}
              </p>
              <p className="truncate text-[11px] text-muted">
                {cursoContent.pricing.installmentBadge}
              </p>
            </div>

            <a
              href={cursoContent.symplaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses({
                variant: "gold",
                size: "sm",
                className: "shrink-0 px-3.5 font-bold",
              })}
            >
              <span>{cursoContent.ctas.buyLabel}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
