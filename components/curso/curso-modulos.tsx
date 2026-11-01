import { ArrowUpRight } from "lucide-react";
import { cursoContent } from "@/content/curso";
import { Reveal } from "@/components/effects/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonClasses } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function CursoModulos() {
  const { topicsSection } = cursoContent;

  return (
    <section className="bg-corrugated-metal relative border-y border-ink/10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow={topicsSection.eyebrow}
                headlinePrefix={topicsSection.headlinePrefix}
                headlineEmphasis={topicsSection.headlineEmphasis}
                subtitle={topicsSection.subtitle}
              />

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
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible
              defaultValue="modulo-01"
              className="space-y-3"
            >
              {topicsSection.topics.map((topic) => (
                <AccordionItem
                  key={topic.number}
                  value={`modulo-${topic.number}`}
                >
                  <AccordionTrigger>
                    <span className="flex items-center gap-3.5">
                      <span className="font-display text-2xl font-extrabold text-gold">
                        {topic.number}
                      </span>
                      <span className="font-display text-xl tracking-wide uppercase sm:text-2xl">
                        {topic.title}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="pl-9 text-sm leading-relaxed text-muted sm:text-base">
                      {topic.summary}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
