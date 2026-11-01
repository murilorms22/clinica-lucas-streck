import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, siteContent } from "@/content/site";
import { InstagramIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";

interface FooterProps {
  logoSvgAvailable?: boolean;
}

export function Footer({ logoSvgAvailable = false }: FooterProps) {
  const year = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppUrl(siteContent.contact.defaultWhatsappMessage);

  return (
    <footer className="border-t border-ink/10 bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Identidade */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block">
              <Logo svgAvailable={logoSvgAvailable} />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {siteContent.brand.slogan} Fisioterapia traumato-esportiva no Centro de Pelotas/RS.
            </p>
          </div>

          {/* Navegação rápida */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-bold tracking-[0.16em] text-ink uppercase">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {siteContent.navigation.links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/curso"
                  className="font-medium text-gold transition-colors hover:text-gold-hover"
                >
                  Curso Presencial de Joelho
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato e endereço */}
          <div className="md:col-span-4">
            <h3 className="font-display text-sm font-bold tracking-[0.16em] text-ink uppercase">
              Contato & Localização
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-turf-glow" aria-hidden="true" />
                <a
                  href={siteContent.contact.address.mapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ink"
                >
                  {siteContent.contact.address.fullDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>WhatsApp · {siteContent.contact.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <a
                  href={siteContent.contact.instagramClinicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-ink"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>{siteContent.contact.instagramClinicHandle}</span>
                </a>
                <a
                  href={siteContent.contact.instagramPersonalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-muted/85 transition-colors hover:text-ink"
                >
                  <span>({siteContent.contact.instagramPersonalHandle})</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink/10 pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>© {year} Lucas Streck Fisioterapia. Todos os direitos reservados.</p>
          <p className="text-muted/80">Pelotas/RS · Fisioterapia Traumato-Esportiva</p>
        </div>
      </div>
    </footer>
  );
}

