"use client";

import Container from "@/components/ui/Container";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Placeholder articles - these will come from MDX content
const articles = [
  {
    title: "Coming Soon",
    slug: "coming-soon",
    description:
      "I'm working on writing articles about technology, development, and things I find interesting. Check back soon!",
    date: "2024",
    category: "Updates",
    readTime: "1 min",
  },
];

export default function ArticlesPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const hasArticles =
    articles.length > 0 && articles[0].slug !== "coming-soon";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(headerRef.current, { y: 60, opacity: 0 });
      gsap.set(contentRef.current, { y: 80, opacity: 0 });

      // Header animation
      gsap.to(headerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      // Content animation
      gsap.to(contentRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="articles" className="py-20 md:py-32">
      <Container>
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-lg md:text-xl text-[#6B7280] font-[family-name:var(--font-source-serif)] mb-4">
            Thoughts and explorations.
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827]">
            Recent <span className="text-[#DC2626]">Articles</span>
          </h2>
        </div>

        {hasArticles ? (
          <>
            {/* Articles Grid */}
            <div
              ref={contentRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {articles.slice(0, 3).map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group block relative bg-[#FEFDFB] overflow-hidden transition-all duration-300 no-underline hover:shadow-[0_0_30px_rgba(212,175,55,0.15),0_0_60px_rgba(220,38,38,0.1)]"
                >
                  {/* Animated beam border on hover */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <span
                      className="absolute inset-0 animate-[spin_4s_linear_infinite]"
                      style={{
                        background:
                          "conic-gradient(from 0deg, transparent 0%, transparent 25%, #D4AF37 40%, #DC2626 60%, transparent 75%, transparent 100%)",
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "exclude",
                        WebkitMaskComposite: "xor",
                        padding: "1.5px",
                      }}
                    />
                  </span>

                  {/* Static border */}
                  <span
                    className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none z-20"
                    style={{
                      background: "rgba(209,213,219,0.5)",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                      WebkitMaskComposite: "xor",
                      padding: "1px",
                    }}
                  />

                  <div className="relative z-10 p-6">
                    {/* Category & Read Time */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-[#DC2626]/10 text-[#DC2626] text-xs font-[family-name:var(--font-inter)] border border-[#DC2626]/30">
                        {article.category}
                      </span>
                      <span className="text-[#9CA3AF] text-xs font-[family-name:var(--font-inter)]">
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-[#111827] group-hover:text-[#DC2626] transition-colors duration-300 mb-3">
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#6B7280] font-[family-name:var(--font-source-serif)] text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.description}
                    </p>

                    {/* Date */}
                    <span className="text-[#9CA3AF] text-sm font-[family-name:var(--font-source-serif)]">
                      {article.date}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center">
              <Button href="/articles" variant="secondary">
                View All Articles
              </Button>
            </div>
          </>
        ) : (
          /* Coming Soon State */
          <div ref={contentRef} className="max-w-2xl mx-auto text-center">
            <div className="relative bg-[#FEFDFB] p-12 overflow-hidden group">
              {/* Static border for coming soon card */}
              <span
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                  background: "rgba(209,213,219,0.5)",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                  padding: "1px",
                }}
              />

              <div className="relative z-10">
                <div className="text-6xl mb-6">✍️</div>
                <h3 className="text-2xl font-semibold text-[#111827] mb-4">
                  Articles Coming Soon
                </h3>
                <p className="text-[#6B7280] font-[family-name:var(--font-source-serif)] leading-relaxed">
                  I&apos;m working on writing articles about technology,
                  development, and things I find interesting. Check back soon
                  for my thoughts and explorations!
                </p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
