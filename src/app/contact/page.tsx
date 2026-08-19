import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { moodImages } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { buildTelLink, buildWhatsAppLink } from "@/lib/whatsapp";
import { PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact — Thonse Tours and Travels",
  description:
    "Call or WhatsApp Thonse Tours and Travels in Udupi, Karnataka — available 24×7 for taxi bookings and trip enquiries.",
};

const details = [
  { icon: PhoneIcon, label: "Phone", value: siteConfig.phoneIntl, href: buildTelLink() },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: siteConfig.phoneIntl,
    href: buildWhatsAppLink(`Hello ${siteConfig.name}, I'd like to enquire about a trip.`),
  },
  { icon: MapPinIcon, label: "Based in", value: siteConfig.addressLine, href: undefined },
  { icon: ClockIcon, label: "Hours", value: siteConfig.hours, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="No call centre in between."
        description="WhatsApp your trip details for the fastest reply. Call if it's urgent."
        image={moodImages.sunsetWavesSand}
        imageAlt="Sunset waves along the shore"
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
            <Reveal>
              <div className="divide-y divide-ocean-900/10 border-y border-ocean-900/10">
                {details.map((detail) => (
                  <div key={detail.label} className="flex items-center gap-4 py-4">
                    <detail.icon className="h-4 w-4 shrink-0 text-ocean-800/50" />
                    <p className="w-24 shrink-0 text-xs font-medium uppercase tracking-wider text-ocean-800/50">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.label === "WhatsApp" ? "_blank" : undefined}
                        rel={detail.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                        className="text-base text-ocean-900 hover:text-ocean-700"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-base text-ocean-900">{detail.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href={buildWhatsAppLink(`Hello ${siteConfig.name}, I'd like to enquire about a trip.`)}
                  external
                  variant="whatsapp"
                  size="lg"
                  icon={<WhatsAppIcon className="h-4 w-4" />}
                >
                  WhatsApp Now
                </Button>
                <Button href={buildTelLink()} variant="secondary" size="lg" icon={<PhoneIcon className="h-4 w-4" />}>
                  Call Now
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full min-h-[340px] overflow-hidden rounded-xl2 border border-ocean-900/10">
                <iframe
                  title="Map showing Udupi, Karnataka"
                  src="https://www.google.com/maps?q=Udupi,+Karnataka,+India&output=embed"
                  className="h-full w-full"
                  style={{ border: 0, minHeight: 340 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-2 text-xs text-ocean-800/45">
                Showing Udupi generally — exact pickup point confirmed when you book.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
