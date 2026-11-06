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
            label="Method"
            title={
              <>
                How I work.
              </>
            }
            lede="I like owning things end to end: talking to the people who'll use it, designing it, and building it. The projects I'm proudest of needed all three. Here's roughly where each one landed."
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
            label="Work"
            title="My Work"
            lede="Each project is drawn at its real size. The two largest took years; the smallest took a few weeks of learning something new."
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
