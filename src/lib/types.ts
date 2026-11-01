/**
 * How much room a project gets on the page.
 *   large  — a full-width plate with figure and stack (Neuron, IDEA)
 *   medium — a half-sheet plate with a figure (Geo Real)
 *   small  — an index card in the "minor works" grid
 */
export type ProjectScale = "large" | "medium" | "small";

/** Where a project sits between the three Vitruvian virtues. Any positive numbers; they're normalised. */
export interface Triad {
  engineering: number;
  product: number;
  design: number;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  /** One line, shown under the title. */
  tagline: string;
  /** Two or three sentences for the plate. */
  summary: string;
  scale: ProjectScale;
  /** Tie-breaker within a scale; lower comes first. Defaults to newest first. */
  order?: number;
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM" or "present" */
  end?: string;
  role: string;
  team?: string;
  platform?: string;
  stack: string[];
  status?: string;
  links: ProjectLink[];
  cover?: string;
  coverAlt?: string;
  /** "contain" (default) floats transparent mockups on the grid; "cover" fills the frame. */
  coverFit?: "contain" | "cover";
  /** Optional second image (usually a phone) laid over the cover's corner on large plates. */
  coverInset?: string;
  triad: Triad;
  evolvedFrom?: string;
  evolvedInto?: string;

  /** Computed: position in the catalogue, 1-based. Rendered as a Roman numeral. */
  index: number;
  numeral: string;
}

export interface ProjectWithContent extends Project {
  content: string;
  headings: Heading[];
}

export interface Heading {
  id: string;
  text: string;
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
