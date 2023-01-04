import styled from "styled-components";
const Direction = styled.div`
  background: var(--primary);
  border: 2px solid var(--bright);
  border-radius: 50%;
  width: 15px;
  height: 15px;
  padding: ${15 / 2}px;
  left: 0;
  img {
    display: block;
    width: 100%;
  }
`;
export default Direction;
