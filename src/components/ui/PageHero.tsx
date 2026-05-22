"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="grain-overlay absolute inset-0" />

      {/* Decorative orb */}
      <div className="absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full bg-paxit-blue/10 blur-[120px]" />
      <div className="absolute -left-24 bottom-0 h-[300px] w-[300px] rounded-full bg-paxit-blue-light/6 blur-[100px]" />

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-paxit-blue/20 to-transparent" />

      {/* Decorative corner shapes */}
      <div className="absolute right-[8%] top-[25%] hidden lg:block">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" className="opacity-[0.04]">
          <circle cx="70" cy="70" r="68" stroke="white" strokeWidth="1" />
          <circle cx="70" cy="70" r="45" stroke="white" strokeWidth="1" />
          <circle cx="70" cy="70" r="22" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-[17px] leading-[1.75] text-slate-300/80">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
