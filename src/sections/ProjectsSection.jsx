import SectionLabel from "../components/SectionLabel";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

// projects page - just maps over the projects array
// all the actual card styling lives in ProjectCard
// add new projects in data/projects.js

function ProjectsSection() {
  return (
    <div>
      <SectionLabel text="Projects" />
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </div>
  );
}

export default ProjectsSection;
