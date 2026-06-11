"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useInView } from "@/lib/use-in-view";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export function Section({
  children,
  className,
  id,
  containerClassName,
}: SectionProps) {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={cn("relative py-24 md:py-32", className)}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={cn("mx-auto max-w-7xl px-6 md:px-12", containerClassName)}>
        {children}
      </div>
    </motion.section>
  );
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
  align = "center",
}: {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  align?: "center" | "left";
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "mb-16 md:mb-20 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      {badge && (
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-qubai-500/20 bg-qubai-500/10 px-3 py-1 text-xs font-medium tracking-wide text-qubai-400 uppercase">
          {badge}
        </span>
      )}
      {typeof title === "string" ? (
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h2>
      ) : (
        title
      )}
      {description && (
        <p className="mt-4 text-lg text-zinc-400 md:text-xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}