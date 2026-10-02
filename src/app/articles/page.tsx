import { Metadata } from "next";
import Container from "@/components/ui/Container";
import { getAllArticles } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles",
  description: "Thoughts, learnings, and explorations in technology and development.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <section className="py-20 md:py-32">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-[#111827] mb-6">
            My <span className="text-[#DC2626]">Articles</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] font-[family-name:var(--font-source-serif)] max-w-2xl mx-auto">
            Thoughts, learnings, and explorations in technology and development.
            Writing helps me solidify my understanding and share knowledge.
          </p>
        </div>

        {articles.length > 0 ? (
          /* Articles List */
          <div className="max-w-3xl mx-auto space-y-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group block bg-[#FEFDFB] rounded-xl border border-[#D1D5DB]/50 overflow-hidden hover:border-[#DC2626]/50 hover:shadow-lg transition-all duration-300 no-underline p-8"
              >
                {/* Category & Read Time */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#DC2626]/10 text-[#DC2626] text-xs font-[family-name:var(--font-inter)] rounded-full">
                    {article.category}
                  </span>
                  <span className="text-[#9CA3AF] text-xs font-[family-name:var(--font-inter)]">
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-semibold text-[#111827] group-hover:text-[#DC2626] transition-colors mb-3">
                  {article.title}
                </h2>

                {/* Description */}
                <p className="text-[#6B7280] font-[family-name:var(--font-source-serif)] text-base leading-relaxed mb-4">
                  {article.description}
                </p>

                {/* Date & Tags */}
                <div className="flex items-center justify-between">
                  <span className="text-[#9CA3AF] text-sm font-[family-name:var(--font-source-serif)]">
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>

                  {article.tags.length > 0 && (
                    <div className="flex gap-2">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[#6B7280] text-xs font-[family-name:var(--font-inter)]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Read More */}
                <div className="mt-6 pt-4 border-t border-[#D1D5DB]/30">
                  <span className="text-[#DC2626] text-sm font-[family-name:var(--font-inter)] font-medium group-hover:underline">
                    Read Article &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-[#FEFDFB] rounded-xl border border-[#D1D5DB]/50 p-12">
              <div className="text-6xl mb-6">✍️</div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#111827] mb-4">
                Articles Coming Soon
              </h2>
              <p className="text-[#6B7280] font-[family-name:var(--font-source-serif)] leading-relaxed">
                I&apos;m working on writing articles about technology,
                development, and things I find interesting. Check back soon for
                my thoughts and explorations!
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
