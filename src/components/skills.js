import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SkillsContainer, SubSkills } from "./styles/skills.styled";
import PrimaryTitle from "./partials/primaryTitle";
import SubTitle from "./partials/subTitle";
import skillIcon from "../icon/skills.svg";
import design from "../icon/design.svg";
import frontend from "../icon/frontend.svg";
import backend from "../icon/backend.svg";
import database from "../icon/database.svg";
import Mirror from "./partials/mirror";
import test from "../icon/database.svg"; // TODO: change the icon for the test
import { getSkills } from "../redux/components/skills.js";
export default function Skills() {
  const storeSkills = useSelector((store) => store.skills);
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
  const skills = new Map();
  storeSkills.forEach((skill) => {
    if (skills.has(skill.tech_type))
      skills.get(skill.tech_type, skill).push(skill);
    else skills.set(skill.tech_type, [skill]);
  });

  return (
    <SkillsContainer id="skills">
      <div className="pre">
        <PrimaryTitle icon={skillIcon} text={"skills"} />
        <p>
          Well, It's almost impossible to tell you everything I know. But to
          give you a glimpse, here are some of my skills.
        </p>
        <hr />
        <div className="all-skills">
          {Array.from(skills).map(([key = "", values = []]) => (
            <div key={key} className="skill-container">
              <SubTitle text={key} icon={iconMap.get(key)} />
              <SubSkills text={key}>
                {values.map((skill) => (
                  <div key={skill.id} className="skill">
                    <span className="icon">
                      <img src={skill.icon} alt={skill.name} />
                    </span>
                    <h4 className="skill-name">{skill.name}</h4>
                    <p className="skill-description">{skill.description}</p>

                  </div>
                ))}
              </SubSkills>
              <hr />
            </div>
          ))}
        </div>
        <div className="more">
          <Mirror
            style={{
              backgroundColor: "#fdfeff14",
              backdropFilter: "blur(5px)",
            }}
            className="mirror"
          />
          <h2>Are you wondering about specific technology?</h2>
          <p>This is not all of me...😊</p>
          <a href="#contact">
            <button>Get in touch</button>
          </a>
        </div>
      </div>
    </SkillsContainer>
  );
}
