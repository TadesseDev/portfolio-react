import React from "react";
import { Navbar } from "../styles/navbar.styled.js";
import { Logo } from "../styles/logo.styled.js";
export default function NavBar() {
  return (
    <Navbar>
      <Logo>Well come</Logo>
      <ul>
        <li>
          <a href="#">home</a>
        </li>
      </ul>
    </Navbar>
  );
}
