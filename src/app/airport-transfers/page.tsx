import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { moodImages } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Mangaluru Airport (IXE) Taxi Transfers from Udupi",
  description:
    "Airport pickup and drop between Mangaluru International Airport (IXE) and Udupi, Manipal, Kundapura and beyond. 24×7, planned around your flight.",
};

const routes = [
  { from: "Mangaluru Airport (IXE)", to: "Udupi" },
  { from: "Udupi", to: "Mangaluru Airport (IXE)" },
  { from: "Mangaluru Airport (IXE)", to: "Manipal" },
  { from: "Mangaluru Airport (IXE)", to: "Kundapura" },
  { from: "Mangaluru Airport (IXE)", to: "Other destinations" },
];

const points = [
  {
    title: "Timed to your flight",
    text: "Give us the flight number and we'll track the landing time ourselves. The pickup moves with it, not the other way round.",
  },
  {
    title: "Right vehicle for your group",
    text: "A couple travelling light usually gets the Dzire. A family with the extra bags gets the Ertiga.",
  },
  {
    title: "Genuinely 24×7",
    text: "Red-eye landing, early departure, whatever it is — flights don't run on office hours, so neither do we.",
  },
];

export default function AirportTransfersPage() {
  return (
    <>
      <PageHero
        eyebrow="Airport Transfers"
        title="Mangaluru Airport (IXE), sorted both ways."
        description="Direct transfers between Mangaluru International Airport and Udupi, Manipal, Kundapura and other coastal Karnataka destinations."
        image={moodImages.birdsSunriseBeach}
        imageAlt="Sunrise over the coast"
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Routes we cover"
                title="Common airport routes"
                description="Every quote is for your specific trip — send your details and we'll confirm availability and pricing."
              />
              <ul className="mt-8 divide-y divide-ocean-900/10 rounded-xl2 border border-ocean-900/10">
                {routes.map((route) => (
                  <li
                    key={`${route.from}-${route.to}`}
                    className="flex flex-wrap items-center justify-between gap-3 px-6 py-5"
                  >
                    <span className="text-sm text-ocean-900 md:text-base">
                      {route.from} <span className="mx-2 text-ocean-800/40">→</span> {route.to}
                    </span>
                    <a
                      href={buildWhatsAppLink(
                        `Hello ${siteConfig.name}, I'd like a quote for a transfer from ${route.from} to ${route.to}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium uppercase tracking-wider text-gold-700 hover:text-gold-700/70"
                    >
                      Get a Quote
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/plan-a-trip" size="lg">
                  Plan Your Transfer
                </Button>
              </div>
            </div>

            <div className="divide-y divide-ocean-900/10 border-t border-ocean-900/10">
              {points.map((point, i) => (
                <Reveal key={point.title} delay={i * 0.08} className="py-6 first:pt-0">
                  <h3 className="text-lg text-ocean-900">{point.title}</h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ocean-800/65">
                    {point.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Share your flight details."
        description="Flight number, landing time and where you're headed — we'll take care of the rest."
      />
    </>
  );
}
