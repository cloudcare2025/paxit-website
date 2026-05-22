"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

const tabs = [
  {
    id: "organize",
    label: "Organize",
    title: "Organize & Manage Your Images",
    content: "File & Retrieve images in a browseable, easy-to-use cabinet/folder or treeview structured image collection. Images, video clips, reports, presentations and other files are automatically filed for you in a powerful, searchable database of your design!",
    features: [
      "Nested treeview or cabinet/folder interface",
      "Auto-sort images as they come in",
      "Full-text metadata search",
      "Non-image file types supported",
      "Network-accessible shared databases",
    ],
  },
  {
    id: "analyze",
    label: "Analyze",
    title: "Measure & Analyze with Precision",
    content: "PAX-it provides a comprehensive suite of measurement and analysis tools for microscopy images. From simple linear measurements to complex particle analysis, every tool is calibrated and validated for accuracy.",
    features: [
      "Calibrated linear, area, and angular measurements",
      "Automated grain sizing per ASTM E112",
      "Particle size distribution analysis",
      "Phase analysis and area fraction",
      "Custom automated measurement routines",
    ],
  },
  {
    id: "share",
    label: "Share",
    title: "Report & Share Results",
    content: "Generate professional reports with images, measurements, and analysis data. Share results across your organization with network licensing and collaborative workflows.",
    features: [
      "Customizable PDF report templates",
      "Export to any image format",
      "Network site licensing",
      "Email integration for quick sharing",
      "Print with calibrated scale bars",
    ],
  },
];

const modules = [
  { icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4", title: "Make measurements" },
  { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "Image analysis functions" },
  { icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", title: "Network site licensing" },
  { icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", title: "Communicate remotely" },
  { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", title: "Workflow automation" },
];

export default function SoftwareContent() {
  const [activeTab, setActiveTab] = useState("organize");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <p className="text-lg text-slate-600">
            Flexibility makes PAX-it the right choice for working with images in a variety of markets and user applications. See how easy it is to accomplish your goals:
          </p>
        </motion.div>

        {/* Tabbed interface */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mx-auto max-w-4xl"
        >
          <div className="flex rounded-xl border border-slate-200 bg-slate-50 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-paxit-blue shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-8 rounded-2xl border border-slate-200/60 bg-white p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900">{active.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{active.content}</p>
              <ul className="mt-6 space-y-3">
                {active.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-700">
                    <svg className="h-5 w-5 shrink-0 text-paxit-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Modules */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-20"
        >
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="font-heading text-2xl font-bold text-slate-900 md:text-3xl">
              Add PAX-it software modules for additional functions
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {modules.map((mod) => (
              <motion.div
                key={mod.title}
                variants={fadeIn}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200/60 bg-slate-50 p-6 text-center transition-all hover:border-paxit-blue/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-paxit-blue/10 text-paxit-blue">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={mod.icon} />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">{mod.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
