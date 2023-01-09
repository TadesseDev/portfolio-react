import { sendGet } from "../../api/root";
const SET_TESTIMONIALS = "components/recentWorks/SET_TESTIMONIALS";
export const getTestimonials = () => (dispatch) => {
  if (!localStorage.getItem("testimonials"))
    sendGet("testimonials")
      .then((result) => {
        localStorage.setItem("testimonials", JSON.stringify(result.data));
        dispatch({ type: SET_TESTIMONIALS, payload: result.data });
      })
      .catch((error) => console.error(error));
  else
    dispatch({
      type: SET_TESTIMONIALS,
      payload: JSON.parse(localStorage.getItem("testimonials")),
    });
};

export default function testimonialsReducer(state = [], { type = "", payload = [] }) {
  switch (type) {
    case SET_TESTIMONIALS:
      return payload
    default:
      return state;
  }
}
