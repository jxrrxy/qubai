"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/ui/icons";

const WHATSAPP_NUMBER = "77023707723";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.5,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-shadow duration-300 hover:shadow-xl hover:shadow-[#25D366]/40 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </motion.a>
  );
}