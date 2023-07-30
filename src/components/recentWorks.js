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
import BackgroundDecoration from "./partials/backgroundDecoration";
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
        <h3>---This section is under maintenance---</h3>
        <p>Please check back in a few days...</p>
      </div>
    </RecentWorkContainer>
  );
}
