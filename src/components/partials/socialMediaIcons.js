import React, { useContext } from "react";
import SocialMediasContainer from "./styles/socialMediaIcons.styled";
import { InformationContext } from "../../context/informationContext";
export default function SocialMediaIcons({ links = {}, style = {} }) {
  const { medias } = useContext(InformationContext);
  return (
    <SocialMediasContainer style={{ ...style }}>
      {Object.keys(links).map((key) => (
        <li key={key}>
          <a href={{ ...medias.get(key), ...links[key] }.link} target="blank">
            <img className="icon" src={medias.get(key)?.icon} alt={key} />
          </a>
        </li>
      ))}
    </SocialMediasContainer>
  );
}
