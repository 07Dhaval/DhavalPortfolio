import React from "react";
import { X, ExternalLink } from "lucide-react";
import DeviceMockup from "./DeviceMockup";

export default function ProjectModal({ selected, setSelected }) {
  if (!selected) return null;

  return (
    <div className="modal-backdrop" onClick={() => setSelected(null)}>
      <section
        role="dialog"
        aria-modal="true"
        aria-label={selected.name + " project details"}
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          autoFocus
          className="modal-close"
          onClick={() => setSelected(null)}
          aria-label="Close project"
        >
          <X />
        </button>
        <div
          className="modal-image"
          style={{ "--mockup-color": selected.color }}
        >
          <DeviceMockup project={selected} large />
        </div>
        <div className="modal-copy">
          <p className="eyebrow muted">{selected.label}</p>
          <h2>{selected.name}</h2>
          <p>{selected.description}</p>
          <div className="skill-tags">
            {selected.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          {selected.url ? (
            <a
              className="button dark"
              href={selected.url}
              target="_blank"
              rel="noreferrer"
            >
              Visit live website <ExternalLink size={17} />
            </a>
          ) : (
            <p className="project-preview-note">
              Website showcase · Project preview
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
