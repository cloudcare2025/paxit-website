"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import BentoGrid from "@/components/ui/BentoGrid";

export default function FeaturesGrid() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-paxit-blue/[0.06] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.15em] text-paxit-blue ring-1 ring-paxit-blue/[0.08]">
          Complete Platform
        </span>
        <h2 className="mt-5 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-slate-900">
          Everything You Need for
          <br className="hidden sm:block" />
          Microscopy Imaging
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[16px] leading-[1.7] text-slate-500">
          From image capture to analysis to reporting, PAX-it provides a
          complete, modular solution that grows with your lab.
        </p>
      </div>
      <div className="mt-16">
        <BentoGrid />
      </div>
    </SectionWrapper>
  );
}
