import React from "react";
import LoaderContainer from "./styles/loader.styled";
export default function Loader({ style = {}, timing = 2, id="", text='' }) {
  return (
    <LoaderContainer style={{ ...style }} timing={timing} id={id} text={text}>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="text" >
        {text}
      </div>
    </LoaderContainer>
  );
}
