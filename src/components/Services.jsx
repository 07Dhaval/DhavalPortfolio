import React from "react";
import {
  ArrowUpRight,
  Code2,
  Database,
  Globe,
  Plus,
  Minus,
} from "lucide-react";

export default function Services({ faq, setFaq }) {
  return (
    <section id="services" className="section container">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow muted">05 / HOW I CAN HELP</p>
          <h2>
            Your next idea.
            <br />
            Let’s <span className="serif">build it right.</span>
          </h2>
        </div>
      </div>
      <div className="service-list">
        {[
          [
            Code2,
            "React development",
            "Responsive websites and interfaces built with reusable components, clear navigation and thoughtful interactions.",
          ],
          [
            Database,
            "Full-stack development",
            "Connect the frontend to backend APIs, database workflows and admin tools using the MERN stack.",
          ],
          [
            Globe,
            "Business & commerce websites",
            "Company websites, product catalogues and shopping experiences that bring your business online.",
          ],
        ].map(([Icon, t, d], i) => (
          <a className="service-row reveal" href="#contact" key={t}>
            <span className="service-number">0{i + 1}</span>
            <Icon className="service-icon" />
            <h3>{t}</h3>
            <p>{d}</p>
            <ArrowUpRight />
          </a>
        ))}
      </div>
      <div className="faq">
        <h3>A few things you might be wondering</h3>
        {[
          [
            "Can you work on both frontend and backend?",
            "Yes. My experience includes React frontend development and MERN stack work, connecting interfaces with backend APIs and database workflows.",
          ],
          [
            "Can I see your previous work?",
            "Explore the project mockups above. Each project has a detail view and a link to the live website.",
          ],
          [
            "How do we start a project?",
            "Send me an email with your idea, the pages or features you need, and your preferred timeline. We can discuss the scope and next steps.",
          ],
        ].map(([q, a], i) => (
          <div className="faq-item" key={q}>
            <button
              onClick={() => setFaq(faq === i ? null : i)}
              aria-expanded={faq === i}
            >
              {q}
              {faq === i ? <Minus size={18} /> : <Plus size={18} />}
            </button>
            {faq === i && <p>{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
