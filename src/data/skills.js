// skills page data
// three exports because the page has three different chunks
 
// main skill tags - accent: true makes them red (only used on Programming for now)

export const skillGroups = [
  { title: "Programming", accent: true, items: ["Java", "Python", "JavaScript", "Lua", "HTML", "CSS"] },
  { title: "Currently building with", items: ["Spring Boot", "React + Vite", "PostgreSQL", "REST API", "JPA / Hibernate", "Maven", "Linux"] },
  { title: "Automation & Engineering", items: ["LogicMachine", "PLC (Logo, LAD, FBD)", "CNC Programming", "CAD (Solid Edge, AutoCAD)", "3D Printing"] },
  { title: "Tools", items: ["Git", "VS Code", "Photoshop", "Illustrator", "Canva"] },
  { title: "AI Tools", items: ["ChatGPT / Claude", "DALL-E", "Midjourney"] },
];

export const extraSkillGroups = [
  { title: "Certifications", items: ["B Category Driver's License", "Forklift & Internal Transport Operator"] },
  { title: "Interests", items: ["Robotics", "IT & Software", "Sports"] },
];

export const languages = [
  { lang: "Estonian", level: "Native", pct: 85 },
  { lang: "English", level: "Professional", pct: 90 },
];
