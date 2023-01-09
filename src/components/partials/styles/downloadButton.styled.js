import styled from "styled-components";

export const Download = styled.span`
  background: var(--decoration2);
  font-family: var(--main-title-font);
  font-size: ${(props) => props.fontSize || 1 + "rem"};
  display: inline-block;
  color: white;
  margin: 12px;
  padding: 15px 60px 10px 10px;
  position: relative;
  box-shadow: 10px 10px 10px #0000008c;
  :hover {
    #overlay {
      width: 80%;
      left: 0;
      margin: auto;
      border-radius: 10px;
      box-shadow: 0 0 10px #00000087;
      align-items: center;
      gap: 10px;
      img {
        transform: rotate(-90deg);
        display: block;
      }
      span {
        display: inline;
      }
    }
  }
`;
export const OverLay = styled.span`
  display: flex;
  height: 100%;
  width: 50px;
  background: var(--decoration2-light);
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: -5px 0 5px #00000087;
  align-items: center;
  justify-content: center;
  transition: width 0.3s ease-out;
  img {
    height: 60%;
    transition: transform 0.3s ease-out;
  }

  span {
    display: none;
  }
`;
