import React from "react";

export default function TechStrip() {
  return (
    <div className="stack-band">
      <div className="container flex flex-wrap items-center justify-between gap-5">
        <span className="stack-caption">
          BUILT WITH A<br />
          VERSATILE TOOLKIT
        </span>
        {["React.js", "Node.js", "Tailwind CSS", "MongoDB", "JavaScript"].map(
          (t) => (
            <span className="stack-name" key={t}>
              {t}
              <span>✳</span>
            </span>
          ),
        )}
      </div>
    </div>
  );
}
