import "./Tag.css";

// little pill-shaped labels (the skills tags basically)
// accent=true gives the red-tinted version

function Tag({ label, accent }) {
  return (
    <span className={`tag ${accent ? "is-accent" : ""}`}>{label}</span>
  );
}

// helper that just maps an array of strings into Tags
// saves writing the .map() out in every section that uses tags
function Tags({ items, accent }) {
  return (
    <div className="tag-row">
      {items.map((t, i) => (
        <Tag key={i} label={t} accent={accent} />
      ))}
    </div>
  );
}

export { Tag };
export default Tags;
