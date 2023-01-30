import styled from "styled-components";
import blob from "../../images/blob.svg";
import xd from "../../icon/adobe_xd.svg";
import ruby from "../../icon/ruby.svg";
import postgresql from "../../icon/postgresql.svg";
import javascript from "../../icon/javascript.svg";
export const Landing = styled.main`
  height: 100vh;
  .showMenu img {
    margin: 3vw;
    padding: 2vw;
    width: 10vw;
    max-width: 50px;
    position: fixed;
    right: 0;
    z-index: 2;
    background-color: var(--primary-transparent);
    backdrop-filter: blur(10px);
    border-radius: 20px;
  }

  .sun {
    transform: translate(-40%, -40%);
  }
  .primary-image-container {
    position: relative;
    overflow: hidden;
    width: 100vw;
    margin: 0 -5vw;
  }
  @media (min-width: 1024px) {
    position: relative;
    .primary-image-container {
      position: absolute;
      left: 0;
      bottom: 0;
      max-width: 100%;
    }
    .sun {
      transform: translate(-70%, -70%);
    }
    .showMenu {
      display: none;
    }
    .direction {
      display: none;
    }
  }
`;

export const PrimaryImage = styled.div`
  height: 50vh;
  position: relative;
  background-image: url(${blob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80vw;
  background-position-y: 19vh;
  z-index: -1;
  animation-name: fade-in-opacity;
  animation-duration: 1s;
  animation-timing-function: linear;
  img {
    height: 100%;
    max-width: 100%;
    margin: auto;
    display: block;
  }
  .blur-img {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: rgb(7, 33, 68);
    background: linear-gradient(
      0deg,
      rgba(7, 33, 68, 1) 0%,
      rgba(7, 33, 68, 0.9332107843137255) 38%,
      rgba(7, 33, 68, 0.6194852941176471) 69%,
      rgba(7, 33, 68, 0.028448879551820738) 100%
    );
  }

  .decoration {
    width: 10vw;
    height: 10vw;
    max-width: 50px;
    position: absolute;
    display: block;
    z-index: 1;
    background-repeat: no-repeat;
    background-size: contain;
  }
  #xd {
    top: 15vh;
    left: 10%;
    background-image: url(${xd});
  }
  #ruby {
    top: 15vh;
    right: 10%;
    background-image: url(${ruby});
  }
  #postgres {
    bottom: 10vh;
    left: 25%;
    background-image: url(${postgresql});
  }
  #javascript {
    bottom: 10vh;
    right: 25%;
    background-image: url(${javascript});
  }

  @media (min-width: 1024px) {
    height: auto;
    background-position: 50% 0;
    background-size: 28vw;
    img {
      height: auto;
      width: 25vw;
      max-width: 500px;
    }
    #xd,
    #ruby,
    #postgres,
    #javascript {
      bottom: 0;
      left: 0;
      margin: 0;
      padding: 0;
    }
  }
`;

export const Detail = styled.div`
  margin-top: -2vh;
  text-align: center;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .heading {
    min-width: 100%;
    margin: 0 -5vw;
    padding: 0 5vw;
    background-color: var(--primary);
  }
  h1,
  h2 {
    margin: 0;
  }
  p {
    margin: 5vw;
  }
  #getResume {
    position: relative;
    display: inline-block;
    max-width: max-content;
  }
  @media (min-width: 1024px) {
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 38.5vw;
    min-height: 70vh;
    .heading {
      background: transparent;
      h1{
        font-size: 2rem;
      }
      button{
        display: none;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
    .icon{
      max-width: 40px;
    }
    ul{
      justify-content: center;
      li{
        margin: 15px;
      }
    }
  }
`;
