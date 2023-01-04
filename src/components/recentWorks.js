import { useDispatch, useSelector } from "react-redux";
import {
  RecentWorkContainer,
  Projects,
  Project,
} from "./styles/recentWork.styed";
import { getRecentWorks } from "../redux/components/recentWorks";
import PrimaryTitle from "./partials/primaryTitle";
import SubTitle from "./partials/subTitle";
import FlyButton from "./partials/flyButton";
import meCoding from "../images/me-coding.svg";
import { useEffect } from "react";
import Direction from "./partials/direction.js";
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
        <span className="image-container" id="me-coding">
          <img src={meCoding} alt="me coding on a table " />
        </span>
        <p>Here are some of the project I've been working on lately</p>
      </div>
      <Projects>
        {projects.map(({ project = {}, technologies = [], tests = [] }) => (
          <Project key={project.id}>
            <PrimaryTitle text={project.name} />
            <div>
              <SubTitle text="Built with" />
              <div className="technologies">
                {technologies.map((tech) => (
                  <button type="button" key={tech.id}>
                    {tech.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <SubTitle text="Tested with" />
              <div className="tests">
                {tests.map((test) => (
                  <button type="button" key={test.id}>
                    {test.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <SubTitle text="About" />
              <div className="about">
                <p>{project.description.slice(0, 30)}...</p>

                <Direction
                  icon="more"
                  style={{
                    boxShadow: "0 0 6px #ffffff7a",
                    background: "var(--primary)",
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                />
              </div>
            </div>
            <div className="links">
              <FlyButton text="Live" href={project.live_link} />
              <FlyButton text="Code" href={project.source_code} />
            </div>
          </Project>
        ))}
      </Projects>
    </RecentWorkContainer>
  );
}
