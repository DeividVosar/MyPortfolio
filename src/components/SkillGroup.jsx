import "./SkillGroup.css";

// titled block - title on top, whatever you pass as children below it
// used for skill categories, languages, certifications etc

function SkillGroup({ title, children }) {
  return (
    <div className="skill-group">
      <p className="skill-group-title">{title}</p>
      {children}
    </div>
  );
}

export default SkillGroup;
