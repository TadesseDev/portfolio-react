import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SocialMediasContainer from "./styles/socialMediaIcons.styled";
import { InformationContext } from "../../context/informationContext";
export default function SocialMediaIcons({ links = {}, style = {} }) {
  const { medias } = useContext(InformationContext);
  return (
    <SocialMediasContainer style={{ ...style }}>
      {Object.keys(links).map((key) => (
        <li key={key}>
          <a
            href={{ ...medias.get(key), ...links[key] }.link}
            target="blank"
            aria-label={`See ${links.name || "tadesse"}'s ${key}`}
          >
            <LazyLoadImage
              className="icon"
              src={medias.get(key)?.icon}
              alt={`See ${links[key].name || "tadesse"}'s ${key}`}
              effect="blur"
            />
            <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
          </a>
        </li>
      ))}
    </SocialMediasContainer>
  );
}
