import { siteContent } from "@/content/site";
import { Reveal } from "@/components/effects/reveal";
import { ClinicMedia } from "@/components/ui/clinic-media";
import { InstagramIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function EquipeSection() {
  const { equipe, contact } = siteContent;

  return (
    <section
      id="equipe"
      className="relative scroll-mt-20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={equipe.eyebrow}
            headlinePrefix={equipe.headlinePrefix}
            headlineEmphasis={equipe.headlineEmphasis}
            subtitle={equipe.subtitle}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-14">
          {equipe.members.map((member, idx) => (
            <Reveal key={member.id} delay={0.08 * idx}>
              <article
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-2xl border bg-surface transition-colors duration-300 hover:border-gold/40",
                  member.featured
                    ? "border-gold/35 ring-1 ring-gold/15"
                    : "border-ink/12"
                )}
              >
                <div className="relative">
                  <ClinicMedia
                    src={member.imagePath}
                    alt={`${member.name} — ${member.role}`}
                    accent={member.featured ? "gold" : "turf"}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="aspect-[4/4.8] w-full"
                    imageClassName="object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent"
                  />
                  <span
                    className={cn(
                      "absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md",
                      member.featured
                        ? "border-gold/45 bg-bg/85 text-gold"
                        : "border-turf/45 bg-bg/85 text-ink"
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        member.featured ? "bg-gold" : "bg-turf-glow"
                      )}
                      aria-hidden="true"
                    />
                    {member.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 pt-3">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      {member.registration ? (
                        <span className="rounded border border-ink/12 bg-bg/70 px-2 py-0.5 font-mono text-[11px] text-muted">
                          {member.registration}
                        </span>
                      ) : null}

                      {member.featured ? (
                        <a
                          href={contact.instagramPersonalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-gold transition-colors hover:text-gold-hover"
                        >
                          <InstagramIcon className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>{contact.instagramPersonalHandle}</span>
                        </a>
                      ) : null}
                    </div>

                    <h3 className="mt-2 font-display text-2xl font-extrabold tracking-wide text-ink uppercase sm:text-3xl">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium tracking-wider text-gold uppercase">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
