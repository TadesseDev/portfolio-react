import { createContext } from "react";
export const showMoreContent = (e, parentNode) => {
  const parent = parentNode;
  console.log(parentNode);
  const more = parent.getElementsByClassName("more")[0];
  const less = parent.getElementsByClassName("less")[0];
  const textContainer = parent.getElementsByClassName("text-container")[0];

  textContainer.style.maxHeight = "max-content";
  less.style.display = "block";
  more.style.display = "none";
};
export const showLessContent = (e, parentNode, height=20) => {
  const parent = parentNode;
  const more = parent.getElementsByClassName("more")[0];
  const less = parent.getElementsByClassName("less")[0];
  const textContainer = parent.getElementsByClassName("text-container")[0];

  textContainer.style.maxHeight = height+"px";
  less.style.display = "none";
  more.style.display = "block";
};

export default createContext();
