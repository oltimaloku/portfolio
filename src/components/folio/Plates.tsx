import Link from "next/link";
import type { Project } from "@/lib/types";
import { cn, fitTitle, formatYears } from "@/lib/utils";
import { Arrow, Dimension, Img } from "./primitives";
import Reveal from "./Reveal";
import Stack from "./Stack";

type Lookup = Record<string, Pick<Project, "title" | "numeral" | "slug">>;

function href(p: Project) {
  return `/projects/${p.slug}/`;
}

/** "Grew out of Tav. IV · Lupe" / "Became Tav. I · Neuron" */
function Lineage({ project, lookup }: { project: Project; lookup: Lookup }) {
  const from = project.evolvedFrom ? lookup[project.evolvedFrom] : undefined;
  const into = project.evolvedInto ? lookup[project.evolvedInto] : undefined;
  const target = from ?? into;
  if (!target) return null;
  return (
    <Link
      href={`/projects/${target.slug}/`}
      className="relative z-10 inline-flex items-center gap-2 t-label-sm text-gold-ink hover:text-ink transition-colors"
    >
      <span className="inline-block h-px w-5 bg-gold" />
      {from ? "Grew out of" : "Became"} Tav. {target.numeral} · {target.title}
    </Link>
  );
}

function PlateBar({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={cn("flex items-center justify-between border-b border-gold-faint px-5 py-3 md:px-7", className)}>
      <span className="t-label text-gold-ink">Tav. {project.numeral}</span>
      <span className="t-label text-ink-3">{formatYears(project.start, project.end)}</span>
    </div>
  );
}

function Cover({ project, className }: { project: Project; className?: string }) {
  if (!project.cover) {
    return (
      <div className={cn("grid-ground flex min-w-0 items-center justify-center overflow-hidden", className)}>
        <span className="t-display text-[160px] text-gold-faint">{project.numeral}</span>
      </div>
    );
  }
  const fill = project.coverFit === "cover";
  return (
    <div className={cn("grid-ground relative overflow-hidden", className)}>
      <Img
        src={project.cover}
        alt={project.coverAlt ?? `${project.title}`}
        className={cn(
          "absolute inset-0 h-full w-full transition-transform duration-[1.2s] ease-[var(--ease-out)] group-hover:scale-[1.025]",
          fill ? "object-cover" : "object-contain p-[7%]"
        )}
      />
      {project.coverInset && (
        <Img
          src={project.coverInset}
          alt=""
          className="absolute bottom-[-6%] right-[5%] h-[78%] w-auto drop-shadow-[0_18px_30px_rgba(23,22,15,0.16)] transition-transform duration-[1.2s] ease-[var(--ease-out)] group-hover:-translate-y-2"
        />
      )}
    </div>
  );
}

/** Full-width plate for the largest works. `flip` mirrors it so consecutive plates alternate. */
export function LargePlate({ project, lookup, flip }: { project: Project; lookup: Lookup; flip?: boolean }) {
  return (
    <Reveal as="article" className="plate plate-hover group relative bg-paper">
      <PlateBar project={project} />
      <div className={cn("grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12", flip && "lg:[direction:rtl]")}>
        <div className="lg:col-span-7 [direction:ltr] flex flex-col lg:border-r lg:border-gold-faint">
          <Link href={href(project)} className="relative block lg:flex-1" aria-label={`${project.title}: read the case study`}>
            <Cover project={project} className="aspect-[4/3] w-full lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" />
          </Link>
          <Dimension label={`fig. ${project.numeral}.1 — ${project.platform ?? project.title}`} className="px-5 py-3 md:px-7" />
        </div>

        <div className="@container lg:col-span-5 [direction:ltr] flex flex-col p-6 md:p-10">
          <div className="flex items-center gap-3">
            {project.status && (
              <span className="inline-flex items-center gap-2 t-label-sm text-ink-2">
                <span className="h-1.5 w-1.5 rounded-full bg-rosso" />
                {project.status}
              </span>
            )}
          </div>

          <h3 className="mt-5 t-display" style={{ fontSize: fitTitle(project.title, "clamp(56px, 6vw, 92px)") }}>
            <Link href={href(project)} className="hover:text-gold-ink transition-colors duration-300">
              {project.title}
            </Link>
          </h3>
          <p className="mt-3 t-title text-[24px] text-ink-2">{project.tagline}</p>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-2">{project.summary}</p>


          <dl className="mt-7 space-y-3">
            <div className="grid grid-cols-[84px_1fr] gap-3">
              <dt className="t-label-sm text-ink-4 pt-0.5">Role</dt>
              <dd className="text-[15px] text-ink-2">{project.role}</dd>
            </div>
            <div className="grid grid-cols-[84px_1fr] gap-3">
              <dt className="t-label-sm text-ink-4 pt-0.5">Built with</dt>
              <dd>
                <Stack items={project.stack} max={8} />
              </dd>
            </div>
          </dl>

          <div className="mt-auto pt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href={href(project)} className="inline-flex items-center gap-3 t-label text-ink">
              <span className="link-draw">Read the case study</span>
              <Arrow className="group-hover:translate-x-1" />
            </Link>
            <Lineage project={project} lookup={lookup} />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/** A half-sheet plate for medium works. */
export function MediumPlate({ project, lookup }: { project: Project; lookup: Lookup }) {
  return (
    <Reveal as="article" className="plate plate-hover group relative bg-paper">
      <PlateBar project={project} />
      <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-12">
        <Link
          href={href(project)}
          className="md:col-span-5 md:border-r md:border-gold-faint"
          aria-label={`${project.title}: read the case study`}
        >
          <Cover project={project} className="aspect-[4/3] md:aspect-auto md:h-full md:min-h-[380px] w-full" />
        </Link>
        <div className="@container md:col-span-7 flex flex-col p-6 md:p-10">
          <h3 className="t-display" style={{ fontSize: fitTitle(project.title, "clamp(48px, 4.6vw, 72px)") }}>
            <Link href={href(project)} className="hover:text-gold-ink transition-colors duration-300">
              {project.title}
            </Link>
          </h3>
          <p className="mt-3 t-title text-[22px] text-ink-2">{project.tagline}</p>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-2 max-w-[56ch]">{project.summary}</p>
          <div className="mt-6">
            <Stack items={project.stack} />
          </div>
          <div className="mt-auto pt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href={href(project)} className="inline-flex items-center gap-3 t-label text-ink">
              <span className="link-draw">Read more</span>
              <Arrow className="group-hover:translate-x-1" />
            </Link>
            <Lineage project={project} lookup={lookup} />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/** Index card for smaller works. The whole card is the link. */
export function SmallPlate({
  project,
  lookup,
  delay,
  className,
}: {
  project: Project;
  lookup: Lookup;
  delay?: number;
  className?: string;
}) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className={cn("@container plate plate-hover group relative flex flex-col bg-paper p-6 md:p-8 min-h-[300px]", className)}
    >
      <div className="flex items-start justify-between">
        <span className="t-display text-[52px] leading-none text-gold-ink">{project.numeral}</span>
        <span className="t-label-sm text-ink-3 pt-2">{formatYears(project.start, project.end)}</span>
      </div>
      <h3 className="mt-8 t-title" style={{ fontSize: fitTitle(project.title, "32px") }}>
        <Link href={href(project)} className="after:absolute after:inset-0 group-hover:text-gold-ink transition-colors duration-300">
          {project.title}
        </Link>
      </h3>
      <p className="mt-2 text-[16px] leading-snug text-ink-2">{project.tagline}</p>
      <div className="mt-auto pt-6 space-y-4">
        <Stack items={project.stack} max={3} />
        <div className="flex items-center justify-between border-t border-gold-faint pt-4">
          <Lineage project={project} lookup={lookup} />
          <Arrow className="ml-auto text-gold group-hover:translate-x-1" />
        </div>
      </div>
    </Reveal>
  );
}

/** The whole catalogue, laid out by scale. */
export function Catalogue({ projects }: { projects: Project[] }) {
  const lookup: Lookup = Object.fromEntries(projects.map((p) => [p.slug, p]));
  const large = projects.filter((p) => p.scale === "large");
  const medium = projects.filter((p) => p.scale === "medium");
  const small = projects.filter((p) => p.scale === "small");

  return (
    <div className="space-y-16 md:space-y-24">
      {large.map((p, i) => (
        <LargePlate key={p.slug} project={p} lookup={lookup} flip={i % 2 === 1} />
      ))}

      {medium.length > 0 && (
        <div className="grid gap-16 md:gap-24">
          {medium.map((p) => (
            <MediumPlate key={p.slug} project={p} lookup={lookup} />
          ))}
        </div>
      )}

      {small.length > 0 && (
        <div>
          <div className="mb-8 flex items-center gap-4">
            <span className="t-label text-ink-3">Studies & smaller works</span>
            <span className="h-px flex-1 bg-gold-faint" />
            <span className="t-label text-ink-4">
              Tav. {small[0].numeral} – {small[small.length - 1].numeral}
            </span>
          </div>
          {/* Three across; if that would orphan a card, the first one spans two columns */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {small.map((p, i) => (
              <SmallPlate
                key={p.slug}
                project={p}
                lookup={lookup}
                delay={(i % 3) * 0.08}
                className={i === 0 && small.length % 3 === 2 ? "lg:col-span-2" : undefined}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
