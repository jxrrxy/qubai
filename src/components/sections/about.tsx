"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { useInView } from "@/lib/use-in-view";

const values = [
  {
    title: "Craft over speed",
    description: "We believe in taking the time to get it right.",
  },
  {
    title: "User-first mindset",
    description: "Every decision starts with the end-user experience.",
  },
  {
    title: "Radical transparency",
    description: "Open communication, clear expectations, no surprises.",
  },
  {
    title: "Continuous learning",
    description: "The digital landscape evolves; so do we.",
  },
];

const team = [
  { initials: "AK", name: "Akira Kuroda", role: "Creative Director", color: "from-qubai-500 to-purple-600" },
  { initials: "SM", name: "Sasha Moreno", role: "Lead Developer", color: "from-purple-500 to-pink-600" },
  { initials: "JL", name: "Jamie Liu", role: "UX Designer", color: "from-pink-500 to-orange-600" },
  { initials: "RT", name: "Ryan Torres", role: "Full-Stack Engineer", color: "from-orange-500 to-cyan-600" },
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
  return (
    <Section id="about">
      {/* About intro */}
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <Badge variant="gradient" className="mb-4">
            About Us
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            We are a{" "}
            <span className="bg-gradient-to-r from-qubai-400 to-cyan-400 bg-clip-text text-transparent">
              digital craft studio
            </span>
          </h2>
        </div>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-zinc-400">
            Founded in 2019, Qubai brings together designers and engineers who
            are passionate about creating exceptional digital experiences. We
            partner with brands — from startups to enterprises — to build
            products that users love.
          </p>
          <p className="leading-relaxed text-zinc-500">
            Our team of 12 combines deep expertise in design, engineering, and
            strategy. We don&apos;t just build websites — we build digital
            ecosystems that drive real business results.
          </p>
          <Button variant="ghost" size="sm" className="group" href="#contact">
            Start a conversation
            <ArrowRightIcon />
          </Button>
        </div>
      </div>

      {/* Stats grid */}
      <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] md:grid-cols-4">
        {[
          { end: 50, suffix: "+", label: "Projects" },
          { end: 30, suffix: "+", label: "Clients" },
          { end: 6, suffix: "+", label: "Years" },
          { end: 12, label: "Team Members" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-background p-6 md:p-8"
          >
            <AnimatedNumber end={stat.end} suffix={stat.suffix!} label={stat.label} />
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="mt-16">
        <h3 className="mb-8 text-center text-lg font-medium text-white">
          What we believe in
        </h3>
        <div className="grid gap-4 md:grid-cols-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
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
                  {value.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                  {value.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mt-16">
        <h3 className="mb-8 text-center text-lg font-medium text-white">
          Meet the team
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
                <p className="mt-0.5 text-xs text-zinc-500">{member.role}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}