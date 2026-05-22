"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-navy">
      {/* ── Layered backgrounds ── */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="grain-overlay absolute inset-0" />

      {/* ── Animated orbs ── */}
      <div className="animate-glow absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-paxit-blue/20 blur-[160px]" />
      <div className="animate-glow absolute top-[40%] right-[5%] h-[450px] w-[450px] rounded-full bg-paxit-blue-light/12 blur-[130px]" style={{ animationDelay: "2s" }} />
      <div className="animate-glow absolute bottom-[10%] left-[40%] h-[350px] w-[350px] rounded-full bg-[#4F46E5]/8 blur-[120px]" style={{ animationDelay: "4s" }} />

      {/* ── Decorative ring ── */}
      <div className="absolute right-[10%] top-[20%] hidden h-[420px] w-[420px] rounded-full border border-white/[0.04] lg:block">
        <div className="absolute inset-6 rounded-full border border-white/[0.03]">
          <div className="absolute inset-6 rounded-full border border-white/[0.02]" />
        </div>
        {/* Orbiting dot */}
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-paxit-blue-light shadow-[0_0_12px_rgba(59,154,255,0.6)]" />
      </div>

      {/* ── Decorative floating shapes ── */}
      <div className="absolute right-[18%] bottom-[30%] hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="opacity-[0.06]">
          <rect x="10" y="10" width="100" height="100" rx="20" stroke="white" strokeWidth="1" />
          <rect x="25" y="25" width="70" height="70" rx="14" stroke="white" strokeWidth="1" />
          <rect x="40" y="40" width="40" height="40" rx="8" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl items-center px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="w-full max-w-3xl pb-28 pt-36 md:pb-36 md:pt-44"
        >
          {/* Badge */}
          <motion.div variants={fadeIn}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-paxit-blue/20 bg-paxit-blue/[0.06] px-5 py-2 text-[13px] font-medium tracking-wide text-paxit-blue-light/90 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-paxit-blue-light opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-paxit-blue-light" />
              </span>
              35+ Years of Precision Imaging
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeIn}
            className="mt-9 font-heading text-[clamp(2.75rem,6.5vw,5rem)] font-bold leading-[1.06] tracking-[-0.02em] text-white"
          >
            Precision Imaging.
            <br />
            <span className="bg-gradient-to-r from-[#60B4FF] via-paxit-blue-light to-paxit-blue bg-clip-text text-transparent">
              Powerful Analysis.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeIn}
            className="mt-7 max-w-[520px] text-[17px] leading-[1.75] text-slate-300/80"
          >
            The complete microscopy imaging platform trusted by Fortune 1000
            companies in aerospace, pharma, semiconductor, and more. Capture,
            manage, measure, and analyze — all in one powerful suite.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeIn}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact-us" size="lg">
              Request Demo
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button href="/imaging-software" variant="secondary" size="lg">
              Explore Software
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeIn}
            className="mt-20 flex gap-12 border-t border-white/[0.06] pt-8 md:gap-16"
          >
            {[
              { value: "35+", label: "Years of Innovation" },
              { value: "1000+", label: "Enterprise Clients" },
              { value: "10K+", label: "Global Installations" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-[28px] font-bold tracking-tight text-white md:text-[32px]">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-[13px] font-medium tracking-wide text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom gradient ── */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
}
