export type DestinationTag =
  | "udupi"
  | "nearby"
  | "beaches"
  | "temples"
  | "coastal-karnataka"
  | "western-ghats"
  | "day-trips"
  | "longer-journeys";

export const tagLabels: Record<DestinationTag, string> = {
  udupi: "Udupi",
  nearby: "Nearby",
  beaches: "Beaches",
  temples: "Temples",
  "coastal-karnataka": "Coastal Karnataka",
  "western-ghats": "Western Ghats",
  "day-trips": "Day Trips",
  "longer-journeys": "Longer Journeys",
};

export type Destination = {
  slug: string;
  name: string;
  tags: DestinationTag[];
  blurb: string;
};

// Editorial copy only — no invented distances, drive times, prices or ratings.
// Verify all descriptive claims before publishing; flagged where relevant.
// Written to vary in length and rhythm on purpose — real places don't all
// read the same way.
export const destinations: Destination[] = [
  {
    slug: "krishna-matha",
    name: "Udupi Krishna Matha",
    tags: ["udupi", "temples"],
    blurb:
      "Most visitors' first stop, and often the reason they're in Udupi at all. A working monastery with its own daily rhythm of ritual and music, right next to the row of kitchens the town is known for.",
  },
  {
    slug: "anantheshwara-temple",
    name: "Anantheshwara Temple",
    tags: ["udupi", "temples"],
    blurb:
      "Older than the Krishna Matha next door, and quieter for it. Good if you want Udupi's temple architecture without the crowd.",
  },
  {
    slug: "chandramouleshwara-temple",
    name: "Chandramouleshwara Temple",
    tags: ["udupi", "temples"],
    blurb: "Part of the same cluster at the centre of town — easy to fold into a morning that already takes in Krishna Matha and Anantheshwara.",
  },
  {
    slug: "malpe-beach",
    name: "Malpe Beach",
    tags: ["udupi", "nearby", "beaches"],
    blurb:
      "Udupi's working harbour by day, its evening promenade by dusk. This is also where the boats to St. Mary's Island leave from.",
  },
  {
    slug: "st-marys-island",
    name: "St. Mary's Island",
    tags: ["nearby", "beaches"],
    blurb:
      "A short boat ride out from Malpe. What people actually come for is the rock — hexagonal basalt columns that look built rather than formed.",
  },
  {
    slug: "kaup-beach",
    name: "Kaup Beach",
    tags: ["nearby", "beaches"],
    blurb: "South of Udupi, and noticeably quieter than Malpe. The lighthouse is the landmark; the empty sand is the actual reason to stay.",
  },
  {
    slug: "kaup-lighthouse",
    name: "Kaup Lighthouse",
    tags: ["nearby"],
    blurb: "Open to visitors. Worth timing for late afternoon — the light off the Arabian Sea does most of the work here.",
  },
  {
    slug: "padukere",
    name: "Padukere",
    tags: ["nearby"],
    blurb: "A stretch of coast near Kaup, usually visited alongside the lighthouse and beach rather than on its own.",
  },
  {
    slug: "manipal",
    name: "Manipal",
    tags: ["nearby"],
    blurb:
      "The university town on the hill above Udupi. We get this route often — students and families heading to or from the airport — plus its own cafes and viewpoints if you're staying a while.",
  },
  {
    slug: "anegudde-vinayaka-temple",
    name: "Anegudde Vinayaka Temple",
    tags: ["nearby", "temples"],
    blurb: "A Ganesha temple at Kumbhashi, set on a hilltop with paddy fields running out beneath it. Usually visited on the way toward Kundapura.",
  },
  {
    slug: "kundapura",
    name: "Kundapura",
    tags: ["coastal-karnataka", "day-trips"],
    blurb: "A coastal town north of Udupi with beaches and backwaters of its own — less a single stop than a base for going further up the coast.",
  },
  {
    slug: "kodi-beach",
    name: "Kodi Beach",
    tags: ["coastal-karnataka", "beaches", "day-trips"],
    blurb: "Where the Chakra river meets the sea, near Kundapura. Fewer crowds than the beaches closer to Udupi.",
  },
  {
    slug: "maravanthe",
    name: "Maravanthe",
    tags: ["coastal-karnataka", "beaches", "day-trips"],
    blurb:
      "The stretch of coastal Karnataka everyone photographs. The highway runs with the sea on one side and the Souparnika river on the other, at the same time.",
  },
  {
    slug: "trasi",
    name: "Trasi",
    tags: ["coastal-karnataka", "beaches"],
    blurb: "A fishing-village beach near Kundapura, well off the route most visitors take.",
  },
  {
    slug: "byndoor",
    name: "Byndoor",
    tags: ["coastal-karnataka", "day-trips"],
    blurb: "Further up the coast again. Useful mainly as a stop on the longer run toward Murudeshwar.",
  },
  {
    slug: "kollur-mookambika-temple",
    name: "Kollur Mookambika Temple",
    tags: ["temples", "longer-journeys"],
    blurb:
      "One of the more significant pilgrimage temples in the region, at the foothills of the Western Ghats. Families tend to make a full day of it, not a quick stop.",
  },
  {
    slug: "murudeshwar",
    name: "Murudeshwar",
    tags: ["coastal-karnataka", "longer-journeys"],
    blurb: "Known for the Shiva statue looking out over the Arabian Sea, and the temple complex right on the coast beneath it.",
  },
  {
    slug: "gokarna",
    name: "Gokarna",
    tags: ["coastal-karnataka", "longer-journeys"],
    blurb: "Further up the coast — a temple town built around the Mahabaleshwar Temple, with a more laid-back set of beaches than Udupi's own.",
  },
  {
    slug: "dharmasthala",
    name: "Dharmasthala",
    tags: ["temples", "longer-journeys"],
    blurb:
      "Inland, toward the Ghats. The Manjunatha Temple is the draw, and the custom of feeding every visitor who arrives, regardless of faith, is well known.",
  },
  {
    slug: "kukke-subramanya",
    name: "Kukke Subramanya",
    tags: ["temples", "longer-journeys"],
    blurb: "A temple town set against forested hills, dedicated to Lord Subramanya. Pilgrims travel here from across the state.",
  },
  {
    slug: "mangaluru",
    name: "Mangaluru",
    tags: ["coastal-karnataka", "day-trips"],
    blurb: "Coastal Karnataka's largest city, and home to the airport. Worth an hour or two of its own temples and old town if your flight allows it.",
  },
  {
    slug: "agumbe",
    name: "Agumbe",
    tags: ["western-ghats", "longer-journeys"],
    blurb:
      "Called the \"Cherrapunji of the South\" for how hard it rains here in monsoon. Outside that season, it's better known as a sunset viewpoint over the Ghats.",
  },
  {
    slug: "karkala",
    name: "Karkala",
    tags: ["western-ghats", "day-trips", "temples"],
    blurb: "A hill town on the road up to the Ghats, known for its Gomateshwara statue and its Jain heritage.",
  },
  {
    slug: "sringeri",
    name: "Sringeri",
    tags: ["western-ghats", "longer-journeys", "temples"],
    blurb: "Home to the Sharada Peetham, one of the country's most important monastic seats, on the banks of the Tunga river.",
  },
  {
    slug: "kudremukh",
    name: "Kudremukh Region",
    tags: ["western-ghats", "longer-journeys"],
    blurb: "Forested, mountainous, and popular with trekkers. Treat it as a full day out from Udupi, not a stop on the way to somewhere else.",
  },
];

export function getDestinationsByTag(tag: DestinationTag | "all") {
  if (tag === "all") return destinations;
  return destinations.filter((d) => d.tags.includes(tag));
}
