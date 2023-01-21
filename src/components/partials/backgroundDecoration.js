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

export function AppDecorations({number = 0, className="" }) {
  const decorations = []
  for (let i = 0; i < number; i++) {
    decorations.push(<BackgroundDecoration className={className} />);
  }
  return decorations;
}
