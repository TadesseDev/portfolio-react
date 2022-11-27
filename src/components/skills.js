import React from "react";
import { SkillsContainer, Skill } from "./styles/skills";
import skillIcon from "../icon/skills.svg";
export default function Skills() {
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
                <h4></h4>
              </div>
            </div>
          </div>
        </Skill>
      </div>
    </SkillsContainer>
  );
}
