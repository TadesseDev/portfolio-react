import { createContext } from "react";
export const showMoreContent = (e) => {
  const parent = e.target.parentNode.parentNode;
  const more = parent.getElementsByClassName("more")[0];
  const less = parent.getElementsByClassName("less")[0];
  const textContainer = parent.getElementsByClassName("text-container")[0];

  textContainer.style.maxHeight = "max-content";
  less.style.display = "block";
  more.style.display = "none";
};
export const showLessContent = (e) => {
  const parent = e.target.parentNode.parentNode;
  const more = parent.getElementsByClassName("more")[0];
  const less = parent.getElementsByClassName("less")[0];
  const textContainer = parent.getElementsByClassName("text-container")[0];

  textContainer.style.maxHeight = "20px";
  less.style.display = "none";
  more.style.display = "block";
};

export default createContext();
