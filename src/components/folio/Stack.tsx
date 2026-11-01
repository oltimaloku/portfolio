import {
  siAndroid,
  siApple,
  siClaude,
  siDart,
  siDocker,
  siExpress,
  siFastapi,
  siFirebase,
  siFlask,
  siFlutter,
  siGithub,
  siGooglemaps,
  siMongodb,
  siMui,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPython,
  siReact,
  siSupabase,
  siSwift,
  siSwr,
  siTldraw,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";
import { cn } from "@/lib/utils";

/** Stack names as written in the project front matter → their logo. Anything missing gets a plain mark. */
const icons: Record<string, SimpleIcon> = {
  "Next.js": siNextdotjs,
  React: siReact,
  TypeScript: siTypescript,
  Python: siPython,
  FastAPI: siFastapi,
  Postgres: siPostgresql,
  PostgreSQL: siPostgresql,
  Swift: siSwift,
  SwiftUI: siSwift,
  UIKit: siApple,
  Vision: siApple,
  Combine: siApple,
  "Apple HealthKit": siApple,
  "Health Connect": siAndroid,
  Claude: siClaude,
  "Claude Agent SDK": siClaude,
  Docker: siDocker,
  Flutter: siFlutter,
  Dart: siDart,
  "Node.js": siNodedotjs,
  Express: siExpress,
  MongoDB: siMongodb,
  Firebase: siFirebase,
  Flask: siFlask,
  "Google Maps": siGooglemaps,
  "GitHub API": siGithub,
  MUI: siMui,
  SWR: siSwr,
  Supabase: siSupabase,
  tldraw: siTldraw,
  Java: siOpenjdk,
};

function Mark({ name }: { name: string }) {
  const icon = icons[name];
  if (!icon) {
    // A small square-in-circle, the site's monogram motif, for tools without a logo
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="h-3.5 w-3.5 shrink-0 text-gold">
        <rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-3.5 w-3.5 shrink-0 fill-current">
      <path d={icon.path} />
    </svg>
  );
}

/** The tools a project was built with, each with its logo. `max` trims the list and shows "+n". */
export default function Stack({ items, max, className }: { items: string[]; max?: number; className?: string }) {
  const shown = max ? items.slice(0, max) : items;
  return (
    <ul className={cn("flex flex-wrap gap-x-4 gap-y-2", className)}>
      {shown.map((t) => (
        <li key={t} className="inline-flex items-center gap-1.5 t-label-sm text-ink-2">
          <Mark name={t} />
          {t}
        </li>
      ))}
      {max && items.length > max && <li className="t-label-sm text-ink-4 self-center">+{items.length - max}</li>}
    </ul>
  );
}
