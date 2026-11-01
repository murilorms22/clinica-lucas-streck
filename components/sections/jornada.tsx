"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "@/content/site";
import { Reveal } from "@/components/effects/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * Seção "Jornada do atleta":
 * - Desktop: linha tática de campo/pista em SVG desenhada conforme a rolagem (GSAP + ScrollTrigger).
 * - Mobile: linha vertical limpa e direta (mobile-first).
 * - Respeita `prefers-reduced-motion` mantendo a linha 100% visível sem animação de scrub.
 */
export function JornadaSection() {
  const { jornada } = siteContent;
  const sectionRef = React.useRef<HTMLElement>(null);
  const progressPathRef = React.useRef<SVGPathElement>(null);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (prefersReducedMotion || !isDesktop) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const path = progressPathRef.current;
      const triggerEl = sectionRef.current;
      if (!path || !triggerEl) return;

      const totalLength = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: totalLength,
        strokeDashoffset: totalLength,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: triggerEl,
          start: "top 68%",
          end: "bottom 72%",
          scrub: 0.65,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-ink/8 bg-surface/40 py-20 sm:py-28"
    >
      <div className="pitch-grid-lines pointer-events-none absolute inset-0 opacity-45" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={jornada.eyebrow}
            headlinePrefix={jornada.headlinePrefix}
            headlineEmphasis={jornada.headlineEmphasis}
            subtitle={jornada.subtitle}
            align="center"
            accent="turf"
          />
        </Reveal>

        {/* Desktop: Linha do campo em SVG conectando as 4 etapas */}
        <div className="relative mt-16 hidden lg:block">
          <div className="relative mx-auto mb-6 h-24 w-full max-w-6xl">
            <svg
              viewBox="0 0 1200 100"
              fill="none"
              className="h-full w-full overflow-visible"
              aria-hidden="true"
            >
              {/* Marcação base de quadra/campo (trilha fixa) */}
              <path
                d="M 90 50 L 390 50 C 430 50, 450 22, 490 22 L 710 22 C 750 22, 770 50, 810 50 L 1110 50"
                stroke="rgba(243, 239, 231, 0.14)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />

              {/* Círculo central estilo meio de campo */}
              <circle
                cx="600"
                cy="50"
                r="34"
                stroke="rgba(47, 143, 70, 0.35)"
                strokeWidth="1.5"
              />
              <line
                x1="600"
                y1="6"
                x2="600"
                y2="94"
                stroke="rgba(47, 143, 70, 0.25)"
                strokeWidth="1.5"
              />

              {/* Linha ativa desenhada no scroll via GSAP ScrollTrigger */}
              <path
                ref={progressPathRef}
                d="M 90 50 L 390 50 C 430 50, 450 22, 490 22 L 710 22 C 750 22, 770 50, 810 50 L 1110 50"
                stroke="url(#fieldLineGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Pontos das 4 estações */}
              {[135, 445, 755, 1065].map((cx, i) => (
                <g key={cx}>
                  <circle
                    cx={cx}
                    cy={i === 1 || i === 2 ? 32 : 50}
                    r="11"
                    fill="#0A0A0B"
                    stroke={i === 3 ? "#5BE584" : "#D9A441"}
                    strokeWidth="2.5"
                  />
                  <circle
                    cx={cx}
                    cy={i === 1 || i === 2 ? 32 : 50}
                    r="4"
                    fill={i === 3 ? "#5BE584" : "#D9A441"}
                  />
                </g>
              ))}

              <defs>
                <linearGradient id="fieldLineGradient" x1="90" y1="50" x2="1110" y2="50" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#D9A441" />
                  <stop offset="60%" stopColor="#D9A441" />
                  <stop offset="100%" stopColor="#5BE584" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-4 gap-5">
            {jornada.steps.map((item, idx) => (
              <Reveal key={item.step} delay={0.08 * idx}>
                <div className="relative h-full rounded-2xl border border-ink/10 bg-bg/85 p-6 transition-colors hover:border-gold/35">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-extrabold text-gold">
                      {item.step}
                    </span>
                    <span className="rounded-full border border-ink/12 bg-surface px-2.5 py-0.5 text-[11px] font-medium tracking-wider text-muted uppercase">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-wide text-ink uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet: Versão vertical simples e direta */}
        <div className="relative mt-12 lg:hidden">
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-5 w-0.5 bg-gradient-to-b from-gold via-gold/60 to-turf-glow"
          />

          <div className="space-y-6">
            {jornada.steps.map((item, idx) => (
              <Reveal key={item.step} delay={0.06 * idx}>
                <div className="relative pl-14">
                  <div
                    aria-hidden="true"
                    className="absolute top-1 left-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gold bg-bg font-display text-sm font-extrabold text-gold"
                  >
                    {item.step}
                  </div>

                  <div className="rounded-2xl border border-ink/10 bg-bg/90 p-5">
                    <span className="text-[11px] font-semibold tracking-[0.14em] text-turf-glow uppercase">
                      {item.tag}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-bold tracking-wide text-ink uppercase">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

