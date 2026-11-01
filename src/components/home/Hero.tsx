import PantheonDrawing from "@/components/drawing/PantheonDrawing";
import { Arrow, ButtonLink } from "@/components/folio/primitives";
import { site } from "@/lib/site";
import { toRoman } from "@/lib/utils";

const COLUMNS = ["A", "B", "C", "D", "E", "F", "G", "H"];
const ROWS = ["1", "2", "3", "4", "5"];

/** Frontispiece: the page is a drawing sheet with a border, grid references and a title block. */
export default function Hero({ plates }: { plates: number }) {
  const now = new Date();
  const month = now.toLocaleString("en-US", { month: "short" });

  return (
    <section id="top" className="relative pt-[68px]">
      <div className="relative mx-auto max-w-[1440px] px-3 md:px-6 pt-4 md:pt-6">
        {/* Sheet border: an outer hairline and an inner rule, with grid references between them */}
        <div className="relative border border-gold-soft p-[5px] fade" style={{ "--delay": "0s" } as React.CSSProperties}>
          <div className="pointer-events-none absolute inset-x-[5px] top-0 hidden h-[5px] md:flex" aria-hidden>
            {COLUMNS.map((c) => (
              <span key={c} className="flex-1 border-l border-gold-faint first:border-l-0" />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-x-6 -top-[15px] hidden justify-around md:flex" aria-hidden>
            {COLUMNS.map((c) => (
              <span key={c} className="t-label-sm text-gold">{c}</span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-6 -left-[14px] hidden flex-col justify-around md:flex" aria-hidden>
            {ROWS.map((r) => (
              <span key={r} className="t-label-sm text-gold">{r}</span>
            ))}
          </div>

          <div className="relative flex min-h-[calc(100svh-68px-44px)] flex-col border border-gold-faint">
            <div className="grid flex-1 lg:grid-cols-12">
              {/* Statement */}
              <div className="relative z-10 flex flex-col justify-center px-6 pb-10 pt-6 md:px-12 lg:col-span-5 lg:py-16 lg:pr-0">
                <p className="t-label text-gold-ink rise" style={{ "--delay": "0.2s" } as React.CSSProperties}>
                  Portfolio · {toRoman(now.getFullYear())}
                </p>
                <h1 className="mt-6 t-display text-[clamp(84px,10vw,160px)]">
                  <span className="block rise" style={{ "--delay": "0.35s" } as React.CSSProperties}>
                    Olti
                  </span>
                  <span className="block italic text-gold-ink rise -mt-[0.06em] pl-[0.5em]" style={{ "--delay": "0.5s" } as React.CSSProperties}>
                    Maloku
                  </span>
                </h1>

                <div className="mt-9 flex items-center gap-4 rise" style={{ "--delay": "0.7s" } as React.CSSProperties}>
                  <span className="h-px w-10 bg-gold" />
                  <span className="t-label text-ink">{site.role}</span>
                </div>
                <p className="mt-5 t-lede max-w-[30ch] rise" style={{ "--delay": "0.8s" } as React.CSSProperties}>
                  I design, build and ship software, from the first user interview to the last migration. Right now
                  that&rsquo;s <em className="text-ink">Neuron</em>, an AI tutor that never gives the answer.
                </p>

                <div className="mt-10 flex flex-wrap gap-3 rise" style={{ "--delay": "0.95s" } as React.CSSProperties}>
                  <ButtonLink href="/#work" solid>
                    See the work <Arrow dir="down" className="h-2 w-3" />
                  </ButtonLink>
                  <ButtonLink href={site.resumeRequest}>
                    Résumé on request <Arrow dir="up-right" className="h-2 w-3" />
                  </ButtonLink>
                </div>
              </div>

              {/* Drawing */}
              <div className="relative order-first flex flex-col justify-center px-2 pt-6 md:px-8 lg:order-none lg:col-span-7 lg:py-10">
                <PantheonDrawing className="w-full h-auto lg:w-[104%] max-w-none" />
              </div>
            </div>

            {/* Title block */}
            <dl className="grid grid-cols-2 border-t border-gold-faint sm:grid-cols-3 lg:ml-auto lg:w-[58%] lg:grid-cols-[1.4fr_1fr_0.8fr_1fr] lg:border-l">
              {[
                ["Soggetto", "Pantheon, Roma · c. 125 AD"],
                ["Vista", "Sezione A–A"],
                ["Scala", "1 : 400"],
                ["Tavole", `${toRoman(plates)} · ${month} ${now.getFullYear()}`],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  className="border-gold-faint px-4 py-3 md:px-5 [&:not(:first-child)]:border-l max-sm:[&:nth-child(3)]:border-l-0 max-sm:[&:nth-child(n+3)]:border-t fade"
                  style={{ "--delay": `${3.6 + i * 0.08}s` } as React.CSSProperties}
                >
                  <dt className="t-label-sm text-ink-4">{k}</dt>
                  <dd className="mt-1 t-label text-ink-2 normal-case tracking-[0.06em]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p
          className="mt-4 mb-2 max-w-[70ch] px-1 text-[14px] italic text-ink-3 fade"
          style={{ "--delay": "4s" } as React.CSSProperties}
        >
          The Pantheon in Rome. Its dome is exactly as high as it is wide, so a sphere 43.3 m across fits inside.
        </p>
      </div>
    </section>
  );
}
