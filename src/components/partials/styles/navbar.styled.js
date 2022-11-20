import styled from "styled-components";

let Navbar = styled.nav`
  position: absolute;
  right: 0;
  padding: 5vw;
  border-left: 4px solid var(--bright);
  width: max-content;
  height: max-content;
  min-height: calc(100vh - 10vw);
  display: ${(props) => props.display};
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
