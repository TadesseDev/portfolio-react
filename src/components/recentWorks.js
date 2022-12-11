import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RecentWorkContainer } from "./styles/recentWork.styed";
import { getRecentWorks } from "../redux/components/recentWorks";
import meCoding from "../images/me-coding.svg";
export default function RecentWork() {
  const projects = useSelector((state) => state.recentWorks);
  const dispatch = useDispatch();
  useState(() => {
    dispatch(getRecentWorks());
  }, []);
  projects.forEach((element) => {
    console.log(element);
  });
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
