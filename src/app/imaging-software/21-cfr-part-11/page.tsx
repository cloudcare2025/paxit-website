import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTABanner from "@/components/sections/CTABanner";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "21 CFR Part 11 Compliance",
  description: "PAX-it 21 CFR Part 11 Compliance Software for pharmaceutical microscope images. Electronic records, electronic signatures, and audit trails.",
};

const complianceFeatures = [
  {
    title: "Electronic Records",
    description: "All image records are stored with complete metadata, timestamps, and user attribution in a secure, validated database system.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Electronic Signatures",
    description: "Legally binding electronic signatures with user authentication, ensuring document integrity and non-repudiation.",
    icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
  },
  {
    title: "Audit Trails",
    description: "Complete, tamper-evident audit trails tracking every access, modification, and export of image files and associated data.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    title: "Access Controls",
    description: "Role-based access control with configurable permissions ensuring only authorized personnel can access, modify, or approve records.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "Data Integrity",
    description: "Checksums and validation ensure image files and associated data cannot be altered without detection, maintaining data integrity throughout the record lifecycle.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Validation Support",
    description: "PAX-it supports IQ/OQ/PQ qualification protocols with comprehensive validation documentation for GMP environments.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
];

export default function CFRPage() {
  return (
    <>
      <PageHero
        title="21 CFR Part 11 Compliance"
        subtitle="PAX-it provides comprehensive 21 CFR Part 11 compliance capabilities for pharmaceutical microscope imaging. Electronic records, electronic signatures, and complete audit trails — built right into your imaging workflow."
      >
        <Button href="/contact-us" size="lg">Request Compliance Demo</Button>
      </PageHero>

      <SectionWrapper>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-paxit-blue">Regulatory Compliance</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 md:text-4xl">
            Built for Regulated Environments
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            PAX-it&apos;s 21 CFR Part 11 module provides all the tools pharmaceutical and medical device companies need to maintain compliance with FDA regulations for electronic records and signatures.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {complianceFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200/60 bg-white p-6 transition-all hover:border-paxit-blue/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-paxit-blue/10 text-paxit-blue">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper dark>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            PAX-it&apos;s 21 CFR Part 11 compliance module is trusted by organizations across regulated industries.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {["Pharmaceutical", "Medical Devices", "Biotechnology", "Clinical Labs", "Contract Labs", "Food & Beverage", "Cosmetics", "Veterinary"].map((industry) => (
              <div key={industry} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTABanner
        title="Ready to achieve 21 CFR Part 11 compliance?"
        subtitle="Let us show you how PAX-it can help your pharmaceutical or medical device lab meet FDA requirements."
        buttonText="Schedule a Compliance Demo"
      />
    </>
  );
}
