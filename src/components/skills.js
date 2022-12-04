import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SkillsContainer, SubSkills } from "./styles/skills.styled";
import { publicURL } from "../api/root";
import Direction from "./partials/direction.js";
import PrimaryTitle from "./partials/primaryTitle";
import SubTitle from "./partials/subTitle";
import skillIcon from "../icon/skills.svg";
import design from "../icon/design.svg";
import frontend from "../icon/frontend.svg";
import backend from "../icon/backend.svg";
import database from "../icon/database.svg";
import test from "../icon/database.svg"; // TODO: change the icon for the test
import { getSkills } from "../redux/components/skills.js";
export default function Skills() {
  let iconMap = new Map([
    ["Design", design],
    ["Frontend", frontend],
    ["Backend", backend],
    ["Database", database],
    ["Test", test],
  ]);
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
            <>
              <SubTitle text={key} icon={iconMap.get(key)} />
              <SubSkills key={key}>
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
                <div className="overlay">
                  {" "}
                  <Direction
                    icon="more"
                    style={{ border: "none", padding: "0" }}
                  />
                </div>
              </SubSkills>
            </>
          ))}
        </div>
      </div>
    </SkillsContainer>
  );
}
