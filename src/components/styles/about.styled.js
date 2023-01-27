import styled from "styled-components";
const about = styled.div`
  text-align: center;
  p {
    color: white;
  }
  .bright {
    color: var(--bright);
  }
  .emoji {
    font-size: 2rem;
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
    padding: 5vw;
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
    --margin-top: 0;
    --margin-left: ${(prop) => prop.margin * 17}vw;
    position: absolute;
    top: 0;
  }
`;
export default about;
