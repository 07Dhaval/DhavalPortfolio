import React, { useEffect, useRef } from "react";

export default function MotionCursor() {
  const ring = useRef(null), dot = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const ringNode = ring.current, dotNode = dot.current;
    const layer = ringNode.parentElement;
    const pointer = matchMedia("(hover: hover) and (pointer: fine)");
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let enabled = pointer.matches && !motion.matches;
    let active = false, frame = 0, previousTime = 0;
    let x = 0, y = 0, rx = 0, ry = 0;

    const position = (node, left, top) => {
      node.style.transform = `translate3d(${left}px,${top}px,0)`;
    };
    const hover = (target) => {
      layer.classList.toggle("cursor-contact", !!target?.closest(".contact-section"));
      ringNode.classList.toggle("cursor-hover", !!target?.closest("a,button"));
      ringNode.classList.toggle("cursor-project", !!target?.closest(".project-image"));
    };
    const hide = () => {
      active = false;
      root.classList.remove("motion-cursor-active");
      hover(null);
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
    };
    const refreshHover = () => {
      if (!active) return;
      const target = document.elementFromPoint(x, y);
      if (target) hover(target);
      else hide();
    };
    const tick = (time) => {
      frame = 0;
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 1000 / 60;
      previousTime = time;
      const blend = 1 - Math.exp(-elapsed / 85);
      rx += (x - rx) * blend;
      ry += (y - ry) * blend;
      const settled = Math.hypot(x - rx, y - ry) < 0.1;
      if (settled) {
        rx = x;
        ry = y;
        previousTime = 0;
      }
      position(ringNode, rx, ry);
      if (!settled) frame = requestAnimationFrame(tick);
    };
    const move = (event) => {
      if (!enabled || event.pointerType !== "mouse" || document.hidden) {
        hide();
        return;
      }
      x = event.clientX;
      y = event.clientY;
      position(dotNode, x, y);
      if (!active) {
        rx = x;
        ry = y;
        position(ringNode, rx, ry);
        active = true;
        root.classList.add("motion-cursor-active");
      } else if (!frame) {
        frame = requestAnimationFrame(tick);
      }
      hover(event.target instanceof Element ? event.target : null);
    };
    const preferences = () => {
      enabled = pointer.matches && !motion.matches;
      hide();
    };
    const down = (event) => {
      if (event.pointerType !== "mouse") hide();
    };
    const keyboard = (event) => {
      if (event.key.startsWith("Arrow") ||
          ["Tab", "Escape", "Home", "End", "PageUp", "PageDown", "Enter", " "].includes(event.key)) hide();
    };
    const observer = new MutationObserver((records) => {
      if (records.some((record) => !layer.contains(record.target))) refreshHover();
    });

    pointer.addEventListener("change", preferences);
    motion.addEventListener("change", preferences);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointercancel", hide);
    window.addEventListener("blur", hide);
    window.addEventListener("keydown", keyboard);
    window.addEventListener("resize", refreshHover);
    document.addEventListener("scroll", refreshHover, { passive: true, capture: true });
    document.addEventListener("pointerleave", hide);
    document.addEventListener("visibilitychange", hide);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      hide();
      observer.disconnect();
      pointer.removeEventListener("change", preferences);
      motion.removeEventListener("change", preferences);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointercancel", hide);
      window.removeEventListener("blur", hide);
      window.removeEventListener("keydown", keyboard);
      window.removeEventListener("resize", refreshHover);
      document.removeEventListener("scroll", refreshHover, true);
      document.removeEventListener("pointerleave", hide);
      document.removeEventListener("visibilitychange", hide);
    };
  }, []);
  return (
    <div aria-hidden="true" className="cursor-layer">
      <div ref={ring} className="cursor-ring">
        <span>VIEW ↗</span>
      </div>
      <div ref={dot} className="cursor-dot" />
    </div>
  );
}
