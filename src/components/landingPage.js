import React from "react";
import NavBar from "./partials/navBar";
import DownloadButton from "./partials/downloadButton";
import { useState } from "react";
import { Circle } from "./partials/decorations";
import { Landing, PrimaryImage, Detail } from "./styles/LandingPage.styled";
import menu from "../icon/menu/menu.png";
import my_picture from "../images/resized.svg";
import SocialMediaIcons from "./partials/socialMediaIcons";
export default function LandingPage() {
  let [showNavBar, updateDisplay] = useState(false);
  return (
    <Landing id="home">
      <span className="showMenu" onClick={() => updateDisplay((old) => !old)}>
        <img src={menu} alt="open menus" />
      </span>
      <NavBar showNavBar={showNavBar} updateDisplay={updateDisplay} />
      <PrimaryImage>
        <div className="decoration" id="xd"></div>
        <div className="decoration" id="postgres"></div>
        <div className="decoration" id="javascript"></div>
        <div className="decoration" id="ruby"></div>
        <img src={my_picture} alt="my" />
        <div className="blur-img"></div>
      </PrimaryImage>
      <Detail>
        <div className="heading">
          <h1>Tadesse Dubale</h1>
          <h2>"Truth be told"</h2>
        </div>
        <p>
          I've been told, I'm among the top 1% of coders out there!! I don't
          believe in coding, I believe in making it optimized. You don't believe
          me? Lets get to the test.
        </p>
        <a
          href="https://docs.google.com/document/d/1xGXejoEeo6X-5TrkKsl6Okj21yWyGKP6dq3Qm47tKBo/edit?usp=sharing"
          id="getResume"
          target="blank"
        >
          <DownloadButton title="get my resume" moreStyle={{ zIndex: "1" }} />
          <Circle
            moreStyle={{
              width: 40,
              height: 40,
              position: "absolute",
              right: 0,
              transform: "translate(20%, -80%)",
            }}
          />
        </a>
        <SocialMediaIcons
          links={{
            linkedIn: {},
            twitter: {},
            angelList: {},
            gitHub: {},
            hackerRank: {},
          }}
        />
      </Detail>

      <Circle
        moreStyle={{
          transform: "translate(-40%, -40%)",
          position: "absolute",
          top: "0",
          left: "0",
          width: "20vw",
          height: "20vw",
          boxShadow: "0 0 10px 26px #dae02840",
        }}
      />
    </Landing>
  );
}
