"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BackgroundArt() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Future parallax effects can be added here
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Simple cream background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #FAF8F5 0%, #F5F2ED 50%, #FAF8F5 100%)",
        }}
      />

      {/* Subtle paper texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(/images/backgrounds/drawings/old_paper_texture.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "multiply",
        }}
      />

      {/* Vancouver skyline outline - faint at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-[0.06]"
        style={{
          backgroundImage:
            "url(/images/backgrounds/vancouver_skyline/vancouver_outline.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
