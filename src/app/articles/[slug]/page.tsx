import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getArticleBySlug, getArticleSlugs } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { mdxComponents } from "@/components/folio/mdx";
import { Arrow, Sheet } from "@/components/folio/primitives";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug((await params).slug);
  if (!article) return { title: "Not found" };
  return { title: article.title, description: article.description };
}

export default async function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug((await params).slug);
  if (!article || !article.published) notFound();

  return (
    <article className="pt-[68px]">
      <Sheet className="pt-10 md:pt-16">
        <Link href="/articles/" className="group inline-flex items-center gap-2 t-label text-ink-3 hover:text-ink">
          <Arrow dir="left" className="group-hover:-translate-x-1" />
          <span className="link-draw">Writing</span>
        </Link>

        <header className="mx-auto mt-14 max-w-[820px] border-t border-gold-soft pt-10 text-center">
          <p className="t-label text-gold-ink rise">
            {article.category} · {formatDate(article.date)} · {article.readTime}
          </p>
          <h1 className="mt-6 t-display text-[clamp(52px,7vw,104px)] rise" style={{ "--delay": "0.1s" } as React.CSSProperties}>
            {article.title}
          </h1>
          <p className="mx-auto mt-6 max-w-[52ch] t-lede rise" style={{ "--delay": "0.2s" } as React.CSSProperties}>
            {article.description}
          </p>
          <div className="mx-auto mt-10 flex w-24 items-center gap-2" aria-hidden>
            <span className="h-px flex-1 bg-gold" />
            <span className="h-1.5 w-1.5 rotate-45 border border-gold" />
            <span className="h-px flex-1 bg-gold" />
          </div>
        </header>

        <div className="prose-folio mx-auto mt-14 max-w-[680px]">
          <MDXRemote source={article.content} components={mdxComponents} />
        </div>
      </Sheet>
    </article>
  );
}
