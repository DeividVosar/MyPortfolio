import "./SectionLabel.css";

// little red label + line at the top of each page

function SectionLabel({ text }) {
  return (
    <div className="section-label">
      <span className="section-label-text">{text}</span>
      <div className="section-label-line" />
    </div>
  );
}

export default SectionLabel;
