"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import Button from "@/components/ui/Button";

const products = [
  {
    title: "PAX-it Imaging Software",
    tagline: "The #1 Microscopy Imaging Platform",
    description:
      "The complete image management, analysis, and reporting platform. Since 1993, thousands of organizations have used PAX-it to capture, database, measure, analyze, annotate, and share their images.",
    features: [
      "Image database management",
      "Calibrated measurements & analysis",
      "21 CFR Part 11 compliance",
      "Custom reporting templates",
      "Workflow automation",
      "Network site licensing",
    ],
    href: "/imaging-software",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    accent: "from-paxit-blue to-[#4F46E5]",
  },
  {
    title: "PAXcamX Digital Cameras",
    tagline: "Sony Pregius CMOS Sensors",
    description:
      "Feature-rich, high-resolution digital microscope cameras with USB 3.1. Stunning hi-res image acquisition with unrivaled database software — a must-have for microscopic imaging.",
    features: [
      "Scientific-grade Sony Pregius sensors",
      "USB 3.1 — up to 166 fps",
      "3.2 MP / 5.1 MP / 12.3 MP models",
      "Standard C-mount compatibility",
      "Plug-and-play setup",
      "Multi-camera support",
    ],
    href: "/imaging-hardware/microscope-cameras",
    icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
    accent: "from-[#0EA5E9] to-paxit-blue",
  },
];

export default function ProductSpotlight() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
      className="grid gap-6 md:grid-cols-2"
    >
      {products.map((product) => (
        <motion.div
          key={product.title}
          variants={fadeIn}
          className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/60"
        >
          {/* Top accent bar */}
          <div className={`h-1 w-full bg-gradient-to-r ${product.accent}`} />

          {/* Product visual */}
          <div className={`relative flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100/50 px-8 py-12`}>
            <div className={`flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${product.accent} shadow-lg`}>
              <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={product.icon} />
              </svg>
            </div>
            {/* Decorative dots */}
            <div className="absolute right-6 top-6 grid grid-cols-3 gap-1.5 opacity-20">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-1 w-1 rounded-full bg-slate-400" />
              ))}
            </div>
          </div>

          <div className="p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-paxit-blue">
              {product.tagline}
            </p>
            <h3 className="mt-2 font-heading text-[22px] font-bold tracking-tight text-slate-900">
              {product.title}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.7] text-slate-500">
              {product.description}
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-[13px] text-slate-600"
                >
                  <svg
                    className="h-4 w-4 shrink-0 text-paxit-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={product.href} variant="secondary" size="sm">
                Learn More
                <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
