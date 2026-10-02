"use client";

import Container from "@/components/ui/Container";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Project data
const projects = [
  {
    name: "Lupe",
    slug: "lupe",
    description:
      "An educational mobile app leveraging the Feynman Technique, allowing users to learn by explaining concepts in their own words. Features voice-to-text capabilities using Whisper.cpp and AI-powered response grading.",
    technologies: ["SwiftUI", "OpenAI", "Whisper.cpp"],
    icon: "🎓",
  },
  {
    name: "ChefAI",
    slug: "chefai",
    description:
      "An innovative iOS app that helps manage your kitchen inventory through computer vision. Build your pantry by scanning barcodes or photos, then get AI-generated recipes based on available ingredients.",
    technologies: ["SwiftUI", "Vision", "AI"],
    icon: "🍳",
  },
  {
    name: "IDEA",
    slug: "idea",
    description:
      "A cross-platform mobile application for epilepsy tracking, integrating with Apple Health and Google Fit. Features seizure logging, pattern visualization, and personalized health insights.",
    technologies: ["Flutter", "TypeScript", "MongoDB", "Node.js"],
    icon: "💊",
  },
  {
    name: "CampusQuery",
    slug: "campusquery",
    description:
      "A web application that transforms UBC campus data into an interactive experience with a RESTful API, interactive map interface, and detailed tabular views.",
    technologies: ["TypeScript", "React", "Express"],
    icon: "🗺️",
  },
  {
    name: "GithubMyFollowers",
    slug: "github-followers",
    description:
      "A native iOS application built to master programmatic UIKit development, providing a streamlined interface for managing and interacting with GitHub followers.",
    technologies: ["UIKit", "Swift"],
    icon: "👥",
  },
  {
    name: "Geo Real",
    slug: "georeal",
    description:
      "A cross-platform app enabling users to create location-based picture galleries. Create 'Geo Spheres' tied to specific locations for communal photo collections.",
    technologies: ["Flutter", "Python", "Firebase"],
    icon: "🌍",
  },
  {
    name: "Reddit DBMS",
    slug: "reddit-dbms",
    description:
      "A robust database management system for a social media platform inspired by Reddit. Built with SQL and Java, featuring user posts, communities, and commendations.",
    technologies: ["Java", "MySQL", "Oracle"],
    icon: "💬",
  },
];

export default function ProjectsPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.set(headerRef.current, { y: 60, opacity: 0 });
      gsap.to(headerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      // Cards stagger animation - set initial state first
      const cards = gsap.utils.toArray(".project-card");
      gsap.set(cards, { y: 80, opacity: 0 });
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 md:py-32">
      <Container>
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-lg md:text-xl text-[#6B7280] font-[family-name:var(--font-source-serif)] mb-4">
            A few of my creative endeavors.
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827]">
            Curious to <span className="text-[#DC2626]">see</span> my work?
          </h2>
        </div>

        {/* Projects Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-card group block relative bg-[#FEFDFB] overflow-hidden transition-all duration-300 no-underline hover:shadow-[0_0_30px_rgba(212,175,55,0.15),0_0_60px_rgba(220,38,38,0.1)]"
            >
              {/* Animated beam border on hover */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                <span
                  className="absolute inset-0 animate-[spin_4s_linear_infinite]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0%, transparent 25%, #D4AF37 40%, #DC2626 60%, transparent 75%, transparent 100%)",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1.5px",
                  }}
                />
              </span>

              {/* Static border */}
              <span
                className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none z-20"
                style={{
                  background: "rgba(209,213,219,0.5)",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                  padding: "1px",
                }}
              />

              {/* Card Header with Icon */}
              <div className="relative z-10 p-6 border-b border-[#D1D5DB]/30 bg-[#F5F2ED]/50">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{project.icon}</span>
                  <h3 className="text-xl font-semibold text-[#111827] group-hover:text-[#DC2626] transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="relative z-10 p-6">
                <p className="text-[#6B7280] font-[family-name:var(--font-source-serif)] text-sm leading-relaxed mb-4 line-clamp-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#F5F2ED] text-[#4B5563] text-xs font-[family-name:var(--font-inter)] border border-[#D1D5DB]/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-[#F5F2ED] text-[#4B5563] text-xs font-[family-name:var(--font-inter)] border border-[#D1D5DB]/50">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* View Project Link */}
              <div className="relative z-10 px-6 pb-6">
                <span className="text-[#DC2626] text-sm font-[family-name:var(--font-inter)] font-medium group-hover:text-[#D4AF37] transition-colors duration-300">
                  View Project &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
