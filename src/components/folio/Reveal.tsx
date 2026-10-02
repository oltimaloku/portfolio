"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/** Fades and lifts its children in once they scroll into view. Strokes inside with `draw-on-reveal` plot themselves. */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.shown = "true";
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={{ "--delay": `${delay}s` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
