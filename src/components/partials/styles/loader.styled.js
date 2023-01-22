import styled from "styled-components";

export default styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: auto;
  .circle1 {
    width: 0;
    height: 0;
    border-radius: 50%;
    border: 5px solid var(--bright);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: loading-inner;
    animation-iteration-count: infinite;
    animation-duration: ${({ timing }) => timing}s;
    animation-timing-function: linear;
  }
  .circle2 {
    width: 0;
    height: 0;
    border-radius: 50%;
    border: 5px solid var(--shine);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: loading-inner;
    animation-iteration-count: infinite;
    animation-duration: ${({ timing }) => timing}s;
    animation-timing-function: linear;
    animation-delay: ${({ timing }) => timing * 0.3}s;
  }
  .circle3 {
    width: 0;
    height: 0;
    border-radius: 50%;
    border: 5px solid var(--decoration1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: loading-inner;
    animation-iteration-count: infinite;
    animation-duration: ${({ timing }) => timing}s;
    animation-timing-function: linear;
    animation-delay: ${({ timing }) => timing*0.7}s;
  }
  @keyframes loading-inner {
    0% {
      width: 0%;
      height: 0%;
      opacity: 0;
    }
    25% {
      width: 25%;
      height: 25%;
      opacity: 0.4;
    }
    50% {
      width: 50%;
      height: 50%;
      opacity: 0.7;
    }
    75% {
      width: 75%;
      height: 75%;
      opacity: 0.9;
    }
    98% {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    100% {
      width: 0;
      height: 0;
      opacity: 0;
    }
  }
`;
