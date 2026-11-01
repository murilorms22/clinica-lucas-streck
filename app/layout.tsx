import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Instrument_Serif, Inter } from "next/font/google";
import { siteContent } from "@/content/site";
import { FloatingWhatsapp } from "@/components/layout/floating-whatsapp";
import { Footer } from "@/components/layout/footer";
import { LenisProvider } from "@/components/layout/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { hasPublicAsset } from "@/lib/media";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.meta.siteUrl),
  title: {
    default: siteContent.meta.title,
    template: "%s | Lucas Streck Fisioterapia",
  },
  description: siteContent.meta.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteContent.meta.locale,
    url: "/",
    siteName: siteContent.brand.name,
    title: siteContent.meta.title,
    description: siteContent.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logoSvgAvailable = hasPublicAsset(siteContent.brand.logoSvgPath);

  return (
    <html
      lang="pt-BR"
      className={`${barlowCondensed.variable} ${instrumentSerif.variable} ${inter.variable}`}
    >
      <body className="flex min-h-dvh flex-col bg-bg text-ink antialiased">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#0A0A0B]"
        >
          Pular para o conteúdo principal
        </a>

        <LenisProvider>
          <Navbar logoSvgAvailable={logoSvgAvailable} />
          <main id="conteudo-principal" className="flex-1">
            {children}
          </main>
          <Footer logoSvgAvailable={logoSvgAvailable} />
          <FloatingWhatsapp />
        </LenisProvider>
      </body>
    </html>
  );
}

