import React from "react";
import { ArrowDown } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="reveal">
          <p className="eyebrow muted">02 / A LITTLE ABOUT ME</p>
          <h2>
            Curious mind.
            <br />
            Hands-on <span className="serif">builder.</span>
          </h2>
          <div className="about-monogram">
            VD<span>✳</span>
            <div className="monogram-caption">
              DHAVAL VALVI
              <br />
              DEVELOPER, BHARUCH
            </div>
          </div>
        </div>
        <div className="about-copy reveal">
          <p className="large-copy">
            I’m Dhavalchandra Valvi, a web developer who enjoys making the
            complex feel simple.
          </p>
          <p>
            My journey spans web development, React interfaces and the MERN
            stack. At Exotic Infotech, I worked as a React Front End Developer
            and learned the MERN stack alongside frontend and backend work.
          </p>
          <p>
            I hold an MSc in Computer Application and Information Technology. I
            bring a quick-learning mindset, clear communication and a
            collaborative approach to the work i do.
          </p>
          <div className="about-facts">
            <div>
              <span>BASED IN</span>
              <strong>Bharuch, Gujarat</strong>
            </div>
            <div>
              <span>LANGUAGES</span>
              <strong>Gujarati · Hindi · English</strong>
            </div>
          </div>
          <a className="text-link" href="/Dhaval_Valvi_Resume.pdf" download>
            Get the full resume <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
