import styled from "styled-components";
import blob from "../../images/blob.svg";
import xd from "../../icon/adobe_xd.svg";
import ruby from "../../icon/ruby.svg";
import postgresql from "../../icon/postgresql.svg";
import javascript from "../../icon/javascript.svg";
export const Landing = styled.main`
  height: 100vh;
  .showMenu img {
    padding: 5vw;
    width: 10vw;
    position: absolute;
    right: 0;
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
  img {
    height: 100%;
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
`;

export const Detail = styled.div`
  margin-top: -2vh;
  text-align: center;
  background-color: var(--primary);
  h1 {
    margin: 0;
  }
`;