import "./TimelineItem.css";

// one row in the resume timeline (school or job)
// the dot + connector line on the left makes it look like an actual timeline
// isLast hides the connector on the last item so the line doesnt dangle

function TimelineItem({ date, place, role, description, isLast }) {
  return (
    <div className={`timeline-item ${isLast ? "is-last" : ""}`}>
      <div className="timeline-marker">
        <div className="timeline-dot" />
        {!isLast && <div className="timeline-line" />}
      </div>

      <div className="timeline-body">
        <p className="timeline-date">{date}</p>
        <p className="timeline-place">{place}</p>
        <p className="timeline-role">{role}</p>
        {description && <p className="timeline-description">{description}</p>}
      </div>
    </div>
  );
}

export default TimelineItem;
