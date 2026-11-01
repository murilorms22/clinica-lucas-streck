import { siteContent } from "@/content/site";
import { Marquee } from "@/components/effects/marquee";

export function MarqueeSection() {
  return (
    <section aria-label="Áreas de atuação" className="relative">
      <Marquee items={siteContent.marquee.items} />
    </section>
  );
}
