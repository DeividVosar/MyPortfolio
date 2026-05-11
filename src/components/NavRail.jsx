import { Icon } from "./Icons";
import { navItems } from "../data/nav";
import "./NavRail.css";

// right side nav rail with tooltip on hover
// no `title` attribute on the button - that adds the ugly default browser tooltip
// the styled span shows up via :hover in the css

function NavButton({ item, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(item.id)}
      className={`nav-btn ${isActive ? "is-active" : ""}`}
      aria-label={item.label}
    >
      <Icon name={item.icon} size={18} />
      <span className="nav-tooltip">{item.label}</span>
    </button>
  );
}

// theme is "dark" or "light"
function NavRail({ active, onNavigate, theme, onThemeToggle }) {
  return (
    <nav className="nav-rail">
      {navItems.map((item) => (
        <NavButton
          key={item.id}
          item={item}
          isActive={active === item.id}
          onClick={onNavigate}
        />
      ))}

      {/* pushed to the bottom of the rail on desktop via margin-top: auto */}
      <button
        type="button"
        className="nav-btn nav-theme-btn"
        onClick={onThemeToggle}
        aria-label="Toggle theme"
      >
        <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
        <span className="nav-tooltip">
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </span>
      </button>
    </nav>
  );
}

export default NavRail;
