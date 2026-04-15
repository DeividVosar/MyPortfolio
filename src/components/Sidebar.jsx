import { Icon } from "./Icons";
import { profile, contacts, socials } from "../data/profile";
import "./Sidebar.css";

// left sidebar - avatar, name, contact rows, socials, status badge
// each contact row and social link is its own component so the hover state
// stays clean (cant use useState inside a .map())

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
  const displayName = `${profile.firstName} ${profile.lastName}`;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img
          src={profile.avatarUrl}
          alt={displayName}
          className="sidebar-avatar"
          // hide the img if it fails to load instead of showing the broken-image icon
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
        <h2 className="sidebar-name">{displayName}</h2>
        {/* tagline is an array - one line per item */}
        <div className="sidebar-tagline">
          {profile.tagline.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>

      <div className="sidebar-divider is-tight" />

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
    </aside>
  );
}

export default Sidebar;
