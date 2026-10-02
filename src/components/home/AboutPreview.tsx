"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(headerRef.current, { y: 60, opacity: 0 });
      gsap.set(imageRef.current, { scale: 0.8, opacity: 0 });
      gsap.set(bioRef.current, { y: 40, opacity: 0 });
      gsap.set(buttonRef.current, { y: 20, opacity: 0 });

      // Sequential timeline animation for the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.to(headerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          imageRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          bioRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          buttonRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 md:py-32 bg-[#F5F2ED]/50"
    >
      <Container>
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827]">
            About me
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div ref={imageRef} className="flex justify-center mb-10">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#DC2626] shadow-lg hover:border-[#D4AF37] transition-colors">
              <Image
                src="/images/profile/profile_photo.png"
                alt="Olti Maloku"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div
            ref={bioRef}
            className="space-y-6 text-center font-[family-name:var(--font-source-serif)] text-[#374151] text-lg leading-relaxed"
          >
            <p>
              I am currently in my third year of studies at the University of
              British Columbia. Some of my passions outside of school include
              soccer, music, travelling, and fitness.
            </p>

            <p>
              Beyond these interests, my fascination with the world of
              technology plays a significant role in my pursuits. My technical
              interests primarily focus on mobile app development and web
              development. Recently, I have found myself drawn to the space of
              virtual reality. These areas not only captivate my curiosity but
              also fuel my ambition to build and create innovative solutions.
            </p>

            <p>
              Being part of{" "}
              <a
                href="https://www.ubclaunchpad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DC2626] hover:text-[#D4AF37] transition-colors"
              >
                Launch Pad
              </a>
              , UBC&apos;s software engineering club, is one of my current
              pursuits. Collaborating with like-minded peers in a dynamic
              setting not only fosters a deeper connection with the university
              community but also helps build long-lasting relationships.
            </p>

            <p>
              For a detailed overview of my professional journey and projects,
              feel free to explore my resume!
            </p>
          </div>

          {/* Resume Button */}
          <div ref={buttonRef} className="mt-10 text-center">
            <Button
              href="/resume/Resume-Olti.pdf"
              variant="outline"
              size="lg"
              external
            >
              View Resume
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
