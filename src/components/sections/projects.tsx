"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalIcon, ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { useInView } from "@/lib/use-in-view";
import { useTranslations } from "@/lib/i18n/i18n-context";

const projects = [
  {
    title: "NovaBank",
    subtitle: "Digital Banking Platform",
    description:
      "A next-generation banking experience with real-time analytics, AI-powered insights, and a seamless mobile-first interface. Built for speed, security, and scale.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    gradient: "from-blue-600/20 via-purple-600/10 to-transparent",
    image: null,
    color: "from-blue-500 to-purple-600",
    metrics: ["4.9× faster load times", "40% increase in engagement", "99.99% uptime"],
  },
  {
    title: "Meridian",
    subtitle: "Design System & Component Library",
    description:
      "A comprehensive design system powering 12 products across an enterprise. Over 200 components with full accessibility support and theming capabilities.",
    tags: ["React", "Storybook", "Figma", "Accessibility"],
    gradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
    image: null,
    color: "from-emerald-500 to-teal-600",
    metrics: ["200+ components", "3× faster development", "100% WCAG 2.1 AA"],
  },
  {
    title: "Cosmos AI",
    subtitle: "SaaS Analytics Platform",
    description:
      "An AI-powered analytics platform that transforms complex data into actionable insights. Real-time dashboards, predictive modeling, and collaborative features.",
    tags: ["Python", "React", "D3.js", "TensorFlow"],
    gradient: "from-orange-600/20 via-rose-600/10 to-transparent",
    image: null,
    color: "from-orange-500 to-rose-600",
    metrics: ["10M+ data points/day", "85% reduction in reporting time", "500+ enterprise users"],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const t = useTranslations();
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
    >
      <GlassCard
        className={cn(
          "overflow-hidden",
          index % 2 === 1 && "md:flex-row-reverse"
        )}
        hover={false}
      >
        <div className="grid md:grid-cols-2">
          {/* Mockup area */}
          <div
            className={cn(
              "relative flex min-h-[300px] items-center justify-center overflow-hidden bg-gradient-to-br p-8 md:min-h-[400px]",
              project.gradient
            )}
          >
            <div className="relative">
              {/* Browser mockup */}
              <div className="mx-auto w-full max-w-sm rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm shadow-2xl">
                {/* Browser bar */}
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="ml-3 h-5 flex-1 rounded-md bg-white/5 px-3 text-xs leading-5 text-zinc-500">
                    {project.title.toLowerCase()}.com
                  </div>
                </div>
                {/* Mockup content */}
                <div className="space-y-3 p-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "h-8 w-8 rounded-lg bg-gradient-to-br",
                        project.color
                      )}
                    />
                    <div>
                      <div className="h-3 w-24 rounded bg-white/10" />
                      <div className="mt-1 h-2 w-16 rounded bg-white/5" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded bg-white/10" />
                    <div className="h-2 w-5/6 rounded bg-white/5" />
                    <div className="h-2 w-4/6 rounded bg-white/5" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="h-16 rounded-lg bg-white/5"
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 flex-1 rounded-lg bg-qubai-600/30" />
                    <div className="h-8 flex-1 rounded-lg bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            <Badge variant="default" className="mb-4">
              {t("projects.featured")}
            </Badge>
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-qubai-400">
              {project.subtitle}
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              {project.description}
            </p>

            {/* Metrics */}
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/[0.06] pt-6">
              {project.metrics.map((metric) => (
                <div key={metric}>
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    <span className="text-xs text-zinc-500">{t("projects.impact")}</span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">{metric}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <Button variant="ghost" size="sm" className="group">
                {t("projects.case-study")}
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function Projects() {
  const t = useTranslations();

  return (
    <Section id="projects">
      <SectionHeader
        badge={t("projects.badge")}
        title={
          <span>
            {t("projects.title.prefix")}{" "}
            <span className="bg-gradient-to-r from-qubai-400 to-cyan-400 bg-clip-text text-transparent">
              {t("projects.title.highlight")}
            </span>
          </span>
        }
        description={t("projects.description")}
      />

      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Button variant="outline" size="lg">
          {t("projects.view-all")}
          <ExternalIcon />
        </Button>
      </motion.div>
    </Section>
  );
}