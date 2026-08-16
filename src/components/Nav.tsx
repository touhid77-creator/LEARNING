"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { siteConfig } from "@/lib/site-config";
import { buildTelLink, buildWhatsAppLink } from "@/lib/whatsapp";
import { MenuIcon, CloseIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/destinations", label: "Destinations" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/services", label: "Services" },
  { href: "/airport-transfers", label: "Airport Transfers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="glass border-b border-white/30">
        <div className="container-editorial flex h-[72px] items-center justify-between">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-tight text-ocean-900 md:text-xl">
              Thonse
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-ocean-800/60">
              Tours &amp; Travels
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm font-medium tracking-wide text-ocean-800/80 transition-colors hover:text-ocean-900",
                  pathname === link.href && "text-ocean-900"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={buildTelLink()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ocean-800/20 text-ocean-800 transition-colors hover:border-ocean-800 hover:bg-ocean-800/5"
              aria-label="Call Thonse Tours and Travels"
            >
              <PhoneIcon className="h-4 w-4" />
            </a>
            <a
              href={buildWhatsAppLink("Hello Thonse Tours and Travels, I'd like to enquire about a trip.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ocean-800/20 text-ocean-800 transition-colors hover:border-ocean-800 hover:bg-ocean-800/5"
              aria-label="WhatsApp Thonse Tours and Travels"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <Button href="/plan-a-trip" size="md">
              Plan a Trip
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center text-ocean-900 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass absolute inset-x-0 top-[72px] border-b border-white/30 lg:hidden">
          <nav className="container-editorial flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-ocean-900 transition-colors hover:bg-ocean-800/5"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-3 px-3">
              <Button href={buildTelLink()} variant="secondary" className="flex-1" size="md">
                Call Now
              </Button>
              <Button
                href={buildWhatsAppLink("Hello Thonse Tours and Travels, I'd like to enquire about a trip.")}
                external
                variant="whatsapp"
                className="flex-1"
                size="md"
              >
                WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
