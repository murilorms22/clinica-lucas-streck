import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Star } from "lucide-react";
import { buildWhatsAppUrl, siteContent } from "@/content/site";
import { FloatingAthletePill } from "@/components/effects/floating-athlete-pill";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { Reveal } from "@/components/effects/reveal";
import { SplitText } from "@/components/effects/split-text";
import { TurfBg } from "@/components/effects/turf-bg";
import { buttonClasses } from "@/components/ui/button";
import { ClinicMedia } from "@/components/ui/clinic-media";
import { hasPublicAsset } from "@/lib/media";

export function HeroSection() {
  const { hero, googleRating, contact } = siteContent;
  const whatsappUrl = buildWhatsAppUrl(hero.primaryCtaMessage);
  const videoExists = hasPublicAsset(hero.mediaVideoPath);

  return (
    <section className="relative overflow-hidden pt-6 pb-16 sm:pt-10 sm:pb-24 lg:pt-14 lg:pb-28">
      <TurfBg />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna de texto principal */}
          <div className="lg:col-span-7">
            <Reveal y={12}>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-turf/45 bg-turf/12 px-3.5 py-1.5 text-xs font-medium tracking-[0.14em] text-ink uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-turf-glow" aria-hidden="true" />
                  {hero.eyebrow}
                </span>

                {/* Selo Google 5,0 · 19 avaliações */}
                <span className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-surface/90 px-3.5 py-1.5 text-xs font-medium text-ink">
                  <span className="inline-flex items-center gap-0.5 text-gold" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                    ))}
                  </span>
                  <span>{googleRating.badgeLabel}</span>
                </span>
              </div>
            </Reveal>

            <h1 className="mt-6 font-display text-[3.15rem] leading-[0.94] font-extrabold tracking-tight text-ink uppercase sm:text-7xl lg:text-[5.25rem]">
              <SplitText
                prefix={hero.headlinePrefix}
                emphasis={hero.headlineEmphasis}
              />
            </h1>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:text-xl">
                {hero.subtitle}
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <MagneticButton className="w-full sm:w-auto">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses({
                      variant: "gold",
                      size: "lg",
                      className: "w-full sm:w-auto",
                    })}
                  >
                    <Calendar className="h-5 w-5" aria-hidden="true" />
                    <span>{hero.primaryCtaLabel}</span>
                  </a>
                </MagneticButton>

                <Link
                  href={hero.secondaryCtaHref}
                  className={buttonClasses({
                    variant: "gold-outline",
                    size: "lg",
                    className: "w-full justify-between sm:w-auto sm:justify-center",
                  })}
                >
                  <span>{hero.secondaryCtaLabel}</span>
                  <span className="inline-flex items-center gap-1 rounded bg-gold/16 px-2 py-0.5 text-xs font-bold tracking-wider uppercase">
                    21-22 Nov
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </Reveal>

            {/* Localização */}
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-ink/10 pt-5 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-turf-glow" aria-hidden="true" />
                  {contact.address.street} — {contact.address.neighborhood}, {contact.address.city}/{contact.address.state}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Coluna visual da clínica + Bullet flutuante ao lado da imagem */}
          <Reveal delay={0.18} className="lg:col-span-5">
            <div className="relative sm:pr-4 lg:pr-6">
              {/* Bullet voador ao lado direito da imagem da Hero (junto ao atleta Erick Farias) */}
              <FloatingAthletePill
                name={hero.floatingBadge.name}
                role={hero.floatingBadge.role}
                className="absolute right-2.5 bottom-4 sm:-right-2 sm:top-[24%] sm:bottom-auto lg:-right-4 lg:top-[25%]"
              />

              <div className="group relative overflow-hidden rounded-2xl border border-ink/16 bg-surface shadow-[0_24px_60px_-20px_rgba(0,0,0,0.88)]">
                {videoExists && hero.mediaVideoPath ? (
                  <div className="relative aspect-[4/5] w-full">
                    <video
                      src={hero.mediaVideoPath}
                      poster={hasPublicAsset(hero.mediaImagePath) ? hero.mediaImagePath : undefined}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                      aria-label={hero.mediaCaption}
                    />
                  </div>
                ) : (
                  <ClinicMedia
                    src={hero.mediaImagePath}
                    alt={hero.mediaCaption}
                    accent="turf"
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="aspect-[4/5] w-full"
                    imageClassName="object-center"
                  />
                )}

                {/* Vinheta sutil nas bordas para integração com o fundo escuro */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/55 via-transparent to-bg/15"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
