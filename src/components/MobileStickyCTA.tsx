"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { buildTelLink, buildWhatsAppLink } from "@/lib/whatsapp";
import { PhoneIcon, WhatsAppIcon, CompassIcon } from "@/components/ui/Icons";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <div className="glass-dark mx-3 mb-3 grid grid-cols-3 gap-1 rounded-2xl p-1.5 shadow-glass">
        <a
          href={buildTelLink()}
          className="flex flex-col items-center gap-1 rounded-xl py-2.5 text-pearl transition-colors active:bg-pearl/10"
        >
          <PhoneIcon className="h-5 w-5" />
          <span className="text-[11px] font-medium tracking-wide">Call</span>
        </a>
        <a
          href={buildWhatsAppLink(`Hello ${siteConfig.name}, I'd like to enquire about a trip.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 rounded-xl bg-palm-700/90 py-2.5 text-pearl transition-colors active:bg-palm-700"
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span className="text-[11px] font-medium tracking-wide">WhatsApp</span>
        </a>
        <Link
          href="/plan-a-trip"
          className="flex flex-col items-center gap-1 rounded-xl py-2.5 text-pearl transition-colors active:bg-pearl/10"
        >
          <CompassIcon className="h-5 w-5" />
          <span className="text-[11px] font-medium tracking-wide">Book</span>
        </Link>
      </div>
    </div>
  );
}
