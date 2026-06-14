"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import {
  CodeIcon,
  DesignIcon,
  StrategyIcon,
  PerformanceIcon,
  MobileIcon,
  AnalyticsIcon,
} from "@/components/ui/icons";
import { useTranslations } from "@/lib/i18n/i18n-context";

const serviceKeys = [
  {
    titleKey: "services.web-dev.title" as const,
    descKey: "services.web-dev.description" as const,
    icon: CodeIcon,
    gradient: "from-qubai-500/20 via-qubai-500/5 to-transparent",
    accent: "text-qubai-400",
    size: "large",
  },
  {
    titleKey: "services.uiux.title" as const,
    descKey: "services.uiux.description" as const,
    icon: DesignIcon,
    gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
    accent: "text-purple-400",
    size: "small",
  },
  {
    titleKey: "services.strategy.title" as const,
    descKey: "services.strategy.description" as const,
    icon: StrategyIcon,
    gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
    accent: "text-amber-400",
    size: "small",
  },
  {
    titleKey: "services.perf.title" as const,
    descKey: "services.perf.description" as const,
    icon: PerformanceIcon,
    gradient: "from-green-500/20 via-green-500/5 to-transparent",
    accent: "text-green-400",
    size: "medium",
  },
  {
    titleKey: "services.mobile.title" as const,
    descKey: "services.mobile.description" as const,
    icon: MobileIcon,
    gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    accent: "text-cyan-400",
    size: "medium",
  },
  {
    titleKey: "services.analytics.title" as const,
    descKey: "services.analytics.description" as const,
    icon: AnalyticsIcon,
    gradient: "from-pink-500/20 via-pink-500/5 to-transparent",
    accent: "text-pink-400",
    size: "large",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  const t = useTranslations();

  return (
    <Section id="services">
      <SectionHeader
        badge={t("services.badge")}
        title={
          <span>
            {t("services.title.prefix")}{" "}
            <span className="bg-gradient-to-r from-qubai-400 to-cyan-400 bg-clip-text text-transparent">
              {t("services.title.highlight")}
            </span>
          </span>
        }
        description={t("services.description")}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-4 md:grid-cols-3"
      >
        {serviceKeys.map((service) => (
          <motion.div
            key={service.titleKey}
            variants={item}
            className={cn(
              "group",
              service.size === "large" && "md:col-span-2",
              service.size === "medium" && "md:col-span-1"
            )}
          >
            <GlassCard className="relative h-full overflow-hidden p-8">
              {/* Gradient background */}
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  service.gradient
                )}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={cn(
                    "mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5",
                    service.accent
                  )}
                >
                  <service.icon />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {t(service.titleKey)}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {t(service.descKey)}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}