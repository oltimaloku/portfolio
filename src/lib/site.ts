/** Everything about Olti that isn't a project or an article. Edit here, not in components. */
export const site = {
  name: "Olti Maloku",
  role: "Product builder",
  location: "Vancouver",
  description:
    "Olti Maloku is a product builder working where design, product and engineering meet. Currently building Neuron, an AI tutor that teaches from your own course material.",
  url: "https://oltimaloku.github.io/portfolio",
  email: "oltimaloku03@gmail.com",
  /** The résumé isn't published; this opens an email asking for it. */
  resumeRequest: "mailto:oltimaloku03@gmail.com?subject=R%C3%A9sum%C3%A9%20request",
  links: {
    linkedin: "https://www.linkedin.com/in/oltimaloku/",
    github: "https://github.com/oltimaloku",
  },
};

export interface Role {
  start: string;
  end: string;
  title: string;
  org: string;
  place: string;
  note: string;
  /** Slug of the related project, if there's a case study. */
  project?: string;
  /** The organisation's website. Shown in place of the location. */
  url?: string;
}

/** Newest first. */
export const experience: Role[] = [
  {
    start: "2025",
    end: "now",
    title: "Founder",
    org: "Neuron",
    project: "neuron",
    url: "https://learnwithneuron.com",
    place: "Vancouver",
    note: "Designing, building and shipping an AI tutor across web, iOS and AWS, alone.",
  },
  {
    start: "2025",
    end: "2025",
    title: "Product Engineer Intern",
    org: "MeaningfulWork",
    project: "meaningfulwork",
    url: "https://www.meaningful.ca",
    place: "Vancouver",
    note: "Turned 15+ nonprofit interviews into a relationship CRM and shipped it to two pilot organisations.",
  },
  {
    start: "2025",
    end: "2025",
    title: "Software Engineer Intern",
    org: "Remy",
    project: "remy",
    url: "https://www.withremy.com",
    place: "Remote",
    note: "Built the commenting system for an AI design canvas, so feedback pinned to a prototype reaches the agent.",
  },
  {
    start: "2023",
    end: "2024",
    title: "Software Engineer Intern",
    org: "Edee Care",
    project: "idea",
    url: "https://www.edeecare.com",
    place: "Vancouver",
    note: "Led the mobile app for people with epilepsy; later led and mentored a team of three developers.",
  },
  {
    start: "2023",
    end: "2023",
    title: "Product Manager Intern",
    org: "Edee Care",
    project: "idea",
    url: "https://www.edeecare.com",
    place: "Vancouver",
    note: "Ran an SMS pilot with two designers and a researcher, and specified the app's MVP.",
  },
  {
    start: "",
    end: "2026",
    title: "B.Sc. Computer Science & Business",
    org: "University of British Columbia",
    place: "Vancouver",
    note: "Combined major. Graduating December 2026.",
  },
];
