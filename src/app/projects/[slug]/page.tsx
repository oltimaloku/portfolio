import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAdjacentProjects, getAllProjects, getProjectBySlug, getProjectSlugs } from "@/lib/content";
import { cn, formatPeriod } from "@/lib/utils";
import { mdxComponents } from "@/components/folio/mdx";
import { Arrow, Dimension, Img, Sheet } from "@/components/folio/primitives";
import Reveal from "@/components/folio/Reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug);
  if (!project) return { title: "Not found" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const all = getAllProjects();
  const lineage = [project.evolvedFrom, project.evolvedInto]
    .map((s) => all.find((p) => p.slug === s))
    .filter(Boolean);

  const facts: [string, React.ReactNode][] = [
    ["Role", project.role],
    ...(project.team ? [["Team", project.team] as [string, string]] : []),
    ["Period", formatPeriod(project.start, project.end)],
    ...(project.platform ? [["Platform", project.platform] as [string, string]] : []),
    ...(project.status ? [["Status", project.status] as [string, string]] : []),
  ];

  return (
    <article className="pt-[68px]">
      {/* Title sheet */}
      <Sheet className="pt-10 md:pt-16">
        <nav className="flex items-center gap-3 t-label text-ink-3" aria-label="Breadcrumb">
          <Link href="/#work" className="group inline-flex items-center gap-2 hover:text-ink">
            <Arrow dir="left" className="group-hover:-translate-x-1" />
            <span className="link-draw">Works</span>
          </Link>
          <span className="text-ink-4">/</span>
          <span className="text-gold-ink">Tav. {project.numeral}</span>
        </nav>

        <header className="mt-10 grid gap-10 border-t border-gold-soft pt-10 lg:grid-cols-12 md:mt-14">
          <div className="lg:col-span-7">
            <p className="t-label text-gold-ink rise">Tavola {project.numeral} of {all.length}</p>
            <h1 className="mt-4 t-display text-[clamp(72px,11vw,168px)] rise" style={{ "--delay": "0.1s" } as React.CSSProperties}>
              {project.title}
            </h1>
            <p className="mt-4 t-title italic text-[clamp(24px,2.4vw,32px)] text-ink-2 max-w-[28ch] rise" style={{ "--delay": "0.2s" } as React.CSSProperties}>
              {project.tagline}
            </p>
          </div>

          {/* Title block */}
          <dl className="self-end border border-gold-soft lg:col-span-5 rise" style={{ "--delay": "0.3s" } as React.CSSProperties}>
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[96px_1fr] border-b border-gold-faint last:border-b-0">
                <dt className="border-r border-gold-faint px-4 py-3 t-label-sm text-ink-4">{k}</dt>
                <dd className="px-4 py-3 text-[15px] text-ink-2">{v}</dd>
              </div>
            ))}
            <div className="grid grid-cols-[96px_1fr] border-t border-gold-faint">
              <dt className="border-r border-gold-faint px-4 py-3 t-label-sm text-ink-4">Built with</dt>
              <dd className="flex flex-wrap gap-x-4 gap-y-1 px-4 py-3">
                {project.stack.map((s) => (
                  <span key={s} className="t-label-sm text-ink-3">{s}</span>
                ))}
              </dd>
            </div>
            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-gold-soft bg-gold-wash px-4 py-3">
                {project.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 t-label text-ink">
                    <span className="link-draw">{l.label}</span>
                    <Arrow dir="up-right" className="h-2 w-3 text-gold" />
                  </a>
                ))}
              </div>
            )}
          </dl>
        </header>
      </Sheet>

      {/* Cover */}
      {project.cover && (
        <Sheet className="mt-14 md:mt-20">
          <Reveal className="plate">
            <div className={cn("grid-ground relative aspect-[16/9] overflow-hidden", project.coverFit === "cover" && "aspect-[16/8]")}>
              <Img
                src={project.cover}
                alt={project.coverAlt ?? project.title}
                eager
                className={cn(
                  "absolute inset-0 h-full w-full",
                  project.coverFit === "cover" ? "object-cover" : "object-contain p-[5%]"
                )}
              />
              {project.coverInset && (
                <Img
                  src={project.coverInset}
                  alt=""
                  eager
                  className="absolute bottom-[-8%] right-[6%] h-[80%] w-auto drop-shadow-[0_24px_40px_rgba(23,22,15,0.18)]"
                />
              )}
            </div>
          </Reveal>
          <Dimension label={`fig. ${project.numeral}.1 — ${project.platform ?? project.title}`} className="mt-3" />
        </Sheet>
      )}

      {/* Summary and metrics */}
      <Sheet className="mt-16 md:mt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <p className="t-title text-[clamp(26px,2.5vw,34px)] leading-[1.3] text-ink lg:col-span-7">{project.summary}</p>
          {project.metrics.length > 0 && (
            <dl className="grid grid-cols-2 self-start border-t border-gold-soft lg:col-span-4 lg:col-start-9">
              {project.metrics.map((m, i) => (
                <div key={m.label} className={cn("border-b border-gold-faint py-5", i % 2 === 0 ? "border-r pr-4" : "pl-5")}>
                  <dd className="t-display text-[44px] leading-none">{m.value}</dd>
                  <dt className="mt-2 t-label-sm text-ink-3">{m.label}</dt>
                </div>
              ))}
            </dl>
          )}
        </div>
      </Sheet>

      {/* Body, with a running index of sections */}
      <Sheet className="mt-20 md:mt-28">
        <div className="grid gap-12 lg:grid-cols-12">
          {project.headings.length > 2 && (
            <aside className="hidden lg:col-span-3 lg:block">
              <nav className="sticky top-28" aria-label="Sections">
                <p className="t-label-sm text-ink-4">Indice</p>
                <ol className="mt-4 border-l border-gold-faint">
                  {project.headings.map((h, i) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="group flex gap-3 py-1.5 pl-4 -ml-px border-l border-transparent hover:border-gold transition-colors">
                        <span className="t-label-sm text-gold-ink w-5">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[15px] text-ink-3 group-hover:text-ink transition-colors">{h.text}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          )}
          <div className={cn("prose-folio", project.headings.length > 2 ? "lg:col-span-7 lg:col-start-5" : "lg:col-span-8 lg:col-start-3")}>
            <MDXRemote source={project.content} components={mdxComponents} />
          </div>
        </div>
      </Sheet>

      {/* Lineage */}
      {lineage.length > 0 && (
        <Sheet className="mt-20">
          <div className="lg:ml-[33.33%] lg:w-[58%] border-y border-gold-soft py-6">
            {lineage.map((p) => (
              <Link key={p!.slug} href={`/projects/${p!.slug}/`} className="group flex items-baseline gap-4">
                <span className="t-label text-gold-ink">{p!.slug === project.evolvedFrom ? "Grew out of" : "Became"}</span>
                <span className="t-title text-[28px] group-hover:text-gold-ink transition-colors">
                  Tav. {p!.numeral} · {p!.title}
                </span>
                <Arrow className="ml-auto text-gold group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Sheet>
      )}

      {/* Previous / next plate */}
      <Sheet className="mt-24 md:mt-36">
        <nav className="grid border-y border-gold-soft md:grid-cols-2" aria-label="More works">
          {[
            { p: prev, label: "Previous plate", dir: "left" as const },
            { p: next, label: "Next plate", dir: "right" as const },
          ].map(({ p, label, dir }) => (
            <Link
              key={label}
              href={`/projects/${p.slug}/`}
              className={cn(
                "group flex flex-col gap-3 py-8 transition-colors duration-500 hover:bg-gold-wash md:px-8",
                dir === "right" && "md:items-end md:text-right md:border-l md:border-gold-soft border-t border-gold-faint md:border-t-0"
              )}
            >
              <span className="flex items-center gap-3 t-label text-ink-3">
                {dir === "left" && <Arrow dir="left" className="group-hover:-translate-x-1" />}
                {label} · Tav. {p.numeral}
                {dir === "right" && <Arrow className="group-hover:translate-x-1" />}
              </span>
              <span className="t-display text-[clamp(44px,5vw,72px)]">{p.title}</span>
            </Link>
          ))}
        </nav>
      </Sheet>
    </article>
  );
}
