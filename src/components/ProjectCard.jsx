import { IconLink } from "./Icons";
import "./ProjectCard.css";

// one card on the projects page
// status: "live" gets the green pill, anything else gets the orange "coming soon"

function ProjectLink({ label, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="project-link">
      <IconLink /> {label}
    </a>
  );
}

function StatusBadge({ status }) {
  const isLive = status === "live";
  return (
    <span className={`status-pill ${isLive ? "is-live" : "is-soon"}`}>
      {isLive ? "live" : "coming soon"}
    </span>
  );
}

function ProjectCard({ title, subtitle, status, tags, description, links }) {
  return (
    <div className="project-card">
      <div className="project-card-head">
        <div>
          <h3 className="project-title">{title}</h3>
          {subtitle && <p className="project-subtitle">{subtitle}</p>}
        </div>
        {status && <StatusBadge status={status} />}
      </div>

      <p className="project-description">{description}</p>

      <div className="project-tags">
        {tags.map((t, i) => (
          <span key={i} className="project-tag">{t}</span>
        ))}
      </div>

      {links && links.length > 0 && (
        <div className="project-links">
          {links.map((link, i) => (
            <ProjectLink key={i} {...link} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
