import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTABanner from "@/components/sections/CTABanner";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Midwest Information Systems (MIS), makers of PAXIT — 35+ years of precision microscopy imaging innovation.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="For more than three decades, MIS has helped laboratories, researchers, and industrial professionals see their work clearly through innovative imaging technology."
      />
      <AboutContent />
      <CTABanner
        title="Whatever your imaging needs, we're here to help you find the solution."
        buttonText="Request Pricing & Info"
      />
    </>
  );
}
