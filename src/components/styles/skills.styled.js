import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  p:first-child {
    max-width: 70vw;
    margin: 0 auto;
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
  }
  .icon {
    grid-area: bottom-left;
  }
  .skill-name {
    grid-area: top-right;
  }
  .skill-description {
    grid-area: bottom-right;
  }
`;
