import { site } from "@/lib/site";
import { asset } from "@/lib/utils";
import Arcade from "@/components/drawing/Arcade";
import Reveal from "@/components/folio/Reveal";
import { Arrow, Sheet } from "@/components/folio/primitives";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { label: "LinkedIn", href: site.links.linkedin },
    { label: "GitHub", href: site.links.github },
    { label: "Résumé", href: asset(site.resume) },
  ];

  return (
    <footer id="contact" className="mt-32 md:mt-48">
      <Sheet>
        <div className="flex items-center gap-4 border-t border-gold-soft pt-4">
          <span className="t-label text-gold-ink">§ 06</span>
          <span className="h-px w-8 bg-gold-soft" />
          <span className="t-label text-ink-3">Contatti</span>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <h2 className="t-display text-[clamp(56px,8vw,128px)] lg:col-span-8">
            Let&rsquo;s <em className="text-gold-ink">connect.</em>
          </h2>
          <div className="lg:col-span-4 lg:pt-6">
            <ul className="border-t border-gold-faint">
              {links.map((l) => (
                <li key={l.label} className="border-b border-gold-faint">
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 t-label text-ink"
                  >
                    <span className="link-draw">{l.label}</span>
                    <Arrow dir="up-right" className="text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Sheet>

      <Reveal className="mt-24 md:mt-32">
        <Arcade className="h-[120px] w-full md:h-[170px]" />
      </Reveal>

      <div className="border-t border-gold-soft">
        <Sheet className="flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
          <span className="t-label-sm text-ink-3">© {year} {site.name}</span>
          <span className="t-label-sm text-ink-3">Set in Cormorant Garamond, Newsreader & IBM Plex Mono</span>
          <span className="t-label-sm text-ink-3">Drawn in Vancouver, after Roma</span>
          <a href="#top" className="t-label-sm text-gold-ink hover:text-ink transition-colors">
            Back to top ↑
          </a>
        </Sheet>
      </div>
    </footer>
  );
}
