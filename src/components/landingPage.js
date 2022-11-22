import React from "react";
import NavBar from "./partials/navBar";
import { useState } from "react";
import { Circle } from "./partials/decorations";
import { Landing, PrimaryImage, Detail } from "./styles/LandingPage.styled";
import menu from "../icon/menu/menu.png";
import my_picture from "../images/resized.svg";
export default function LandingPage() {
  let [showNavBar, updateDisplay] = useState(false);
  return (
    <Landing>
      <span className="showMenu" onClick={() => updateDisplay((old) => !old)}>
        <img src={menu} alt="open menus" />
      </span>
      <NavBar showNavBar={showNavBar} updateDisplay={updateDisplay} />
      <PrimaryImage>
        <div className="decoration" id="xd"></div>
        <div className="decoration" id="postgres"></div>
        <div className="decoration" id="javascript"></div>
        <div className="decoration" id="ruby"></div>
        <img src={my_picture} alt="my-picture" />
        <div className="blur-img"></div>
      </PrimaryImage>
      <Detail>
        <h1>Tadesse Dubale</h1>
        <h2>"Truth be told"</h2>
        <p>
          I've been told, I'm among the top 1% of coders out there!! I don't
          believe in coding, I believe in making it optimized. You don't believe
          me? Lets get to the test.
        </p>
      </Detail>
      <Circle
        moreStyle={{
          transform: "translate(-50%, -50%)",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      />
    </Landing>
  );
}
