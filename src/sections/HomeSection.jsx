import { profile, homeIntro } from "../data/profile";
import "./HomeSection.css";

// home/landing page
// the buttons jump to other sections via onNavigate (passed down from App)

function HomeSection({ onNavigate }) {
  // last paragraph gets extra bottom margin so the buttons aren't crammed against it
  const lastIndex = homeIntro.length - 1;

  return (
    <div>
      <p className="home-kicker">// hello world</p>

      <h1 className="home-name">
        {profile.firstName}<br />{profile.lastName}
      </h1>

      <p className="home-role">
        {profile.role.from} <span className="arrow">→</span> {profile.role.to}
      </p>

      {homeIntro.map((text, i) => (
        <p
          key={i}
          className={`home-para ${i === lastIndex ? "is-last" : ""}`}
        >
          {text}
        </p>
      ))}

      <div className="home-actions">
        <button type="button" className="btn is-primary" onClick={() => onNavigate("projects")}>
          View Projects
        </button>
        <button type="button" className="btn is-ghost" onClick={() => onNavigate("about")}>
          About me
        </button>
      </div>
    </div>
  );
}

export default HomeSection;
