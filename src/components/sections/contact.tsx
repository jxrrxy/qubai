"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { useInView } from "@/lib/use-in-view";
import {
  MailIcon,
  MapPinIcon,
  SendIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-zinc-400"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-qubai-500/50 focus:outline-none focus:ring-1 focus:ring-qubai-500/30"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-zinc-400"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-qubai-500/50 focus:outline-none focus:ring-1 focus:ring-qubai-500/30"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="company"
          className="mb-2 block text-sm font-medium text-zinc-400"
        >
          Company
        </label>
        <input
          id="company"
          type="text"
          value={formState.company}
          onChange={(e) =>
            setFormState({ ...formState, company: e.target.value })
          }
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-qubai-500/50 focus:outline-none focus:ring-1 focus:ring-qubai-500/30"
          placeholder="Your company (optional)"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-zinc-400"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formState.message}
          onChange={(e) =>
            setFormState({ ...formState, message: e.target.value })
          }
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-qubai-500/50 focus:outline-none focus:ring-1 focus:ring-qubai-500/30"
          placeholder="Tell us about your project..."
        />
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full">
        {submitted ? "Message Sent! ✓" : "Send Message"}
        <SendIcon />
      </Button>
    </form>
  );
}

export function Contact() {
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
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-qubai-400 to-cyan-400 bg-clip-text text-transparent">
                extraordinary
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
              Ready to take your digital presence to the next level? Tell us
              about your project and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="primary" size="lg" href="#contact-form">
                Start Your Project
                <ArrowRightIcon />
              </Button>
              <Button variant="secondary" size="lg" href="mailto:hello@qubai.design">
                <MailIcon />
                hello@qubai.design
              </Button>
            </div>
          </div>
        </div>

        {/* Form + Info */}
        <div id="contact-form" className="grid gap-8 md:grid-cols-5">
          <GlassCard className="p-8 md:col-span-3" hover={false}>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Send us a message
            </h3>
            <ContactForm />
          </GlassCard>

          <div className="space-y-4 md:col-span-2">
            <GlassCard className="p-6" hover={false}>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-qubai-500/20 text-qubai-400">
                  <MailIcon />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Email</h4>
                  <p className="mt-1 text-sm text-zinc-500">
                    hello@qubai.design
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6" hover={false}>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                  <MapPinIcon />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Location</h4>
                  <p className="mt-1 text-sm text-zinc-500">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6" hover={false}>
              <h4 className="text-sm font-medium text-white">
                Follow us
              </h4>
              <div className="mt-4 flex gap-3">
                {["Twitter", "GitHub", "Dribbble", "LinkedIn"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
                    >
                      {social}
                    </a>
                  )
                )}
              </div>
            </GlassCard>

            <GlassCard className="overflow-hidden p-0" hover={false}>
              <div className="bg-gradient-to-r from-qubai-600 to-cyan-600 p-6 text-center">
                <p className="text-sm font-medium text-white">
                  Available for new projects
                </p>
                <p className="mt-1 text-xs text-white/70">
                  Typically respond within 24 hours
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}