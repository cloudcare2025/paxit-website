import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/ui/LogoCloud";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import ProductSpotlight from "@/components/sections/ProductSpotlight";
import StatsBar from "@/components/sections/StatsBar";
import CTABanner from "@/components/sections/CTABanner";
import SectionWrapper from "@/components/ui/SectionWrapper";
import KnowledgeHubPreview from "./knowledge-hub/KnowledgeHubPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <FeaturesGrid />
      <SectionWrapper>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-paxit-blue/[0.06] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.15em] text-paxit-blue ring-1 ring-paxit-blue/[0.08]">
            Our Products
          </span>
          <h2 className="mt-5 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-slate-900">
            Hardware &amp; Software,
            <br className="hidden sm:block" />
            Working Together
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[16px] leading-[1.7] text-slate-500">
            PAX-it software and PAXcam cameras integrate seamlessly for a
            complete microscopy imaging solution.
          </p>
        </div>
        <div className="mt-16">
          <ProductSpotlight />
        </div>
      </SectionWrapper>
      <StatsBar />
      <SectionWrapper>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-paxit-blue/[0.06] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.15em] text-paxit-blue ring-1 ring-paxit-blue/[0.08]">
            Knowledge Hub
          </span>
          <h2 className="mt-5 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-slate-900">
            Latest Insights
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[16px] leading-[1.7] text-slate-500">
            Guides, best practices, and case studies from our imaging experts.
          </p>
        </div>
        <div className="mt-14">
          <KnowledgeHubPreview />
        </div>
      </SectionWrapper>
      <CTABanner />
    </>
  );
}
