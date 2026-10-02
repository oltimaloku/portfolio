"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headingRef.current?.querySelectorAll(".word") || [], {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      })
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        );

      // Scroll-triggered fade out as user scrolls past
      gsap.to(sectionRef.current, {
        opacity: 0.3,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 lg:py-40 min-h-[80vh]">
      <Container>
        <div className="max-w-3xl">
          {/* Animated heading - words wrapped for stagger animation */}
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#111827] leading-tight overflow-hidden"
          >
            <span className="word inline-block">Hi!</span>{" "}
            <span className="word inline-block">I&apos;m</span>{" "}
            <span className="word inline-block text-[#DC2626]">Olti</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="mt-8 text-lg md:text-xl text-[#374151] font-[family-name:var(--font-source-serif)] max-w-2xl"
          >
            I&apos;m currently studying{" "}
            <span className="text-[#DC2626] font-medium">Computer Science</span>{" "}
            and <span className="text-[#DC2626] font-medium">Business</span> at
            the University of British Columbia!
          </p>

          {/* CTA */}
          <div ref={ctaRef} className="mt-10">
            <Button
              href="https://www.linkedin.com/in/oltimaloku/"
              external
              size="lg"
              className="group"
            >
              Get in touch
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
