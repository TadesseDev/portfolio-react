import { act } from "@testing-library/react";
import { sendGet } from "../../api/root";
const SET_ALL_CERTIFICATIONS = "components/recentWorks/SET_ALL_CERTIFICATIONS";
if (localStorage.getItem("certifications"))
  localStorage.removeItem("certifications");
export const getCertifications = () => (dispatch) => {
  sendGet("certifications")
    .then((result) => {
      if (process.env.NODE_ENV != "production")
        act(() => {
          dispatch({ type: SET_ALL_CERTIFICATIONS, payload: result.data });
        });
      else dispatch({ type: SET_ALL_CERTIFICATIONS, payload: result.data });
    })
    .catch((error) => console.error(error));
};

export default function certificationsReducer(
  state = [],

  { type = "", payload = [] }
) {
  switch (type) {
    case SET_ALL_CERTIFICATIONS:
      return payload;
    default:
      return state;
  }
}
