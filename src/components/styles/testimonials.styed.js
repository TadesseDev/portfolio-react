import styled from "styled-components";
const TestimonialContainer = styled.div`
  text-align: center;
`;
export const Testimonial = styled.div`
  margin-top: 40px;
  ul {
    justify-content: center;
    gap: 10px;
  }
  .icon {
    width: 7vw;
  }
  h3.title{
     font-size: 0.7rem;
              color: var(--bright);
              margin: 0;
  }
   @media (min-width: 480px) {
    h3.title {
      font-size: 1rem;
    }
  }
`;
export const TestimonyCard = styled.div`
  background-image: url(${(prop) => prop.backgroundImage || ""});
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  background-color: #ffffff3d;
  border-radius: 10px;
  margin-top: calc(12.5vw + 15px);
  padding: 15px;
  box-shadow: 0 0 10px 10px #00000025;
  animation-duration: 1s;
  animation-timing-function: linear;
  button {
    cursor: pointer;
  }
  .testimonial-img {
    border: 5px solid var(--primary);
    display: block;
    margin: auto;
    margin-top: calc(-12.5vw + -15px);
    width: 25vw;
    height: 25vw;
    background-image: url(${(prop) => prop.testimonyImage || ""});
    background-size: contain;
    background-position: center;
    border-radius: 50%;
  }
  img {
    width: 100%;
  }
  @media (min-width: 480px) {
    max-width: 500px;
  }
`;

export default TestimonialContainer;
