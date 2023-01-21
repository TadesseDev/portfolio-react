import styled from "styled-components";

export const SkillsContainer = styled.div`
  overflow: hidden;
  margin: 10vh 0;
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  .pre > p {
    max-width: 70vw;
    margin: 0 auto;
  }
  hr {
    margin: 5vw 0;
    border: 1px solid var(--shine);
  }
  .all-skills {
    margin: 5vw 0;
  }
  .more {
    position: relative;
    border-radius: 10px;
    padding: 10px;
    z-index: 1;
    overflow: hidden;
    color: var(--shine);
    p {
      color: var(--shine);
    }
  }
  button {
    background: none;
    border: 1px solid var(--shine);
    margin: 10px;
    border-radius: 10px;
    width: 80%;
    padding: 3vw;
    color: var(--shine);
  }
  button:hover {
    background: var(--shine);
    color: var(--primary);
  }

  .background-decoration {
    width: 10px;
    height: 10px;
    border: 5px solid var(--primary2);
    opacity: 0;
    border-style: dotted dotted solid solid;
    position: absolute;
    z-index: -2;
    animation-name: border-rotate;
    animation-iteration-count: infinite;
    animation-duration: 4s;
    animation-direction: alternate;
    animation-timing-function: linear;
  }
  .background-decoration.circle {
    border-radius: 50%;
  }
  .background-decoration.v {
    border-style: dotted dotted none none;
  }

  @keyframes border-rotate {
    0% {
      width: 15px;
      height: 15px;
      transform: rotate(90deg);
      opacity: 0.01;
    }
    25% {
      width: 25px;
      height: 25px;
      transform: rotate(180deg);
      opacity: 0.3;
    }
    50% {
      width: 35px;
      height: 35px;
      transform: rotate(270deg);
      opacity: 0.4;
    }
    100% {
      width: 50px;
      height: 50px;
      transform: rotate(360deg);
      opacity: 0.5;
    }
  }
`;
export const SubSkills = styled.div`
  max-height: 350px;
  overflow: scroll;
  position: relative;
  margin: 0 15px;
  .skill {
    display: grid;
    grid-template-areas:
      "top-left top-right"
      "bottom-left bottom-right";
    align-items: center;
    justify-items: center;
    gap: 2vw;
  }
  .icon {
    grid-area: bottom-left;
  }
  .skill-name {
    grid-area: top-right;
    margin: 2vw;
  }
  .skill-description {
    grid-area: bottom-right;
    padding: 0 5vw;
  }
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: var(--primary);
    border: 1px solid var(--decoration2);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 1px solid transparent;
    background-clip: content-box;
    background-color: var(--decoration2);
  }
`;
