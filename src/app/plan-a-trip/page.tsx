import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { TripPlannerForm } from "@/components/TripPlannerForm";
import { FAQ } from "@/components/FAQ";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { moodImages } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { buildTelLink } from "@/lib/whatsapp";
import { PhoneIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Plan a Trip — Book Your Ride",
  description:
    "Tell us your pickup, destination, date and vehicle preference — send it straight to Thonse Tours and Travels over WhatsApp.",
};

export default function PlanATripPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan a Trip"
        title="Tell us the trip. We'll take care of the rest."
        description="Fill in as much as you can — we'll confirm the details, the vehicle and availability over WhatsApp or a call."
        image={moodImages.oceanWaveClose}
        imageAlt="Close-up of ocean waves"
      />
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <TripPlannerForm />
          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-ocean-800/60">Prefer to talk it through directly?</p>
            <Button href={buildTelLink()} variant="secondary" icon={<PhoneIcon className="h-4 w-4" />}>
              Call {siteConfig.phone}
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-t border-ocean-900/8 bg-sand-50 py-16 md:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Before you send it" title="A few common questions" />
          <div className="mt-8">
            <FAQ />
          </div>
        </Container>
      </section>
    </>
  );
}
