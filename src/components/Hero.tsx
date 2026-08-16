"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { moodImages } from "@/lib/images";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/ui/Icons";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ocean-950">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={moodImages.windPalmsBeach}
          alt="Palm trees on a coastal Karnataka beach, wind in the fronds"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/55 to-ocean-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/70 via-ocean-950/10 to-transparent" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-editorial relative z-10 pb-20 pt-40 md:pb-28"
      >
        <motion.span
          variants={item}
          className="mb-5 inline-block text-xs font-medium uppercase tracking-[0.3em] text-sand-200"
        >
          {siteConfig.city}, Karnataka · 24×7 Taxi &amp; Tour Service
        </motion.span>

        <motion.h1
          variants={item}
          className="max-w-3xl text-balance text-[2.6rem] leading-[1.08] text-pearl md:text-[4.2rem]"
        >
          Udupi, at your <em className="italic text-gold-300">own pace</em>.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-pearl/80 md:text-lg"
        >
          Call, WhatsApp, or fill in a few details below. Mukthar Ahmed drives most of these
          trips himself — a quick airport run, a temple tour, or a full day out toward the Ghats.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
          <Button href="/plan-a-trip" size="lg">
            Plan a Trip
          </Button>
          <Button
            href={buildWhatsAppLink(`Hello ${siteConfig.name}, I'd like to enquire about a trip.`)}
            external
            variant="whatsapp"
            size="lg"
            icon={<WhatsAppIcon className="h-4 w-4" />}
          >
            WhatsApp Now
          </Button>
        </motion.div>

        <motion.p variants={item} className="mt-8 text-xs uppercase tracking-[0.2em] text-pearl/50">
          Udupi · Manipal · Malpe · Mangaluru Airport (IXE) · Coastal Karnataka
        </motion.p>
      </motion.div>
    </section>
  );
}
