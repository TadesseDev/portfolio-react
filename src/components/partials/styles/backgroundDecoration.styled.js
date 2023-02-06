import styled from "styled-components";

export default styled.div`
  width: 5vw;
  height: 5vw;
  border: 10vw solid var(--primary2);
  opacity: 0;
  border-style: dotted;
  position: absolute;
  z-index: -2;
  animation-name: border-rotate;
  animation-iteration-count: infinite;
  animation-duration: 200s;
  animation-direction: alternate;
  animation-timing-function: linear;
  top: ${Math.floor(Math.random() * 100)}%;
  left: ${Math.floor(Math.random() * 100)}%;
  border-radius: 50%;
  &.half-dot-circle {
    border-radius: 50%;
    border-style: dotted dotted solid solid;
  }
  &.v {
    border-style: dotted dotted none none;
    border-radius: 0;
  }
  &.half-dot {
    border-style: dotted dotted solid solid;
    border-radius: 0;
  }
  @keyframes border-rotate {
    0% {
      width: 5vw;
      height: 5vw;
      transform: rotate(90deg);
      opacity: 0.1;
    }
    25% {
      width: 10vw;
      height: 10px;
      transform: rotate(180deg);
      opacity: 0.3;
    }
    50% {
      width: 15vw;
      height: 15vw;
      transform: rotate(270deg);
      opacity: 0.4;
    }
    75% {
      width: 20vw;
      height: 20vw;
      transform: rotate(360deg);
      opacity: 0.5;
    }
    100% {
      width: 25vw;
      height: 25vw;
      transform: rotate(360deg);
      opacity: 0.5;
    }
  }
`;
