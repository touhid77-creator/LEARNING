import Link from "next/link";
import { clsx } from "clsx";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ocean-800 text-pearl hover:bg-ocean-700 shadow-soft",
  secondary:
    "bg-transparent text-ocean-800 border border-ocean-800/30 hover:border-ocean-800 hover:bg-ocean-800/5",
  ghost: "bg-transparent text-pearl hover:bg-pearl/10 border border-pearl/40",
  whatsapp:
    "bg-palm-700 text-pearl hover:bg-palm-900 shadow-soft",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
  external?: boolean;
}) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full font-body font-medium tracking-wide transition-all duration-300 ease-editorial whitespace-nowrap",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const isInternal = href.startsWith("/") && !external;

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {icon}
      {children}
    </a>
  );
}
