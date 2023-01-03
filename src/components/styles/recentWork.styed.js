import styled from "styled-components";

export const RecentWorkContainer = styled.div`
  p {
    padding: 5vw;
  }
  margin: 10vh 0;
  text-align: center;
  img {
    margin-left: -5vw;
    width: calc(100% + 10vw);
  }
`;
export const Projects = styled.div``;
export const Project = styled.div`
  border: 3px solid var(--bright);
  padding: 5vw;
  margin: 3vw;
  background: #ffffff3d;
  backdrop-filter: blur(1px);
  button {
    background-color: var(--decoration2);
    border: 2px solid var(--bright);
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
  }
`;
