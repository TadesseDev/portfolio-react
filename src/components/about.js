import React, { useContext } from "react";
import PrimaryTitle from "./partials/primaryTitle";
import SubTitle from "./partials/subTitle";
import { InformationContext } from "../context/informationContext";
import Mirror from "./partials/mirror";
import AboutContainer, {
  AboutCard,
  CardContainer,
} from "./styles/about.styled";
export default function About() {
  const { medias } = useContext(InformationContext);
  const findMeLinks = ["instagram", "gitHub", "twitter", "linkedIn"];
  let old = "linkedIn";
  const handleFindMeCardIndex = (key) => {
    document.getElementById(old).style.zIndex = "0";
    document.getElementById(key).style.zIndex = "1";
    old = key;
  };
  return (
    <AboutContainer id="about">
      <PrimaryTitle text="About" />
      <p>
        learning a language is not the the point, Understand the fundamental of
        <span className="bright"> CS </span>
        then you can master what ever language or framework there is to it.
        <br />
        <span className="bright">
          "it is a matter of reading and writhing a new syntax"
        </span>
        . <br />
        <span className="emoji">🫠</span>
      </p>
      <p>
        Algorithm and Data Structure enthusiast. What interestl me the most is
        to deal with the <span className="bright">time</span> and{" "}
        <span className="bright">memory</span> efficiency. If you like to
        impress me optimize my code to a point it perform 1 microsecond better.
        <br />
        <span className="emoji">🙌</span>
      </p>
      <p>
        I love writhing clean code, As they say “
        <span className="bright">
          Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand.
        </span>
        ” .<br />
        <span className="emoji">😊</span>
      </p>
      <span id="find-me"></span>
      <SubTitle text="You can find me..." />
      <CardContainer>
        {findMeLinks.map((key, index) => (
          <AboutCard
            key={key}
            margin={index}
            onClick={() => handleFindMeCardIndex(key)}
            id={key}
          >
            <Mirror />
            <h3>{key}</h3>
            <img src={medias.get(key)?.icon2} alt={key} />
            <p>{medias.get(key)?.description}</p>
            <a href={medias.get(key)?.link} target="_black">
              <button className="gradientTopBottom">Go</button>
            </a>
          </AboutCard>
        ))}
      </CardContainer>
    </AboutContainer>
  );
}
