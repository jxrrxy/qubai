"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { QuoteIcon, StarIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/lib/i18n/i18n-context";

const testimonialKeys = [
  {
    quoteKey: "testimonials.1.quote" as const,
    authorKey: "testimonials.1.author" as const,
    roleKey: "testimonials.1.role" as const,
    initials: "AA",
    color: "from-blue-500 to-purple-600",
    rating: 5,
  },
  {
    quoteKey: "testimonials.2.quote" as const,
    authorKey: "testimonials.2.author" as const,
    roleKey: "testimonials.2.role" as const,
    initials: "SA",
    color: "from-emerald-500 to-teal-600",
    rating: 5,
  },
  {
    quoteKey: "testimonials.3.quote" as const,
    authorKey: "testimonials.3.author" as const,
    roleKey: "testimonials.3.role" as const,
    initials: "DN",
    color: "from-orange-500 to-rose-600",
    rating: 5,
  },
];

export function Testimonials() {
  const t = useTranslations();
  const [active, setActive] = useState(0);

  const current = testimonialKeys[active];

  return (
    <Section>
      <SectionHeader
        badge={t("testimonials.badge")}
        title={
          <span>
            {t("testimonials.title.prefix")}{" "}
            <span className="bg-gradient-to-r from-qubai-400 to-cyan-400 bg-clip-text text-transparent">
              {t("testimonials.title.highlight")}
            </span>
          </span>
        }
        description={t("testimonials.description")}
      />

      <div className="mx-auto max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <GlassCard className="relative p-8 md:p-12" hover={false}>
              <QuoteIcon className="absolute top-8 right-8 text-qubai-500/20 h-12 w-12" />

              <div className="mb-6 flex gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <StarIcon key={i} className="text-amber-400" />
                ))}
              </div>

              <blockquote className="text-lg leading-relaxed text-zinc-300 md:text-xl">
                &ldquo;{t(current.quoteKey)}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white",
                    current.color
                  )}
                >
                  {current.initials}
                </div>
                <div>
                  <div className="font-medium text-white">
                    {t(current.authorKey)}
                  </div>
                  <div className="text-sm text-zinc-500">
                    {t(current.roleKey)}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>

        {/* Dots navigation */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonialKeys.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === active
                  ? "w-8 bg-qubai-500"
                  : "w-2 bg-white/20 hover:bg-white/40"
              )}
              aria-label={`${t("testimonials.badge")} ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}