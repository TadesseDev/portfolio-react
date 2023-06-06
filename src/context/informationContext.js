import linkedIn from "../icon/social media/LinkedIn.svg";
import twitter from "../icon/social media/Twitter.svg";
import angelList from "../icon/social media/AngelList.svg";
import gitHub from "../icon/social media/GitHub.svg";
import hackerRank from "../icon/social media/HackerRank.svg";
import facebook from "../icon/social media/Facebook.svg";
import instagram from "../icon/social media/Instagram.svg";
import linkedIn_2 from "../icon/social media/LinkedIn_2.svg";
import twitter_2 from "../icon/social media/Twitter_2.svg";
import gitHub_2 from "../icon/social media/GitHub_2.svg";
import instagram_2 from "../icon/social media/Instagram_2.svg";
import { createContext } from "react";
export const InformationContext = createContext();

export const medias = new Map([
  [
    "linkedIn",
    {
      icon: linkedIn,
      icon2: linkedIn_2,
      description:
        "Ill be connecting with professionals, sharing my blog and Ideas.",
      link: "https://www.linkedin.com/in/tadessedevxx",
    },
  ],
  [
    "twitter",
    {
      icon: twitter,
      icon2: twitter_2,
      description:
        "I love twitting my thought on twitter. Follow me, Lets keep it fresh.",
      link: "https://twitter.com/tadesseDev",
    },
  ],
  [
    "angelList",
    {
      icon: angelList,
      description: "",
      link: "https://angel.co/u/tadesse-alemayehu",
    },
  ],
  [
    "gitHub",
    {
      icon: gitHub,
      icon2: gitHub_2,
      description: "You can see my recent projects, solutions, activities",
      link: "http://github.com/tadessedev",
    },
  ],
  [
    "hackerRank",
    {
      icon: hackerRank,
      description: "",
      link: "https://www.hackerrank.com/TadesseFullStack?hr_r=1",
    },
  ],
  [
    "facebook",
    {
      icon: facebook,
      description: "",
      link: "https://www.facebook.com/tadesseDev1",
    },
  ],
  [
    "instagram",
    {
      icon: instagram,
      icon2: instagram_2,
      description: "Ill be posting my pictures once every year 😊.",
      link: "https://www.instagram.com/tadessedev/",
    },
  ],
]);
export const address = { email: "tadalem26@gmail.com", phone: "+251921577930" };
