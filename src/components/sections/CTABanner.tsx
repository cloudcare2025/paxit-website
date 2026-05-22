"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import Button from "@/components/ui/Button";

type CTABannerProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function CTABanner({
  title = "See PAXIT in Action",
  subtitle = "Whatever your imaging needs, we're here to help you find the solution.",
  buttonText = "Request Pricing & Info",
  buttonHref = "/contact-us",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-28">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="grain-overlay absolute inset-0" />

      {/* Decorative shapes */}
      <div className="absolute left-[10%] top-[20%] hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="opacity-[0.05]">
          <circle cx="40" cy="40" r="39" stroke="white" strokeWidth="1" />
          <circle cx="40" cy="40" r="25" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute right-[8%] bottom-[15%] hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="opacity-[0.04]">
          <rect x="5" y="5" width="90" height="90" rx="16" stroke="white" strokeWidth="1" />
          <rect x="20" y="20" width="60" height="60" rx="10" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-paxit-blue/10 blur-[100px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8"
      >
        <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-white">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-slate-300/80">
          {subtitle}
        </p>
        <div className="mt-10">
          <Button href={buttonHref} size="lg">
            {buttonText}
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
