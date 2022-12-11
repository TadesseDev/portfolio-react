import React from "react";
export default function primaryTitle({ icon = false, text = "" }) {
  return (
    <h2
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        gap: "10px",
      }}
    >
      <span className="icon">{icon && <img src={icon} alt="skill" />}</span>
      <span>{text}</span>
    </h2>
  );
}
