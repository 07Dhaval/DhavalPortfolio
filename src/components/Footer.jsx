import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container">
      <a className="brand" href="#home">
        VD<span>©</span>
      </a>
      <p>
        © {new Date().getFullYear()} Dhaval Valvi. Built with React & Tailwind
        CSS.
      </p>
      <a className="back-top" href="#home">
        Back to top <ArrowUpRight size={15} />
      </a>
    </footer>
  );
}
