import Hero from "@/components/home/Hero";
import { About, Practice, Writing } from "@/components/home/Sections";
import { Catalogue } from "@/components/folio/Plates";
import { SectionHead, Sheet } from "@/components/folio/primitives";
import Reveal from "@/components/folio/Reveal";
import Triad from "@/components/folio/Triad";
import { getAllArticles, getAllProjects } from "@/lib/content";

export default function Home() {
  const projects = getAllProjects();
  const articles = getAllArticles();

  return (
    <>
      <Hero plates={projects.length} />

      <section id="method" className="scroll-mt-24 pt-32 md:pt-44">
        <Sheet>
          <SectionHead
            mark="01"
            latin="Metodo"
            title={
              <>
                Firmitas, utilitas, <em className="text-gold-ink">venustas.</em>
              </>
            }
            lede={
              <>
                Two thousand years ago Vitruvius wrote that a building must be sound, useful and beautiful. I hold
                software to the same three, and I do my best work where they overlap.
              </>
            }
          />
          <Reveal>
            <Triad
              projects={projects.map(({ slug, title, tagline, numeral, triad }) => ({
                slug,
                title,
                tagline,
                numeral,
                triad,
              }))}
            />
          </Reveal>
        </Sheet>
      </section>

      <section id="work" className="scroll-mt-24 pt-32 md:pt-48">
        <Sheet>
          <SectionHead
            mark="02"
            latin="Opere"
            title={
              <>
                Selected works, <em className="text-gold-ink">drawn to scale.</em>
              </>
            }
            lede="Each plate is sized by the size of the project. The two largest took years; the smallest took a few weeks of learning something new."
          />
          <Catalogue projects={projects} />
        </Sheet>
      </section>

      <Practice />
      <About />
      <Writing articles={articles} />
    </>
  );
}
