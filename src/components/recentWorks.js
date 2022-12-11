import { useDispatch, useSelector } from "react-redux";
import {
  RecentWorkContainer,
  Projects,
  Project,
} from "./styles/recentWork.styed";
import { getRecentWorks } from "../redux/components/recentWorks";
import SubTitle from "./partials/subTitle";
import meCoding from "../images/me-coding.svg";
import { useEffect } from "react";
export default function RecentWork() {
  const projects = useSelector((state) => state.recentWorks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecentWorks());
  }, [dispatch]);
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
      <Projects>
        {projects.map(({ project = {}, technologies = [] }) => (
          <Project key={project.id}>
            <SubTitle text={project.name} />
          </Project>
        ))}
      </Projects>
    </RecentWorkContainer>
  );
}
