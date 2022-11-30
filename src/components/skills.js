import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SkillsContainer, Skill } from "./styles/skills.styled";
import PrimaryTitle from "./partials/primaryTitle";
import SubTitle from "./partials/subTitle";
import skillIcon from "../icon/skills.svg";
import { getSkills } from "../redux/components/skills.js";
export default function Skills() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSkills());
  }, []);
  const skills = useSelector((store) => store.skills);
  return (
    <SkillsContainer id="skills">
      <div className="front-end">
        <PrimaryTitle icon={skillIcon} text={"skills"} />
        <hr />
        <Skill>
          <SubTitle text={"Design tools"} />
          <div>
            <div>
              <span>
                <img src="" alt="" />
              </span>
              <div>
                <h4>heading four</h4>
              </div>
            </div>
          </div>
        </Skill>
      </div>
    </SkillsContainer>
  );
}
