import { sendGet } from "../../api/root";
const GET_ALL_SKILLS = "components/skills/GET_ALL_SKILLS";

export const getSkills = () => (dispatch) => {
  if (!localStorage.getItem("technologies"))
    sendGet("technologies")
      .then((result) => {
        localStorage.setItem("technologies", JSON.stringify(result.data));
        dispatch({ type: GET_ALL_SKILLS, payload: result.data });
      })
      .catch((error) => console.error(error));
  else
    dispatch({
      type: GET_ALL_SKILLS,
      payload: JSON.parse(localStorage.getItem("technologies")),
    });
};

export default function skillReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_SKILLS:
      return action.payload;
    default:
      return state;
  }
}
