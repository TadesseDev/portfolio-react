import React from "react";
import { RecentWorkContainer } from "./styles/recentWork.styed";
import meCoding from "../images/me-coding.svg";
export default function recentWork() {
  return (
    <RecentWorkContainer>
      <div className="pre">
        <h2>recentWork</h2>
        <p>
          I'm always Learning, Coding, Working on personal or business Projects
        </p>
        <span className="image-container">
          <img src={meCoding} alt="me coding on a table " />
        </span>
        <p>Here are some of the project I've been working on lately</p>
      </div>
    </RecentWorkContainer>
  );
}
