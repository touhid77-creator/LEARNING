import { clsx } from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "mb-3 block text-xs font-medium uppercase tracking-[0.2em]",
            light ? "text-sand-200" : "text-gold-700"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-balance text-3xl leading-[1.15] md:text-[2.75rem]",
          light ? "text-pearl" : "text-ocean-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-balance text-base leading-relaxed md:text-lg",
            light ? "text-pearl/80" : "text-ocean-800/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
