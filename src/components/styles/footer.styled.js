import styled from "styled-components";

const FooterContainer = styled.footer`
  margin: 0 -5vw;
  padding: 1rem 0;
  font-size: 0.8rem;
  border-top: 2px solid var(--bright);
  border-bottom: 2px solid var(--bright);
  background-color: #ffffff1c;
  overflow: hidden;
  .links {
    display: flex;
    justify-content: space-around;
  }
  .address {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  ul {
    justify-content: center;
    gap: 1rem;
  }
  .icon {
    width: 6vw;
  }
`;
export default FooterContainer;
