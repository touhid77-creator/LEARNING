import Image from "next/image";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Statement } from "@/components/Statement";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesList } from "@/components/ServicesList";
import { DestinationCard } from "@/components/DestinationCard";
import { VehicleCard } from "@/components/VehicleCard";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { destinations } from "@/data/destinations";
import { vehicles } from "@/data/vehicles";
import { moodImages } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { PlaneIcon, ArrowRightIcon, WhatsAppIcon } from "@/components/ui/Icons";

const featuredSlugs = [
  "krishna-matha",
  "malpe-beach",
  "st-marys-island",
  "kollur-mookambika-temple",
  "maravanthe",
  "agumbe",
];

export default function HomePage() {
  const featured = destinations.filter((d) => featuredSlugs.includes(d.slug));

  return (
    <>
      <Hero />
      <TrustStrip />

      {/* Services — editorial list, not a card grid */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="What we do"
                title="One driver, one car, every kind of trip around Udupi."
                description="From a five-minute local hop to a full day toward the Ghats — the same reliable service, planned around what you actually need."
              />
              <div className="mt-8">
                <Button href="/services" variant="secondary" icon={<ArrowRightIcon className="h-4 w-4" />}>
                  View all services
                </Button>
              </div>
            </Reveal>
            <ServicesList compact />
          </div>
        </Container>
      </section>

      {/* Destinations preview */}
      <section className="bg-sand-50 py-24 md:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Where to go"
                title="Temples, coastline and the Ghats — organised by the kind of day you want."
                description="Udupi's own temples and beaches, the coast north and south of it, and longer journeys inland when you have the time."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Button href="/destinations" variant="secondary" icon={<ArrowRightIcon className="h-4 w-4" />}>
                All destinations
              </Button>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((destination, i) => (
              <Reveal key={destination.slug} delay={(i % 3) * 0.08}>
                <DestinationCard destination={destination} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Statement />

      {/* Vehicles */}
      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Your ride"
              title="Two vehicles. Chosen for the trip, not just the seats."
              description="A Swift Dzire for quick, comfortable trips — an Ertiga when the group or the journey needs more room."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {vehicles.map((vehicle, i) => (
              <Reveal key={vehicle.slug} delay={i * 0.1}>
                <VehicleCard vehicle={vehicle} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Airport transfer teaser */}
      <section className="relative overflow-hidden bg-ocean-900 py-24 text-pearl md:py-28">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <Reveal>
              <PlaneIcon className="h-8 w-8 text-gold-300" />
              <h2 className="mt-6 text-balance text-3xl leading-tight md:text-4xl">
                Landing at Mangaluru Airport? We'll be at arrivals.
              </h2>
              <p className="mt-5 max-w-md text-balance leading-relaxed text-pearl/75">
                Direct transfers between Mangaluru International Airport (IXE) and Udupi,
                Manipal, Kundapura and beyond — timed around your flight.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/airport-transfers" size="lg">
                  Airport Transfers
                </Button>
                <Button
                  href={buildWhatsAppLink(
                    `Hello ${siteConfig.name}, I'd like a quote for an airport transfer.`
                  )}
                  external
                  variant="ghost"
                  size="lg"
                  icon={<WhatsAppIcon className="h-4 w-4" />}
                >
                  Get a Quote
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="divide-y divide-pearl/15 rounded-xl2 border border-pearl/15 bg-pearl/[0.04] p-2">
                {[
                  "Airport → Udupi",
                  "Udupi → Airport",
                  "Airport → Manipal",
                  "Airport → Kundapura",
                  "Airport → other destinations",
                ].map((route) => (
                  <li key={route} className="flex items-center justify-between px-5 py-4 text-sm md:text-base">
                    <span>{route}</span>
                    <span className="text-xs uppercase tracking-wider text-gold-300">Get a Quote</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* About teaser */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <Reveal>
              <div className="relative h-[380px] overflow-hidden rounded-xl2 md:h-[440px]">
                <Image
                  src={moodImages.birdsSunriseBeach}
                  alt="Sunrise over the Arabian Sea along the Udupi coast"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow="Who's driving"
                title={`Run personally by ${siteConfig.owner}.`}
                description="Ask about a route and you'll get an answer from someone who actually drives it, not a script read off a screen."
              />
              <div className="mt-8">
                <Button href="/about" variant="secondary" icon={<ArrowRightIcon className="h-4 w-4" />}>
                  About us
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
