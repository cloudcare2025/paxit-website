"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { articles } from "@/data/articles";

export default function KnowledgeHubPreview() {
  const latest = articles.slice(0, 3);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
      className="grid gap-6 md:grid-cols-3"
    >
      {latest.map((article) => (
        <motion.div key={article.slug} variants={fadeIn}>
          <Link
            href={`/knowledge-hub/${article.slug}`}
            className="group block rounded-2xl border border-slate-200/60 bg-white p-6 transition-all hover:border-paxit-blue/30 hover:shadow-lg"
          >
            <span className="inline-block rounded-full bg-paxit-blue/10 px-3 py-1 text-xs font-semibold text-paxit-blue">
              {article.category}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 transition-colors group-hover:text-paxit-blue">
              {article.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {article.excerpt}
            </p>
            <div className="mt-4 text-sm font-medium text-paxit-blue">
              Read more &rarr;
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
