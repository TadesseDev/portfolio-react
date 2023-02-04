import styled from "styled-components";
import skillBackground from "../../images/tech-card.svg";
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
    h2 {
      color: var(--shine);
    }
  }
  button {
    background: none;
    border: 1px solid var(--shine);
    margin: 10px;
    font-size: 1.5rem;
    border-radius: 10px;
    padding: 3vw;
    color: var(--shine);
  }
  button:hover {
    background: var(--shine);
    color: var(--primary);
  }

  @media (min-width: 764px) {
    .skill-container {
      display: grid;
      grid-template-columns: 25% min(70%, 600px);
      justify-content: space-between;
      .icon {
        max-width: 50px;
      }
      h3 {
        font-size: 1rem;
      }
    }
    hr {
      grid-column: span 2;
      min-width: 100%;
    }
    h3 {
      display: flex;
      flex-direction: column;
      border-right: 2px solid var(--shine);
    }
    .more {
      max-width: unset;
      .mirror {
      display: none;
    }
    }
    button {
      font-size: 2rem;
      font-family: var(--title-font);
    }
  }
  @media (min-width: 764px) {
    .skill-container {
      display: grid;
      grid-template-columns: 15% 85%;
      justify-content: space-between;
    }
  }
  .pre {
    width: 100%;
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
  @media (min-width: 764px) {
    max-width: unset;
    max-height: unset;
    overflow: visible;
    display: flex;
    flex-wrap: wrap;
    margin-left: 50px;
    gap: 2px;
    justify-content: center;
    .skill {
      width: 200px;
      height: 300px;
      gap: 0;
      overflow: visible;
      position: relative;
      background-image: url(${skillBackground});
      background-position: center;
      background-size: cover;
      z-index: 1;
      h4 {
        color: var(--primary);
        margin: 0;
        padding: 5px;
        max-width: 100%;
        font-family: var(--title-font);
        font-size: 1.5rem;
        text-align: center;
        margin-left: -40px;
      }
      p {
        color: white;
        margin: 0;
        margin-bottom: auto;
        padding-right: 10px;
        font-size: 1rem;
      }
      .icon {
        transform: translateX(-50%);
        grid-row: span 2;
        margin-right: -20px;
      }
    }
    .skill-description {
      padding: 0;
      max-height: 70%;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
