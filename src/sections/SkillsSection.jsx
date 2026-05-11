import SectionLabel from "../components/SectionLabel";
import SkillGroup from "../components/SkillGroup";
import Tags from "../components/Tag";
import { skillGroups, extraSkillGroups, languages } from "../data/skills";
import "./SkillsSection.css";

// skills page
// order: hint -> main groups -> divider -> languages with progress bars -> extra groups
// LanguageBar is here because nothing else uses it

function LanguageBar({ lang, level, pct }) {
  return (
    <div>
      <div className="language-row">
        <span className="language-name">{lang}</span>
        <span className="language-level">{level}</span>
      </div>
      <div className="language-track">
        <div className="language-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <div>
      <SectionLabel text="Skills" />

      {/* tiny hint - only shows up because tags with a desc have a dot on them */}
      <p className="skills-hint">click boxes with a • for details</p>

      {skillGroups.map((group) => (
        <SkillGroup key={group.title} title={group.title}>
          <Tags items={group.items} accent={group.accent} />
        </SkillGroup>
      ))}

      <div className="skills-divider" />

      <SkillGroup title="Languages">
        <div className="language-list">
          {languages.map((l) => (
            <LanguageBar key={l.lang} {...l} />
          ))}
        </div>
      </SkillGroup>

      {extraSkillGroups.map((group) => (
        <SkillGroup key={group.title} title={group.title}>
          <Tags items={group.items} />
        </SkillGroup>
      ))}
    </div>
  );
}

export default SkillsSection;
