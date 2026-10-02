import Link from "next/link";
import type { ReactNode } from "react";
import { asset, cn } from "@/lib/utils";

/** The page measure. Every section aligns to it. */
export function Sheet({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1320px] px-[var(--gutter)]", className)}>{children}</div>;
}

/** Section opener: a ruled line, a section mark, and a display title. */
export function SectionHead({
  mark,
  latin,
  title,
  lede,
  aside,
}: {
  mark: string;
  latin: string;
  title: ReactNode;
  lede?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <header className="mb-14 md:mb-20">
      <div className="flex items-center gap-4 border-t border-gold-soft pt-4">
        <span className="t-label text-gold-ink">§ {mark}</span>
        <span className="h-px w-8 bg-gold-soft" />
        <span className="t-label text-ink-3">{latin}</span>
        {aside && <span className="ml-auto">{aside}</span>}
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <h2 className="t-display text-[clamp(48px,6.4vw,96px)] lg:col-span-7">{title}</h2>
        {lede && <div className="t-lede lg:col-span-5 lg:pt-4 max-w-[46ch]">{lede}</div>}
      </div>
    </header>
  );
}

/** A plain <img> that respects the deploy base path. The site is a static export, so there is no image optimiser. */
export function Img({
  src,
  alt,
  className,
  eager,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(src)}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

/** Hairline button. `solid` is reserved for the one primary action on a screen. */
export function ButtonLink({
  href,
  children,
  solid,
  external,
  className,
}: {
  href: string;
  children: ReactNode;
  solid?: boolean;
  external?: boolean;
  className?: string;
}) {
  const cls = cn(
    "group inline-flex items-center gap-3 h-12 px-6 t-label transition-colors duration-300",
    solid
      ? "bg-ink text-paper hover:bg-gold-ink"
      : "border border-gold-soft text-ink hover:border-gold hover:bg-gold-wash",
    className
  );
  if (external) {
    return (
      <a href={href.startsWith("/") ? asset(href) : href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** A dimension line: ticks at both ends and a label in the middle. */
export function Dimension({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 text-gold", className)} aria-hidden>
      <span className="relative h-3 w-px bg-gold-soft">
        <span className="absolute left-1/2 top-1/2 h-px w-2.5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gold" />
      </span>
      <span className="h-px flex-1 bg-gold-soft" />
      <span className="t-label-sm text-gold-ink whitespace-nowrap">{label}</span>
      <span className="h-px flex-1 bg-gold-soft" />
      <span className="relative h-3 w-px bg-gold-soft">
        <span className="absolute left-1/2 top-1/2 h-px w-2.5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gold" />
      </span>
    </div>
  );
}

export function Arrow({ dir = "right", className }: { dir?: "right" | "up-right" | "down" | "left" | "up"; className?: string }) {
  const rotate = { right: 0, "up-right": -45, down: 90, left: 180, up: -90 }[dir];
  return (
    <svg
      viewBox="0 0 16 10"
      className={cn("h-[10px] w-4 transition-transform duration-300", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
    >
      <path d="M0 5 H15 M11 1 L15 5 L11 9" />
    </svg>
  );
}
