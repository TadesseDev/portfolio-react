import styled from "styled-components";
const about = styled.div`
  text-align: center;
  p {
    color: white;
    max-width: 500px;
    margin: auto;
  }
  .bright {
    color: var(--bright);
  }
  .emoji {
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    .about-texts {
      display: grid;
      grid-template-columns: repeat(3, 30%);
    justify-content: space-between;
      gap: 5px;

    }

  }
`;
export const CardContainer = styled.div`
  position: relative;
  margin: 50px 0;
  height: 120vw;
  min-height: 400px;
  max-height: 500px;
  animation-duration: 1s;
  animation-timing-function: linear;
  justify-content: center;
  @media (min-width: 480px) {
    min-height: unset;
    max-height: unset;
    margin-left: 100px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 19%);
    overflow: visible;
  }
`;
export const AboutCard = styled.div`
  --margin-top: ${(prop) => prop.margin * 15}vw;
  --margin-left: ${(prop) => prop.margin * 10}vw;
  width: 50vw;
  max-width: 200px;
  border: 3px solid var(--bright);
  color: var(--bright);
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  padding: 10px;
  z-index: 0;
  margin-top: var(--margin-top);
  margin-left: var(--margin-left);
  button {
    padding: min(5vw, 25px);
    font-weight: bold;
    border-radius: 50%;
    border: none;
    outline: none;
    border: 4px solid var(--primary);
  }
  p,
  h3 {
    color: var(--bright);
  }
  @media (min-width: 480px) {
    width: sum(25vw, 100px);
    min-width: 200px;
    height: 400px;
    position: relative;
    margin: 0;
    justify-self: center;
    &:nth-child(2) {
      margin-top: 100px;
    }
    &:nth-child(3) {
      margin-top: 100px;
    }
  }
`;
export default about;
