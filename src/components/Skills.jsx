import React from "react";
import { Code2, Layers, Database } from "lucide-react";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow muted">03 / THE TOOLKIT</p>
          <h2>
            The tools behind
            <br />
            the <span className="serif">experience.</span>
          </h2>
        </div>
        <p>
          From responsive interfaces
          <br />
          to APIs and databases.
        </p>
      </div>
      <div className="skills-grid">
        {skillGroups.map(([n, title, ...skills]) => (
          <div className="skill-column reveal" key={n}>
            <div className="skill-header">
              <span>{n}</span>
              {n === "01" ? <Code2 /> : n === "02" ? <Database /> : <Layers />}
            </div>
            <h3>{title}</h3>
            <div className="skill-tags">
              {skills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
