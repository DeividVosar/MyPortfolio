// skills page data
// three exports because the page has three different chunks

// main skill tags - accent: true makes them red (only used on Programming for now)

export const skillGroups = [
  {
    title: "Programming",
    accent: true,
    items: [
      { label: "Java",       desc: "Covered in TalTech microdegree, used in the GardenWebsite Spring Boot backend." },
      { label: "Python",     desc: "Covered in TalTech microdegree, used for scripting and smaller automation tasks." },
      { label: "JavaScript", desc: "Frontend language across all web projects, currently the main language for React work." },
      { label: "Lua",        desc: "Used in LogicMachine for building automation scripting." },
      { label: "HTML",       desc: "Structural layer of every web project I've built : Portfolio, GardenWebsite, Bakery site." },
      { label: "CSS",        desc: "Styling across all web projects" },
    ],
  },
  {
    title: "Currently building with",
    items: [
      { label: "Spring Boot",    desc: "Backend framework for GardenWebsite, handles REST routing, data access, and DB connection." },
      { label: "React + Vite",   desc: "Frontend stack for this portfolio and GardenWebsite." },
      { label: "PostgreSQL",     desc: "Database for GardenWebsite, hosted on Neon free tier with Hibernate as the ORM layer." },
      { label: "REST API",       desc: "Designed and built the GardenWebsite REST API in Spring Boot; consumed from the React frontend." },
      { label: "JPA / Hibernate",desc: "ORM layer for GardenWebsite - maps Java entities to PostgreSQL tables." },
      { label: "Maven",          desc: "Build tool for Java/Spring Boot projects, handles dependencies and packaging." },
      { label: "Linux",          desc: "Primary dev environment, comfortable in the terminal for file ops, Git, and deployments." },
    ],
  },
  {
    title: "Automation & Engineering",
    items: [
      { label: "LogicMachine",              desc: "Building automation controller, used professionally on real client installations." },
      { label: "PLC (Logo, LAD, FBD)",      desc: "Programmed Siemens Logo PLCs using Ladder Diagram and Function Block Diagram for automation tasks." },
      { label: "CNC Programming",           desc: "Wrote G-code and operated CNC machines." },
      { label: "CAD (Solid Edge, AutoCAD)", desc: "3D and 2D design for mechanical parts and automation system layouts." },
      { label: "3D Printing",               desc: "FDM printing for prototyping and hobby projects." },
    ],
  },
  {
    title: "Tools",
    items: [
      { label: "Git",        desc: "Version control for all projects; comfortable with branching, merging, and GitHub Pages deploys." },
      { label: "VS Code",    desc: "Primary code editor" },
      { label: "Photoshop" },
      { label: "Illustrator" },
      { label: "Canva" },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { label: "ChatGPT / Claude", desc: "Daily use for coding help, writing, research, and problem-solving." },
      { label: "DALL-E",           desc: "AI image generation for concept work and quick visual references." },
      { label: "Midjourney",       desc: "Higher-quality AI image generation for design references and creative exploration." },
    ],
  },
];

export const extraSkillGroups = [

  { title: "Interests", items: [
    { label: "Robotics",    desc: "Automation and robotics have fascinated me since I first got my hands on them. As a mechatronic, I've automated systems and homes. Bringing robots to life with code is incredibly exciting."  },
    { label: "IT & Software",    desc: "My obsession with IT started with my first computer at age 8. I have always been passionate about computer games. While I don't have worthwhile projects just yet, I am working on changing it"   },
    { label: "Sports",    desc: "I've always been active, at a younger age even competing internationally in wrestling. Recently, Mainly due to the pace of my life I've just focused on regular workouts to maintain a healthy life, running after a puppy is exhausting."   },
  ]},

    { title: "Certifications", items: [
    { label: "B Category Driver's License" },
    { label: "Forklift & Internal Transport Operator" },
  ]},
];

export const languages = [
  { lang: "Estonian", level: "Native",       pct: 85 },
  { lang: "English",  level: "Professional", pct: 90 },
];
