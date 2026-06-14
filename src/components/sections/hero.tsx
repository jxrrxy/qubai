"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { ArrowRightIcon, PlayIcon } from "@/components/ui/icons";
import { useTranslations } from "@/lib/i18n/i18n-context";

export function Hero() {
  const t = useTranslations();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background canvas */}
      <AnimatedBackground />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-qubai-600/20 blur-[120px]" />
        <div className="absolute -bottom-1/2 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          {t("hero.title.prefix")}{" "}
          <span className="bg-gradient-to-r from-qubai-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
            {t("hero.title.highlight")}
          </span>
          <br />
          {t("hero.title.suffix")}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl"
        >
          {t("hero.description")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button variant="primary" size="lg" href="#contact">
            {t("hero.cta.primary")}
            <ArrowRightIcon />
          </Button>
          <Button variant="secondary" size="lg" href="#projects">
            <PlayIcon />
            {t("hero.cta.secondary")}
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: "50+", labelKey: "hero.stat.projects" as const },
            { value: "30+", labelKey: "hero.stat.clients" as const },
            { value: "6+", labelKey: "hero.stat.experience" as const },
            { value: "99%", labelKey: "hero.stat.satisfaction" as const },
          ].map((stat) => (
            <div key={stat.labelKey} className="text-center">
              <div className="text-2xl font-bold text-white md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-zinc-600 md:text-sm">
                {t(stat.labelKey)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-zinc-600">{t("hero.scroll")}</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-zinc-600 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}