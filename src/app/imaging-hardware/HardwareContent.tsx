"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

const categories = [
  {
    id: "stereozoom",
    title: "Stereozoom Microscopes",
    applications: ["Inspection", "Quality control", "Forensics", "Weld measurement", "Education"],
    notes: "Click-stops on the zoom control allow for reproducible mag settings for calibrated measurements.",
  },
  {
    id: "upright-reflected",
    title: "Upright Compound Microscopes - Reflected Light",
    applications: ["Metallurgy", "Materials science", "Coatings analysis", "Failure analysis"],
    notes: "High-quality reflected light optics for metallurgical and materials science applications.",
  },
  {
    id: "upright-transmitted",
    title: "Upright Compound Microscopes - Transmitted Light",
    applications: ["Biology", "Pathology", "Geology", "Pharmaceutical"],
    notes: "Transmitted light microscopes for biological, geological, and pharmaceutical imaging.",
  },
  {
    id: "inverted-reflected",
    title: "Inverted Compound Microscopes - Reflected Light",
    applications: ["Metallurgy", "Materials science"],
    notes: "Inverted design ideal for large or heavy metallurgical samples.",
  },
  {
    id: "inverted-transmitted",
    title: "Inverted Compound Microscopes - Transmitted Light",
    applications: ["Cell culture", "Biology"],
    notes: "Inverted transmitted light for live cell observation and tissue culture work.",
  },
  {
    id: "depth-cam",
    title: "Depth Cam",
    applications: ["3D surface profiling", "Depth measurement"],
    notes: "Capture depth information from microscope images for 3D surface analysis.",
  },
  {
    id: "high-mag",
    title: "High Mag Lensing",
    applications: ["Semiconductor", "Electronics", "Fine detail inspection"],
    notes: "High magnification lens systems for detailed inspection of small features.",
  },
  {
    id: "macro-stands",
    title: "Macro Stands / Gross Imaging Stations",
    applications: ["Pathology", "Forensics", "Large sample documentation"],
    notes: "Macro imaging solutions for large specimens and gross documentation.",
  },
  {
    id: "motorized-stages",
    title: "Motorized Stages",
    applications: ["Automated scanning", "Large area imaging"],
    notes: "Programmable motorized stages for automated image tiling and scanning.",
  },
  {
    id: "couplers",
    title: "Couplers",
    applications: ["Camera mounting"],
    notes: "C-mount couplers for connecting PAXcam cameras to any microscope brand.",
  },
  {
    id: "micrometers",
    title: "Micrometers & Gauge Blocks",
    applications: ["Calibration", "Measurement verification"],
    notes: "Calibration standards for ensuring measurement accuracy.",
  },
  {
    id: "stands",
    title: "Stands",
    applications: ["Camera mounting", "Flexible positioning"],
    notes: "Various stand options for camera and microscope mounting.",
  },
  {
    id: "illuminators",
    title: "Illuminators",
    applications: ["Lighting", "All microscopy"],
    notes: "LED and fiber optic illumination systems for optimal imaging.",
  },
];

export default function HardwareContent() {
  const [openCategory, setOpenCategory] = useState<string | null>("stereozoom");

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-paxit-blue">Hardware Categories</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 md:text-4xl">
              Complete Hardware Solutions
            </h2>
          </motion.div>

          <motion.div variants={fadeIn} className="mx-auto max-w-3xl space-y-3">
            {categories.map((cat) => (
              <div key={cat.id} className="rounded-xl border border-slate-200/60 bg-white overflow-hidden">
                <button
                  onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-slate-50"
                >
                  <span className="font-semibold text-slate-900">{cat.title}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${openCategory === cat.id ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openCategory === cat.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-100 px-6 py-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <h4 className="text-sm font-semibold text-slate-700">Typical Applications</h4>
                            <ul className="mt-2 space-y-1">
                              {cat.applications.map((app) => (
                                <li key={app} className="flex items-center gap-2 text-sm text-slate-600">
                                  <span className="h-1.5 w-1.5 rounded-full bg-paxit-blue" />
                                  {app}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-slate-700">Notes</h4>
                            <p className="mt-2 text-sm text-slate-600">{cat.notes}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
