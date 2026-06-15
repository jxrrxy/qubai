"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";
import { useI18n } from "@/lib/i18n/i18n-context";

const navLinkKeys = [
  { key: "header.nav.services" as const, href: "#services" },
  { key: "header.nav.projects" as const, href: "#projects" },
  { key: "header.nav.process" as const, href: "#process" },
  { key: "header.nav.about" as const, href: "#about" },
  { key: "header.nav.contact" as const, href: "#contact" },
];

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleLocale = () => {
    setLocale(locale === "en" ? "ru" : "en");
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-in-out",
        scrolled ? "top-4 px-4" : "top-0 px-0"
      )}
    >
      <motion.div
        layout
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex items-center justify-between transition-all duration-700 ease-in-out",
          "w-full",
          scrolled
            ? "max-w-7xl rounded-full bg-black/80 backdrop-xl border border-white/[0.08] shadow-lg shadow-black/20 px-6 md:px-8"
            : "max-w-full rounded-none bg-black/80 backdrop-blur-xl border-b border-white/[0.06] px-6 md:px-16"
        )}
      >
        {/* Logo */}
        <a href="#" className="relative z-10 flex items-center gap-4 py-3 md:py-0">
          <motion.div layout transition={{ duration: 0.4 }}>
            <Image
              src="/qubai2.png"
              alt="Qubai"
              width={scrolled ? 44 : 52}
              height={scrolled ? 44 : 52}
              className={cn(
                "object-cover transition-all duration-500",
                scrolled ? "h-11 w-11 rounded-xl" : "h-[52px] w-[52px] rounded-2xl"
              )}
            />
          </motion.div>
          <motion.span
            layout
            transition={{ duration: 0.4 }}
            className={cn(
              "font-bold tracking-tight text-white transition-all duration-500",
              scrolled ? "text-xl" : "text-2xl"
            )}
          >
            QubAI
          </motion.span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {navLinkKeys.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-white hover:bg-white/5",
                scrolled
                  ? "rounded-full px-4 py-2 text-base text-zinc-400"
                  : "rounded-lg px-4 py-2.5 text-base text-zinc-400"
              )}
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        {/* Desktop right: lang toggle + CTA */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Language toggle */}
          <button
            onClick={toggleLocale}
            className={cn(
              "flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
              "text-zinc-400 border-white/10 hover:text-white hover:border-white/20"
            )}
            aria-label="Toggle language"
          >
            <span
              className={cn(
                "transition-opacity",
                locale === "en" ? "text-white" : "text-zinc-600"
              )}
            >
              EN
            </span>
            <span className="text-zinc-600">/</span>
            <span
              className={cn(
                "transition-opacity",
                locale === "ru" ? "text-white" : "text-zinc-600"
              )}
            >
              RU
            </span>
          </button>

          <motion.div layout transition={{ duration: 0.4 }}>
            <Button variant="primary" size="md" href="#contact">
              {t("header.cta")}
            </Button>
          </motion.div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 hover:text-white hover:bg-white/5 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-0 bg-black/95 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col items-center justify-center gap-6 h-full">
              {navLinkKeys.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-2xl font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  {t(link.key)}
                </motion.a>
              ))}

              {/* Mobile language toggle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex items-center gap-3"
              >
                <button
                  onClick={() => {
                    setLocale("en");
                    setMobileOpen(false);
                  }}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    locale === "en"
                      ? "bg-white/10 text-white border-white/20"
                      : "text-zinc-500 border-white/10 hover:text-white hover:border-white/20"
                  )}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    setLocale("ru");
                    setMobileOpen(false);
                  }}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    locale === "ru"
                      ? "bg-white/10 text-white border-white/20"
                      : "text-zinc-500 border-white/10 hover:text-white hover:border-white/20"
                  )}
                >
                  RU
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <Button variant="primary" size="lg" href="#contact">
                  {t("header.cta")}
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}