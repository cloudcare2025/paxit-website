import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import KnowledgeHubContent from "./KnowledgeHubContent";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description: "Guides, best practices, case studies, and technical articles about microscopy imaging from the PAXIT team.",
};

export default function KnowledgeHubPage() {
  return (
    <>
      <PageHero
        title="Knowledge Hub"
        subtitle="Guides, best practices, and case studies from our imaging experts. Explore articles on microscopy imaging, analysis techniques, and compliance."
      />
      <KnowledgeHubContent />
    </>
  );
}
