import { siteContent } from "@/content/site";
import { CursoConteudoSection } from "@/components/sections/curso-conteudo";
import { CursoDestaqueSection } from "@/components/sections/curso-destaque";
import { EquipeSection } from "@/components/sections/equipe";
import { EspecialidadesSection } from "@/components/sections/especialidades";
import { EstruturaSection } from "@/components/sections/estrutura";
import { FaqContatoSection } from "@/components/sections/faq-contato";
import { HeroSection } from "@/components/sections/hero";
import { JornadaSection } from "@/components/sections/jornada";
import { MarqueeSection } from "@/components/sections/marquee-section";
import { MetodoSection } from "@/components/sections/metodo";
import { ProvaSocialSection } from "@/components/sections/prova-social";

function buildClinicJsonLd() {
  const { brand, contact, googleRating, meta } = siteContent;

  const baseSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",
    name: brand.name,
    alternateName: brand.googleName,
    description: meta.description,
    slogan: brand.slogan,
    url: meta.siteUrl,
    telephone: `+${contact.whatsappNumber}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.country,
    },
    sameAs: [contact.instagramClinicUrl, contact.instagramPersonalUrl],
  };

  if (googleRating.authorizedByClient) {
    baseSchema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: googleRating.scoreNumeric,
      reviewCount: googleRating.count,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return baseSchema;
}

export default function HomePage() {
  const jsonLd = buildClinicJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 11 seções da Home (sendo 2 dedicadas ao Curso de Joelho) */}
      <HeroSection />
      <MarqueeSection />
      <MetodoSection />
      <EspecialidadesSection />
      <JornadaSection />
      <EstruturaSection />
      <CursoDestaqueSection />
      <CursoConteudoSection />
      <EquipeSection />
      <ProvaSocialSection />
      <FaqContatoSection />
    </>
  );
}

