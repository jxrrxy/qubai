"use client";


const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Web Design", href: "#services" },
      { label: "Development", href: "#services" },
      { label: "UI/UX Design", href: "#services" },
      { label: "Consulting", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Footer() {
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
              We craft modern digital experiences that blend stunning design with
              powerful engineering. Based in San Francisco, serving clients
              worldwide.
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
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-medium text-zinc-300">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-400"
                    >
                      {link.label}
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
            &copy; {new Date().getFullYear()} Qubai. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}