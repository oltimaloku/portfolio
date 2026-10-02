export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  featured: boolean;
  technologies: string[];
  coverImage?: string;
  github?: string;
  live?: string;
  icon?: string;
}

export interface ProjectWithContent extends Project {
  content: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  coverImage?: string;
  published: boolean;
}

export interface ArticleWithContent extends Article {
  content: string;
}
