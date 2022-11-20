import styled from "styled-components";

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
  img {
    height: 100%;
    margin: auto;
    display: block;
  }
  .blur-img {
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
    position: absolute;
    bottom: 0;
  }
`;
