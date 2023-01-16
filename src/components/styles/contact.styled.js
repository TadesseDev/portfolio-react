import styled from "styled-components";

const ContactContainer = styled.div`
  margin: 0 -5vw;
  border-radius: 25% 25% 0 0;
  padding: 12vw;
  background-color: #ffffff1c;
  backdrop-filter: blur(1px);
  button {
    padding: 0;
    border: none;
    background: none;
    margin: auto;
    display: block;
    outline: none;
  }
`;
export const InputField = styled.div`
  position: relative;
  max-width: 300px;
  border: 2px solid var(--bright);
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 15px auto;
  background: var(--primary);
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
  max-width: 300px;
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
