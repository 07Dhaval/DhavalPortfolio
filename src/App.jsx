import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStrip from "./components/TechStrip";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import MotionCursor from "./components/MotionCursor";
import ScrollGuide from "./components/ScrollGuide";
export default function App() {
  const [menu, setMenu] = useState(false),
    [filter, setFilter] = useState("All work"),
    [selected, setSelected] = useState(null),
    [faq, setFaq] = useState(null);
  useEffect(() => {
    const o = new IntersectionObserver(
      (e) =>
        e.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add("seen");
            o.unobserve(x.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((x) => o.observe(x));
    return () => o.disconnect();
  }, []);
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    function close(e) {
      if (e.key === "Escape") {
        setSelected(null);
        setMenu(false);
      }
    }
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [selected]);
  return (
    <>
      <MotionCursor />
      <ScrollGuide />
      <Navbar menu={menu} setMenu={setMenu} />
      <main>
        <Hero />
        <TechStrip />
        <Projects
          filter={filter}
          setFilter={setFilter}
          setSelected={setSelected}
        />
        <About />
        <Skills />
        <Experience />
        <Services faq={faq} setFaq={setFaq} />
        <Contact />
      </main>
      <Footer />
      <ProjectModal selected={selected} setSelected={setSelected} />
    </>
  );
}
