import { ButtonLink, Sheet } from "@/components/folio/primitives";

/** A column that didn't survive. */
function FallenColumn() {
  return (
    <svg viewBox="0 0 520 220" className="mx-auto w-full max-w-[520px]" fill="none" stroke="var(--gold)" strokeLinecap="round" aria-hidden>
      <path d="M 10 200 H 510" strokeWidth="1" pathLength={1} className="draw" />
      {/* standing stump */}
      <path
        d="M 70 200 v -6 h 60 v 6 M 76 194 v -5 h 48 v 5 M 82 189 V 120 L 92 112 L 100 124 L 110 108 L 118 120 V 189"
        strokeWidth="1"
        pathLength={1}
        className="draw"
        style={{ "--delay": "0.3s" } as React.CSSProperties}
      />
      <path d="M 92 186 V 128 M 100 186 V 130 M 108 186 V 124" stroke="var(--gold-soft)" strokeWidth="0.8" pathLength={1} className="draw" style={{ "--delay": "0.8s" } as React.CSSProperties} />
      {/* fallen drums */}
      {[
        [170, 200, -4],
        [262, 200, 3],
        [352, 200, -2],
      ].map(([x, y, r], i) => (
        <g key={i} transform={`rotate(${r} ${x + 42} ${y - 18})`}>
          <path
            d={`M ${x} ${y} h 84 v -36 h -84 Z M ${x} ${y - 12} h 84 M ${x} ${y - 24} h 84`}
            strokeWidth="1"
            pathLength={1}
            className="draw"
            style={{ "--delay": `${0.6 + i * 0.25}s` } as React.CSSProperties}
          />
        </g>
      ))}
      {/* capital, on its side */}
      <path
        d="M 448 200 l -6 -44 h 46 l -6 44 Z M 436 156 h 58 v -6 h -58 Z"
        strokeWidth="1"
        pathLength={1}
        className="draw"
        style={{ "--delay": "1.4s" } as React.CSSProperties}
      />
    </svg>
  );
}

export default function NotFound() {
  return (
    <section className="pt-[68px]">
      <Sheet className="flex min-h-[80svh] flex-col items-center justify-center py-24 text-center">
        <FallenColumn />
        <p className="mt-10 t-label text-gold-ink">Error 404</p>
        <h1 className="mt-4 t-display text-[clamp(56px,8vw,112px)]">
          This page is in ruins.
        </h1>
        <p className="mt-6 t-lede max-w-[40ch]">
          Whatever stood here didn&rsquo;t survive, or never existed. The rest of the site is in better shape.
        </p>
        <div className="mt-10">
          <ButtonLink href="/" solid>
            Back to the frontispiece
          </ButtonLink>
        </div>
      </Sheet>
    </section>
  );
}
