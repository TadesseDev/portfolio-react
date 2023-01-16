import React from "react";
import { address } from "../redux/store";
import FooterContainer from "./styles/footer.styled";
import SocialMediaIcons from "./partials/socialMediaIcons";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="links">
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Certifications</a>
        <a href="#">Testimonials</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <SocialMediaIcons
        links={{
          linkedIn: {},
          twitter: {},
          angelList: {},
          gitHub: {},
          hackerRank: {},
        }}
      />
      <div className="address">
        <a href="#">{address.phone}</a>
        <a href="#">{address.email}</a>
      </div>
    </FooterContainer>
  );
}
