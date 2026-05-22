"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { articles, categories } from "@/data/articles";

export default function KnowledgeHubContent() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-paxit-blue text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured article */}
        {filtered.length > 0 && (
          <Link
            href={`/knowledge-hub/${filtered[0].slug}`}
            className="group mb-12 block rounded-2xl border border-slate-200/60 bg-gradient-to-br from-paxit-blue/5 to-transparent p-8 transition-all hover:border-paxit-blue/30 hover:shadow-lg md:p-12"
          >
            <span className="inline-block rounded-full bg-paxit-blue/10 px-3 py-1 text-xs font-semibold text-paxit-blue">
              {filtered[0].category}
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold text-slate-900 transition-colors group-hover:text-paxit-blue md:text-3xl">
              {filtered[0].title}
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">{filtered[0].excerpt}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              <time>{new Date(filtered[0].date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
            </div>
          </Link>
        )}

        {/* Article grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.slice(1).map((article) => (
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
                <div className="mt-4 flex items-center justify-between">
                  <time className="text-xs text-slate-500">
                    {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </time>
                  <span className="text-sm font-medium text-paxit-blue">Read &rarr;</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
