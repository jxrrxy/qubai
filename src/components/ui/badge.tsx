"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "gradient";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-full",
        variant === "default" &&
          "bg-white/5 text-zinc-400 border border-white/10",
        variant === "outline" &&
          "border border-white/10 text-zinc-400",
        variant === "gradient" &&
          "bg-gradient-to-r from-qubai-500/10 to-cyan-500/10 text-qubai-400 border border-qubai-500/20",
        className
      )}
    >
      {children}
    </span>
  );
}