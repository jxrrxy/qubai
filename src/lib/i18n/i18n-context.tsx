"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { en, ru, type Locale } from "./translations";

type TranslationMap = typeof en;

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof TranslationMap) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "qubai-locale";

function getInitialLocale(): Locale {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ru") return stored;
  }
  // Default to English
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    setLocaleState(getInitialLocale());
    setMounted(true);
  }, []);

  // Persist to localStorage
  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
    // Update <html lang> attribute
    document.documentElement.lang = next;
  }, []);

  // Sync <html lang> on mount
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback(
    (key: keyof TranslationMap): string => {
      const dict = locale === "ru" ? ru : en;
      return dict[key] ?? key;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}

/**
 * Shorthand: returns the `t` function directly.
 * Usage: const t = useTranslations(); then t("hero.title.prefix")
 */
export function useTranslations() {
  return useI18n().t;
}