import React from "react";
import NavBar from "./partials/navBar";
import DownloadButton from "./partials/downloadButton";
import { useState } from "react";
import { Circle } from "./partials/decorations";
import { Landing, PrimaryImage, Detail } from "./styles/LandingPage.styled";
import menu from "../icon/menu/menu.png";
import my_picture from "../images/resized.svg";
import linkedIn from "../icon/social media/LinkedIn.svg";
import twitter from "../icon/social media/Twitter.svg";
import angelList from "../icon/social media/AngelList.svg";
import gitHub from "../icon/social media/GitHub.svg";
import hackerRank from "../icon/social media/HackerRank.svg";
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
          <DownloadButton title="GET MY RESUME" moreStyle={{ zIndex: "1" }} />
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
        <ul className="social-media">
          <li>
            <a href="http://github.com/tadesse-Alemayehu/" target="blank">
              <img className="icon" src={gitHub} alt="GitHub" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/tadesse-alemayehu-full-stack-developer/"
              target="blank"
            >
              <img className="icon" src={linkedIn} alt="LinkedIn" />
            </a>
          </li>

          <li>
            <a href="https://twitter.com/tadesseWebDev" target="blank">
              <img className="icon" src={twitter} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://angel.co/u/tadesse-alemayehu" target="blank">
              <img className="icon" src={angelList} alt="AngelList" />
            </a>
          </li>

          <li>
            <a
              href="https://www.hackerrank.com/TadesseFullStack?hr_r=1"
              target="blank"
            >
              <img className="icon" src={hackerRank} alt="HackerRank" />
            </a>
          </li>
        </ul>
      </Detail>

      <Circle
        moreStyle={{
          transform: "translate(-40%, -40%)",
          position: "absolute",
          top: "0",
          left: "0",
          width: "20vw",
          height: "20vw",
        }}
      />
    </Landing>
  );
}
