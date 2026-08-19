import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { moodImages } from "@/lib/images";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppIcon, CompassIcon } from "@/components/ui/Icons";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ocean-950 text-pearl">
      <Image
        src={moodImages.oceanWaveClose}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/85 to-ocean-950/70" />
      <Container className="relative z-10 text-center">
        <CompassIcon className="mx-auto h-8 w-8 text-gold-300" />
        <span className="mt-6 block text-xs font-medium uppercase tracking-[0.3em] text-sand-200">
          404
        </span>
        <h1 className="mx-auto mt-4 max-w-lg text-balance text-4xl leading-tight md:text-5xl">
          This road doesn&apos;t go there.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-balance leading-relaxed text-pearl/75">
          The page you&apos;re looking for isn&apos;t here. Let&apos;s get you back on route.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button
            href={buildWhatsAppLink(`Hello ${siteConfig.name}, I got lost on your website — can you help?`)}
            external
            variant="ghost"
            size="lg"
            icon={<WhatsAppIcon className="h-4 w-4" />}
          >
            WhatsApp Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
