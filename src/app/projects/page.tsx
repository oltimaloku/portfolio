import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/lib/content";
import { fitTitle, formatYears } from "@/lib/utils";
import { Catalogue } from "@/components/folio/Plates";
import { Arrow, SectionHead, Sheet } from "@/components/folio/primitives";

export const metadata: Metadata = {
  title: "Works",
  description: "Every project, from Neuron to the smallest study.",
};

/** The catalogue with an index of plates, like the contents page of a folio. */
export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="pt-[68px]">
      <Sheet className="pt-16 md:pt-24">
        <SectionHead
          mark="02"
          latin="Opere"
          title={<>Every work, <em className="text-gold-ink">in order.</em></>}
          lede="An index of all the plates, then the plates themselves."
        />

        <ol className="mb-24 border-t border-gold-soft md:mb-32">
          {projects.map((p) => (
            <li key={p.slug} className="border-b border-gold-faint">
              <Link
                href={`/projects/${p.slug}/`}
                className="group grid grid-cols-[56px_1fr] items-baseline gap-x-6 gap-y-1 py-5 transition-colors duration-500 hover:bg-gold-wash md:grid-cols-12 md:px-3"
              >
                <span className="t-display text-[28px] text-gold-ink md:col-span-2 lg:col-span-1">{p.numeral}</span>
                <span className="@container min-w-0 md:col-span-6 lg:col-span-4">
                  <span className="t-title" style={{ fontSize: fitTitle(p.title, "26px") }}>{p.title}</span>
                </span>
                <span className="hidden text-[16px] text-ink-3 lg:col-span-4 lg:block">{p.tagline}</span>
                <span className="col-start-2 t-label-sm text-ink-3 md:col-span-3 md:col-start-auto lg:col-span-2">{formatYears(p.start, p.end)}</span>
                <Arrow className="hidden text-gold group-hover:translate-x-1 md:col-span-1 md:block md:justify-self-end" />
              </Link>
            </li>
          ))}
        </ol>

        <Catalogue projects={projects} />
      </Sheet>
    </section>
  );
}
