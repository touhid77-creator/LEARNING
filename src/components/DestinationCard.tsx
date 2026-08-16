import { clsx } from "clsx";
import type { Destination } from "@/data/destinations";
import { tagLabels } from "@/data/destinations";
import { TempleIcon, WavesIcon, MountainIcon, CompassIcon } from "@/components/ui/Icons";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ArrowRightIcon } from "@/components/ui/Icons";

// No real photography exists yet for these specific places, so rather than
// use "close enough" stock photos that would misrepresent them, each card
// uses a designed, category-themed texture plate + editorial typography.
// Swap in real photography per destination when available.

function theme(tags: Destination["tags"]) {
  if (tags.includes("temples")) {
    return {
      gradient: "from-ocean-900 via-ocean-800 to-gold-700/70",
      Icon: TempleIcon,
    };
  }
  if (tags.includes("western-ghats")) {
    return {
      gradient: "from-palm-900 via-palm-700 to-ocean-800",
      Icon: MountainIcon,
    };
  }
  if (tags.includes("beaches")) {
    return {
      gradient: "from-ocean-800 via-ocean-600 to-ocean-500",
      Icon: WavesIcon,
    };
  }
  return {
    gradient: "from-ocean-800 via-ocean-700 to-palm-700/80",
    Icon: CompassIcon,
  };
}

export function DestinationCard({ destination }: { destination: Destination }) {
  const { gradient, Icon } = theme(destination.tags);
  const message = `Hello Thonse Tours and Travels, I'd like to plan a trip to ${destination.name}.`;

  return (
    <div className="group relative flex h-[340px] flex-col justify-end overflow-hidden rounded-xl2 shadow-soft">
      <div className={clsx("absolute inset-0 bg-gradient-to-br transition-transform duration-700 ease-editorial group-hover:scale-105", gradient)} />

      {/* fine watermark texture */}
      <Icon className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-pearl/10" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`grid-${destination.slug}`} width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke="white" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${destination.slug})`} />
      </svg>

      <div className="glass-dark relative m-3 rounded-xl2 p-5">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {destination.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-pearl/25 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-pearl/85"
            >
              {tagLabels[tag]}
            </span>
          ))}
        </div>
        <h3 className="text-balance text-xl leading-snug text-pearl">{destination.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-pearl/75">{destination.blurb}</p>
        <a
          href={buildWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 transition-colors hover:text-gold-300/80"
        >
          Plan a trip here
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
