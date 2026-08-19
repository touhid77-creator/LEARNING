import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { ServicesList } from "@/components/ServicesList";
import { CTASection } from "@/components/CTASection";
import { moodImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services — Local Taxi, Airport Transfers, Tours",
  description:
    "Udupi local taxi, airport pickup and drop, sightseeing, temple tours, beach tours, outstation travel and custom trips with Thonse Tours and Travels.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every kind of trip, one dependable driver."
        description="Whatever the occasion, get in touch and we'll plan it properly — not just quote a price."
        image={moodImages.sunsetWavesSand}
        imageAlt="Sunset waves along the shore"
      />
      <section className="py-16 md:py-20">
        <Container className="max-w-4xl">
          <ServicesList />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
