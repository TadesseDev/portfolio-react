import React from "react";
import MirrorContainer from "./styles/mirror.styled.js";
export default function Mirror({ style = {} }) {
  return (
    <MirrorContainer style={{ ...style }} className="mirror">
    </MirrorContainer>
  );
}
