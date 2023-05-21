import React from "react";

export default function primaryTitle({ icon = "", text = "", style = {}, className="" }) {
  return (
    <h3
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        ...style,
      }}
      className={className}
    >
      <span className="icon" style={{ margin: "10px", display: icon?"default":"none" }}>
        <span className="icon">{icon && <img src={icon} alt="skill" width="100%" height="100%"/>}</span>
      </span>
      <span>{text}</span>
    </h3>
  );
}
