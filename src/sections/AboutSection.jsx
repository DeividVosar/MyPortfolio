import SectionLabel from "../components/SectionLabel";
import { aboutText } from "../data/profile";
import "./AboutSection.css";

// about page - just paragraphs of text, nothing fancy

function AboutSection() {
  return (
    <div>
      <SectionLabel text="About me" />

      {aboutText.map((p, i) => (
        <p key={i} className="about-paragraph">{p}</p>
      ))}
    </div>
  );
}

export default AboutSection;
