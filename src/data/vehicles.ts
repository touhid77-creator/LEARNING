export type Vehicle = {
  slug: string;
  name: string;
  tagline: string;
  bestFor: string[];
  description: string;
  seatingNote: string; // deliberately non-numeric/unverified beyond general class
};

// No invented technical specifications or pricing — "best for" framing only,
// as instructed. Confirm seating capacity wording before publishing.
export const vehicles: Vehicle[] = [
  {
    slug: "swift-dzire",
    name: "Maruti Suzuki Swift Dzire",
    tagline: "Light, quick, built for the shorter trips.",
    bestFor: ["Couples", "Small families", "Airport transfers", "Small groups"],
    description:
      "If it's a couple heading to the airport, or a small family with a morning of sightseeing planned, this is usually the one we'd suggest. Quick and comfortable, without paying for room you won't use.",
    seatingNote: "Comfortable for smaller groups — ask us for the exact seating count.",
  },
  {
    slug: "ertiga",
    name: "Maruti Suzuki Ertiga",
    tagline: "For when the group, or the road, is longer.",
    bestFor: ["Families", "Groups", "Sightseeing", "Temple tours", "Airport transfers", "Longer journeys"],
    description:
      "A full family temple tour, a group heading out to Kollur or Murudeshwar, an airport run with everyone's luggage in tow — this is the car for the day you don't want to think twice about space.",
    seatingNote: "Extra room for passengers and luggage — ask us for the exact seating count.",
  },
];
