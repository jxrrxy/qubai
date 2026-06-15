"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  icon,
  children,
  ...props
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-qubai-500/50";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary:
      "bg-qubai-600 text-white hover:bg-qubai-500 shadow-lg shadow-qubai-600/25 hover:shadow-qubai-500/40 active:scale-[0.98]",
    secondary:
      "bg-white/10 text-white hover:bg-white/15 backdrop-blur-sm border border-white/10 hover:border-white/20 active:scale-[0.98]",
    ghost:
      "text-zinc-400 hover:text-white hover:bg-white/5 active:scale-[0.98]",
    outline:
      "border border-white/10 text-white hover:bg-white/5 hover:border-white/20 active:scale-[0.98]",
  };

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={cn(
          base,
          sizes[size],
          variants[variant],
          "group",
          className
        )}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={cn(base, sizes[size], variants[variant], "group", className)}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {content}
    </motion.button>
  );
}