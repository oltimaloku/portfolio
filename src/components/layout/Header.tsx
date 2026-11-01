"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Arrow } from "@/components/folio/primitives";

const NAV = [
  { n: "02", name: "Work", href: "/#work" },
  { n: "03", name: "Practice", href: "/#practice" },
  { n: "04", name: "About", href: "/#about" },
  { n: "05", name: "Writing", href: "/articles/" },
];

export default function Header({ showWriting = true }: { showWriting?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nav = showWriting ? NAV : NAV.filter((item) => item.name !== "Writing");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500",
        scrolled || open
          ? "bg-paper/92 backdrop-blur-md border-b border-gold-faint"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-[68px] max-w-[1320px] items-center px-[var(--gutter)]">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name}, home`}>
          <Seal />
          <span className="flex flex-col leading-none">
            <span className="t-title text-[21px]">{site.name}</span>
            <span className="t-label-sm text-ink-3 mt-1">{site.role}</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-9 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.name} href={item.href} className="group flex items-baseline gap-1.5 t-label text-ink-2 hover:text-ink">
              <span className="text-gold-ink text-[9px]">{item.n}</span>
              <span className="link-draw">{item.name}</span>
            </Link>
          ))}
          <a
            href={site.resumeRequest}
            title={`Email ${site.email} for my résumé`}
            className="group inline-flex h-9 items-center gap-2 border border-gold-soft px-4 t-label text-ink hover:border-gold hover:bg-gold-wash transition-colors"
          >
            Résumé on request
            <Arrow dir="up-right" className="h-2 w-3" />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex h-10 items-center gap-3 t-label lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Close" : "Menu"}
          <span className="relative block h-3 w-5">
            <span className={cn("absolute left-0 h-px w-5 bg-ink transition-all duration-300", open ? "top-1.5 rotate-45" : "top-0")} />
            <span className={cn("absolute left-0 h-px w-5 bg-ink transition-all duration-300", open ? "top-1.5 -rotate-45" : "top-3")} />
          </span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="h-[calc(100svh-68px)] overflow-y-auto border-t border-gold-faint bg-paper px-[var(--gutter)] pt-8 lg:hidden" aria-label="Primary">
          <ul>
            {nav.map((item, i) => (
              <li key={item.name} className="rise border-b border-gold-faint" style={{ "--delay": `${i * 0.05}s` } as React.CSSProperties}>
                <Link href={item.href} className="flex items-baseline gap-4 py-5" onClick={() => setOpen(false)}>
                  <span className="t-label text-gold-ink">{item.n}</span>
                  <span className="t-display text-[52px]">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-4 t-label">
            <a href={site.resumeRequest}>Résumé on request ↗</a>
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={site.links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
        </nav>
      )}
    </header>
  );
}

/** Monogram: O and M inscribed in a circle in a square, the plan of the Pantheon. */
function Seal() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 text-gold transition-transform duration-700 group-hover:rotate-90" aria-hidden>
      <rect x="0.5" y="0.5" width="39" height="39" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M20 2 V38 M2 20 H38" stroke="var(--gold-faint)" strokeWidth="1" />
      <text
        x="20"
        y="24.5"
        textAnchor="middle"
        style={{ fontFamily: "var(--ff-display)", fontSize: 13, fontWeight: 500, fill: "var(--ink)", letterSpacing: "0.04em" }}
      >
        OM
      </text>
    </svg>
  );
}
