import styled from "styled-components";

const MirrorContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--primary-transparent);
  backdrop-filter: blur(10px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export default MirrorContainer;
