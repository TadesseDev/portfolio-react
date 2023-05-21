import React from "react";
export default function primaryTitle({ icon = false, text = "", style = {} }) {
  return (
    <h2
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        gap: "10px",
        ...style,
      }}
    >
      <span className="icon" style={{ display: icon ? "default" : "none" }}>
        {icon && <img src={icon} alt="skill" width="100%"/>}
      </span>
      <span>{text}</span>
    </h2>
  );
}
