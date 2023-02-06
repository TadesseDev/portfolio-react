import styled from "styled-components";

const ContactContainer = styled.div`
  margin: 0 -5vw;
  border-radius: 25% 25% 0 0;
  padding: 12vw;
  position: relative;
  overflow: hidden;
  z-index: 1;
  animation-duration: 1s;
  animation-timing-function: linear;
  button {
    padding: 0;
    border: none;
    background: none;
    margin: auto;
    display: block;
    outline: none;
  }
  form {
    max-width: 500px;
    margin: auto;
  }

  @media (min-width: 768px) {
    overflow: visible;
    .input-fields,
    .message-fields {
      min-width: min(300px, 28vw);
    }
    border-radius: 0;
    margin: 100px auto;
    padding: 50px 100px;
    width: max-content;
    h2 span{
      color: var(--bright);
    }
    form {
      max-width: unset;
      display: grid;
      gap: 50px;
      grid-template-columns: 50% 50%;
    }
    .top,
    .bottom {
      position: absolute;
      width: 100px;
      height: 100px;
      z-index: -2;
      border-radius: 10px;
      animation-name: rotate-clockwise;
      animation-duration: 30s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    .top {
      background-color: var(--bright);
      top: -50px;
      left: -50px;
    }
    .bottom {
      background-color: var(--shine);
      top: calc(100% - 50px);
      left: calc(100% - 50px);
    }
    .mirror {
      border: 2px solid var(--bright);
    }
  }
`;
export const InputField = styled.div`
  position: relative;
  border: 2px solid var(--bright);
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 15px auto;
  background: var(--primary);
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  input {
    width: 80%;
    position: absolute;
    left: 15%;
    height: 100%;
    min-height: 40px;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    color: var(--bright);
  }
  .icon {
    width: 12%;
  }
`;
export const TextField = styled.div`
  border: 2px solid var(--bright);
  border-radius: 10px;
  overflow: hidden;
  margin: 15px auto;
  background: var(--primary);
  textarea {
    color: var(--bright);
    padding: 2%;
    width: 96%;
    left: 15%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
  }
`;

export default ContactContainer;
