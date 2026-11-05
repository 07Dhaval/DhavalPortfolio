import React from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";

export default function Contact({ copy, copied }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-top">
          <p className="eyebrow">
            <i className="status-dot" /> HAVE SOMETHING IN MIND?
          </p>
          <span>LET’S MAKE IT HAPPEN</span>
        </div>
        <h2>
          Good things start
          <br />
          with a <span className="serif">conversation.</span>
          <a href="mailto:dhavalvalvi7@gmail.com" aria-label="Email Dhaval">
            <ArrowUpRight />
          </a>
        </h2>
        <div className="contact-bottom">
          <div>
            <span className="contact-label">DROP ME A LINE</span>
            <div className="email-row">
              <a href="mailto:dhavalvalvi7@gmail.com">dhavalvalvi7@gmail.com</a>
              <button onClick={copy} aria-label="Copy email address">
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
              <span className="copy-status" aria-live="polite">
                {copied ? "Copied!" : ""}
              </span>
            </div>
          </div>
          <a className="phone" href="tel:+917016746656">
            +91 70167 46656 <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
