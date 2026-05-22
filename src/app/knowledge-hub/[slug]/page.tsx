import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  return (
    <>
      <PageHero title={article.title}>
        <div className="flex items-center gap-4">
          <span className="inline-block rounded-full bg-paxit-blue/20 px-3 py-1 text-xs font-semibold text-paxit-blue-light">
            {article.category}
          </span>
          <time className="text-sm text-slate-400">
            {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </time>
        </div>
      </PageHero>

      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-slate-600">
            {article.excerpt}
          </p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
            <h3 className="text-lg font-semibold text-slate-900">Want to learn more?</h3>
            <p className="mt-2 text-sm text-slate-600">
              Contact our team to discuss how PAX-it can help with your specific imaging needs.
            </p>
            <div className="mt-6">
              <Button href="/contact-us">Contact Us</Button>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <Link href="/knowledge-hub" className="text-sm font-medium text-paxit-blue hover:underline">
              &larr; Back to Knowledge Hub
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
