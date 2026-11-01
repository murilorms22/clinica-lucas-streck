"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Calendar, GraduationCap, MapPin, Menu } from "lucide-react";
import { buildWhatsAppUrl, siteContent } from "@/content/site";
import { buttonClasses } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface NavbarProps {
  logoSvgAvailable?: boolean;
}

export function Navbar({ logoSvgAvailable = false }: NavbarProps) {
  const pathname = usePathname();
  const isCursoPage = pathname === "/curso";
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = buildWhatsAppUrl(
    siteContent.navigation.primaryCta.whatsappMessage
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-ink/10 bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 rounded-md py-1"
          aria-label={`Ir para o início — ${siteContent.brand.name}`}
        >
          <Logo compact svgAvailable={logoSvgAvailable} />
        </Link>

        {/* Links âncora desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 lg:flex"
        >
          {siteContent.navigation.links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTAs desktop + menu mobile */}
        <div className="flex items-center gap-2.5">
          <Link
            href={siteContent.navigation.courseCta.href}
            aria-current={isCursoPage ? "page" : undefined}
            className={cn(
              buttonClasses({
                variant: "gold-outline",
                size: "sm",
                className: "hidden sm:inline-flex",
              }),
              isCursoPage &&
                "border-gold bg-gold/22 ring-1 ring-gold/40"
            )}
          >
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
            <span>{siteContent.navigation.courseCta.label}</span>
            {isCursoPage ? (
              <span
                className="h-1.5 w-1.5 rounded-full bg-gold"
                aria-hidden="true"
              />
            ) : null}
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses({
              variant: "gold",
              size: "sm",
              className: "px-3.5 sm:px-4",
            })}
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span>{siteContent.navigation.primaryCta.label}</span>
          </a>

          {/* Botão menu mobile (Sheet) */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Abrir menu de navegação"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink/14 bg-surface text-ink transition-colors hover:border-gold/50 hover:text-gold lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent>
              <div className="flex h-full flex-col justify-between pt-2">
                <div>
                  <SheetTitle className="sr-only">
                    Menu de navegação — {siteContent.brand.name}
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Acesse as seções da clínica, a página do Curso de Joelho ou agende pelo WhatsApp.
                  </SheetDescription>

                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="inline-block"
                  >
                    <Logo compact svgAvailable={logoSvgAvailable} />
                  </Link>

                  <div className="mt-7 flex flex-col gap-1 border-t border-ink/10 pt-5">
                    {siteContent.navigation.links.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="flex min-h-12 items-center justify-between rounded-lg px-3 font-display text-2xl font-bold tracking-wide text-ink uppercase transition-colors hover:bg-surface hover:text-gold"
                        >
                          <span>{item.label}</span>
                          <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  {/* Destaque do Curso no menu mobile */}
                  <div className="mt-5 border-t border-ink/10 pt-5">
                    <SheetClose asChild>
                      <Link
                        href={siteContent.navigation.courseCta.href}
                        aria-current={isCursoPage ? "page" : undefined}
                        className={cn(
                          buttonClasses({
                            variant: "gold-outline",
                            size: "md",
                            className: "w-full justify-between px-4",
                          }),
                          isCursoPage && "border-gold bg-gold/20"
                        )}
                      >
                        <span className="inline-flex items-center gap-2">
                          <GraduationCap className="h-4 w-4" aria-hidden="true" />
                          {siteContent.navigation.courseCta.label}
                        </span>
                        <span className="rounded bg-gold/20 px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                          21-22 Nov
                        </span>
                      </Link>
                    </SheetClose>
                  </div>
                </div>

                {/* Rodapé do Sheet mobile */}
                <div className="space-y-4 border-t border-ink/10 pt-5">
                  <div className="flex items-start gap-2.5 text-xs text-muted">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-turf-glow" aria-hidden="true" />
                    <span>{siteContent.contact.address.fullDisplay}</span>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className={buttonClasses({
                      variant: "gold",
                      size: "lg",
                      className: "w-full",
                    })}
                  >
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <span>Agendar avaliação no WhatsApp</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

