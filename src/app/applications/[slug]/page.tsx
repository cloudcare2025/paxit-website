import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { applications } from "@/data/applications";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTABanner from "@/components/sections/CTABanner";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return applications.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = applications.find((a) => a.slug === slug);
  if (!app) return { title: "Application Not Found" };
  return {
    title: app.title,
    description: app.description,
  };
}

export default async function ApplicationPage({ params }: Props) {
  const { slug } = await params;
  const app = applications.find((a) => a.slug === slug);

  if (!app) notFound();

  const paragraphs = app.content.split("\n\n");

  return (
    <>
      <PageHero title={app.title} subtitle={app.description} />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          {paragraphs.map((p, i) => (
            <p key={i} className="mt-6 first:mt-0 text-lg leading-relaxed text-slate-600">
              {p}
            </p>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner
        title={`Need imaging solutions for ${app.title.toLowerCase()}?`}
        subtitle="Let us show you how PAX-it can streamline your imaging workflow."
        buttonText="Request a Demo"
      />
    </>
  );
}
