import React from "react";
import SocialMediasContainer from "./styles/socialMediaIcons.styled";
import { medias } from '../../redux/store'
export default function socialMediaIcons({ links = {}, style = {} }) {

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
