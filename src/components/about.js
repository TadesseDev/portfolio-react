import React from "react";
import PrimaryTitle from "./partials/primaryTitle";

export default function about() {
  return (
    <div style={{ textAlign: "center" }}>
      <PrimaryTitle text="About" />
      <p style={{ color: "white" }}>
        Algorithm and Data Structure enthusiast. What impress me the most is to
        deal with the time and memory efficiency. If you like to impress me
        optimize my code to a point it perform 1 microsecond better.
      </p>
      <p style={{ color: "white" }}>
        I love writhing clean code, As they say “
        <span style={{ color: "var(--bright)" }}>
          Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand.
        </span>
        ” 😊
      </p>
      
    </div>
  );
}
