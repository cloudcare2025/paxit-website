import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";
import SoftwareContent from "./SoftwareContent";

export const metadata: Metadata = {
  title: "PAX-it Imaging Software",
  description: "PAX-it Image Database Software and Image Analysis Software. Used by thousands of organizations since 1993 to manage, annotate, and share microscopy images.",
};

export default function ImagingSoftwarePage() {
  return (
    <>
      <PageHero
        title="Imaging Software"
        subtitle="PAX-it Image Database Software and Image Analysis Software. Used by thousands of organizations since 1993 to manage, annotate, and share their images, including measurement and analysis functions."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/contact-us" size="lg">Request Demo</Button>
          <Button href="/imaging-software/21-cfr-part-11" variant="secondary" size="lg">21 CFR Part 11</Button>
        </div>
      </PageHero>
      <SoftwareContent />
      <CTABanner title="Ready to streamline your imaging workflow?" buttonText="Contact Us" />
    </>
  );
}
