"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { applications } from "@/data/applications";

export default function ApplicationsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {applications.map((app) => (
            <motion.div key={app.slug} variants={fadeIn}>
              <Link
                href={`/applications/${app.slug}`}
                className="group block rounded-2xl border border-slate-200/60 bg-white p-6 transition-all hover:border-paxit-blue/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-paxit-blue/10 text-paxit-blue transition-colors group-hover:bg-paxit-blue group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={app.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 transition-colors group-hover:text-paxit-blue">
                  {app.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {app.description}
                </p>
                <div className="mt-4 text-sm font-medium text-paxit-blue">
                  Learn more &rarr;
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
