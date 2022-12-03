import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SkillsContainer, SubSkills } from "./styles/skills.styled";
import { publicURL } from "../api/root";
import PrimaryTitle from "./partials/primaryTitle";
import SubTitle from "./partials/subTitle";
import skillIcon from "../icon/skills.svg";
import { getSkills } from "../redux/components/skills.js";
export default function Skills() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);
  const storeSkills = useSelector((store) => store.skills);
  const skills = new Map();
  storeSkills.forEach((skill) => {
    if (skills.has(skill.tech_type))
      skills.get(skill.tech_type, skill).push(skill);
    else skills.set(skill.tech_type, [skill]);
  });
  return (
    <SkillsContainer id="skills">
      <div className="front-end">
        <PrimaryTitle icon={skillIcon} text={"skills"} />
        <p>
          Its hard to mention every little skill that I have. But to give you an
          overview, here are some of my skills.
        </p>
        <hr />
        <div className="all-skills">
          {Array.from(skills).map(([key = "", values = []]) => (
            <SubSkills key={key}>
              <SubTitle text={key} icon={skillIcon} />
              {console.log(values)}
              {values.map((skill) => (
                <div key={skill.id} className="skill">
                  <span className="icon">
                    <img src={publicURL + skill.icon} alt={skill.name} />
                  </span>
                  <h4 className="skill-name">{skill.name}</h4>
                  <p className="skill-description">
                    Its hard to mention every little skill that I have. But to
                    give you an overview, here are some of my skills.
                  </p>
                </div>
              ))}
            </SubSkills>
          ))}
        </div>
      </div>
    </SkillsContainer>
  );
}
