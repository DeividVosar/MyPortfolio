import SectionLabel from "../components/SectionLabel";
import TimelineItem from "../components/TimelineItem";
import { education, experience } from "../data/resume";
import "./ResumeSection.css";

// resume page - school timeline on top, jobs timeline below
// helpers below are local because nothing else needs them

function SubHead({ text }) {
  return <p className="resume-subhead">{text}</p>;
}

// renders a list of TimelineItems and marks the last one
// (last one needs isLast=true so it doesnt draw the connector line)
function Timeline({ items }) {
  return items.map((item, i) => (
    <TimelineItem key={i} {...item} isLast={i === items.length - 1} />
  ));
}

function ResumeSection() {
  return (
    <div>
      <SectionLabel text="Resume" />

      <SubHead text="Education" />
      <Timeline items={education} />

      <div className="resume-divider" />

      <SubHead text="Experience" />
      <Timeline items={experience} />
    </div>
  );
}

export default ResumeSection;
