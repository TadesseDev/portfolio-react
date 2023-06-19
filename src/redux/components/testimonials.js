import { act } from "@testing-library/react";
import { sendGet } from "../../api/root";
const SET_TESTIMONIALS = "components/recentWorks/SET_TESTIMONIALS";
export const getTestimonials = () => (dispatch) => {
  if (localStorage.getItem("testimonials"))
    localStorage.removeItem("testimonials");
  sendGet("testimonials")
    .then((result) => {
      if (process.env.NODE_ENV != "production")
        act(() => {
          dispatch({ type: SET_TESTIMONIALS, payload: result.data });
        });
      else dispatch({ type: SET_TESTIMONIALS, payload: result.data });
    })
    .catch((error) => console.error(error));
};

export default function testimonialsReducer(
  state = [],
  { type = "", payload = [] }
) {
  switch (type) {
    case SET_TESTIMONIALS:
      return payload;
    default:
      return state;
  }
}
