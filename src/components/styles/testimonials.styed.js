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
`;
export const TestimonyCard = styled.div`
  background-image: url(${(prop) => prop.backgroundImage || ""});
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ffffff3d;
  border-radius: 10px;
  margin-top: calc(12.5vw + 15px);
  padding: 15px;
  box-shadow: 0 0 10px 10px #00000025;
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
`;

export default TestimonialContainer;
