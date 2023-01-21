import React from "react";
import DecorationContainer from "./styles/backgroundDecoration.styled";
export default function BackgroundDecoration({ style = {} , className=''}) {
  return (
    <DecorationContainer
      style={{
        ...style,
      }}
      className={className}
    ></DecorationContainer>
  );
}
