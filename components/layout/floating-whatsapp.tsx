"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Botão flutuante de WhatsApp presente em todas as páginas, com mensagem pré-preenchida:
 * https://wa.me/5553981262587?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o.
 * Na página `/curso`, sobe automaticamente no mobile para não sobrepor a barra fixa de compra.
 */
export function FloatingWhatsapp() {
  const pathname = usePathname();
  const isCursoPage = pathname === "/curso";
  const whatsappUrl = buildWhatsAppUrl(siteContent.contact.defaultWhatsappMessage);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Clínica Lucas Streck no WhatsApp"
      className={cn(
        "group fixed right-4 z-40 inline-flex items-center gap-2.5 rounded-full border border-turf-glow/35 bg-[#132619]/95 px-4 py-3 text-sm font-semibold text-ink shadow-[0_10px_30px_-6px_rgba(0,0,0,0.75)] backdrop-blur-md transition-all duration-200 hover:border-turf-glow/70 hover:bg-[#193321] active:scale-95 sm:right-6",
        isCursoPage ? "bottom-24 md:bottom-6" : "bottom-5 sm:bottom-6"
      )}
    >
      <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-turf-glow opacity-70 motion-reduce:hidden" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-turf-glow" />
      </span>
      <MessageCircle className="h-5 w-5 text-turf-glow" aria-hidden="true" />
      <span className="hidden sm:inline">Agendar via WhatsApp</span>
    </a>
  );
}

