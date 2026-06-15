"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { useInView } from "@/lib/use-in-view";
import {
  MailIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";
import { useTranslations } from "@/lib/i18n/i18n-context";

export function Contact() {
  const t = useTranslations();
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <Section id="contact" className="relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-qubai-600/10 blur-[120px]" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        {/* CTA Banner */}
        <div className="mb-16 overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-qubai-600/20 via-purple-600/10 to-cyan-600/10 p-8 md:p-16">
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              {t("contact.cta.title.prefix")}{" "}
              <span className="bg-gradient-to-r from-qubai-400 to-cyan-400 bg-clip-text text-transparent">
                {t("contact.cta.title.highlight")}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
              {t("contact.cta.description")}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="primary" size="lg" href="https://wa.me/77023707723" target="_blank" rel="noopener noreferrer">
                {t("contact.cta.button")}
                <ArrowRightIcon />
              </Button>
              <Button variant="secondary" size="lg" href="mailto:qubai.dev@outlook.com">
                <MailIcon />
                qubai.dev@outlook.com
              </Button>
            </div>
          </div>
        </div>

      </motion.div>
    </Section>
  );
}