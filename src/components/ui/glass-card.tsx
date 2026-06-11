"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  as?: "div" | "section" | "article";
}

export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  as: Component = "div",
}: GlassCardProps) {
  const MotionComponent = motion(Component) as typeof motion.div;

  return (
    <MotionComponent
      className={cn(
        "relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl",
        hover &&
          "transition-colors duration-300 hover:bg-white/[0.05] hover:border-white/[0.12]",
        glow && "shadow-lg shadow-qubai-500/5",
        className
      )}
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {glow && (
        <div
          className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(108,92,231,0.1), rgba(6,182,212,0.05))",
          }}
        />
      )}
      {children}
    </MotionComponent>
  );
}