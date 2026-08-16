# Thonse Tours and Travels — Website Architecture & Design System

This document is the reference spec for the site as built. It reflects only
confirmed business facts — nothing here is invented. Anything not yet
confirmed is listed explicitly at the bottom as a placeholder, matching the
`TODO(client)` markers in code.

## 1. Confirmed facts in use

| Field | Value | Source |
|---|---|---|
| Business name | Thonse Tours and Travels | client |
| Owner | Mukthar Ahmed | client |
| Location | Udupi, Karnataka, India | client |
| Phone / WhatsApp | 8880954175 | client |
| Vehicles | Maruti Suzuki Swift Dzire, Maruti Suzuki Ertiga (1 each) | client |
| Core service | 24×7 taxi service | client |
| Airport | Mangaluru International Airport (IXE) | client |
| Services | Local taxi, airport pickup/drop, sightseeing, temple tours, beach tours, outstation travel, custom trips, tourist vehicle service | client |
| Destination list & grouping | Udupi / Nearby / Beaches / Temples / Coastal Karnataka / Western Ghats / Day Trips / Longer Journeys | client-provided list, grouped per client's instructions |

No distances, drive times, prices, ratings, reviews, awards, years in
business, or customer counts are stated anywhere on the site — none were
provided, and none are invented.

## 2. Information architecture

```
/                    Home
/destinations        All destinations, tag-filterable
/vehicles            Swift Dzire, Ertiga
/services             9 services, editorial list
/airport-transfers   IXE ⇄ Udupi / Manipal / Kundapura / other
/plan-a-trip         Enquiry form → WhatsApp
/about               Owner, values
/contact             Phone, WhatsApp, address (placeholder), map
```

Every page carries the same conversion surface: header Call/WhatsApp icons +
"Plan a Trip", a closing CTA band, footer contact block, and — on mobile — a
persistent Call / WhatsApp / Book bar.

## 3. Design system

**Palette** (`tailwind.config.ts`)
- `ocean` — deep ocean blue, primary (900 `#0f2029` → 50 `#eef3f6`)
- `pearl` — warm off-white base (`#FAF6EF`)
- `sand` — natural beige secondary
- `palm` — muted green accent (WhatsApp CTAs, checkmarks)
- `gold` — warm gold, used sparingly (eyebrows, active tab text, dividers)

**Type** (`app/layout.tsx`)
- Display/headings: Fraunces (serif, editorial)
- Body/UI: Manrope (humanist sans)

**Glass usage** — restrained, functional only: sticky nav (`.glass`), mobile
CTA bar and destination-card overlays (`.glass-dark`), trip planner form
panel. Never applied as a full-page effect.

**Motion** — `components/ui/Reveal.tsx` wraps Framer Motion's `whileInView`
for scroll reveals (24px rise + fade, 0.7s, custom ease); the hero uses a
staggered entrance plus a slow background scale-in. No bounce, no
attention-grabbing motion.

**Photography** — see `lib/images.ts`. Only generic, non-landmark coastal
mood photography (waves, palms, sunrise/sunset) is used, and only for
atmosphere. No stock photo stands in for a specific real place, temple, or
vehicle — see §5.

## 4. Component inventory (`src/components`)

| Component | Role |
|---|---|
| `Nav` | Sticky glass header, desktop links + mobile drawer |
| `MobileStickyCTA` | Fixed Call / WhatsApp / Book bar, mobile only |
| `Hero` | Full-bleed animated hero, home page |
| `PageHero` | Shared banner header for all interior pages |
| `TrustStrip` | 4-point trust reel (24×7, local, 2 vehicles, 1 contact) |
| `ServicesList` | Editorial numbered list (not a card grid, by design) |
| `DestinationCard` / `DestinationsExplorer` | Tag-themed destination plates + client-side filter |
| `VehicleCard` | Dzire / Ertiga comparison card |
| `TripPlannerForm` | Full enquiry form → formatted WhatsApp message |
| `CTASection` | Reusable closing conversion band |
| `Footer` | Sitemap + contact recap |
| `ui/*` | Button, Container, SectionHeading, Icons (hand-drawn, no icon library), Reveal |

## 5. Explicit placeholders — not yet provided

These are marked `TODO(client)` in `src/lib/site-config.ts` and documented in
`src/lib/images.ts`. Nothing below has been fabricated as if real:

- Exact office/pickup **address** (currently just "Udupi, Karnataka, India")
- Business **email**
- **Domain name**
- **Logo** (currently wordmark-only, typeset)
- **Real photos** of the actual Swift Dzire and Ertiga
- **Real or licensed photos** of specific destinations (temples, beaches) —
  destination cards use a designed typographic/texture plate instead, see
  `components/DestinationCard.tsx` comment header
- **Testimonials** — none exist on the site; none invented
- Google Business Profile link, social links
- GSTIN / tourist vehicle permit number, if you want either displayed

Send any of these and I'll wire them in directly — real photos replace the
mood images in `lib/images.ts`, the address replaces the placeholder in
`site-config.ts` and updates the Contact map + LocalBusiness schema.
