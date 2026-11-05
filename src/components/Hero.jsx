import React from "react";
import { ArrowUpRight, ArrowDown, Code2, MapPin, Download } from "lucide-react";
import { tilt, resetTilt } from "../utils/tilt";

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-top">
        <span className="eyebrow">
          <i className="status-dot" /> OPEN TO WORK & COLLABORATIONS
        </span>
        <span className="location">
          <MapPin size={13} /> BHARUCH, INDIA
        </span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="intro">
            Hey, I’m Dhaval <span className="wave">✳</span>
          </p>
          <h1>
            I turn ideas
            <br />
            into <span className="serif">digital</span>
            <br />
            <span className="serif">experiences.</span>
            <span className="hero-period">●</span>
          </h1>
          <p className="hero-description">
            React & MERN stack developer crafting thoughtful interfaces and
            connecting them to the backend. From the first component to the
            final launch.
          </p>
          <div className="hero-buttons">
            <a className="button dark" href="#work">
              Explore my work <ArrowUpRight size={19} />
            </a>
            <a className="text-link" href="/Dhaval_Valvi_Resume.pdf" download>
              Download CV <Download size={16} />
            </a>
          </div>
        </div>
        <div
          className="hero-art"
          onPointerMove={tilt}
          onPointerLeave={resetTilt}
        >
          <div className="art-grid" />
          <div className="art-top">
            <span>THE PERSON BEHIND THE PIXELS</span>
            <ArrowUpRight size={20} />
          </div>
          <div className="portrait-wrap">
            <img
              src="/images/portrait.png"
              alt="Dhaval Valvi"
              className="portrait"
            />
          </div>
          <div className="orbit-label">
            <Code2 size={16} /> Code. Create. Repeat.
          </div>
          <div className="floating-code">
            <span className="code-dot" />
            <code>&lt;Developer /&gt;</code>
          </div>
          <div className="art-bottom">
            <span>
              FRONTEND EYE.
              <br />
              FULL-STACK MIND.
            </span>
            <span className="asterisk">✳</span>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <span>Clean code. Thoughtful details. Real-world projects.</span>
        <a href="#work">
          SCROLL TO EXPLORE <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}
