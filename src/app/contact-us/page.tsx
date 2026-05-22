import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with PAXIT by MIS for product demos, pricing information, or any questions about our microscopy imaging solutions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a question about PAX-it or PAXcam? Looking for a product demo or pricing information? We'd love to hear from you."
      />
      <ContactContent />
    </>
  );
}
