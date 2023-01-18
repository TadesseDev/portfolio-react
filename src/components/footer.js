import React from "react";
import { address } from "../redux/store";
import FooterContainer from "./styles/footer.styled";
import SocialMediaIcons from "./partials/socialMediaIcons";

export default function Footer() {
  return (
    <FooterContainer id="footer">
      <div className="links">
        <a href="#skills">Skills</a>
        <a href="#recent-works">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
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
        <a href="#footer">{address.phone}</a>
        <a href={"mailto:"+address.email}>{address.email}</a>
      </div>
    </FooterContainer>
  );
}
