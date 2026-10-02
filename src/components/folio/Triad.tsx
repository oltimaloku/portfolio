"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Triad as TriadWeights } from "@/lib/types";
import { cn } from "@/lib/utils";

type Key = keyof TriadWeights;

interface TriadProject {
  slug: string;
  title: string;
  tagline: string;
  numeral: string;
  triad: TriadWeights;
}

const R = 150;
const CENTRES: Record<Key, { x: number; y: number }> = {
  design: { x: 300, y: 196 },
  engineering: { x: 218, y: 338 },
  product: { x: 382, y: 338 },
};

export const VIRTUES: { key: Key; latin: string; name: string; line: string; body: string }[] = [
  {
    key: "engineering",
    latin: "Firmitas",
    name: "Engineering",
    line: "It has to stand up.",
    body: "Systems that hold under load: tested, measured and deployed, not demoed.",
  },
  {
    key: "product",
    latin: "Utilitas",
    name: "Product",
    line: "It has to serve someone.",
    body: "Finding the real problem by talking to the people who have it, then cutting everything else.",
  },
  {
    key: "design",
    latin: "Venustas",
    name: "Design",
    line: "It has to delight.",
    body: "Interfaces with a point of view, where every detail was decided rather than defaulted.",
  },
];

// Label positions, outside each circle
const LABELS: Record<Key, { x: number; y: number; anchor: "start" | "middle" | "end" }> = {
  design: { x: 300, y: -12, anchor: "middle" },
  engineering: { x: 62, y: 508, anchor: "start" },
  product: { x: 538, y: 508, anchor: "end" },
};

// Real projects are never pure engineering or pure design, so raw barycentric
// positions all crowd the middle. Distance from the centroid is exaggerated so
// the differences read.
const SPREAD = 2.6;
const CENTROID = {
  x: (CENTRES.engineering.x + CENTRES.product.x + CENTRES.design.x) / 3,
  y: (CENTRES.engineering.y + CENTRES.product.y + CENTRES.design.y) / 3,
};

function place(projects: TriadProject[]) {
  const pts = projects.map((p) => {
    const { engineering: e, product: pr, design: d } = p.triad;
    const sum = e + pr + d || 1;
    const bx = (e * CENTRES.engineering.x + pr * CENTRES.product.x + d * CENTRES.design.x) / sum;
    const by = (e * CENTRES.engineering.y + pr * CENTRES.product.y + d * CENTRES.design.y) / sum;
    return {
      ...p,
      x: CENTROID.x + (bx - CENTROID.x) * SPREAD,
      y: CENTROID.y + (by - CENTROID.y) * SPREAD,
    };
  });
  // Nudge apart points that would overlap
  for (let iter = 0; iter < 40; iter++) {
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[j].x - pts[i].x;
        const dy = pts[j].y - pts[i].y;
        const dist = Math.hypot(dx, dy) || 0.01;
        const min = 34;
        if (dist < min) {
          const push = (min - dist) / 2;
          const ux = dx / dist;
          const uy = dy / dist;
          pts[i].x -= ux * push;
          pts[i].y -= uy * push;
          pts[j].x += ux * push;
          pts[j].y += uy * push;
        }
      }
    }
  }
  return pts;
}

export default function Triad({ projects }: { projects: TriadProject[] }) {
  const [focus, setFocus] = useState<Key | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const points = useMemo(() => place(projects), [projects]);
  const active = points.find((p) => p.slug === hovered);

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
      {/* Legend */}
      <div className="lg:col-span-5 order-2 lg:order-1">
        <ol className="border-t border-gold-soft">
          {VIRTUES.map((v, i) => (
            <li
              key={v.key}
              onMouseEnter={() => setFocus(v.key)}
              onMouseLeave={() => setFocus(null)}
              className={cn(
                "grid grid-cols-[44px_1fr] gap-x-4 border-b border-gold-soft py-6 transition-opacity duration-500",
                focus && focus !== v.key && "opacity-35"
              )}
            >
              <span className="t-display text-[34px] text-gold-ink leading-none pt-1">
                {["I", "II", "III"][i]}
              </span>
              <div>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="t-label text-gold-ink">{v.latin}</span>
                  <span className="t-label text-ink-4">/</span>
                  <span className="t-label text-ink-2">{v.name}</span>
                </div>
                <p className="t-title text-[28px] mt-2 text-ink">{v.line}</p>
                <p className="mt-2 text-ink-3 text-[16px] leading-relaxed max-w-[42ch]">{v.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Diagram */}
      <figure className="lg:col-span-7 order-1 lg:order-2 relative">
        <svg
          viewBox="0 -34 600 580"
          className="w-full h-auto overflow-visible"
          role="img"
          aria-label="Three overlapping circles labelled Firmitas (engineering), Utilitas (product) and Venustas (design), with each project plotted where its work fell between them."
        >
          <defs>
            <clipPath id="clip-eng">
              <circle cx={CENTRES.engineering.x} cy={CENTRES.engineering.y} r={R} />
            </clipPath>
            <clipPath id="clip-prod">
              <circle cx={CENTRES.product.x} cy={CENTRES.product.y} r={R} />
            </clipPath>
            <pattern id="triad-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="6" stroke="var(--gold-soft)" strokeWidth="1" />
            </pattern>
          </defs>

          {/* The overlap of all three: the work */}
          <g clipPath="url(#clip-eng)">
            <g clipPath="url(#clip-prod)">
              <circle
                cx={CENTRES.design.x}
                cy={CENTRES.design.y}
                r={R}
                fill="url(#triad-hatch)"
                className={cn("transition-opacity duration-500", focus ? "opacity-40" : "opacity-100")}
              />
            </g>
          </g>

          {VIRTUES.map((v) => {
            const c = CENTRES[v.key];
            const on = focus === v.key;
            const dim = focus && !on;
            return (
              <g
                key={v.key}
                onMouseEnter={() => setFocus(v.key)}
                onMouseLeave={() => setFocus(null)}
                className="transition-opacity duration-500"
                style={{ opacity: dim ? 0.3 : 1 }}
              >
                {on && <circle cx={c.x} cy={c.y} r={R} fill="var(--gold-wash)" opacity={0.7} />}
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={R}
                  fill="transparent"
                  stroke="var(--gold)"
                  strokeWidth={on ? 1.6 : 1}
                  pathLength={1}
                  className="draw-on-reveal"
                />
                {/* compass centre and a radius, like a drawn construction */}
                <path
                  d={`M ${c.x - 5} ${c.y} h 10 M ${c.x} ${c.y - 5} v 10`}
                  stroke="var(--gold)"
                  strokeWidth={0.8}
                />
                <circle cx={c.x} cy={c.y} r={1.6} fill="var(--gold)" />
                <text
                  x={LABELS[v.key].x}
                  y={LABELS[v.key].y}
                  textAnchor={LABELS[v.key].anchor}
                  style={{
                    fontFamily: "var(--ff-mono)",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    fill: "var(--gold-ink)",
                  }}
                >
                  {v.latin.toUpperCase()}
                </text>
                <text
                  x={LABELS[v.key].x}
                  y={LABELS[v.key].y + 24}
                  textAnchor={LABELS[v.key].anchor}
                  style={{
                    fontFamily: "var(--ff-display)",
                    fontStyle: "italic",
                    fontSize: 22,
                    fill: "var(--ink)",
                  }}
                >
                  {v.name}
                </text>
              </g>
            );
          })}

          {/* leaders from labels to circles */}
          <path
            d="M 300 22 V 46 M 96 488 L 112 448 M 504 488 L 488 448"
            stroke="var(--gold-soft)"
            strokeWidth={0.8}
          />

          {/* Projects */}
          {points.map((p) => {
            const on = hovered === p.slug;
            return (
              <Link key={p.slug} href={`/projects/${p.slug}/`} aria-label={`${p.numeral}. ${p.title}`}>
                <g
                  onMouseEnter={() => setHovered(p.slug)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(p.slug)}
                  onBlur={() => setHovered(null)}
                  className="cursor-pointer"
                >
                  <circle cx={p.x} cy={p.y} r={14} fill="transparent" />
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={on ? 5 : 3.4}
                    fill={on ? "var(--rosso)" : "var(--paper)"}
                    stroke={on ? "var(--rosso)" : "var(--ink)"}
                    strokeWidth={1}
                    style={{ transition: "r 0.3s, fill 0.3s" }}
                  />
                  <text
                    x={p.x + 8}
                    y={p.y - 7}
                    style={{
                      fontFamily: "var(--ff-display)",
                      fontSize: 15,
                      fontWeight: 500,
                      fill: on ? "var(--rosso)" : "var(--ink-2)",
                      transition: "fill 0.3s",
                    }}
                  >
                    {p.numeral}
                  </text>
                </g>
              </Link>
            );
          })}
        </svg>

        <figcaption className="mt-6 min-h-[52px] border-t border-gold-faint pt-4 flex items-baseline gap-4">
          {active ? (
            <>
              <span className="t-label text-rosso shrink-0">Tav. {active.numeral}</span>
              <span>
                <span className="t-title text-[22px] text-ink">{active.title}</span>
                <span className="text-ink-3 text-[15px]"> · {active.tagline}</span>
              </span>
            </>
          ) : (
            <span className="t-label text-ink-3 leading-relaxed">
              Each numeral is a project, placed by how much of it was engineering, product and design.
              The hatched centre is where all three hold.
            </span>
          )}
        </figcaption>
      </figure>
    </div>
  );
}
