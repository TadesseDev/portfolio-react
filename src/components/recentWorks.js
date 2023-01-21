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
import Mirror from "./partials/mirror";
export default function RecentWork() {
  const projects = useSelector((state) => state.recentWorks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecentWorks());
  }, [dispatch]);
  const ToggleTextContent = (container, content) => {
    const textContainer = container.getElementsByClassName("text-container")[0];
    textContainer.textContent = content;
  };
  return (
    <RecentWorkContainer id="recent-works">
      <div className="pre">
        <PrimaryTitle icon="" text={"Recent works"} />
        <p>
          I'm always Learning, Coding, Working on personal or business Projects
        </p>
        <span className="image-container" id="me-coding">
          <img src={meCoding} alt="me coding on a table " />
        </span>
        <p>Here are some of the project I've been working on lately</p>
      </div>
      <Projects>
        {projects.map(({ project = {}, technologies = [], tests = [] }) => {
          const preview = project.description.slice(0, 30);
          const description = project.description;
          return (
            <Project key={project.id}>
              <Mirror
                style={{
                  backgroundColor: "#fdfeff14",
                  backdropFilter: "blur(5px)",
                }}
              />
              <PrimaryTitle text={project.name} />
              <hr className="bright" />
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
              <hr className="bright" />
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
              <hr className="bright" />
              <div>
                <SubTitle text="About" />
                <div className="about">
                  <p className="text-container">{preview}...</p>

                  <Direction
                    icon="more"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                    toggle={(e) => {
                      const parent = e.target.parentNode.parentNode;
                      ToggleTextContent(parent, description);
                      const more = parent.getElementsByClassName("more")[0];
                      const less = parent.getElementsByClassName("less")[0];
                      less.style.display = "block";
                      more.style.display = "none";
                    }}
                    className="more"
                  />
                  <Direction
                    icon="less"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      display: "none",
                    }}
                    toggle={(e) => {
                      const parent = e.target.parentNode.parentNode;
                      ToggleTextContent(parent, preview + "...");
                      const more = parent.getElementsByClassName("more")[0];
                      const less = parent.getElementsByClassName("less")[0];
                      less.style.display = "none";
                      more.style.display = "block";
                    }}
                    className="less"
                  />
                </div>
              </div>
              <hr className="bright" />
              <div className="links">
                <FlyButton text="Live" href={project.live_link} />
                <FlyButton text="Code" href={project.source_code} />
              </div>
            </Project>
          );
        })}
      </Projects>
    </RecentWorkContainer>
  );
}
