import React, { useRef } from "react";
import { Navbar } from "./styles/navbar.styled.js";
import Direction from "./direction";
import home from "../../icon/menu/home.png";
import skills from "../../icon/menu/skills.png";
import works from "../../icon/menu/works.png";
import certificates from "../../icon/menu/certificates.png";
import testimonials from "../../icon/menu/testimonials.png";
import about from "../../icon/menu/about.png";
import user from "../../icon/menu/user.png";
import me_standing from "../../icon/menu/me-standing.png";
import Mirror from "./mirror.js";
export default function NavBar({ showNavBar, toggleNavbar }) {
  return (
    <Navbar
      display={showNavBar ? "block" : "none"}
      data-testid="navbar"
    >
      <Mirror />
      <Direction
        icon="hide"
        toggle={toggleNavbar}
        style={{
          position: "absolute",
          border: "4px solid var(--bright)",
        }}
      />
      <ul>
        <li>
          <a href="#home" onClick={toggleNavbar}>
            <img
              className="icon"
              src={home}
              alt="home"
              width="30px"
              height="auto"
            />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#skills" onClick={toggleNavbar}>
            <img
              className="icon"
              src={skills}
              alt="skills"
              width="30px"
              height="auto"
            />
            <span>Skills</span>
          </a>
        </li>
        <li>
          <a href="#recent-works" onClick={toggleNavbar}>
            <img
              className="icon"
              src={works}
              alt="recent works"
              width="30px"
              height="auto"
            />
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="#certifications" onClick={toggleNavbar}>
            <img
              className="icon"
              src={certificates}
              alt="certificates"
              width="30px"
              height="auto"
            />
            <span>Certificates</span>
          </a>
        </li>
        <li>
          <a href="#testimonials" onClick={toggleNavbar}>
            <img
              className="icon"
              src={testimonials}
              alt="testimonials"
              width="30px"
              height="auto"
            />
            <span>Testimonials</span>
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggleNavbar}>
            <img
              className="icon"
              src={about}
              alt="about"
              width="30px"
              height="auto"
            />
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="#find-me" onClick={toggleNavbar}>
            <img
              className="icon"
              src={user}
              alt="social medias"
              width="30px"
              height="auto"
            />
            <span>social media</span>
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleNavbar}>
            <img
              className="icon"
              src={me_standing}
              alt="contact me"
              width="30px"
              height="auto"
            />
            <span>Contact me</span>
          </a>
        </li>
      </ul>
    </Navbar>
  );
}
