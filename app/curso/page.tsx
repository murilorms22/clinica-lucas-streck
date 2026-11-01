import type { Metadata } from "next";
import { cursoContent, isCourseEnded } from "@/content/curso";
import { siteContent } from "@/content/site";
import { CursoExperiencia } from "@/components/curso/curso-experiencia";
import { CursoFaqAndCta } from "@/components/curso/curso-faq";
import { CursoHero } from "@/components/curso/curso-hero";
import { CursoInfoPraticas } from "@/components/curso/curso-info-praticas";
import { CursoInstrutor } from "@/components/curso/curso-instrutor";
import { CursoModulos } from "@/components/curso/curso-modulos";
import { CursoParaQuem } from "@/components/curso/curso-para-quem";

export const metadata: Metadata = {
  title: {
    absolute: cursoContent.meta.title,
  },
  description: cursoContent.meta.description,
  alternates: {
    canonical: "/curso",
  },
  openGraph: {
    type: "website",
    locale: siteContent.meta.locale,
    url: "/curso",
    siteName: siteContent.brand.name,
    title: cursoContent.meta.title,
    description: cursoContent.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: cursoContent.meta.title,
    description: cursoContent.meta.description,
  },
};

function buildCourseEventJsonLd() {
  const ended = isCourseEnded();

  return {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    name: cursoContent.title,
    description: cursoContent.meta.description,
    startDate: cursoContent.startDateIso,
    endDate: cursoContent.endDateIso,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: `${siteContent.brand.name} — Bloco H 302`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Padre Anchieta, 4708, bloco H 302",
        addressLocality: "Pelotas",
        addressRegion: "RS",
        postalCode: "96020-350",
        addressCountry: "BR",
      },
    },
    organizer: {
      "@type": "Organization",
      name: siteContent.brand.name,
      url: siteContent.meta.siteUrl,
    },
    performer: {
      "@type": "Person",
      name: cursoContent.instructor.name,
    },
    offers: {
      "@type": "Offer",
      url: cursoContent.symplaUrl,
      availability: ended
        ? "https://schema.org/SoldOut"
        : "https://schema.org/InStock",
    },
  };
}

export default function CursoPage() {
  const eventJsonLd = buildCourseEventJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />

      <CursoHero />
      <CursoParaQuem />
      <CursoModulos />
      <CursoExperiencia />
      <CursoInstrutor />
      <CursoInfoPraticas />
      <CursoFaqAndCta />
    </>
  );
}

