"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { useInView } from "@/lib/use-in-view";
import { useTranslations } from "@/lib/i18n/i18n-context";

const valueKeys = [
  {
    titleKey: "about.value-1.title" as const,
    descKey: "about.value-1.description" as const,
  },
  {
    titleKey: "about.value-2.title" as const,
    descKey: "about.value-2.description" as const,
  },
  {
    titleKey: "about.value-3.title" as const,
    descKey: "about.value-3.description" as const,
  },
  {
    titleKey: "about.value-4.title" as const,
    descKey: "about.value-4.description" as const,
  },
];

const team = [
  { initials: "AK", name: "Akira Kuroda", roleKey: "about.team.role-1" as const, color: "from-qubai-500 to-purple-600" },
  { initials: "SM", name: "Sasha Moreno", roleKey: "about.team.role-2" as const, color: "from-purple-500 to-pink-600" },
  { initials: "JL", name: "Jamie Liu", roleKey: "about.team.role-3" as const, color: "from-pink-500 to-orange-600" },
  { initials: "RT", name: "Ryan Torres", roleKey: "about.team.role-4" as const, color: "from-orange-500 to-cyan-600" },
];

function AnimatedNumber({
  end,
  suffix = "",
  label,
}: {
  end: number;
  suffix?: string;
  label: string;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.5 });
  const display = isInView ? end : 0;

  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="text-3xl font-bold text-white md:text-4xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        {display}
        {suffix}
      </motion.div>
      <div className="mt-1 text-sm text-zinc-500">{label}</div>
    </div>
  );
}

export function About() {
  const t = useTranslations();

  return (
    <Section id="about">
      {/* About intro */}
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <Badge variant="gradient" className="mb-4">
            {t("about.badge")}
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            {t("about.title.prefix")}{" "}
            <span className="bg-gradient-to-r from-qubai-400 to-cyan-400 bg-clip-text text-transparent">
              {t("about.title.highlight")}
            </span>
          </h2>
        </div>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-zinc-400">
            {t("about.description-1")}
          </p>
          <p className="leading-relaxed text-zinc-500">
            {t("about.description-2")}
          </p>
          <Button variant="ghost" size="sm" className="group" href="#contact">
            {t("about.cta")}
            <ArrowRightIcon />
          </Button>
        </div>
      </div>

      {/* Stats grid */}
      <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] md:grid-cols-4">
        {[
          { end: 50, suffix: "+", labelKey: "about.stat.projects" as const },
          { end: 30, suffix: "+", labelKey: "about.stat.clients" as const },
          { end: 6, suffix: "+", labelKey: "about.stat.years" as const },
          { end: 12, labelKey: "about.stat.team" as const },
        ].map((stat) => (
          <div
            key={stat.labelKey}
            className="bg-background p-6 md:p-8"
          >
            <AnimatedNumber end={stat.end} suffix={stat.suffix ?? ""} label={t(stat.labelKey)} />
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="mt-16">
        <h3 className="mb-8 text-center text-lg font-medium text-white">
          {t("about.values-title")}
        </h3>
        <div className="grid gap-4 md:grid-cols-4">
          {valueKeys.map((value, i) => (
            <motion.div
              key={value.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <GlassCard className="p-6 text-center">
                <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-qubai-500/20">
                  <CheckIcon className="text-qubai-400" />
                </div>
                <h4 className="text-sm font-medium text-white">
                  {t(value.titleKey)}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                  {t(value.descKey)}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mt-16">
        <h3 className="mb-8 text-center text-lg font-medium text-white">
          {t("about.team-title")}
        </h3>
        <div className="grid gap-4 md:grid-cols-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <GlassCard className="p-6 text-center">
                <div
                  className={cn(
                    "mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br text-lg font-bold text-white",
                    member.color
                  )}
                >
                  {member.initials}
                </div>
                <h4 className="text-sm font-medium text-white">
                  {member.name}
                </h4>
                <p className="mt-0.5 text-xs text-zinc-500">{t(member.roleKey)}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}