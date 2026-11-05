import React from "react";
import { useEffect, useState } from "react";
import { sectionLinks } from "../data/portfolio";
export default function ScrollGuide() {
  const [progress, setProgress] = useState(0),
    [active, setActive] = useState("home");
  useEffect(() => {
    let frame;
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setProgress(max > 0 ? scrollY / max : 0);
      let current = "home";
      for (const [id] of sectionLinks) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < innerHeight * 0.4)
          current = id;
      }
      setActive(current);
    };
    const scroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
    };
  }, []);
  return (
    <>
      <div className="reading-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
      <aside className="section-guide" aria-label="Section navigation">
        <span className="guide-label">EXPLORE</span>
        {sectionLinks.map(([id, label], i) => (
          <a
            href={"#" + id}
            key={id}
            className={active === id ? "guide-active" : ""}
            aria-current={active === id ? "location" : undefined}
          >
            <span className="guide-tooltip">{label}</span>
            <span className="guide-line" />
            <span className="guide-number">
              {String(i + 1).padStart(2, "0")}
            </span>
          </a>
        ))}
        <span className="guide-percent">{Math.round(progress * 100)}%</span>
      </aside>
    </>
  );
}
