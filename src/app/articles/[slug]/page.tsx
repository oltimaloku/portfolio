import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { getArticleBySlug, getArticleSlugs } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all articles
export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

// MDX components for custom styling
const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#111827] mt-12 mb-6"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-semibold text-[#111827] mt-10 mb-4"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-semibold text-[#111827] mt-8 mb-3"
      {...props}
    />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className="font-[family-name:var(--font-playfair)] text-lg md:text-xl font-medium text-[#111827] mt-6 mb-2"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-[#374151] font-[family-name:var(--font-source-serif)] text-base md:text-lg leading-relaxed mb-4"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc list-inside text-[#374151] font-[family-name:var(--font-source-serif)] space-y-2 mb-6 ml-4"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal list-inside text-[#374151] font-[family-name:var(--font-source-serif)] space-y-2 mb-6 ml-4"
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-[#374151] leading-relaxed" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-[#DC2626] hover:text-[#B91C1C] underline transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-[#DC2626] pl-6 my-6 italic text-[#6B7280]"
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-[#111827]" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-[#F5F2ED] px-2 py-0.5 rounded text-sm font-mono text-[#B91C1C]"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="bg-[#1F2937] text-[#F5F2ED] p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm"
      {...props}
    />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="rounded-lg border border-[#D1D5DB]/50 my-6 max-w-full h-auto"
      alt={props.alt || ""}
      {...props}
    />
  ),
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || !article.published) {
    notFound();
  }

  return (
    <article className="py-12 md:py-20">
      <Container size="md">
        {/* Back Link */}
        <Link
          href="/articles"
          className="inline-flex items-center text-[#6B7280] hover:text-[#DC2626] transition-colors mb-8 no-underline font-[family-name:var(--font-inter)] text-sm"
        >
          <span className="mr-2">&larr;</span>
          Back to Articles
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          {/* Category & Read Time */}
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 bg-[#DC2626]/10 text-[#DC2626] text-sm font-[family-name:var(--font-inter)] rounded-full">
              {article.category}
            </span>
            <span className="text-[#9CA3AF] text-sm font-[family-name:var(--font-inter)]">
              {article.readTime}
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-[#111827] mb-6">
            {article.title}
          </h1>

          {/* Date */}
          <p className="text-[#6B7280] font-[family-name:var(--font-source-serif)] text-lg mb-6">
            {formatDate(article.date)}
          </p>

          {/* Description */}
          <p className="text-xl text-[#374151] font-[family-name:var(--font-source-serif)] leading-relaxed mb-8">
            {article.description}
          </p>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#F5F2ED] text-[#4B5563] text-sm font-[family-name:var(--font-inter)] rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Cover Image */}
        {article.coverImage && (
          <div className="mb-12 rounded-xl overflow-hidden border border-[#D1D5DB]/50">
            <Image
              src={article.coverImage}
              alt={article.title}
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        )}

        {/* MDX Content */}
        <div className="prose-container">
          <MDXRemote source={article.content} components={mdxComponents} />
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-[#D1D5DB]/50">
          <Link
            href="/articles"
            className="inline-flex items-center text-[#DC2626] hover:text-[#B91C1C] transition-colors no-underline font-[family-name:var(--font-inter)]"
          >
            <span className="mr-2">&larr;</span>
            View All Articles
          </Link>
        </div>
      </Container>
    </article>
  );
}
