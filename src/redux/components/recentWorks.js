import { sendGet } from "../../api/root";
const SET_ALL_RECENT_WORKS = "components/recentWorks/SET_ALL_RECENT_WORKS";
export const getRecentWorks = () => (dispatch) => {
  if (!localStorage.getItem("recentWorks"))
    sendGet("projects")
      .then((result) => {
        localStorage.setItem("recentWorks", JSON.stringify(result.data));
        dispatch({ type: SET_ALL_RECENT_WORKS, payload: result.data });
      })
      .catch((error) => console.error(error));
  else
    dispatch({
      type: SET_ALL_RECENT_WORKS,
      payload: JSON.parse(localStorage.getItem("recentWorks")),
    });
};

export default function recentWorkReducer(
  state = [],
  { type = "", payload = [] }
) {
  switch (type) {
    case SET_ALL_RECENT_WORKS:
      return payload;
    default:
      return state;
  }
}
