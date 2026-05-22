"use client";

import { motion } from "framer-motion";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
};

export default function Card({
  children,
  className = "",
  glass = false,
  hover = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`rounded-2xl p-6 ${
        glass
          ? "glass"
          : "bg-slate-50 border border-slate-200/60"
      } ${hover ? "transition-shadow hover:shadow-lg" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
