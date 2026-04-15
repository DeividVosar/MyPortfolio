// projects page
// status: "live" = green pill, anything else = orange "coming soon"

export const projects = [
  {
    title: "GardenWebsite",
    subtitle: "Full-stack garden management app",
    status: "live",
    tags: ["React", "Vite", "Java", "Spring Boot", "PostgreSQL", "REST API", "GitHub Pages", "Render"],
    description:
      "Built to solve a real personal problem: constantly forgetting what's planted where and when things were last watered. A self-directed full-stack learning project covering React + Vite frontend, Java + Spring Boot backend, and PostgreSQL on Neon. Features an interactive map with zoom/pan, pin management, plant details, and watering history. Note: backend may have a cold-start delay on first load (free tier).",
    links: [
      { label: "Live demo", href: "https://deividvosar.github.io/GardenWebsite/" },
      { label: "Frontend repo", href: "https://github.com/DeividVosar/GardenWebsite" },
      { label: "Backend repo", href: "https://github.com/DeividVosar/GardenWebsite-Backend" },
    ],
  },
  {
    title: "Bakery Homepage",
    subtitle: "Client website",
    status: "soon",
    tags: ["WordPress"],
    description:
      "A homepage for a local bakery. Currently in the final polish phase. Going live shortly.",
    // TODO: add the live link once its actually live
  },
];
