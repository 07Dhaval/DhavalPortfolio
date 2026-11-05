import React from "react";
import { ArrowDown } from "lucide-react";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="journey-section">
      <div className="container">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow muted">04 / MY JOURNEY</p>
            <h2>
              Learning by
              <br />
              <span className="serif">building.</span>
            </h2>
          </div>
          <p>
            The people, places and experiences
            <br />
            that shaped my work.
          </p>
        </div>
        <div className="journey-grid">
          <h3 className="journey-label">
            Work experience <ArrowDown size={19} />
          </h3>
          <div>
            {experience.map(([date, title, place, desc]) => (
              <article className="timeline-row reveal" key={title}>
                <span className="date">{date}</span>
                <h3>{title}</h3>
                <p className="company">{place}</p>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="journey-grid education">
          <h3 className="journey-label">
            Education <ArrowDown size={19} />
          </h3>
          <div>
            <article className="timeline-row reveal">
              <span className="date">Oct 2020 — Apr 2022</span>
              <h3>MSc in Computer Application & Information Technology</h3>
              <p>Natubhai V Patel College of Pure & Applied Science</p>
              <span className="grade">CGPA 8.87</span>
            </article>
            <article className="timeline-row reveal">
              <span className="date">Aug 2017 — Oct 2020</span>
              <h3>BSc in Information Technology</h3>
              <p>Natubhai V Patel College of Pure & Applied Science</p>
              <span className="grade">CGPA 6.49</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
