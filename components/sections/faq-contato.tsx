import { Clock, ExternalLink, MapPin, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, siteContent } from "@/content/site";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { Reveal } from "@/components/effects/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonClasses } from "@/components/ui/button";
import { InstagramIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqContatoSection() {
  const { faq, contatoFinal, contact } = siteContent;
  const whatsappUrl = buildWhatsAppUrl(contatoFinal.ctaMessage);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Bloco 1: FAQ */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow={faq.eyebrow}
              headlinePrefix={faq.headlinePrefix}
              headlineEmphasis={faq.headlineEmphasis}
            />
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Ficou com alguma dúvida específica sobre o teu caso? Chama direto no WhatsApp que a equipe te orienta.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <Accordion type="single" collapsible className="space-y-3">
              {faq.items.map((item, idx) => (
                <AccordionItem key={item.question} value={`faq-${idx}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>

        {/* Bloco 2: Contato + Mapa + CTA Final */}
        <div
          id="contato"
          className="mt-20 scroll-mt-24 overflow-hidden rounded-3xl border border-ink/12 bg-surface sm:mt-28"
        >
          <div className="grid lg:grid-cols-12">
            {/* Informações e CTA grande */}
            <div className="p-6 sm:p-10 lg:col-span-7 lg:p-12">
              <Reveal>
                <SectionHeading
                  eyebrow={contatoFinal.eyebrow}
                  headlinePrefix={contatoFinal.headlinePrefix}
                  headlineEmphasis={contatoFinal.headlineEmphasis}
                  subtitle={contatoFinal.subtitle}
                  accent="turf"
                />

                <div className="mt-8 space-y-5 border-t border-ink/10 pt-7 text-sm">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-turf-glow" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink">Endereço</p>
                      <p className="mt-0.5 text-muted">{contact.address.fullDisplay}</p>
                      <a
                        href={contact.address.mapsQueryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-gold hover:text-gold-hover"
                      >
                        <span>Abrir rota no Google Maps</span>
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink">Horário de atendimento</p>
                      <p className="mt-0.5 text-muted">{contact.hours.summary}</p>
                      <p className="mt-0.5 text-xs text-muted/80">{contact.hours.note}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <MessageCircle className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-ink transition-colors hover:text-gold"
                    >
                      WhatsApp · {contact.phoneDisplay}
                    </a>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <InstagramIcon className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <a
                      href={contact.instagramClinicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-ink transition-colors hover:text-gold"
                    >
                      {contact.instagramClinicHandle}
                    </a>
                  </div>
                </div>

                <div className="mt-9">
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
                      <MessageCircle className="h-5 w-5" aria-hidden="true" />
                      <span>{contatoFinal.ctaLabel}</span>
                    </a>
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            {/* Embed Google Maps */}
            <div className="relative min-h-[300px] border-t border-ink/10 bg-surface-2 lg:col-span-5 lg:min-h-full lg:border-t-0 lg:border-l">
              <iframe
                title={`Mapa — ${siteContent.brand.name}`}
                src={contact.address.mapsEmbedUrl}
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
