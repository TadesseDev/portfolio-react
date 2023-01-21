import styled from "styled-components";

export const RecentWorkContainer = styled.div`
  p {
    padding: 5vw;
  }
  margin: 10vh 0;
  text-align: center;
  #me-coding img {
    margin-left: -5vw;
    width: calc(100% + 10vw);
  }
`;
export const Projects = styled.div``;
export const Project = styled.div`
position: relative;
  padding: 5vw;
  margin: 3vw;
  margin-top: 50px;
  box-shadow: 0 0 10px 5px #0000001c;
  z-index: 1;
  border-radius: 15px;
  overflow: hidden;
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
`;
