import React from "react";

export default function primaryTitle({ icon = "", text = "" }) {
  return (
    <h3
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <span className="icon" style={{ margin: "10px" }}>
        <span className="icon">{icon && <img src={icon} alt="skill" />}</span>
      </span>
      <span>{text}</span>
    </h3>
  );
}
