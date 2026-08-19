import { clsx } from "clsx";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={clsx("container-editorial", className)}>{children}</div>;
}
