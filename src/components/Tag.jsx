import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Tag.css";

// little pill-shaped labels (the skills tags basically)
// accent=true gives the red-tinted version
// desc=string enables click-to-open popover with details

function Tag({ label, desc, accent }) {
  const [open, setOpen]   = useState(false);
  const [style, setStyle] = useState({});
  const tagRef = useRef(null);
  const popRef = useRef(null);

  // calculate where to put the popover (below the tag, aligned to its left edge)
  function getInitialStyle() {
    const rect = tagRef.current.getBoundingClientRect();
    return { top: rect.bottom + 7, left: rect.left };
  }

  // after the popover renders, nudge it left if it's going off the right edge
  useEffect(() => {
    if (!open || !popRef.current) return;
    const popRect = popRef.current.getBoundingClientRect();
    const overflow = popRect.right - (window.innerWidth - 8);
    if (overflow > 0) {
      setStyle((s) => ({ ...s, left: Math.max(8, s.left - overflow) }));
    }
  }, [open]);

  // close when clicking outside, scrolling, or resizing - all of these move the tag but not the fixed popover
  useEffect(() => {
    if (!open) return;
    function close(e) {
      if (e.type === "mousedown" && tagRef.current?.contains(e.target)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", close);
    window.addEventListener("scroll", close, true); // capture phase catches nested scrollers too
    window.addEventListener("resize", close);
    return () => {
      document.removeEventListener("mousedown", close);
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
  }, [open]);

  function handleClick() {
    if (!desc) return;
    if (open) {
      setOpen(false);
    } else {
      setStyle(getInitialStyle());
      setOpen(true);
    }
  }

  return (
    <>
      <span
        ref={tagRef}
        className={[
          "tag",
          accent ? "is-accent" : "",
          desc   ? "has-desc"  : "",
          open   ? "is-open"   : "",
        ].filter(Boolean).join(" ")}
        onClick={handleClick}
      >
        {label}
      </span>

      {/* portalled to body - completely outside the panel layout, nothing clips it */}
      {open && desc && createPortal(
        <span ref={popRef} className="tag-popover" style={style}>
          {desc}
        </span>,
        document.body
      )}
    </>
  );
}

// helper that just maps an array of { label, desc } objects into Tags
// saves writing the .map() out in every section that uses tags
function Tags({ items, accent }) {
  return (
    <div className="tag-row">
      {items.map((item, i) => (
        <Tag
          key={i}
          label={item.label ?? item} // handles plain strings just in case
          desc={item.desc}
          accent={accent}
        />
      ))}
    </div>
  );
}

export { Tag };
export default Tags;
