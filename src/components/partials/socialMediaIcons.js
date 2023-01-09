import React from "react";
import SocialMediasContainer from "./styles/socialMediaIcons.styled";

import linkedIn from "../../icon/social media/LinkedIn.svg";
import twitter from "../../icon/social media/Twitter.svg";
import angelList from "../../icon/social media/AngelList.svg";
import gitHub from "../../icon/social media/GitHub.svg";
import hackerRank from "../../icon/social media/HackerRank.svg";
import facebook from "../../icon/social media/Facebook.svg";
import instagram from "../../icon/social media/Instagram.svg";
export default function socialMediaIcons({ links = {}, style = {} }) {
  let medias = new Map([
    [
      "linkedIn",
      {
        icon: linkedIn,
        link: "https://www.linkedin.com/in/tadesse-alemayehu-full-stack-developer/",
      },
    ],
    [
      "twitter",
      {
        icon: twitter,
        link: "https://twitter.com/tadesseWebDev",
      },
    ],
    [
      "angelList",
      {
        icon: angelList,
        link: "https://angel.co/u/tadesse-alemayehu",
      },
    ],
    [
      "gitHub",
      {
        icon: gitHub,
        link: "http://github.com/tadesse-Alemayehu/",
      },
    ],
    [
      "hackerRank",
      {
        icon: hackerRank,
        link: "https://www.hackerrank.com/TadesseFullStack?hr_r=1",
      },
    ],
    [
      "facebook",
      {
        icon: facebook,
        link: "https://www.facebook.com/tadesseWebDev",
      },
    ],
    [
      "instagram",
      {
        icon: instagram,
        link: "https://www.instagram.com/tadessewebdev/",
      },
    ],
  ]);
  return (
    <SocialMediasContainer style={{ ...style }}>
      {Object.keys(links).map((key) => (
        <li key={key}>
          <a href={{ ...medias.get(key), ...links[key] }.link} target="blank">
            <img className="icon" src={medias.get(key)?.icon} alt={key} />
          </a>
        </li>
      ))}
    </SocialMediasContainer>
  );
}
