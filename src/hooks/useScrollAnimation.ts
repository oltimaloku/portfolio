"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type AnimationType = "fadeUp" | "fadeIn" | "scaleIn" | "stagger";

interface AnimationOptions {
  delay?: number;
  stagger?: number;
  start?: string;
  duration?: number;
}

/**
 * Reusable hook for scroll-triggered GSAP animations
 *
 * @param type - The type of animation to apply
 * @param options - Optional configuration for the animation
 * @returns A ref to attach to the element(s) to animate
 *
 * @example
 * // Basic fade up animation
 * const ref = useScrollAnimation("fadeUp");
 * return <div ref={ref}>Content</div>
 *
 * @example
 * // Staggered children animation
 * const ref = useScrollAnimation("stagger", { stagger: 0.1 });
 * return <div ref={ref}><Card /><Card /><Card /></div>
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  type: AnimationType,
  options?: AnimationOptions
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const animations = {
      fadeUp: { y: 60, opacity: 0 },
      fadeIn: { opacity: 0 },
      scaleIn: { scale: 0.8, opacity: 0 },
      stagger: { y: 80, opacity: 0 },
    };

    const ctx = gsap.context(() => {
      const targets =
        type === "stagger" ? ref.current?.children : ref.current;

      gsap.from(targets, {
        ...animations[type],
        duration: options?.duration || 0.8,
        delay: options?.delay || 0,
        stagger: options?.stagger || 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: options?.start || "top 85%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [type, options?.delay, options?.stagger, options?.start, options?.duration]);

  return ref;
}
