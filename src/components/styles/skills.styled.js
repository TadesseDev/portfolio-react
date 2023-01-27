import styled from "styled-components";

export const SkillsContainer = styled.div`
  overflow: hidden;
  margin: 10vh 0;
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  .pre > p {
    max-width: 70vw;
    margin: 0 auto;
  }
  hr {
    margin: 5vw 0;
    border: 1px solid var(--shine);
  }
  .all-skills {
    margin: 5vw 0;
  }
  .more {
    position: relative;
    border-radius: 10px;
    padding: 10px;
    max-width: 500px;
    margin: 0 auto;
    z-index: 1;
    overflow: hidden;
    color: var(--shine);
    p {
      color: var(--shine);
    }
  }
  button {
    background: none;
    border: 1px solid var(--shine);
    margin: 10px;
    border-radius: 10px;
    width: 80%;
    padding: 3vw;
    color: var(--shine);
  }
  button:hover {
    background: var(--shine);
    color: var(--primary);
  }

  @media (min-width: 768px) {

    .skill-container {
      display: grid;
      grid-template-columns: 25% min(70%, 600px);
      justify-content: space-between;
      .icon{
        max-width: 50px;
      }
      h3{
        font-size: 1.5rem;
      }
    }
    hr {
      grid-column: span 2;
      min-width: 100%;
    }
    h3 {
      display: flex;
      flex-direction: column;
      border-right: 2px solid var(--shine)
    }
  }
`;
export const SubSkills = styled.div`
  max-height: 350px;
  max-width: 600px;
  overflow: scroll;
  position: relative;
  margin: 0 15px;
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
    text-align: left;
  }
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: var(--primary);
    border: 1px solid var(--decoration2);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 1px solid transparent;
    background-clip: content-box;
    background-color: var(--decoration2);
  }
`;
