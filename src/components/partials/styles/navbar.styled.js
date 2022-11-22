import styled from "styled-components";

let Navbar = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  padding: 5vw;
  background-color: var(--primary-transparent);
  border-left: 4px solid var(--bright);
  width: max-content;
  height: max-content;
  min-height: calc(100vh - 10vw);
  box-shadow: -10px 0px 50px #050505;
  backdrop-filter: blur(50px);
  display: ${(props) => props.display};
  z-index: 3;
  ul {
    letter-spacing: 3px;
    font-family: var(--title-font);
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;
    a {
      color: var(--shine);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    li {
      padding-bottom: 3vh;
    }
    li:last-child {
      margin-top: auto;
      padding-bottom: 0;
    }
    .icon {
      width: 30px;
      display: block;
      max-width: 30px;
      padding-bottom: 5px;
    }
  }
`;

export { Navbar };
