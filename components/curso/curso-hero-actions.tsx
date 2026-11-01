"use client";

import { ArrowUpRight } from "lucide-react";
import { cursoContent } from "@/content/curso";
import { buildWhatsAppUrl } from "@/content/site";
import { Countdown } from "@/components/effects/countdown";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { buttonClasses } from "@/components/ui/button";
import { useCourseCountdown } from "@/lib/use-course-countdown";

export function CursoHeroBadge() {
  const { ended } = useCourseCountdown(cursoContent.startDateIso);

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gold/45 bg-gold/14 px-3.5 py-1.5 text-xs font-bold tracking-[0.14em] text-gold uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
      {ended ? cursoContent.ctas.endedBadge : cursoContent.format.badge}
    </span>
  );
}

export function CursoHeroActions() {
  const { ended } = useCourseCountdown(cursoContent.startDateIso);
  const waitlistUrl = buildWhatsAppUrl(cursoContent.ctas.waitlistWhatsappMessage);

  return (
    <>
      {!ended ? (
        <div className="mt-7">
          <p className="mb-2.5 text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
            Faltam para o início da imersão
          </p>
          <Countdown targetIso={cursoContent.startDateIso} />
        </div>
      ) : null}

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
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
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
              <span>{cursoContent.ctas.buyLabel}</span>
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </MagneticButton>
        )}

        <a
          href={cursoContent.symplaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-gold"
        >
          <span>{cursoContent.pricing.priceLabel}</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </>
  );
}

