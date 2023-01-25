import React, { useEffect, useContext } from "react";
import { InView } from "react-intersection-observer";
import CommonFunctionContext from "../context/commonFunctionsContext";
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

  const { showMoreContent, showLessContent } = useContext(
    CommonFunctionContext
  );
  const testimonials = useSelector((state) => state.testimonials);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTestimonials());
  }, [dispatch]);
  return (
    <TestimonialContainer id="testimonials">
      <PrimaryTitle text="Testimonials" />
      {testimonials.map((testimony) => (
        <Testimonial key={testimony.id}>
          <SubTitle
            text={testimony.name}
            style={{ marginBottom: "0", fontSize: "1.5rem" }}
          ></SubTitle>
          <SubTitle
            text={testimony.title}
            className="title"
          ></SubTitle>
          <InView
            onChange={(inView, entry) => {
              inView
                ? (entry.target.firstChild.style.animationName =
                    "fade-in-opacity")
                : (entry.target.firstChild.style.animationName = "");
            }}
          >
            <TestimonyCard
              testimonyImage={testimony.image}
              backgroundImage={
                testimony.id % 2 === 0 ? testimonialBlob_flip : testimonialBlob
              }
            >
              <span className="testimonial-img"></span>
              <a href={"mailto:" + testimony.email}>{testimony.email}</a>

              <p>
                <span className="text-content">
                  {testimony.testimony.slice(0, 200)}
                </span>
                <button
                  type="submit"
                  className="link-button more"
                  onClick={(e) => {
                    const textContainer =
                      e.target.parentNode.getElementsByClassName(
                        "text-content"
                      )[0];
                    const more =
                      e.target.parentNode.getElementsByClassName("more")[0];
                    const less =
                      e.target.parentNode.getElementsByClassName("less")[0];
                    textContainer.textContent = testimony.testimony;
                    more.style.display = "none";
                    less.style.display = "inline";
                  }}
                >
                  ...more
                </button>
                <button
                  type="submit"
                  className="link-button less"
                  style={{ display: "none" }}
                  onClick={(e) => {
                    const textContainer =
                      e.target.parentNode.getElementsByClassName(
                        "text-content"
                      )[0];
                    const more =
                      e.target.parentNode.getElementsByClassName("more")[0];
                    const less =
                      e.target.parentNode.getElementsByClassName("less")[0];
                    textContainer.textContent = testimony.testimony.slice(
                      0,
                      200
                    );
                    more.style.display = "inline";
                    less.style.display = "none";
                  }}
                >
                  ...less{" "}
                </button>
              </p>
            </TestimonyCard>
            <SocialMediaIcons
              links={{
                linkedIn: { link: testimony.linkedin },
                twitter: { link: testimony.twitter },
                gitHub: { link: testimony.github },
              }}
            />
            <hr />
          </InView>
        </Testimonial>
      ))}
    </TestimonialContainer>
  );
}
