import { useState, useRef, useEffect, useCallback } from "react";
import Sidebar from "./components/Sidebar";
import NavRail from "./components/NavRail";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ResumeSection from "./sections/ResumeSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import "./App.css";

// the main app
// holds which section is currently shown + handles the fade when switching

// how long the fade-out lasts before swapping (in ms)
// keep this in sync with the transition time in App.css
const FADE_MS = 220;

// id -> component lookup
// to add a new page: add here AND in data/nav.js
const SECTIONS = {
  home: HomeSection,
  about: AboutSection,
  resume: ResumeSection,
  skills: SkillsSection,
  projects: ProjectsSection,
};

function App() {
  const [active, setActive] = useState("home");
  const [isVisible, setIsVisible] = useState(true);

  // store the fade timeout in a ref
  // (otherwise spam-clicking nav buttons makes the fade go weird)
  const fadeTimer = useRef(null);

  const navigate = useCallback((section) => {
    if (section === active) return;

    // kills any in-flight fade so clicks dont stack
    if (fadeTimer.current) clearTimeout(fadeTimer.current);

    setIsVisible(false);
    fadeTimer.current = setTimeout(() => {
      setActive(section);
      setIsVisible(true);
      fadeTimer.current = null;
    }, FADE_MS);
  }, [active]);

  // cleanup if the component unmounts mid-fade
  useEffect(() => {
    return () => {
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
    };
  }, []);

  // fallback to home if someone passes a bad id somehow
  const ActiveSection = SECTIONS[active] ?? HomeSection;

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="app-main">
        <div className={`app-fade ${isVisible ? "is-visible" : ""}`}>
          <ActiveSection onNavigate={navigate} />
        </div>
      </main>

      <NavRail active={active} onNavigate={navigate} />
    </div>
  );
}

export default App;
