"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import { useInView } from "@/lib/use-in-view";
import { useTranslations } from "@/lib/i18n/i18n-context";

const stepKeys = [
  {
    number: "01",
    titleKey: "process.discovery.title" as const,
    descKey: "process.discovery.description" as const,
    detailsKeys: [
      "process.discovery.detail-1" as const,
      "process.discovery.detail-2" as const,
      "process.discovery.detail-3" as const,
      "process.discovery.detail-4" as const,
    ],
    gradient: "from-qubai-500 to-purple-600",
  },
  {
    number: "02",
    titleKey: "process.design.title" as const,
    descKey: "process.design.description" as const,
    detailsKeys: [
      "process.design.detail-1" as const,
      "process.design.detail-2" as const,
      "process.design.detail-3" as const,
      "process.design.detail-4" as const,
    ],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    number: "03",
    titleKey: "process.build.title" as const,
    descKey: "process.build.description" as const,
    detailsKeys: [
      "process.build.detail-1" as const,
      "process.build.detail-2" as const,
      "process.build.detail-3" as const,
      "process.build.detail-4" as const,
    ],
    gradient: "from-pink-500 to-orange-600",
  },
  {
    number: "04",
    titleKey: "process.launch.title" as const,
    descKey: "process.launch.description" as const,
    detailsKeys: [
      "process.launch.detail-1" as const,
      "process.launch.detail-2" as const,
      "process.launch.detail-3" as const,
      "process.launch.detail-4" as const,
    ],
    gradient: "from-orange-500 to-cyan-600",
  },
];

function ProcessStep({
  step,
  index,
  isLast,
}: {
  step: (typeof stepKeys)[0];
  index: number;
  isLast: boolean;
}) {
  const t = useTranslations();
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
                {t(step.titleKey)}
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-400">
                {t(step.descKey)}
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-500">
                {t("process.key-activities")}
              </h4>
              <ul className="space-y-2">
                {step.detailsKeys.map((detailKey) => (
                  <li
                    key={detailKey}
                    className="flex items-center gap-2 text-sm text-zinc-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-qubai-500" />
                    {t(detailKey)}
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
  const t = useTranslations();

  return (
    <Section id="process">
      <SectionHeader
        badge={t("process.badge")}
        title={
          <span>
            {t("process.title.prefix")}{" "}
            <span className="bg-gradient-to-r from-qubai-400 to-cyan-400 bg-clip-text text-transparent">
              {t("process.title.highlight")}
            </span>{" "}
            {t("process.title.suffix")}
          </span>
        }
        description={t("process.description")}
      />

      <div className="mx-auto max-w-3xl">
        {stepKeys.map((step, index) => (
          <ProcessStep
            key={step.number}
            step={step}
            index={index}
            isLast={index === stepKeys.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}