import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { buildTelLink, buildWhatsAppLink } from "@/lib/whatsapp";
import { PhoneIcon, WhatsAppIcon, MapPinIcon } from "@/components/ui/Icons";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/destinations", label: "Destinations" },
      { href: "/vehicles", label: "Vehicles" },
      { href: "/services", label: "Services" },
      { href: "/airport-transfers", label: "Airport Transfers" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/plan-a-trip", label: "Plan a Trip" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-ocean-950 pb-28 pt-16 text-pearl md:pb-16">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl text-pearl">Thonse</span>
            <span className="ml-2 text-xs uppercase tracking-[0.28em] text-sand-200/70">
              Tours &amp; Travels
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-pearl/60">
              A personally-run taxi and tour service based in {siteConfig.city}, Karnataka —
              local sightseeing, temple and beach tours, airport transfers and outstation
              journeys across coastal Karnataka.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={buildTelLink()}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-pearl/20 text-pearl/80 transition-colors hover:border-pearl hover:text-pearl"
                aria-label="Call"
              >
                <PhoneIcon className="h-4 w-4" />
              </a>
              <a
                href={buildWhatsAppLink("Hello Thonse Tours and Travels, I'd like to enquire about a trip.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-pearl/20 text-pearl/80 transition-colors hover:border-pearl hover:text-pearl"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-sand-200/70">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-pearl/70 transition-colors hover:text-pearl"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-pearl/10 pt-8 text-sm text-pearl/55 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-2">
              <MapPinIcon className="h-4 w-4" /> {siteConfig.addressLine}
            </span>
            <span>{siteConfig.hours}</span>
            <a href={buildTelLink()} className="hover:text-pearl">
              {siteConfig.phoneIntl}
            </a>
          </div>
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
