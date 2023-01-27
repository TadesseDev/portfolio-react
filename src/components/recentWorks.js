import { useContext } from "react";
import { InView } from "react-intersection-observer";
import CommonFunctionContext from "../context/commonFunctionsContext";
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
  const { showMoreContent, showLessContent } = useContext(
    CommonFunctionContext
  );
  const projects = useSelector((state) => state.recentWorks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecentWorks());
  }, [dispatch]);
  return (
    <RecentWorkContainer id="recent-works">
      <div className="pre">
        <PrimaryTitle icon="" text={"Recent works"} />
        <p>
          I'm always Learning, Coding, Working on personal or business Projects
        </p>
        <span className="image-container" id="me-coding">
          <LazyLoadImage
            src={meCoding}
            alt="me coding on a table "
            effect="blur"
          />
        </span>
        <p>Here are some of the project I've been working on lately</p>
      </div>
      <Projects>
        {projects.map(({ project = {}, technologies = [], tests = [] }) => (
          <InView
            onChange={(inView, entry) => {
              inView
                ? (entry.target.firstChild.style.animationName =
                    "fade-in-opacity")
                : (entry.target.firstChild.style.animationName = "");
            }}
            key={project.id}
            style={{ display: "inline" }}
          >
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
                  <p className="text-container">{project.description}</p>

                  <Direction
                    icon="more"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                    toggle={(e) =>
                      showMoreContent(e, e.target.parentNode.parentNode)
                    }
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
                    toggle={(e) =>
                      showLessContent(e, e.target.parentNode.parentNode)
                    }
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
          </InView>
        ))}
      </Projects>
    </RecentWorkContainer>
  );
}
