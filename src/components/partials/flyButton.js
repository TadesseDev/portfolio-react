import React from "react";
import { FlyLink, IconContainer } from "./styles/flyButton.styled";
import flyIcon from "../../icon/fly.png";
export default function flyButton({
  text = "",
  href = "#",
  target = "_blank",
  preventDefault = false,
}) {
  return (
    <FlyLink
      className="gradientTopBottom"
      href={href}
      target={target}
      onClick={preventDefault ? (e) => e.preventDefault() : () => {}}
    >
      {text}
      <IconContainer className="gradientTopBottom">
        <img src={flyIcon} alt="Open link" width="80%" height="80%" />
      </IconContainer>
    </FlyLink>
  );
}
