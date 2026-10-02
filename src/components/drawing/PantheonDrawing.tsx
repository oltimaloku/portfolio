"use client";

import { useRef, useState } from "react";
import { buildPantheon, CX, FLOOR, S, VIEWBOX, type Layer } from "./pantheon";

const LAYER_STYLE: Record<Layer, { stroke: string; width: string; dash?: string; animated: boolean }> = {
  construction: { stroke: "var(--gold-soft)", width: "calc(var(--sw) * 0.8)", dash: "3 4", animated: false },
  structure: { stroke: "var(--gold)", width: "calc(var(--sw) * 1.25)", animated: true },
  detail: { stroke: "var(--gold)", width: "calc(var(--sw) * 0.9)", animated: true },
  fine: { stroke: "var(--gold)", width: "calc(var(--sw) * 0.6)", animated: true },
  hidden: { stroke: "var(--gold-soft)", width: "calc(var(--sw) * 0.7)", dash: "4 3", animated: false },
};

// The geometry is fixed, so it's built once per module, not per render.
const { strokes, labels, poche, scaleFills, centre } = buildPantheon();

/** The hero drawing: a section through the Pantheon that plots itself, with a drafting crosshair. */
export default function PantheonDrawing({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  function onMove(e: React.PointerEvent<SVGSVGElement>) {
    if (e.pointerType !== "mouse") return;
    const svg = svgRef.current;
    const ctm = svg?.getScreenCTM();
    if (!svg || !ctm) return;
    const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse());
    setCursor({ x: p.x, y: p.y });
  }

  const vb = VIEWBOX;

  return (
    <svg
      ref={svgRef}
      viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
      className={`pantheon ${className ?? ""}`}
      role="img"
      aria-label="Section drawing of the Pantheon in Rome, showing the 43.3 metre sphere that fits exactly inside its rotunda."
      onPointerMove={onMove}
      onPointerLeave={() => setCursor(null)}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <pattern id="poche" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="var(--gold-soft)" strokeWidth="0.9" />
        </pattern>
        <pattern id="earth" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
          <line x1="0" y1="0" x2="0" y2="9" stroke="var(--gold-faint)" strokeWidth="1" />
        </pattern>
      </defs>

      {/* ground */}
      <rect
        x={96}
        y={FLOOR}
        width={740}
        height={12}
        fill="url(#earth)"
        className="fade"
        style={{ "--delay": "1.2s" } as React.CSSProperties}
      />

      {/* poché: the cut through solid masonry */}
      {poche.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="url(#poche)"
          stroke="none"
          className="fade"
          style={{ "--delay": "2.6s", "--dur": "1.4s" } as React.CSSProperties}
        />
      ))}

      {strokes.map((s, i) => {
        const st = LAYER_STYLE[s.layer];
        return (
          <path
            key={i}
            d={s.d}
            pathLength={st.animated ? 1 : undefined}
            stroke={st.stroke}
            strokeDasharray={st.dash}
            className={st.animated ? "draw" : "fade"}
            style={{ strokeWidth: st.width, "--delay": `${s.delay}s`, "--dur": `${s.dur}s` } as React.CSSProperties}
          />
        );
      })}

      <path
        d={scaleFills}
        fill="var(--gold-soft)"
        className="fade"
        style={{ "--delay": "3.2s" } as React.CSSProperties}
      />

      {labels.map((l, i) => (
        <text
          key={i}
          x={l.x}
          y={l.y}
          textAnchor={l.anchor ?? "middle"}
          transform={l.rotate ? `rotate(${l.rotate} ${l.x} ${l.y})` : undefined}
          className="fade"
          style={
            {
              "--delay": `${l.delay}s`,
              fontFamily: "var(--ff-mono)",
              fontSize: l.size === "sm" ? 7.5 : 9,
              letterSpacing: "0.12em",
              fill: "var(--gold-ink)",
            } as React.CSSProperties
          }
        >
          {l.text}
        </text>
      ))}

      {/* the one red point: the centre of the sphere */}
      <circle
        cx={centre.x}
        cy={centre.y}
        r={2.2}
        fill="var(--rosso)"
        className="fade"
        style={{ "--delay": "3.9s" } as React.CSSProperties}
      />

      {cursor && (
        <g pointerEvents="none">
          <path
            d={`M ${cursor.x} ${vb.y} V ${vb.y + vb.h} M ${vb.x} ${cursor.y} H ${vb.x + vb.w}`}
            stroke="var(--gold)"
            style={{ strokeWidth: "calc(var(--sw) * 0.5)" }}
            strokeDasharray="2 3"
            opacity={0.7}
          />
          <circle cx={cursor.x} cy={cursor.y} r={4} stroke="var(--gold)" style={{ strokeWidth: "calc(var(--sw) * 0.7)" }} />
          <text
            x={cursor.x + 9}
            y={cursor.y - 9}
            style={{ fontFamily: "var(--ff-mono)", fontSize: 8, letterSpacing: "0.1em", fill: "var(--ink-3)" }}
          >
            {`x ${((cursor.x - CX) / S).toFixed(2)}  y ${((FLOOR - cursor.y) / S).toFixed(2)} m`}
          </text>
        </g>
      )}
    </svg>
  );
}
