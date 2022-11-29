import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SkillsContainer, Skill } from "./styles/skills";
import skillIcon from "../icon/skills.svg";
import { getSkills } from "../redux/components/skills.js";
export default function Skills() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSkills());
  }, []);
  const skills = useSelector((store) => store.skills);
  console.log(skills);
  return (
    <SkillsContainer id="skills">
      <div className="front-end">
        <h2>
          <span className="icon">
            <img src={skillIcon} alt="skill" />
          </span>
          Skills
        </h2>
        <hr />
        <Skill>
          <h3>Design tools</h3>
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
