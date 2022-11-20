import React from "react";
import NavBar from "./partials/navBar";
import { useState } from "react";
import { Circle } from "./partials/decorations";
import { Landing } from "./styles/LandingPage.styled";
import menu from "../icon/menu/menu.png";
export default function LandingPage() {
  let [showNavBar, updateDisplay] = useState(true);
  return (
    <Landing>
      <span className="showMenu" onClick={() => updateDisplay((old) => !old)}>
        <img src={menu} alt="open menus" />
      </span>
      <NavBar showNavBar={showNavBar} updateDisplay={updateDisplay} />
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
