import styled from "styled-components";

export const RecentWorkContainer = styled.div`
  p {
    padding: 5vw;
  }
  margin: 10vh 0;
  text-align: center;
  #me-coding span {
    min-width: min(80vw, 600px);
  }
  #me-coding img {
    margin-left: -5vw;
    width: calc(100% + 10vw);
  }
`;
export const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Project = styled.div`
  position: relative;
  padding: 40px;
  margin: 3vw;
  margin-top: 50px;
  box-shadow: 0 0 10px 5px #0000001c;
  z-index: 1;
  border-radius: 15px;
  overflow: hidden;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  max-width: 400px;
  button {
    background-color: var(--decoration2);
    border: 2px solid var(--bright);
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
  }
  .about {
    background: var(--primary);
    border: 2px solid var(--bright);
    padding: 10px;
    padding-bottom: 20px;
    position: relative;
    margin: 30px 0;
    box-shadow: 0px 0px 10px 10px #00000021;
    border-radius: 5px;
    p {
      max-height: 20px;
      margin: 0px;
      padding: 0px;
      overflow: hidden;
    }
  }
  .links {
    display: flex;
    justify-content: space-around;
  }
  @media (min-width: 768px) {
    max-width: calc(40vw - 40px - 2vw);
    padding: 20px;
    margin: 1vw;
    h2 {
      font-size: 1.2rem;
    }
    h3 {
      font-size: 1.1rem;
    }
    .links a {
      padding-left: 0.9375rem;
      padding-right: 1.875rem;
      height: 1.5625rem;
      font-size: 1rem;
    }
    .gradientTopBottom {
      width: 25px;
      height: 25px;
    }
    .about {
      padding: 5px;
      padding-bottom: 20px;
      p{
        font-size: 1rem;
      }
    }
  }
`;
