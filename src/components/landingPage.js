import React from "react";
import { InView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import NavBar from "./partials/navBar";
import DownloadButton from "./partials/downloadButton";
import { useState } from "react";
import { Circle } from "./partials/decorations";
import { Landing, PrimaryImage, Detail } from "./styles/LandingPage.styled";
import menu from "../icon/menu/menu.png";
import my_picture from "../images/resized.svg";
import my_picture_desktop from "../images/desktop-me.png";
import SocialMediaIcons from "./partials/socialMediaIcons";
import Loader from "./partials/loader";
import BackgroundDecoration from "./partials/backgroundDecoration";
export default function LandingPage() {
  let [showNavBar, updateDisplay] = useState(false);
  const toggleNavbar = () => {
    updateDisplay((old) => !old);
  };
  return (
    <Landing id="home">
      <span className="showMenu" onClick={toggleNavbar}>
        <img src={menu} alt="open menus" />
      </span>
      <NavBar showNavBar={showNavBar} toggleNavbar={toggleNavbar} />

      <InView
        onChange={(inView, entry) => {
          inView
            ? entry.target.parentNode
                .getElementsByTagName("nav")[0]
                .classList.remove("hidden")
            : entry.target.parentNode
                .getElementsByTagName("nav")[0]
                .classList.add("hidden");
        }}
      ></InView>
      <div id="decoration-text">
        <h1>From analysis to Deployment</h1>
      </div>
      <div className="primary-image-container">
        <Loader
          style={{
            position: "absolute",
            top: "0",
            zIndex: "-2",
            opacity: "0.1",
            width: "100vw",
            height: "100vw",
          }}
          timing={5}
        />
        <PrimaryImage>
          <span className="decoration-container">
            <div className="decoration" id="xd"></div>
            <div className="decoration" id="postgres"></div>
            <div className="decoration" id="javascript"></div>
            <div className="decoration" id="ruby"></div>
          </span>
          <LazyLoadImage
            src={my_picture}
            alt="my"
            effect="blur"
            className="img"
            wrapperProps={{ style: { display: "inline", width: "100%" } }}
            style={{ display: "none" }}
            placeholder=<Loader />
          />
          <LazyLoadImage
            src={my_picture_desktop}
            alt="my"
            effect="blur"
            className="img"
            wrapperProps={{ style: { display: "inline", width: "100%" } }}
            placeholder=<Loader />
          />
          <div className="blur-img"></div>
        </PrimaryImage>
          <BackgroundDecoration
            style={{ top: "-10vw", left: "50vw", zIndex: "-3" }}
          />
      </div>
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
          position: "absolute",
          top: "0",
          left: "0",
          width: "20vw",
          height: "20vw",
          boxShadow: "0 0 10px 26px #dae02840",
        }}
        className="sun"
      />
      <div id="decoration-links">
        <a href="#testimonials" id="decoration-0" className="active">
          Affidavit
        </a>
        <a href="#skills" id="decoration-1">
          Skills
        </a>
        <a href="#about" id="decoration-2">
          About
        </a>
        <a href="#contact" id="decoration-3">
          Contact
        </a>
        <a href="#find-me" id="decoration-4">
          more
        </a>
      </div>
    </Landing>
  );
}
