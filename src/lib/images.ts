/**
 * PLACEHOLDER PHOTOGRAPHY
 * ------------------------------------------------------------------
 * These are generic, unbranded coastal/nature stock photographs used
 * ONLY as mood/texture placeholders (ocean, palms, sand, light) — none
 * of them claim to depict a specific real place, temple or vehicle.
 *
 * They exist so the layout and design system can be judged properly.
 * Before launch, replace with:
 *   - real photos of the Swift Dzire & Ertiga
 *   - real or properly licensed photos of each named destination
 *   - real photos of Udupi / Mukthar Ahmed / the team, if desired
 *
 * Destination, vehicle and temple cards deliberately do NOT use
 * "close enough" stock photography standing in for a specific real
 * place — that would misrepresent it. They use a designed
 * typographic/texture treatment instead until real photos exist.
 */

function unsplash(id: string, params = "auto=format&fit=crop&q=80") {
  return `https://images.unsplash.com/${id}?${params}`;
}

export const moodImages = {
  oceanWaveClose: unsplash("photo-1506905925346-21bda4d32df4", "auto=format&fit=crop&q=80&w=1800"),
  windPalmsBeach: unsplash("photo-1520454974749-611b7248ffdb", "auto=format&fit=crop&q=80&w=1800"),
  birdsSunriseBeach: unsplash("photo-1471922694854-ff1b63b20054", "auto=format&fit=crop&q=80&w=1800"),
  sunsetWavesSand: unsplash("photo-1473116763249-2faaef81ccda", "auto=format&fit=crop&q=80&w=1800"),
  tropicalBeachBoat: unsplash("photo-1519046904884-53103b34b206", "auto=format&fit=crop&q=80&w=1800"),
};
