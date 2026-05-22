import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import ApplicationsGrid from "./ApplicationsGrid";

export const metadata: Metadata = {
  title: "Applications",
  description: "Discover how PAX-it microscopy imaging software serves 13+ industries including metallurgy, pharmaceutical, aerospace, semiconductor, and more.",
};

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        title="Applications"
        subtitle="PAX-it serves professionals across a wide range of disciplines. Whether your application is industrial, scientific, or educational, PAX-it provides the imaging tools you need."
      />
      <ApplicationsGrid />
      <CTABanner
        title="Don't see your application?"
        subtitle="PAX-it's flexible platform can be configured for virtually any microscopy imaging application. Contact us to discuss your specific needs."
        buttonText="Contact Us"
      />
    </>
  );
}
