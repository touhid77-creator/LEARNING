import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { moodImages } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About — Thonse Tours and Travels",
  description:
    "Thonse Tours and Travels is a small, personally-run taxi and tour service based in Udupi, Karnataka, run by Mukthar Ahmed.",
};

const values = [
  {
    label: "How enquiries work",
    text: "There's no dispatcher passing your message along a chain. It goes to the person who'll be driving.",
  },
  {
    label: "Local roads, not just the highway",
    text: "The back way into a temple, or which stretch of beach is worth the extra ten minutes — that kind of thing.",
  },
  {
    label: "The two vehicles",
    text: "A Swift Dzire and an Ertiga. Both maintained personally, so what you booked is what shows up.",
  },
  {
    label: "Odd hours",
    text: "A 4am flight or a plan that changed twice since morning — call or message, any time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A small operation, run properly."
        description="No branch offices, no head office either. Just Udupi, and the two cars parked in it."
        image={moodImages.windPalmsBeach}
        imageAlt="Palm trees on a coastal Karnataka beach"
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center">
            <Reveal>
              <div className="relative h-[420px] overflow-hidden rounded-xl2 bg-ocean-800">
                <Image
                  src={moodImages.tropicalBeachBoat}
                  alt="Coastal Karnataka beach"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow="Run by"
                title={siteConfig.owner}
                description={`${siteConfig.owner} runs Thonse Tours and Travels out of ${siteConfig.city}, Karnataka. He drives and coordinates the trips himself, so a booking is a conversation with one person, start to finish, not a form that goes into a queue.`}
              />
            </Reveal>
          </div>

          <div className="mt-24 grid grid-cols-1 divide-y divide-ocean-900/10 border-t border-ocean-900/10 md:grid-cols-2 md:divide-y-0 md:divide-x md:border-t-0">
            {values.map((value, i) => (
              <Reveal key={value.label} delay={i * 0.08} className="py-6 md:px-10 md:py-8 first:md:pl-0">
                <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-gold-700">
                  {value.label}
                </h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ocean-800/70">{value.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Have a question before you book?"
        description="Reach out directly — every enquiry gets a personal reply."
      />
    </>
  );
}
