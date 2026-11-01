import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type {
  Article,
  ArticleWithContent,
  Heading,
  Project,
  ProjectLink,
  ProjectScale,
  ProjectWithContent,
} from "./types";
import { slugify, toRoman } from "./utils";

const projectsDirectory = path.join(process.cwd(), "content/projects");
const articlesDirectory = path.join(process.cwd(), "content/articles");

// ================== Projects ==================
//
// Adding a project: copy content/projects/_template.mdx to <slug>.mdx, put its
// images in public/images/projects/<slug>/, run `npm run images`. Frontmatter
// is checked here, so a missing field fails the build with a clear message.

const SCALES: ProjectScale[] = ["large", "medium", "small"];
const MONTH = /^\d{4}-\d{2}$/;

function fail(file: string, message: string): never {
  throw new Error(`content/projects/${file}: ${message}`);
}

function parseProject(file: string): ProjectWithContent {
  const slug = file.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(projectsDirectory, file), "utf8");
  const { data, content } = matter(raw);

  for (const key of ["title", "tagline", "summary", "scale", "start", "role"]) {
    if (!data[key]) fail(file, `missing "${key}"`);
  }
  if (!SCALES.includes(data.scale)) fail(file, `"scale" must be one of ${SCALES.join(", ")}`);
  if (!MONTH.test(String(data.start))) fail(file, `"start" must look like "2025-09"`);
  if (data.end && data.end !== "present" && !MONTH.test(String(data.end))) {
    fail(file, `"end" must look like "2025-09" or be "present"`);
  }
  const triad = data.triad ?? {};
  for (const key of ["engineering", "product", "design"]) {
    if (typeof triad[key] !== "number") fail(file, `"triad.${key}" must be a number`);
  }

  return {
    slug,
    title: data.title,
    tagline: data.tagline,
    summary: data.summary,
    scale: data.scale,
    order: data.order,
    start: String(data.start),
    end: data.end ? String(data.end) : undefined,
    role: data.role,
    team: data.team,
    platform: data.platform,
    stack: data.stack ?? [],
    status: data.status,
    links: (data.links ?? []) as ProjectLink[],
    cover: data.cover,
    coverAlt: data.coverAlt,
    coverFit: data.coverFit,
    coverInset: data.coverInset,
    triad,
    evolvedFrom: data.evolvedFrom,
    evolvedInto: data.evolvedInto,
    index: 0,
    numeral: "",
    content,
    headings: extractHeadings(content),
  };
}

function extractHeadings(content: string): Heading[] {
  return content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.slice(3).trim();
      return { id: slugify(text), text };
    });
}

function endKey(p: Project): string {
  return p.end === "present" ? "9999-99" : (p.end ?? p.start);
}

let cache: ProjectWithContent[] | null = null;

/** Every project, in catalogue order: by scale, then `order`, then most recent. Numbered I, II, III… */
function loadProjects(): ProjectWithContent[] {
  if (cache && process.env.NODE_ENV === "production") return cache;
  const files = fs
    .readdirSync(projectsDirectory)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"));

  const projects = files.map(parseProject).sort((a, b) => {
    const s = SCALES.indexOf(a.scale) - SCALES.indexOf(b.scale);
    if (s !== 0) return s;
    if (a.order !== undefined || b.order !== undefined) {
      return (a.order ?? Infinity) - (b.order ?? Infinity);
    }
    return endKey(b).localeCompare(endKey(a));
  });

  projects.forEach((p, i) => {
    p.index = i + 1;
    p.numeral = toRoman(i + 1);
  });
  cache = projects;
  return projects;
}

export function getAllProjects(): Project[] {
  return loadProjects().map(({ content: _c, headings: _h, ...p }) => p);
}

export function getProjectSlugs(): string[] {
  return loadProjects().map((p) => p.slug);
}

export function getProjectBySlug(slug: string): ProjectWithContent | null {
  return loadProjects().find((p) => p.slug === slug) ?? null;
}

/** Previous and next plates, wrapping around. */
export function getAdjacentProjects(slug: string): { prev: Project; next: Project } {
  const all = getAllProjects();
  const i = all.findIndex((p) => p.slug === slug);
  return {
    prev: all[(i - 1 + all.length) % all.length],
    next: all[(i + 1) % all.length],
  };
}

// ================== Articles ==================

export function getArticleSlugs(): string[] {
  try {
    return fs
      .readdirSync(articlesDirectory)
      .filter((file) => file.endsWith(".mdx") && !file.startsWith("_"))
      .map((file) => file.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export function getArticleBySlug(slug: string): ArticleWithContent | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: String(data.date || ""),
      category: data.category || "General",
      tags: data.tags || [],
      readTime: readingTime(content).text,
      coverImage: data.coverImage,
      published: data.published !== false,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllArticles(): Article[] {
  return getArticleSlugs()
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is ArticleWithContent => a !== null && a.published)
    .map(({ content: _c, ...article }) => article)
    .sort((a, b) => b.date.localeCompare(a.date));
}
