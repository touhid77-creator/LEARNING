"use client";

import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { destinations, tagLabels, type DestinationTag } from "@/data/destinations";
import { DestinationCard } from "@/components/DestinationCard";

const tags: (DestinationTag | "all")[] = [
  "all",
  "udupi",
  "nearby",
  "beaches",
  "temples",
  "coastal-karnataka",
  "western-ghats",
  "day-trips",
  "longer-journeys",
];

export function DestinationsExplorer() {
  const [active, setActive] = useState<DestinationTag | "all">("all");

  const filtered = useMemo(() => {
    if (active === "all") return destinations;
    return destinations.filter((d) => d.tags.includes(active));
  }, [active]);

  return (
    <div>
      <div className="glass sticky top-[72px] z-30 -mx-6 flex gap-2 overflow-x-auto px-6 py-4 md:mx-0 md:flex-wrap md:overflow-visible md:rounded-full md:px-3">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={clsx(
              "shrink-0 rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors",
              active === tag
                ? "bg-ocean-800 text-pearl"
                : "text-ocean-800/70 hover:bg-ocean-800/8"
            )}
          >
            {tag === "all" ? "All" : tagLabels[tag]}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-ocean-800/55">
        {filtered.length} destination{filtered.length !== 1 ? "s" : ""}
      </p>

      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((destination) => (
          <DestinationCard key={destination.slug} destination={destination} />
        ))}
      </div>
    </div>
  );
}
