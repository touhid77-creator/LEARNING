import Image from "next/image";
import { moodImages } from "@/lib/images";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink, buildTelLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppIcon, PhoneIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection({
  title = "Ready when you are.",
  description = "Send us your plan on WhatsApp, call directly, or fill in a few details and we'll take it from there.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ocean-950 py-24 md:py-32">
      <Image
        src={moodImages.sunsetWavesSand}
        alt="Sunset waves along the coast"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/85 to-ocean-950/70" />
      <div className="container-editorial relative z-10 text-center">
        <Reveal>
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-sand-200">
            Plan your trip
          </span>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl leading-tight text-pearl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-balance text-base leading-relaxed text-pearl/75">
            {description}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={buildWhatsAppLink(`Hello ${siteConfig.name}, I'd like to enquire about a trip.`)}
              external
              variant="whatsapp"
              size="lg"
              icon={<WhatsAppIcon className="h-4 w-4" />}
            >
              WhatsApp Now
            </Button>
            <Button href={buildTelLink()} variant="ghost" size="lg" icon={<PhoneIcon className="h-4 w-4" />}>
              Call {siteConfig.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
