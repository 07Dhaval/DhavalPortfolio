import React from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar({ menu, setMenu }) {
  return (
    <header className="nav-wrap">
      <nav className="container flex items-center justify-between">
        <a className="brand" href="#home">
          VD<span>©</span>
        </a>
        <div className="desktop-nav">
          <a href="#work">Selected work</a>
          <a href="#about">About me</a>
          <a href="#experience">Experience</a>
        </div>
        <a className="nav-contact" href="#contact">
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle navigation"
          aria-expanded={menu}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </nav>
      {menu && (
        <div className="mobile-menu">
          {[
            ["Selected work", "work"],
            ["About me", "about"],
            ["Experience", "experience"],
            ["Contact", "contact"],
          ].map(([t, id]) => (
            <a key={id} href={"#" + id} onClick={() => setMenu(false)}>
              {t}
              <ArrowUpRight size={20} />
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
