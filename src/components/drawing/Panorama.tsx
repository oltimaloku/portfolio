import { buildPanorama, W, type Weight } from "./panorama-geometry";
import Reveal from "@/components/folio/Reveal";

const { strokes, labels } = buildPanorama();

const WEIGHT: Record<Weight, { stroke: string; k: number }> = {
  structure: { stroke: "var(--gold)", k: 1 },
  detail: { stroke: "var(--gold)", k: 0.75 },
  fine: { stroke: "var(--gold)", k: 0.5 },
  faint: { stroke: "var(--gold-soft)", k: 0.6 },
};

const SIZE = { sm: 13, md: 22, lg: 30 };

function Drawing({ viewBox, className }: { viewBox: string; className: string }) {
  return (
    <svg viewBox={viewBox} className={className} fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {strokes.map((s, i) => {
        const w = WEIGHT[s.weight];
        const delay = `${(0.1 + (s.x / W) * 2.8).toFixed(2)}s`;
        return (
          <path
            key={i}
            d={s.d}
            fill={s.fill ? "var(--paper)" : "none"}
            stroke={w.stroke}
            pathLength={s.dashed ? undefined : 1}
            strokeDasharray={s.dashed ? "6 8" : undefined}
            className={s.dashed ? "fade-on-reveal" : "draw-on-reveal"}
            style={{ strokeWidth: `calc(var(--pw) * ${w.k})`, "--delay": delay } as React.CSSProperties}
          />
        );
      })}
      {labels.map((l, i) => (
        <text
          key={i}
          x={l.x}
          y={l.y}
          textAnchor={l.anchor ?? "middle"}
          className="fade-on-reveal"
          style={
            {
              "--delay": `${(0.8 + (l.x / W) * 2.8).toFixed(2)}s`,
              fontFamily: l.size === "lg" ? "var(--ff-display)" : "var(--ff-mono)",
              fontSize: SIZE[l.size],
              letterSpacing: l.size === "lg" ? "0.08em" : "0.14em",
              textTransform: l.size === "sm" ? "uppercase" : undefined,
              fill: l.size === "sm" ? "var(--ink-3)" : "var(--gold-ink)",
            } as React.CSSProperties
          }
        >
          {l.text}
        </text>
      ))}
    </svg>
  );
}

/**
 * Vancouver and Rome on one ground line, plotted west to east as it scrolls in.
 * On small screens it splits into two stacked drawings so the lines stay legible.
 */
export default function Panorama() {
  return (
    <Reveal className="panorama">
      <figure>
        <Drawing viewBox="0 20 2400 480" className="hidden h-auto w-full md:block" />
        <div className="space-y-6 md:hidden">
          <Drawing viewBox="0 20 1240 480" className="block h-auto w-full" />
          <Drawing viewBox="1240 20 1160 480" className="block h-auto w-full" />
        </div>
        <figcaption className="mt-6 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t border-gold-faint pt-4">
          <span className="text-[15px] text-ink-3">
            Vancouver&rsquo;s ridge and towers are traced from a photograph; Rome is drawn from its monuments.
          </span>
          <span className="t-label-sm text-gold-ink">Vancouver → Rome · 8,989 km</span>
        </figcaption>
      </figure>
    </Reveal>
  );
}
