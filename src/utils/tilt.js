export function tilt(e) {
  if (
    e.pointerType === "touch" ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;
  const r = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5,
    y = (e.clientY - r.top) / r.height - 0.5;
  e.currentTarget.style.transform = `perspective(1000px) rotateX(${-y * 9}deg) rotateY(${x * 12}deg)`;
}
export function resetTilt(e) {
  e.currentTarget.style.transform = "";
}
