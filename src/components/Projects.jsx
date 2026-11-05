import React from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";
import DeviceMockup from "./DeviceMockup";

export default function Projects({ filter, setFilter, setSelected }) {
  return (
    <section id="work" className="section container">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow muted">01 / SELECTED WORK</p>
          <h2>
            A few things
            <br />
            I’ve <span className="serif">brought to life.</span>
          </h2>
        </div>
        <p>
          Different industries. Different challenges.
          <br />
          The same attention to every detail.
        </p>
      </div>
      <div className="filters" role="group" aria-label="Filter projects">
        {["All work", "Business", "Commerce", "Travel", "Web3", "Products"].map(
          (f) => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
              {f === "All work" && (
                <span>{String(projects.length).padStart(2, "0")}</span>
              )}
            </button>
          ),
        )}
      </div>
      <div className="project-grid">
        {projects
          .filter((p) => filter === "All work" || p.type === filter)
          .map((p) => (
            <article className="project" key={p.id}>
              <button
                className="project-image"
                style={{ "--mockup-color": p.color }}
                onClick={() => setSelected(p)}
                aria-label={"View " + p.name + " project"}
              >
                <span className="project-label">{p.label}</span>
                <DeviceMockup project={p} />
                <span className="project-open">
                  <ArrowUpRight size={23} />
                </span>
              </button>
              <div className="project-info">
                <div>
                  <h3>
                    <button onClick={() => setSelected(p)}>{p.name}</button>
                  </h3>
                  <p>{p.tags.slice(0, 2).join(" · ")}</p>
                </div>
                <button
                  className="project-detail-link"
                  onClick={() => setSelected(p)}
                  aria-label={"View details for " + p.name}
                >
                  <ArrowUpRight size={23} />
                </button>
              </div>
            </article>
          ))}
      </div>
      <div className="work-note">
        <span>More from the archive</span>
        <span>
          Donation Hub <small>PHP</small>{" "}
          <span className="archive-divider">/</span> Gym Management System{" "}
          <small>VB.NET</small>
        </span>
      </div>
    </section>
  );
}
