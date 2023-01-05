import { sendGet } from "../../api/root";
const SET_ALL_CERTIFICATIONS = "components/recentWorks/SET_ALL_CERTIFICATIONS";
export const getCertifications = () => (dispatch) => {
  if (!localStorage.getItem("certifications"))
    sendGet("certifications")
      .then((result) => {
        localStorage.setItem("certifications", JSON.stringify(result.data));
        dispatch({ type: SET_ALL_CERTIFICATIONS, payload: result.data });
      })
      .catch((error) => console.error(error));
  else
    dispatch({
      type: SET_ALL_CERTIFICATIONS,
      payload: JSON.parse(localStorage.getItem("certifications")),
    });
};

export default function certifications(
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
