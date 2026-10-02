import type { ReactNode } from "react";
import { asset, cn, slugify } from "@/lib/utils";
import { Img } from "./primitives";

function text(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(text).join("");
  if (node && typeof node === "object" && "props" in node) {
    return text((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

/** A figure set in a plate frame. `wide` breaks out of the text column. */
export function Figure({
  src,
  alt,
  caption,
  wide,
  plain,
}: {
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean;
  plain?: boolean;
}) {
  return (
    <figure className={cn("not-prose my-12", wide && "lg:-mx-[12%]")}>
      <div className={cn("plate", plain ? "bg-paper" : "grid-ground", "p-3 md:p-5")}>
        <Img src={src} alt={alt} className="mx-auto block h-auto max-h-[78vh] w-auto max-w-full" />
      </div>
      {caption && (
        <figcaption className="mt-5 grid grid-cols-[auto_1fr] gap-4 text-[15px] italic leading-snug text-ink-3">
          <span className="t-label-sm not-italic text-gold-ink pt-0.5">Fig.</span>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Two or more images side by side, usually phone screens. */
export function Gallery({
  images,
  caption,
}: {
  images: { src: string; alt: string }[];
  caption?: string;
}) {
  return (
    <figure className="not-prose my-12 lg:-mx-[12%]">
      <div className="plate grid-ground grid grid-cols-2 gap-4 p-5 md:gap-8 md:p-10" style={{ gridTemplateColumns: `repeat(${Math.min(images.length, 4)}, minmax(0, 1fr))` }}>
        {images.map((im) => (
          <Img key={im.src} src={im.src} alt={im.alt} className="mx-auto h-auto max-h-[70vh] w-auto max-w-full" />
        ))}
      </div>
      {caption && (
        <figcaption className="mt-5 grid grid-cols-[auto_1fr] gap-4 text-[15px] italic leading-snug text-ink-3">
          <span className="t-label-sm not-italic text-gold-ink pt-0.5">Fig.</span>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Before → after, for redesigns. */
export function Compare({
  before,
  after,
  caption,
}: {
  before: { src: string; alt: string; label?: string };
  after: { src: string; alt: string; label?: string };
  caption?: string;
}) {
  return (
    <figure className="not-prose my-12 lg:-mx-[12%]">
      <div className="grid gap-6 md:grid-cols-2">
        {[before, after].map((im, i) => (
          <div key={im.src}>
            <div className="mb-3 flex items-center gap-3">
              <span className="t-label-sm text-gold-ink">{im.label ?? (i === 0 ? "Before" : "After")}</span>
              <span className="h-px flex-1 bg-gold-faint" />
            </div>
            <div className="plate grid-ground p-3 md:p-5">
              <Img src={im.src} alt={im.alt} className="mx-auto h-auto w-full" />
            </div>
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="mt-5 grid grid-cols-[auto_1fr] gap-4 text-[15px] italic leading-snug text-ink-3">
          <span className="t-label-sm not-italic text-gold-ink pt-0.5">Fig.</span>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * A process drawn as numbered stations joined by dimension-style arrows.
 * Use it when there's no screenshot, or when the system matters more than the screen.
 */
export function Flow({
  steps,
  caption,
}: {
  steps: { label: string; note?: string }[];
  caption?: string;
}) {
  const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  return (
    <figure className="not-prose my-12 lg:-mx-[12%]">
      <ol className="plate grid-ground grid gap-0 p-4 md:p-8" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))` }}>
        {steps.map((s, i) => (
          <li key={s.label} className="relative flex items-stretch">
            <div className="m-2 flex-1 border border-gold-soft bg-paper p-4">
              <span className="t-label-sm text-gold-ink">{roman[i]}</span>
              <p className="mt-2 t-title text-[21px] leading-tight text-ink">{s.label}</p>
              {s.note && <p className="mt-2 text-[14px] leading-snug text-ink-3">{s.note}</p>}
            </div>
            {i < steps.length - 1 && (
              <span className="absolute -right-2 top-1/2 z-10 hidden h-px w-4 -translate-y-1/2 bg-gold md:block" aria-hidden>
                <span className="absolute -right-px -top-[3px] h-[7px] w-[7px] rotate-45 border-r border-t border-gold" />
              </span>
            )}
          </li>
        ))}
      </ol>
      {caption && (
        <figcaption className="mt-5 grid grid-cols-[auto_1fr] gap-4 text-[15px] italic leading-snug text-ink-3">
          <span className="t-label-sm not-italic text-gold-ink pt-0.5">Fig.</span>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** A margin-style aside inside the text column. */
export function Note({ children, title = "Note" }: { children: ReactNode; title?: string }) {
  return (
    <aside className="not-prose my-10 border-l border-gold pl-6">
      <p className="t-label-sm text-gold-ink">{title}</p>
      <div className="mt-2 text-[16px] leading-relaxed text-ink-2">{children}</div>
    </aside>
  );
}

export const mdxComponents = {
  h2: ({ children }: { children?: ReactNode }) => <h2 id={slugify(text(children))}>{children}</h2>,
  // Markdown images arrive wrapped in <p>, so this uses spans rather than <figure>
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <span className="plate grid-ground my-10 block p-3 md:p-5">
      <Img src={typeof props.src === "string" ? props.src : ""} alt={props.alt ?? ""} className="mx-auto block h-auto max-w-full" />
    </span>
  ),
  a: ({ href = "", children }: { href?: string; children?: ReactNode }) => {
    const external = /^https?:/.test(href);
    return (
      <a
        href={external ? href : asset(href)}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  },
  Figure,
  Gallery,
  Compare,
  Flow,
  Note,
};
