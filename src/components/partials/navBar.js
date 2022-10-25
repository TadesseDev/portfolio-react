import React from "react";
import { Navbar } from "./styles/navbar.styled.js";
import { Logo } from "../styles/logo.styled.js";
export default function NavBar() {
  return (
    <Navbar>
      <Logo>Well come</Logo>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Skills and abilities</a>
        </li>
        <li>
          <a href="#">Recent work</a>
        </li>
        <li>
          <a href="#">Find me here</a>
        </li>
        <li>
          <a href="#">Licenses and certifications</a>
        </li>
        <li>
          <a href="#">References/testimonials</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </Navbar>
  );
}
