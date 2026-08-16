import { Reveal } from "@/components/ui/Reveal";

const facts = [
  "Answers the phone at 4am for a flight as readily as at 4pm.",
  "Knows the back roads into the temples, not just the highway.",
  "One Dzire, one Ertiga — maintained personally, not rotated through a fleet.",
  "You'll speak to the same person from your first message to the drop-off.",
];

export function TrustStrip() {
  return (
    <section className="border-y border-ocean-900/8 bg-sand-50">
      <div className="container-editorial grid grid-cols-1 gap-10 py-14 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:py-20">
        <Reveal>
          <p className="font-display text-2xl italic leading-snug text-ocean-900/85 md:text-[1.75rem]">
            Most trips out of Udupi still start with a phone call, not an app.
            This is that phone call.
          </p>
        </Reveal>
        <div className="divide-y divide-ocean-900/10 border-t border-ocean-900/10 md:border-t-0">
          {facts.map((fact, i) => (
            <Reveal key={fact} delay={i * 0.06}>
              <div className="flex gap-5 py-4 first:pt-0 md:py-5">
                <span className="font-display text-sm text-gold-700/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-ocean-800/75 md:text-[15px]">{fact}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
