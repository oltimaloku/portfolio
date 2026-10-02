import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { Arrow, SectionHead, Sheet } from "@/components/folio/primitives";
import Reveal from "@/components/folio/Reveal";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on learning, building and the space between them.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <section className="pt-[68px]">
      <Sheet className="pt-16 md:pt-24">
        <SectionHead
          mark="05"
          latin="Scritti"
          title={<>Notes on <em className="text-gold-ink">learning.</em></>}
          lede="Writing is how I check whether I understand something. These are the drafts that survived."
        />
        <ol className="border-t border-gold-soft">
          {articles.map((a, i) => (
            <Reveal as="li" key={a.slug} delay={i * 0.05} className="border-b border-gold-faint">
              <Link
                href={`/articles/${a.slug}/`}
                className="group grid items-baseline gap-x-8 gap-y-3 py-9 transition-colors duration-500 hover:bg-gold-wash md:grid-cols-12 md:px-3"
              >
                <span className="t-label text-gold-ink md:col-span-2">{formatDate(a.date)}</span>
                <span className="md:col-span-7">
                  <span className="block t-title text-[34px]">{a.title}</span>
                  <span className="mt-2 block text-[16px] leading-relaxed text-ink-3 max-w-[60ch]">{a.description}</span>
                </span>
                <span className="t-label-sm text-ink-3 md:col-span-2">
                  {a.category} · {a.readTime}
                </span>
                <Arrow className="hidden text-gold group-hover:translate-x-1 md:col-span-1 md:block md:justify-self-end" />
              </Link>
            </Reveal>
          ))}
        </ol>
      </Sheet>
    </section>
  );
}
