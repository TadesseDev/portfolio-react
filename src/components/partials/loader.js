import React from "react";
import LoaderContainer from "./styles/loader.styled";
export default function Loader({ style = {}, timing = 2 }) {
  return (
    <LoaderContainer style={{ ...style }} timing={timing}>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
    </LoaderContainer>
  );
}