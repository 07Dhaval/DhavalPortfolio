import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Phone, X, AlertCircle } from "lucide-react";

const EMAIL = "dhavalvalvi7@gmail.com";
const GMAIL_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(EMAIL);

function WhatsAppIcon() {
  return (
    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M21 11.5a9 9 0 0 1-13.3 7.9L3 21l1.6-4.7A9 9 0 1 1 21 11.5Z" />
      <path fill="currentColor" stroke="none" d="M8.2 7.4c.2-.4.5-.4.8-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.1.1-.2.3 0 .5.6 1 1.4 1.8 2.5 2.3.2.1.4.1.5-.1l.8-.9c.2-.2.4-.2.6-.1l1.8.8c.3.1.4.2.4.4.1.7-.2 1.4-.7 1.8-.5.4-1.3.6-2 .4-2.1-.6-4-1.8-5.3-3.6-.9-1.2-1.6-2.7-1.2-3.9.1-.3.2-.6.4-.8Z" />
    </svg>
  );
}

function copyWithSelection(value) {
  const field = document.createElement("textarea");
  const previousFocus = document.activeElement;
  field.value = value;
  field.readOnly = true;
  field.tabIndex = -1;
  field.setAttribute("aria-hidden", "true");
  field.style.cssText = "position:fixed;top:0;left:0;opacity:0;pointer-events:none";
  document.body.appendChild(field);
  try {
    field.select();
    field.setSelectionRange(0, value.length);
    return document.execCommand("copy");
  } finally {
    field.remove();
    previousFocus?.focus({ preventScroll: true });
  }
}

export default function Contact() {
  const [notice, setNotice] = useState(null);
  const noticeTimer = useRef(null);
  const copied = notice?.type === "success";
  useEffect(() => () => clearTimeout(noticeTimer.current), []);

  const dismissNotice = () => {
    clearTimeout(noticeTimer.current);
    setNotice(null);
  };

  const copyEmail = async () => {
    let success = false;
    try {
      await navigator.clipboard.writeText(EMAIL);
      success = true;
    } catch {
      try {
        success = copyWithSelection(EMAIL);
      } catch {
        success = false;
      }
    }
    clearTimeout(noticeTimer.current);
    setNotice(success
      ? { type: "success", message: "Email copied!" }
      : { type: "error", message: "Copy failed. Please select and copy the email." });
    noticeTimer.current = setTimeout(() => setNotice(null), success ? 3000 : 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-top">
          <p className="eyebrow">
            <i className="status-dot" /> HAVE SOMETHING IN MIND?
          </p>
          <span className="font-bold">LET’S MAKE IT HAPPEN</span>
        </div>
        <h2>
          Good things start
          <br />
          with a <span className="serif">conversation.</span>
          <a href={GMAIL_URL} target="_blank" rel="noopener noreferrer" aria-label="Open Gmail to email Dhaval">
            <ArrowUpRight aria-hidden="true" />
          </a>
        </h2>
        <div className="contact-bottom">
          <div className="contact-email">
            <span className="contact-label font-bold">DROP ME A LINE</span>
            <div className="email-row">
              <a href={GMAIL_URL} target="_blank" rel="noopener noreferrer" aria-label="Email Dhaval in Gmail">
                <Mail className="contact-icon" fill="#ffffff" stroke="#000000" aria-hidden="true" />
                <span>{EMAIL}</span>
              </a>
              <button className="copy-email" type="button" onClick={copyEmail} aria-label="Copy email address" title={copied ? "Email copied!" : "Copy email address"}>
                {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
              </button>
            </div>
          </div>
          <div className="contact-whatsapp">
            <span className="contact-label font-bold">CHAT ON WHATSAPP</span>
            <a className="whatsapp-link" href="https://wa.me/917016746656" target="_blank" rel="noopener noreferrer" aria-label="Chat with Dhaval on WhatsApp">
              <WhatsAppIcon />
              <span>Dhaval</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="contact-phone">
            <span className="contact-label font-bold">GIVE ME A CALL</span>
            <a className="phone" href="tel:+917016746656">
              <Phone className="contact-icon" fill="#15803d" stroke="#14532d" aria-hidden="true" />
              <span>+91 70167 46656</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      {notice && (
        <div className={"contact-toast " + notice.type} role={notice.type === "success" ? "status" : "alert"} aria-live={notice.type === "success" ? "polite" : "assertive"} aria-atomic="true">
          {copied ? <Check size={20} aria-hidden="true" /> : <AlertCircle size={20} aria-hidden="true" />}
          <span>{notice.message}</span>
          <button type="button" onClick={dismissNotice} aria-label="Dismiss notification"><X size={16} aria-hidden="true" /></button>
        </div>
      )}
    </section>
  );
}
