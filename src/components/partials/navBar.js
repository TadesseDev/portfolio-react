import React from "react";
import { Navbar } from "./styles/navbar.styled.js";
export default function NavBar() {
  return (
    <Navbar>
      <ul>
        <li>
          <img className="icon" src="./icons/menu/home.png" alt="home" />
          <a href="/">Home</a>
        </li>
        <li>
          <img className="icon" src="./icons/menu/skills.png" alt="home" />
          <a href="/">Skills</a>
        </li>
        <li>
          <img className="icon" src="./icons/menu/works.png" alt="home" />
          <a href="/">Projects</a>
        </li>
        <li>
          <img
            className="icon"
            src="./icons/menu/certificates.png"
            alt="home"
          />
          <a href="/">Certificates</a>
        </li>
        <li>
          <img
            className="icon"
            src="./icons/menu/testimonials.png"
            alt="home"
          />
          <a href="/">Testimonials</a>
        </li>
        <li>
          <img className="icon" src="./icons/menu/about.png" alt="home" />
          <a href="/">About</a>
        </li>
        <li>
          <img className="icon" src="./icons/menu/user.png" alt="home" />
          <a href="/">Digital presence</a>
        </li>
        <li>
          <img className="icon" src="./icons/menu/me-standing.png" alt="home" />
          <a href="/">contact me</a>
        </li>
      </ul>
    </Navbar>
  );
}
