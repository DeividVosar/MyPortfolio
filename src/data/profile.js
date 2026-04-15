// stuff that shows up in the sidebar + home + about
// basically all the personal info lives here

export const profile = {
  firstName: "Deivid",
  lastName: "Võsar",
  tagline: ["Aspiring Developer", "IT Enthusiast", "Mechatronics Specialist"],
  role: {
    from: "Automation engineer",
    to: "Software developer",
  },
  avatarUrl: "https://deividvosar.github.io/MyPortfolio/Duckie.png",
  status: "open to work",
};

export const contacts = [
  { icon: "pin", text: "Jõgevamaa, Estonia" },
  { icon: "mail", text: "deivid.vosar@gmail.com", href: "mailto:deivid.vosar@gmail.com" },
  { icon: "phone", text: "+372 53480556", href: "tel:+37253480556" },
];

export const socials = [
  { icon: "linkedin", href: "https://www.linkedin.com/in/deivid-võsar-3489b22b0/" },
  { icon: "github", href: "https://github.com/DeividVosar" },
];

// short intro on the home page, before the buttons
export const homeIntro = [
  "The head is not a trash can. There's no point filling it with things you can find in a manual. But creativity, understanding, and analytical thinking? Those you won't find in any manual. ",
  "That's what years working across mechatronics, automation, and software development have shaped in me. Not just skills, but a way of thinking.",
];

// longer version for the about page
export const aboutText = [
  "Hello! My name is Deivid Võsar - an aspiring developer with a strong background in automation and mechatronics.",
  "I started my career with machines: PLCs, CNC programming, building automation systems that manage heating, cooling, ventilation, and solar panels. That grounding taught me to think in systems - how things connect, where things break, and how to design solutions that actually hold up in the real world.",
  "Over time I realized I was always more drawn to the logic behind the systems than the hardware itself. That pushed me toward software. I completed a Programming microdegree at TalTech focused on Java and Python, and I'm actively building on that - Spring Boot, PostgreSQL, REST APIs, HTML, CSS, JavaScript.",
  "This transition from machines to code wasn't accidental. It's a natural evolution of a problem-solving mindset that lets me connect hardware and software perspectives in ways most developers never get to develop.",
  "Throughout working across a dozen different fields, I've realized that IT people are my people. The humor, the logic, the way of thinking - it all just clicks. While I've worked with machines, circuits, and production lines, it's behind a computer where I've always felt most at home.",
  "I grew up with my first PC at the age of eight, back when limited internet meant learning through experimentation. Breaking things, fixing them, figuring out how it all worked became second nature. That curiosity never stopped - it just evolved into code.",
  "I don't wait for the right job to start learning. I build things to get there.",
];
