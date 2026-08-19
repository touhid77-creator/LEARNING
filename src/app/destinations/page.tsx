import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { DestinationsExplorer } from "@/components/DestinationsExplorer";
import { CTASection } from "@/components/CTASection";
import { moodImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Destinations Around Udupi & Coastal Karnataka",
  description:
    "Temples, beaches, coastal towns and Western Ghats day trips around Udupi — plan sightseeing, temple tours and longer journeys with a local driver.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Where a day around Udupi can take you."
        description="Filter by the kind of trip you're planning, from the temples in town to a full day toward the Ghats."
        image={moodImages.tropicalBeachBoat}
        imageAlt="Palm-lined coastal beach"
      />
      <section className="py-16 md:py-20">
        <Container>
          <DestinationsExplorer />
        </Container>
      </section>
      <CTASection
        title="See something you like?"
        description="Tell us which places you'd like to cover and we'll plan the route and the day."
      />
    </>
  );
}
