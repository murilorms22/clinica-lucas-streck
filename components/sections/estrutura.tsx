import { siteContent } from "@/content/site";
import { Reveal } from "@/components/effects/reveal";
import { ClinicMedia } from "@/components/ui/clinic-media";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function EstruturaSection() {
  const { estrutura } = siteContent;

  return (
    <section
      id="estrutura"
      className="relative scroll-mt-20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={estrutura.eyebrow}
            headlinePrefix={estrutura.headlinePrefix}
            headlineEmphasis={estrutura.headlineEmphasis}
            subtitle={estrutura.subtitle}
            accent="turf"
          />
        </Reveal>

        {/* Bento Grid */}
        <div className="mt-12 grid auto-rows-[250px] gap-4 sm:auto-rows-[280px] md:grid-cols-12 lg:mt-14 lg:gap-5">
          {estrutura.items.map((item, idx) => (
            <Reveal
              key={item.id}
              delay={0.06 * idx}
              className={cn("h-full", item.spanClass)}
            >
              <article className="group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl border border-ink/12 bg-surface">
                <ClinicMedia
                  src={item.imagePath}
                  alt={`${item.title} — ${item.caption}`}
                  accent={item.accent}
                  sizes={
                    item.spanClass.includes("col-span-7")
                      ? "(max-width: 768px) 100vw, 58vw"
                      : "(max-width: 768px) 100vw, 45vw"
                  }
                  className="absolute inset-0 h-full w-full"
                />

                <div className="relative z-10 p-5 sm:p-6">
                  <h3 className="font-display text-2xl font-extrabold tracking-wide text-ink uppercase sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-xs leading-relaxed text-ink/80 sm:text-sm">
                    {item.caption}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

