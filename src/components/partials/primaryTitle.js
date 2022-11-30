import React from "react";
export default function primaryTitle({ icon = "", text = "" }) {
  return (
    <h2
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <span className="icon">
        <img src={icon} alt="skill" />
      </span>
      <span>{text}</span>
    </h2>
  );
}
