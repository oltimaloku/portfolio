import clsx, { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a /public path with the deploy base path (GitHub Pages serves from /portfolio). */
export function asset(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${BASE_PATH}${path}`;
}

const ROMAN: [number, string][] = [
  [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"],
  [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
];

export function toRoman(n: number): string {
  let out = "";
  for (const [value, glyph] of ROMAN) {
    while (n >= value) {
      out += glyph;
      n -= value;
    }
  }
  return out;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Dates are parsed by hand: `new Date("2023-09-01")` is UTC midnight, which
// renders as Aug 31 anywhere west of Greenwich.
function parts(date: string): { year: number; month?: number; day?: number } {
  const [y, m, d] = date.split("-").map(Number);
  return { year: y, month: m || undefined, day: d || undefined };
}

/** "2025-09" → "Sep 2025" */
export function formatMonth(date: string): string {
  const { year, month } = parts(date);
  return month ? `${MONTHS[month - 1]} ${year}` : String(year);
}

/** "2024-01-15" → "15 Jan 2024" */
export function formatDate(date: string): string {
  const { year, month, day } = parts(date);
  if (!month) return String(year);
  return day ? `${day} ${MONTHS[month - 1]} ${year}` : `${MONTHS[month - 1]} ${year}`;
}

/** Year span for plates: "2023 – 2025", "2025 – now", "2023" */
export function formatYears(start: string, end?: string): string {
  const a = parts(start).year;
  if (!end) return String(a);
  if (end === "present") return `${a} – now`;
  const b = parts(end).year;
  return a === b ? String(a) : `${a} – ${b}`;
}

/** Month span for title blocks: "Sep 2024 → Feb 2025" */
export function formatPeriod(start: string, end?: string): string {
  if (!end) return formatMonth(start);
  return `${formatMonth(start)} → ${end === "present" ? "present" : formatMonth(end)}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
