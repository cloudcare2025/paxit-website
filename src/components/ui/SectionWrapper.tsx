"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
};

export default function SectionWrapper({
  children,
  className = "",
  dark = false,
  id,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeIn}
      className={`py-20 md:py-28 ${dark ? "bg-navy text-white" : "bg-white text-slate-900"} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </motion.section>
  );
}
