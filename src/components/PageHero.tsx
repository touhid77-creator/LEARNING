import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ocean-950 pb-16 pt-40 text-pearl md:pb-20 md:pt-48">
      {image && (
        <>
          <Image src={image} alt={imageAlt ?? ""} fill sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/80 to-ocean-950/60" />
        </>
      )}
      <Container className="relative z-10">
        <Reveal>
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-sand-200">
            {eyebrow}
          </span>
          <h1 className="max-w-2xl text-balance text-4xl leading-[1.1] md:text-6xl">{title}</h1>
          {description && (
            <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-pearl/75 md:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
