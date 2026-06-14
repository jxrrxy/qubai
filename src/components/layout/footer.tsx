"use client";

import { useTranslations } from "@/lib/i18n/i18n-context";

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export function Footer() {
  const t = useTranslations();

  const footerLinkGroups = [
    {
      titleKey: "footer.services" as const,
      links: [
        { labelKey: "footer.link.web-design" as const, href: "#services" },
        { labelKey: "footer.link.development" as const, href: "#services" },
        { labelKey: "footer.link.uiux" as const, href: "#services" },
        { labelKey: "footer.link.consulting" as const, href: "#services" },
      ],
    },
    {
      titleKey: "footer.company" as const,
      links: [
        { labelKey: "footer.link.about" as const, href: "#about" },
        { labelKey: "footer.link.projects" as const, href: "#projects" },
        { labelKey: "footer.link.process" as const, href: "#process" },
        { labelKey: "footer.link.contact" as const, href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-qubai-500 to-qubai-600 text-sm font-bold text-white">
                Q
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">
                qubai
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
              {t("footer.description")}
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinkGroups.map((group) => (
            <div key={group.titleKey}>
              <h4 className="mb-4 text-sm font-medium text-zinc-300">
                {t(group.titleKey)}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.labelKey}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-400"
                    >
                      {t(link.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Qubai. {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="#"
              className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
            >
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}