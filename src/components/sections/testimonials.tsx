"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { QuoteIcon, StarIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Qubai transformed our digital presence completely. The new platform increased our conversion rate by 3× and our team absolutely loves the new design system. They're not just vendors — they're true partners.",
    author: "Emily Chen",
    role: "CEO, NovaBank",
    rating: 5,
    initials: "EC",
    color: "from-blue-500 to-purple-600",
  },
  {
    quote:
      "Working with Qubai was a game-changer for our product. They understood our vision from day one and delivered beyond expectations. The attention to detail in every interaction is remarkable.",
    author: "Marcus Johnson",
    role: "CTO, Meridian Corp",
    rating: 5,
    initials: "MJ",
    color: "from-emerald-500 to-teal-600",
  },
  {
    quote:
      "The team at Qubai brought a level of polish and sophistication to our platform that we didn't think was possible. Our users consistently praise the experience. Highly recommended for any serious digital project.",
    author: "Sarah Kim",
    role: "Product Director, Cosmos AI",
    rating: 5,
    initials: "SK",
    color: "from-orange-500 to-rose-600",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <Section>
      <SectionHeader
        badge="Testimonials"
        title={
          <span>
            Trusted by{" "}
            <span className="bg-gradient-to-r from-qubai-400 to-cyan-400 bg-clip-text text-transparent">
              industry leaders
            </span>
          </span>
        }
        description="Hear from the brands and teams we've had the privilege of working with."
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
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <StarIcon key={i} className="text-amber-400" />
                ))}
              </div>

              <blockquote className="text-lg leading-relaxed text-zinc-300 md:text-xl">
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white",
                    testimonials[active].color
                  )}
                >
                  {testimonials[active].initials}
                </div>
                <div>
                  <div className="font-medium text-white">
                    {testimonials[active].author}
                  </div>
                  <div className="text-sm text-zinc-500">
                    {testimonials[active].role}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>

        {/* Dots navigation */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === active
                  ? "w-8 bg-qubai-500"
                  : "w-2 bg-white/20 hover:bg-white/40"
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}