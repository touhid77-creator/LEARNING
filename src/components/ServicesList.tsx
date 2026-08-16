import { services } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function ServicesList({ compact = false }: { compact?: boolean }) {
  const list = compact ? services.slice(0, 6) : services;

  return (
    <div className="divide-y divide-ocean-900/10 border-t border-ocean-900/10">
      {list.map((service, i) => (
        <Reveal key={service.slug} delay={(i % 6) * 0.05}>
          <a
            href={buildWhatsAppLink(
              `Hello Thonse Tours and Travels, I'd like to enquire about ${service.name}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 py-6 transition-colors hover:bg-ocean-900/[0.02] md:py-7"
          >
            <span className="w-8 shrink-0 font-display text-sm text-gold-700/70 md:w-12 md:text-base">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <h3 className="text-lg text-ocean-900 md:text-xl">{service.name}</h3>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ocean-800/65 md:text-[15px]">
                {service.description}
              </p>
            </div>
            <ArrowRightIcon className="hidden h-5 w-5 shrink-0 -translate-x-1 text-ocean-800/40 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block" />
          </a>
        </Reveal>
      ))}
    </div>
  );
}
