import React from "react";
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
export default function NavBar() {
  return (
    <Navbar>
      <Direction icon="hide" />
      <ul>
        <li>
          <img className="icon" src={home} alt="home" />
          <a href="/">Home</a>
        </li>
        <li>
          <img className="icon" src={skills} alt="skills" />
          <a href="/">Skills</a>
        </li>
        <li>
          <img className="icon" src={works} alt="works" />
          <a href="/">Projects</a>
        </li>
        <li>
          <img className="icon" src={certificates} alt="certificates" />
          <a href="/">Certificates</a>
        </li>
        <li>
          <img className="icon" src={testimonials} alt="home" />
          <a href="/">Testimonials</a>
        </li>
        <li>
          <img className="icon" src={about} alt="about" />
          <a href="/">About</a>
        </li>
        <li>
          <img className="icon" src={user} alt="user" />
          <a href="/">Digital presence</a>
        </li>
        <li>
          <img className="icon" src={me_standing} alt="me standing" />
          <a href="/">contact me</a>
        </li>
      </ul>
    </Navbar>
  );
}
