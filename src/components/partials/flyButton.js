import React from "react";
import { FlyLink, IconContainer } from "./styles/flyButton.styled";
import flyIcon from "../../icon/fly.png";
export default function flyButton({
  text = "",
  href = "#",
  target = "_blank",
}) {
  return (
    <FlyLink className="gradientTopBottom" href={href} target={target}>
      {text}
      <IconContainer className="gradientTopBottom">
        <img src={flyIcon} alt="Open link" />
      </IconContainer>
    </FlyLink>
  );
}
