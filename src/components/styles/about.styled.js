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
`;
export const AboutCard = styled.div`
  width: 50vw;
  max-width: 200px;
  border: 3px solid var(--bright);
  color: var(--bright);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  background-color: #00000010;
  position: absolute;
  padding: 10px;
  z-index: 0;
  margin-top: ${(prop) => prop.margin * 15}vw;
  margin-left: ${(prop) => prop.margin * 10}vw;
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
`;
export default about;
