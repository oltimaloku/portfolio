import clsx, { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateRange(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const startFormatted = start.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  if (!endDate) {
    return `${startFormatted} - Present`;
  }

  const end = new Date(endDate);
  const endFormatted = end.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return `${startFormatted} - ${endFormatted}`;
}
