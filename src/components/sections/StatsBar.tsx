"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

const stats = [
  { value: "35+", label: "Years of Innovation", description: "Serving labs since 1988" },
  { value: "1,000+", label: "Enterprise Clients", description: "Fortune 1000 trust PAXIT" },
  { value: "10,000+", label: "Installations", description: "Deployed worldwide" },
  { value: "13+", label: "Industries Served", description: "From aerospace to pharma" },
];

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-navy py-24">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="grain-overlay absolute inset-0" />

      {/* Decorative accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-paxit-blue/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-paxit-blue/30 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-y-12 gap-x-8 px-6 md:grid-cols-4 lg:px-8"
      >
        {stats.map((stat, i) => (
          <motion.div key={stat.label} variants={fadeIn} className="relative text-center">
            {/* Vertical divider between items */}
            {i > 0 && (
              <div className="absolute left-0 top-2 bottom-2 hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:block" />
            )}
            <div className="font-heading text-[40px] font-bold tracking-tight text-white md:text-[48px]">
              {stat.value}
            </div>
            <div className="mt-2 text-[14px] font-semibold tracking-wide text-paxit-blue-light">
              {stat.label}
            </div>
            <div className="mt-1 text-[12px] text-slate-500">
              {stat.description}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
