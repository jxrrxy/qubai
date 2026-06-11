"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import { useInView } from "@/lib/use-in-view";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your brand, goals, and audience. Through collaborative workshops and research, we uncover insights that shape the project direction.",
    details: [
      "Brand & audience analysis",
      "Competitive research",
      "Goal definition",
      "Technical audit",
    ],
    gradient: "from-qubai-500 to-purple-600",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We craft pixel-perfect designs that balance beauty with usability. Iterative prototyping ensures every interaction feels intentional.",
    details: [
      "Wireframing & prototyping",
      "Visual design system",
      "Interaction design",
      "User testing",
    ],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our engineers bring designs to life with clean, performant code. We follow best practices for accessibility, SEO, and scalability.",
    details: [
      "Agile development",
      "Quality assurance",
      "Performance optimization",
      "Accessibility compliance",
    ],
    gradient: "from-pink-500 to-orange-600",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "We deploy, monitor, and optimize. Our partnership doesn't end at launch — we help you measure success and plan the next phase.",
    details: [
      "Deployment & CI/CD",
      "Analytics setup",
      "Performance monitoring",
      "Ongoing optimization",
    ],
    gradient: "from-orange-500 to-cyan-600",
  },
];

function ProcessStep({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="relative flex gap-8 md:gap-12"
    >
      {/* Timeline line & number */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white shadow-lg",
            step.gradient
          )}
        >
          {step.number}
        </div>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-white/10 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="pb-16 md:pb-20">
        {!isLast && (
          <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent hidden md:block" />
        )}
        <GlassCard className="p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-white md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-400">
                {step.description}
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-500">
                Key Activities
              </h4>
              <ul className="space-y-2">
                {step.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-center gap-2 text-sm text-zinc-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-qubai-500" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
}

export function Process() {
  return (
    <Section id="process">
      <SectionHeader
        badge="How We Work"
        title={
          <span>
            A proven{" "}
            <span className="bg-gradient-to-r from-qubai-400 to-cyan-400 bg-clip-text text-transparent">
              process
            </span>{" "}
            that delivers
          </span>
        }
        description="Our streamlined workflow ensures transparency, collaboration, and exceptional results at every stage."
      />

      <div className="mx-auto max-w-3xl">
        {steps.map((step, index) => (
          <ProcessStep
            key={step.number}
            step={step}
            index={index}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}