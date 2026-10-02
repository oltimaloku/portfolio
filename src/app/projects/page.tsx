import { Metadata } from "next";
import Container from "@/components/ui/Container";
import { getAllProjects } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of projects spanning mobile development, web applications, and more.",
};

const iconMap: Record<string, string> = {
  "graduation-cap": "🎓",
  "utensils": "🍳",
  "notes-medical": "💊",
  "map-location-dot": "🗺️",
  "github": "👥",
  "earth-americas": "🌍",
  "reddit": "💬",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="py-20 md:py-32">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-[#111827] mb-6">
            My <span className="text-[#DC2626]">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] font-[family-name:var(--font-source-serif)] max-w-2xl mx-auto">
            A collection of projects I&apos;ve built, from mobile apps to web applications.
            Each represents a learning journey and a problem solved.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block bg-[#FEFDFB] rounded-xl border border-[#D1D5DB]/50 overflow-hidden hover:border-[#DC2626]/50 hover:shadow-lg transition-all duration-300 no-underline"
            >
              {/* Card Header with Icon */}
              <div className="p-6 border-b border-[#D1D5DB]/30 bg-[#F5F2ED]/50">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">
                    {project.icon ? iconMap[project.icon] || "📁" : "📁"}
                  </span>
                  <div>
                    <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#111827] group-hover:text-[#DC2626] transition-colors">
                      {project.title}
                    </h2>
                    {project.date && (
                      <p className="text-sm text-[#9CA3AF] font-[family-name:var(--font-source-serif)]">
                        {new Date(project.date).getFullYear()}
                        {project.endDate && ` - ${new Date(project.endDate).getFullYear()}`}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-[#6B7280] font-[family-name:var(--font-source-serif)] text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#F5F2ED] text-[#4B5563] text-xs font-[family-name:var(--font-inter)] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-[#F5F2ED] text-[#4B5563] text-xs font-[family-name:var(--font-inter)] rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* View Project Link */}
              <div className="px-6 pb-6">
                <span className="text-[#DC2626] text-sm font-[family-name:var(--font-inter)] font-medium group-hover:underline">
                  View Project &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#6B7280] font-[family-name:var(--font-source-serif)]">
              No projects found. Check back soon!
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
