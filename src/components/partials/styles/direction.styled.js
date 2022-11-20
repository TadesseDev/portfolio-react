import styled from "styled-components";
let width = 15;
const Direction = styled.div`
  ${(prop) => {
    width = prop.width;
  }}
  background: var(--primary);
  border: 4px solid var(--bright);
  border-radius: 50%;
  width: ${width}px;
  height: ${width}px;
  padding: ${width / 2}px;
  position: absolute;
  left: 0;
  transform: translate(calc(-50% - 2px));
  img {
    display: block;
    width: 100%;
  }
`;
export default Direction;
