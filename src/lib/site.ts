/** Everything about Olti that isn't a project or an article. Edit here, not in components. */
export const site = {
  name: "Olti Maloku",
  role: "Product builder",
  location: "Vancouver",
  description:
    "Olti Maloku is a product builder working where design, product and engineering meet. Currently building Neuron, an AI tutor that never gives the answer.",
  url: "https://oltimaloku.github.io/portfolio",
  resume: "/resume/Resume-Olti.pdf",
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
}

/** Newest first. */
export const experience: Role[] = [
  {
    start: "2025",
    end: "now",
    title: "Founder",
    org: "Neuron",
    place: "Vancouver",
    note: "Designing, building and shipping an AI tutor across web, iOS and AWS, alone.",
  },
  {
    start: "2025",
    end: "2025",
    title: "Product Engineer Intern",
    org: "MeaningfulWork",
    place: "Vancouver",
    note: "Turned 15+ nonprofit interviews into a relationship CRM and shipped it to two pilot organisations.",
  },
  {
    start: "2025",
    end: "2025",
    title: "Software Engineer Intern",
    org: "Remy",
    place: "San Francisco",
    note: "Built an AI product-design canvas that generates UI prototypes from natural language.",
  },
  {
    start: "2023",
    end: "2024",
    title: "Software Engineer Intern",
    org: "Edee Care",
    place: "Vancouver",
    note: "Led the mobile app for people with epilepsy; later led and mentored a team of three developers.",
  },
  {
    start: "2023",
    end: "2023",
    title: "Product Manager Intern",
    org: "Edee Care",
    place: "Vancouver",
    note: "Ran an SMS pilot with two designers and a researcher, and specified the app's MVP.",
  },
  {
    start: "",
    end: "2027",
    title: "B.Sc. Computer Science & Business",
    org: "University of British Columbia",
    place: "Vancouver",
    note: "Combined major. Graduating May 2027.",
  },
];
