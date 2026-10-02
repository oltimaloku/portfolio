/**
 * An arcade in elevation: arches between piers with engaged columns, after
 * the lower order of the Colosseum. Drawn when it scrolls into view.
 */
export default function Arcade({ bays = 12, className }: { bays?: number; className?: string }) {
  const bay = 100;
  const w = bays * bay;
  const base = 168;
  const spring = 96;
  const r = 30;
  const top = 34;

  let arches = "";
  let columns = "";
  let keystones = "";
  for (let i = 0; i < bays; i++) {
    const cx = i * bay + bay / 2;
    arches += `M ${cx - r} ${base} V ${spring} A ${r} ${r} 0 0 1 ${cx + r} ${spring} V ${base} `;
    arches += `M ${cx - r - 6} ${spring} A ${r + 6} ${r + 6} 0 0 1 ${cx + r + 6} ${spring} `;
    arches += `M ${cx - r - 8} ${spring} h 8 M ${cx + r} ${spring} h 8 `;
    keystones += `M ${cx - 4} ${spring - r - 6} L ${cx - 3} ${spring - r - 14} H ${cx + 3} L ${cx + 4} ${spring - r - 6} `;
  }
  for (let i = 0; i <= bays; i++) {
    const x = i * bay;
    columns += `M ${x - 6} ${base} V ${top + 22} M ${x + 6} ${base} V ${top + 22} `;
    columns += `M ${x - 9} ${top + 22} h 18 v -5 h -18 Z M ${x - 9} ${base} h 18 v -5 h -18 Z `;
  }
  const entablature = `M 0 ${top} H ${w} M 0 ${top + 8} H ${w} M 0 ${top + 12} H ${w} M 0 ${top + 17} H ${w} M 0 ${base} H ${w}`;

  return (
    <svg
      viewBox={`-12 ${top - 4} ${w + 24} ${base - top + 10}`}
      preserveAspectRatio="xMidYMax slice"
      className={className}
      fill="none"
      stroke="var(--gold)"
      strokeLinecap="round"
      aria-hidden
    >
      <path d={entablature} strokeWidth="1" pathLength={1} className="draw-on-reveal" />
      <path d={columns} strokeWidth="0.8" pathLength={1} className="draw-on-reveal" style={{ "--delay": "0.3s" } as React.CSSProperties} />
      <path d={arches} strokeWidth="1" pathLength={1} className="draw-on-reveal" style={{ "--delay": "0.5s" } as React.CSSProperties} />
      <path d={keystones} strokeWidth="0.8" stroke="var(--gold-soft)" pathLength={1} className="draw-on-reveal" style={{ "--delay": "1s" } as React.CSSProperties} />
    </svg>
  );
}
