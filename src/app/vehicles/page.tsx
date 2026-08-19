import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { VehicleCard } from "@/components/VehicleCard";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { vehicles } from "@/data/vehicles";
import { moodImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Vehicles — Swift Dzire & Ertiga",
  description:
    "A Maruti Suzuki Swift Dzire and Ertiga, personally maintained by Thonse Tours and Travels — choose the right vehicle for your Udupi trip.",
};

export default function VehiclesPage() {
  return (
    <>
      <PageHero
        eyebrow="Vehicles"
        title="Two cars. Both driven and maintained personally."
        description="The same two vehicles every time. No rotating fleet, no unfamiliar substitute turning up instead."
        image={moodImages.oceanWaveClose}
        imageAlt="Close-up of ocean waves"
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {vehicles.map((vehicle, i) => (
              <Reveal key={vehicle.slug} delay={i * 0.1}>
                <VehicleCard vehicle={vehicle} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-14 max-w-2xl text-center text-sm leading-relaxed text-ocean-800/60">
              Not sure which one fits? Tell us your group size and what the day looks like —
              sightseeing, a temple tour, an airport run — and we&apos;ll suggest one.
            </p>
          </Reveal>
        </Container>
      </section>
      <CTASection
        title="Ask which vehicle fits your trip."
        description="Group size, luggage, and the kind of journey all matter — we'll help you choose."
      />
    </>
  );
}
