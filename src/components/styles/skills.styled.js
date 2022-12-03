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
`;
