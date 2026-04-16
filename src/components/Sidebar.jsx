import { useState } from "react";
import { Icon } from "./Icons";
import { profile, contacts, socials } from "../data/profile";
import "./Sidebar.css";

// left sidebar on desktop, top header bar with hamburger on mobile
// the hamburger button and the expandable panel are always in the DOM
// but hidden on desktop via CSS - no media query JS needed

function ContactRow({ icon, text, href }) {
  return (
    <div className="contact-row">
      <span className="contact-icon">
        <Icon name={icon} size={14} />
      </span>
      {href ? (
        <a href={href} className="contact-link">{text}</a>
      ) : (
        <span className="contact-text">{text}</span>
      )}
    </div>
  );
}

function SocialLink({ icon, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="social-link">
      <Icon name={icon} size={17} />
    </a>
  );
}

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const displayName = `${profile.firstName} ${profile.lastName}`;

  return (
    <aside className={`sidebar ${menuOpen ? "is-open" : ""}`}>
      {/* top part - always visible on both desktop and mobile */}
      <div className="sidebar-header">
        <img
          src={profile.avatarUrl}
          alt={displayName}
          className="sidebar-avatar"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
        <div className="sidebar-header-text">
          <h2 className="sidebar-name">{displayName}</h2>
          {/* tagline is an array - shown on desktop, hidden in mobile header */}
          <div className="sidebar-tagline">
            {profile.tagline.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>

        {/* hamburger button - hidden on desktop via CSS */}
        <button
          type="button"
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* everything below here: always visible on desktop,
          slides open on mobile when hamburger is tapped */}
      <div className="sidebar-details">
        <div className="sidebar-divider" />

        <div className="sidebar-contacts">
          {contacts.map((c, i) => (
            <ContactRow key={i} {...c} />
          ))}
        </div>

        <div className="sidebar-divider" />

        <div className="sidebar-socials">
          {socials.map((s, i) => (
            <SocialLink key={i} {...s} />
          ))}
        </div>

        <div className="sidebar-status">
          <div className="status-badge">
            <div className="status-dot" />
            <span className="status-text">{profile.status}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
