import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  .front-end > p {
    max-width: 70vw;
    margin: 0 auto;
  }
  hr {
    margin: 5vw 0;
  }
  .all-skills {
    margin: 5vw 0;
  }
`;
export const SubSkills = styled.div`
  max-height: 350px;
  overflow: scroll;
  position: relative;
  background-color: var(--primary-dark);
  padding: 15px;
  padding-bottom: 0;
  border-radius: 10px;
  box-shadow: 0 0 10px #ffffff69;
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
  .overlay {
    height: 70px;
    width: 100%;
    position: sticky;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
  }
`;
