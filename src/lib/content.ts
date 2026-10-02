import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type {
  Project,
  ProjectWithContent,
  Article,
  ArticleWithContent,
} from "./types";

const projectsDirectory = path.join(process.cwd(), "content/projects");
const articlesDirectory = path.join(process.cwd(), "content/articles");

// ================== Projects ==================

export function getProjectSlugs(): string[] {
  try {
    const files = fs.readdirSync(projectsDirectory);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export function getProjectBySlug(slug: string): ProjectWithContent | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      endDate: data.endDate,
      featured: data.featured || false,
      technologies: data.technologies || [],
      coverImage: data.coverImage,
      github: data.github,
      live: data.live,
      icon: data.icon,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is ProjectWithContent => project !== null)
    .map(({ content, ...project }) => project)
    .sort((a, b) => {
      // Sort by date descending
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

  return projects;
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

// ================== Articles ==================

export function getArticleSlugs(): string[] {
  try {
    const files = fs.readdirSync(articlesDirectory);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export function getArticleBySlug(slug: string): ArticleWithContent | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      category: data.category || "General",
      tags: data.tags || [],
      readTime: stats.text,
      coverImage: data.coverImage,
      published: data.published !== false, // Default to true
      content,
    };
  } catch {
    return null;
  }
}

export function getAllArticles(): Article[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is ArticleWithContent => article !== null)
    .filter((article) => article.published)
    .map(({ content, ...article }) => article)
    .sort((a, b) => {
      // Sort by date descending
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

  return articles;
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  );
}

export function getArticlesByTag(tag: string): Article[] {
  return getAllArticles().filter((article) =>
    article.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getAllCategories(): string[] {
  const articles = getAllArticles();
  const categories = new Set(articles.map((article) => article.category));
  return Array.from(categories);
}

export function getAllTags(): string[] {
  const articles = getAllArticles();
  const tags = new Set(articles.flatMap((article) => article.tags));
  return Array.from(tags);
}
