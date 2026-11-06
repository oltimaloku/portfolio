import Link from "next/link";
import { experience } from "@/lib/site";
import type { Article } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { Arrow, Img, SectionHead, Sheet } from "@/components/folio/primitives";
import Reveal from "@/components/folio/Reveal";

export function Practice() {
  return (
    <section id="practice" className="scroll-mt-24 pt-32 md:pt-48">
      <Sheet>
        <SectionHead
          mark="03"
          label="Experience"
          title={
            <>
              Where the work was made.
            </>
          }
          lede="Product management, mobile, AI tooling, and now my own company."
        />
        <ol className="border-t border-gold-soft">
          {experience.map((r, i) => (
            <Reveal
              as="li"
              key={`${r.org}-${r.title}`}
              delay={i * 0.05}
              className="group grid gap-x-8 gap-y-2 border-b border-gold-faint py-7 transition-colors duration-500 hover:bg-gold-wash md:grid-cols-12 md:px-3"
            >
              <span className="t-label text-gold-ink md:col-span-2 md:pt-2">
                {r.start ? (r.start === r.end ? r.start : `${r.start} – ${r.end}`) : `→ ${r.end}`}
              </span>
              <div className="md:col-span-4">
                <p className="t-title text-[28px]">{r.title}</p>
                {r.project ? (
                  <Link href={`/projects/${r.project}/`} className="group/org inline-flex items-center gap-2 t-title text-[20px] text-ink-2 hover:text-gold-ink transition-colors">
                    {r.org}
                    <Arrow className="h-2 w-3 text-gold opacity-0 -translate-x-1 transition-all group-hover/org:opacity-100 group-hover/org:translate-x-0" />
                  </Link>
                ) : (
                  <p className="t-title text-[20px] text-ink-2">{r.org}</p>
                )}
              </div>
              <p className="text-[16px] leading-relaxed text-ink-2 md:col-span-6 md:pt-1.5 lg:col-span-4">{r.note}</p>
              <span className="t-label-sm text-ink-3 md:col-span-6 md:col-start-7 lg:col-span-2 lg:col-start-auto lg:pt-2.5 lg:text-right">
                {r.url ? (
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="group/site inline-flex items-center gap-1.5 hover:text-ink transition-colors">
                    <span className="link-draw">{r.url.replace(/^https?:\/\/(www\.)?/, "")}</span>
                    <Arrow dir="up-right" className="h-2 w-2.5 text-gold" />
                  </a>
                ) : (
                  r.place
                )}
              </span>
            </Reveal>
          ))}
        </ol>
      </Sheet>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 pt-32 md:pt-48">
      <Sheet>
        <SectionHead mark="04" label="About" title={<>About me.</>} />
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <figure className="mx-auto max-w-[360px] lg:mx-0">
              {/* An arched niche, as if the portrait were set into a wall */}
              <div className="rounded-t-full border border-gold-soft p-2.5">
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-paper-3">
                  <Img
                    src="/images/profile/portrait.webp"
                    alt="Portrait of Olti Maloku"
                    className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
                  />
                </div>
              </div>
              <div className="mx-2.5 h-3 border-x border-b border-gold-soft" />
              <figcaption className="mt-4 flex justify-between t-label-sm text-ink-3">
                <span>Ritratto</span>
                <span>Vancouver</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-7 lg:col-start-6" delay={0.1}>
            <div className="space-y-6 text-[19px] leading-[1.7] text-ink-2 max-w-[60ch]">
              <p className="t-title text-[clamp(28px,2.6vw,36px)] leading-[1.25] text-ink">
                I&rsquo;m Olti. I&rsquo;m from Vancouver and in my last term of Computer Science and Business at UBC.
              </p>
              <p>
                I started as a product manager intern at Edee Care, running an SMS pilot for people with epilepsy, and
                stayed on to build their app as the lead mobile
                engineer. Since then I&rsquo;ve built an AI design canvas at{" "}
                <a href="https://www.withremy.com" target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-gold underline-offset-4 hover:decoration-ink">Remy</a> in San
                Francisco and shipped a CRM to nonprofits at{" "}
                <a href="https://www.meaningful.ca" target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-gold underline-offset-4 hover:decoration-ink">MeaningfulWork</a>.
              </p>
              <p>
                Now I&rsquo;m building <Link href="/projects/neuron/" className="text-ink underline decoration-gold underline-offset-4 hover:decoration-ink">Neuron</Link> on my own: an AI tutor that reads your lecture slides and
                won&rsquo;t let you fake understanding.
              </p>
              <p>
                I lived in Rome for a while, which is where the look of this site comes from. Outside of work: soccer,
                music, travel and training.
              </p>
            </div>
          </Reveal>
        </div>
      </Sheet>
    </section>
  );
}

export function Writing({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;
  return (
    <section id="writing" className="scroll-mt-24 pt-32 md:pt-48">
      <Sheet>
        <SectionHead
          mark="05"
          label="Writing"
          title={<>Notes on learning.</>}
          aside={
            <Link href="/articles/" className="group inline-flex items-center gap-2 t-label text-ink-2 hover:text-ink">
              <span className="link-draw">All writing</span> <Arrow />
            </Link>
          }
        />
        <ol className="border-t border-gold-soft">
          {articles.slice(0, 4).map((a, i) => (
            <Reveal as="li" key={a.slug} delay={i * 0.05} className="border-b border-gold-faint">
              <Link
                href={`/articles/${a.slug}/`}
                className="group grid items-baseline gap-x-8 gap-y-2 py-7 transition-colors duration-500 hover:bg-gold-wash md:grid-cols-12 md:px-3"
              >
                <span className="t-label text-gold-ink md:col-span-2">{formatDate(a.date)}</span>
                <span className="t-title text-[30px] md:col-span-6">{a.title}</span>
                <span className="t-label-sm text-ink-3 md:col-span-2">{a.category}</span>
                <span className="flex items-center justify-between t-label-sm text-ink-3 md:col-span-2">
                  {a.readTime}
                  <Arrow className="text-gold group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ol>
      </Sheet>
    </section>
  );
}
