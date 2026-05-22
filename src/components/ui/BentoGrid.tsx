"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { features, iconPaths } from "@/data/features";

const accentColors = [
  "from-blue-500/10 to-cyan-500/5",
  "from-violet-500/10 to-blue-500/5",
  "from-cyan-500/10 to-teal-500/5",
  "from-blue-600/10 to-indigo-500/5",
  "from-indigo-500/10 to-purple-500/5",
  "from-sky-500/10 to-blue-500/5",
  "from-teal-500/10 to-cyan-500/5",
  "from-blue-500/10 to-sky-500/5",
  "from-purple-500/10 to-blue-500/5",
  "from-cyan-500/10 to-blue-500/5",
  "from-blue-500/10 to-violet-500/5",
  "from-indigo-500/10 to-cyan-500/5",
];

export default function BentoGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {features.map((feature, i) => (
        <motion.div
          key={feature.title}
          variants={fadeIn}
          className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 transition-all duration-300 hover:border-paxit-blue/20 hover:shadow-xl hover:shadow-paxit-blue/[0.04]"
        >
          {/* Hover gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${accentColors[i % accentColors.length]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

          {/* Top accent line */}
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-paxit-blue/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

          <div className="relative">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-paxit-blue/[0.12] to-paxit-blue/[0.04] text-paxit-blue ring-1 ring-paxit-blue/[0.08] transition-all duration-300 group-hover:from-paxit-blue group-hover:to-paxit-blue-dark group-hover:text-white group-hover:ring-0 group-hover:shadow-lg group-hover:shadow-paxit-blue/25">
              <svg
                className="h-[18px] w-[18px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={iconPaths[feature.icon]}
                />
              </svg>
            </div>
            <h3 className="text-[15px] font-semibold tracking-tight text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-1.5 text-[13px] leading-[1.65] text-slate-500">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
