import React from "react";
export default function DeviceMockup({ project, large = false }) {
  const isMockup = project.imageType === "mockup";
  const preview = (
    <img
      className={isMockup ? "device-artwork" : undefined}
      src={project.imageSrc ?? "/images/" + (project.image ?? project.id) + ".png"}
      alt={project.name + " website in a laptop mockup"}
      loading={large ? "eager" : "lazy"}
    />
  );

  return (
    <div
      className={
        "device-scene " +
        (large ? "device-large " : "") +
        (isMockup ? "device-artwork-scene" : "")
      }
    >
      {isMockup ? (
        preview
      ) : (
        <div className="laptop">
          <div className="laptop-lid">
            <div className="device-camera" />
            <div className="device-screen">{preview}</div>
          </div>
          <div className="laptop-base">
            <span />
          </div>
          <div className="laptop-shadow" />
        </div>
      )}
      <span className="mockup-caption">
        DESIGNED FOR THE WEB <span>↗</span>
      </span>
    </div>
  );
}
