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

  const skillNode = document.getElementById("skills");
  const config = { attributes: false, childList: true, subtree: true };
  const skillObserver = new MutationObserver(() => {
    const decorations = document.getElementsByClassName("background-decoration");
    for (let decoration of decorations) {
      decoration.style.top = `${Math.floor(Math.random() * 100)}%`;
      decoration.style.left = `${Math.floor(Math.random() * 100)}%`;
    }
  });
  skillNode&&skillObserver.observe(skillNode, config);
  return (
    <SkillsContainer id="skills">
      <div className="pre">
        <PrimaryTitle icon={skillIcon} text={"skills"} />
        <p>
          Its hard to mention every little skill that I have. But to give you an
          overview, here are some of my skills.
        </p>
        <hr />
        <div className="all-skills">
          {Array.from(skills).map(([key = "", values = []]) => (
            <div key={key}>
              <SubTitle text={key} icon={iconMap.get(key)} />
              <SubSkills text={key}>
                {values.map((skill) => (
                  <div key={skill.id} className="skill">
                    <span className="icon">
                      <img src={skill.icon} alt={skill.name} />
                    </span>
                    <h4 className="skill-name">{skill.name}</h4>
                    <p className="skill-description">
                      Its hard to mention every little skill that I have. But to
                      give you an overview, here are some of my skills.
                    </p>
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
          />
          <p>Any other skill?</p>
          <strong>I might have forgot to tell you 😊</strong>
          <a href="#contact">
            <button>Get in touch</button>
          </a>
        </div>
      </div>

      <div className="background-decoration v"></div>
      <div className="background-decoration circle"></div>
      <div className="background-decoration"></div>
      <div className="background-decoration circle"></div>
      <div className="background-decoration v"></div>
      <div className="background-decoration circle"></div>
      <div className="background-decoration v"></div>
      <div className="background-decoration circle"></div>
      <div className="background-decoration"></div>
      <div className="background-decoration circle"></div>
      <div className="background-decoration v"></div>
      <div className="background-decoration circle"></div>
      <div className="background-decoration v"></div>
      <div className="background-decoration circle"></div>
      <div className="background-decoration"></div>
      <div className="background-decoration circle"></div>
      <div className="background-decoration v"></div>
      <div className="background-decoration circle"></div>
    </SkillsContainer>
  );
}
