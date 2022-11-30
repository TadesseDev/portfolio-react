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
  const skill = skills[0];
  console.log(skills);
  return (
    <SkillsContainer id="skills">
      <div className="front-end">
        <PrimaryTitle icon={skillIcon} text={"skills"} />
        <p>
          Its hard to mention every little skill that I have. But to give you an
          overview, here are some of my skills.
        </p>
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
