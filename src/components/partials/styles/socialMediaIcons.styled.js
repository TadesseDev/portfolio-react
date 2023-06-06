import styled from "styled-components";

const SocialMediasContainer = styled.ul`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  margin: 10px;
  min-width: 100%;
  a{
    p{
      padding: 0;
      margin:0;
      font-size: 0.8rem;
    }
  }
`;
export default SocialMediasContainer;
