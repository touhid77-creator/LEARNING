import { ArrowRightIcon } from "@/components/ui/Icons";

// Process/logistics questions only — nothing here states a price, a
// response-time guarantee, or any other fact that hasn't been confirmed.
const faqs = [
  {
    q: "Do you have fixed prices listed online?",
    a: "No — fares aren't published on the site. Tell us your route and travel plan and we'll confirm a price before you travel, so there are no surprises.",
  },
  {
    q: "Which vehicle should I choose — Swift Dzire or Ertiga?",
    a: "If you're not sure, just tell us your group size and the kind of trip you're planning. We'll recommend the right one when we confirm your booking.",
  },
  {
    q: "Can I book a round trip or a multi-day tour?",
    a: "Yes. Choose \"Round Trip\" or \"Custom Tour\" above and describe your plan in the notes — we'll work out the route and timing with you directly.",
  },
  {
    q: "What if my flight is delayed?",
    a: "Share your flight number when you book an airport transfer. We track it and plan the pickup around your actual landing time, not a fixed slot.",
  },
  {
    q: "Do you only cover Udupi, or further as well?",
    a: "Both — everything from short local trips to longer journeys toward coastal Karnataka and the Western Ghats. See the Destinations page for the full list.",
  },
];

export function FAQ() {
  return (
    <div className="divide-y divide-ocean-900/10 border-t border-ocean-900/10">
      {faqs.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
            <span className="text-base text-ocean-900 md:text-lg">{item.q}</span>
            <ArrowRightIcon className="h-4 w-4 shrink-0 text-ocean-800/40 transition-transform duration-300 group-open:rotate-90" />
          </summary>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ocean-800/65 md:text-[15px]">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
