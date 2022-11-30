import React from "react";

export default function primaryTitle({ icon = "", text = "" }) {
  return (
    <h2>
      <span className="icon">
        <img src={icon} alt="skill" />
      </span>
      {text}
    </h2>
  );
}
