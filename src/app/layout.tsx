import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { I18nProvider } from "@/lib/i18n/i18n-context";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qubai — Digital Design & Development Studio",
  description:
    "Qubai is a design and development studio specializing in creating stunning websites, powerful web applications, and unforgettable digital experiences.",
  keywords: [
    "web design",
    "web development",
    "UI/UX design",
    "digital agency",
    "Next.js",
    "React",
    "Qubai",
  ],
  openGraph: {
    title: "Qubai — Digital Design & Development Studio",
    description:
      "We craft digital excellence for modern brands. Design and development studio specializing in web applications and digital experiences.",
    type: "website",
    siteName: "Qubai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qubai — Digital Design & Development Studio",
    description:
      "We craft digital excellence for modern brands. Design and development studio specializing in web applications and digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/qubai2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-black text-white antialiased">
        <I18nProvider>
          {children}
          <WhatsAppButton />
        </I18nProvider>
      </body>
    </html>
  );
}