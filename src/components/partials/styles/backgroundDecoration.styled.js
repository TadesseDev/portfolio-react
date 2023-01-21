import styled from "styled-components";

export default styled.div`
  width: 10px;
  height: 10px;
  border: 15px solid var(--primary2);
  opacity: 0;
  border-style: dotted;
  position: absolute;
  z-index: -2;
  animation-name: border-rotate;
  animation-iteration-count: infinite;
  animation-duration: 5s;
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
    75% {
      width: 48px;
      height: 48px;
      transform: rotate(360deg);
      opacity: 0.5;
    }
    100% {
      width: 50px;
      height: 50px;
      transform: rotate(360deg);
      opacity: 0.5;
    }
  }
`;
