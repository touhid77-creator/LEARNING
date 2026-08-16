import type { Vehicle } from "@/data/vehicles";
import { CarIcon, CheckIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const message = `Hello Thonse Tours and Travels, I'd like to ask about the ${vehicle.name} for an upcoming trip.`;

  return (
    <div className="glass relative flex flex-col overflow-hidden rounded-xl2 border border-ocean-900/10 p-8 shadow-soft">
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ocean-800/8 text-ocean-800">
          <CarIcon className="h-7 w-7" />
        </div>
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold-700">
          {vehicle.slug === "ertiga" ? "MPV · 3-row" : "Sedan"}
        </span>
      </div>

      <h3 className="mt-6 text-2xl leading-snug text-ocean-900">{vehicle.name}</h3>
      <p className="mt-1 text-sm italic text-ocean-800/60">{vehicle.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-ocean-800/75">{vehicle.description}</p>

      <ul className="mt-6 grid grid-cols-2 gap-x-3 gap-y-2">
        {vehicle.bestFor.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-ocean-900/80">
            <CheckIcon className="h-3.5 w-3.5 shrink-0 text-palm-500" />
            {item}
          </li>
        ))}
      </ul>

      <a
        href={buildWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ocean-900 transition-colors hover:text-ocean-700"
      >
        Ask about this vehicle
        <ArrowRightIcon className="h-4 w-4" />
      </a>
    </div>
  );
}
