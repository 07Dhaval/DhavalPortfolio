import React from "react";
export default function DeviceMockup({ project, large = false }) {
  return (
    <div className={"device-scene " + (large ? "device-large" : "")}>
      <div className="laptop">
        <div className="laptop-lid">
          <div className="device-camera" />
          <div className="device-screen">
            <img
              src={"/images/" + (project.image ?? project.id) + ".png"}
              alt={project.name + " website in a laptop mockup"}
              loading={large ? "eager" : "lazy"}
            />
          </div>
        </div>
        <div className="laptop-base">
          <span />
        </div>
        <div className="laptop-shadow" />
      </div>
      <span className="mockup-caption">
        DESIGNED FOR THE WEB <span>↗</span>
      </span>
    </div>
  );
}
