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

  @media (min-width: 1024px) {
    display: block;
    min-height: max-content;
    background-color: transparent;
    min-width: calc(100vw - 40px);
    padding: 20px;
    margin: 0;
    border: 0;
    box-shadow: none;
    &:hover {
      ul {
        width: 100px
      }
    }
    ul {
      justify-content: flex-start;
      transition: width 0.3s ease-in-out;
      .icon {
        max-width: 20px;
        margin: auto;
      }
      flex-direction: column;
      min-height: max-content;
      width: 0px;
      padding: 0;
      align-items: baseline;
    }

    li {
      padding: 0;
      margin: 0;
      margin: auto;
      a {
        display: flex;
        gap: 5px;
        flex-direction: column;
        font-size: 0.7rem;
        font-family: var(--paragraph-font);
        &:hover {
          border-bottom: 2px solid var(--bright);
        }
      }
    }

    li:last-child {
      margin-left: auto;
      a {
        display: block;
        color: var(--bright);
      }
    }
    min-width: max-content;
    position: fixed;
    left: 100vw;
    top: 50%;
    transform: translate(-100%, -50%);
  }
`;

export { Navbar };
