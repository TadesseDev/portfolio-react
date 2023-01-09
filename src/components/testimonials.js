import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTestimonials } from "../redux/components/testimonials";
import PrimaryTitle from "./partials/primaryTitle";
import SocialMediaIcons from "./partials/socialMediaIcons";
import SubTitle from "./partials/subTitle";
import TestimonialContainer, {
  Testimonial,
  TestimonyCard,
} from "./styles/testimonials.styed";
import testimonialBlob from "../images/testimonial-blob.svg";
import testimonialBlob_flip from "../images/testimonial-blob-flip.svg";
export default function Testimonials() {
  const testimonials = useSelector((state) => state.testimonials);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTestimonials());
  }, [dispatch]);
  return (
    <TestimonialContainer>
      <PrimaryTitle text="Testimonials" />
      {testimonials.map((testimony) => (
        <Testimonial key={testimony.id}>
          <SubTitle
            text={testimony.name}
            style={{ marginBottom: "0" }}
          ></SubTitle>
          <SubTitle
            text={testimony.title}
            style={{ fontSize: "0.7rem", color: "var(--bright)", margin: "0" }}
          ></SubTitle>
          <TestimonyCard
            testimonyImage={testimony.image}
            backgroundImage={
              testimony.id % 2 === 0 ? testimonialBlob_flip : testimonialBlob
            }
          >
            <span className="testimonial-img"></span>
            <a href={"mailto: " + testimony.email}>{testimony.email}</a>

            <p>
              {testimony.testimony.slice(0, 200)}
              <button type="button" className="link-button">
                ...continue reading{" "}
              </button>
            </p>
          </TestimonyCard>
          <SocialMediaIcons
            links={{
              linkedIn: {link: testimony.linkedin },
              twitter: {link: testimony.twitter },
              gitHub: {link: testimony.github },
            }}
          />
          <hr />
        </Testimonial>
      ))}
    </TestimonialContainer>
  );
}
