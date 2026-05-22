import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Press Releases",
  description: "Latest news and press releases from PAXIT by Midwest Information Systems.",
};

const pressReleases = [
  {
    date: "2025-03-15",
    title: "MIS Announces New Leadership and Continued Commitment to Imaging Innovation",
    excerpt: "Midwest Information Systems announces Michael Williams as the new leader, continuing the company's 35+ year legacy of microscopy imaging innovation.",
  },
  {
    date: "2024-11-01",
    title: "PAXcamX USB 3.1 Camera Line Expands with 20MP Model",
    excerpt: "MIS expands the PAXcamX product line with a new 20-megapixel model featuring a 1-inch CMOS sensor for the most demanding imaging applications.",
  },
  {
    date: "2024-06-15",
    title: "PAX-it Software Update Enhances 21 CFR Part 11 Capabilities",
    excerpt: "Latest PAX-it release includes enhanced electronic signature workflows, improved audit trail reporting, and streamlined compliance documentation.",
  },
  {
    date: "2024-02-20",
    title: "MIS Celebrates 35 Years of Microscopy Imaging Innovation",
    excerpt: "Founded in 1988, Midwest Information Systems marks 35 years of providing microscopy imaging solutions to laboratories worldwide.",
  },
];

export default function PressReleasesPage() {
  return (
    <>
      <PageHero
        title="Press Releases"
        subtitle="Latest news and announcements from PAXIT by Midwest Information Systems."
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl space-y-8">
          {pressReleases.map((release) => (
            <article
              key={release.title}
              className="rounded-2xl border border-slate-200/60 bg-white p-6 transition-all hover:shadow-md md:p-8"
            >
              <time className="text-sm text-slate-500">
                {new Date(release.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </time>
              <h2 className="mt-2 text-xl font-bold text-slate-900">{release.title}</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{release.excerpt}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
