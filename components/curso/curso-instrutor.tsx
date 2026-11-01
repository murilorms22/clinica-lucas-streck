import { cursoContent } from "@/content/curso";
import { siteContent } from "@/content/site";
import { Reveal } from "@/components/effects/reveal";
import { ClinicMedia } from "@/components/ui/clinic-media";
import { InstagramIcon } from "@/components/ui/icons";

export function CursoInstrutor() {
  const { instructor } = cursoContent;

  return (
    <section className="relative border-y border-ink/10 bg-surface/45 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="group overflow-hidden rounded-2xl border border-gold/30 bg-surface">
              <ClinicMedia
                src={instructor.imagePath}
                alt={instructor.name}
                accent="gold"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-[4/4.8] w-full"
                imageClassName="object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-surface px-3.5 py-1 text-xs font-medium tracking-[0.16em] text-muted uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              {instructor.eyebrow}
            </span>

            <h2 className="mt-4 font-display text-4xl leading-none font-extrabold tracking-tight text-ink uppercase sm:text-5xl lg:text-6xl">
              Lucas{" "}
              <span className="font-serif text-[1.06em] font-normal tracking-normal text-gold italic normal-case">
                Streck.
              </span>
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="font-semibold tracking-wider text-gold uppercase">
                {instructor.role}
              </span>
              {instructor.registration ? (
                <span className="rounded border border-ink/14 bg-bg/80 px-2 py-0.5 font-mono text-xs text-muted">
                  {instructor.registration}
                </span>
              ) : null}
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              {instructor.bioParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-ink/10 pt-6 text-sm">
              <a
                href={siteContent.contact.instagramPersonalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-gold"
              >
                <InstagramIcon className="h-4 w-4 text-gold" aria-hidden="true" />
                <span>{siteContent.contact.instagramPersonalHandle}</span>
              </a>
              <a
                href={siteContent.contact.instagramClinicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-muted transition-colors hover:text-gold"
              >
                <InstagramIcon className="h-4 w-4 text-turf-glow" aria-hidden="true" />
                <span>{siteContent.contact.instagramClinicHandle}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
