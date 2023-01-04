import styled from "styled-components";

export const FlyLink = styled.a`
  width: max-content;
  position: relative;
  padding-left: 0.9375rem;
  padding-right: 1.875rem;
  height: 1.5625rem;
  display: inline-flex;
  margin: 0.625rem;
  align-items: center;
  color: var(--primary);

  box-shadow: 0px 10px 30px #000000a3;
`;
export const IconContainer = styled.span`
  position: absolute;
  width: 25px;
  height: 25px;
  padding: 0.3125rem;
  left: 100%;
  border-radius: 50%;
  transform: translate(-50%, 0);
  box-shadow: 0 0 0.625rem black;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
  }
`;
