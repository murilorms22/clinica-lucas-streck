import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "gold" | "gold-outline" | "surface" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export function buttonClasses({
  variant = "gold",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-sans font-semibold tracking-tight transition-all duration-200 select-none active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50",
    variant === "gold" &&
      "bg-gold text-[#0A0A0B] shadow-[0_8px_24px_-8px_rgba(217,164,65,0.55)] hover:bg-gold-hover",
    variant === "gold-outline" &&
      "border border-gold/65 bg-gold/8 text-gold hover:border-gold hover:bg-gold/16",
    variant === "surface" &&
      "border border-ink/14 bg-surface-2 text-ink hover:border-ink/28 hover:bg-surface-2/85",
    variant === "ghost" &&
      "text-muted hover:bg-ink/6 hover:text-ink",
    size === "sm" && "min-h-10 px-3.5 py-2 text-xs sm:text-sm",
    size === "md" && "min-h-11 px-5 py-2.5 text-sm",
    size === "lg" && "min-h-13 px-6 py-3.5 text-base",
    className
  );
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "gold", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonClasses({ variant, size, className })}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

