import { Reveal } from "@/components/ui/Reveal";

export function Statement() {
  return (
    <section className="relative overflow-hidden bg-pearl py-28 md:py-36">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-16 select-none font-display text-[22rem] leading-none text-ocean-900/[0.04] md:text-[30rem]"
      >
        2
      </span>
      <div className="container-editorial relative">
        <Reveal>
          <p className="max-w-2xl text-balance font-display text-3xl leading-[1.25] text-ocean-900 md:text-4xl">
            Most taxi numbers in Udupi put you through to whoever&apos;s free.
            Ours doesn&apos;t, because there&apos;s only two cars and one person
            answering the phone.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
