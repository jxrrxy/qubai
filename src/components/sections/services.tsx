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

const services = [
  {
    title: "Web Development",
    description:
      "High-performance websites and web applications built with cutting-edge technologies. React, Next.js, and Node.js at the core.",
    icon: CodeIcon,
    gradient: "from-qubai-500/20 via-qubai-500/5 to-transparent",
    accent: "text-qubai-400",
    size: "large",
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with precision. Every pixel crafted to delight users and achieve business goals.",
    icon: DesignIcon,
    gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
    accent: "text-purple-400",
    size: "small",
  },
  {
    title: "Digital Strategy",
    description:
      "Data-driven strategies that align design and technology with your business objectives for measurable results.",
    icon: StrategyIcon,
    gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
    accent: "text-amber-400",
    size: "small",
  },
  {
    title: "Performance Optimization",
    description:
      "Lightning-fast load times and silky-smooth interactions. We obsess over Core Web Vitals and performance budgets.",
    icon: PerformanceIcon,
    gradient: "from-green-500/20 via-green-500/5 to-transparent",
    accent: "text-green-400",
    size: "medium",
  },
  {
    title: "Mobile Development",
    description:
      "Responsive, native-feeling mobile experiences that work flawlessly across every device and screen size.",
    icon: MobileIcon,
    gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    accent: "text-cyan-400",
    size: "medium",
  },
  {
    title: "Analytics & Insights",
    description:
      "Comprehensive analytics setup and custom dashboards to track what matters and make informed decisions.",
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
  return (
    <Section id="services">
      <SectionHeader
        badge="What We Do"
        title={
          <span>
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-qubai-400 to-cyan-400 bg-clip-text text-transparent">
              succeed online
            </span>
          </span>
        }
        description="From concept to launch, we provide end-to-end design and development services that help brands stand out in the digital landscape."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-4 md:grid-cols-3"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
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
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}