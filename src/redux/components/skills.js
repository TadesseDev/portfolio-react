import { act } from "@testing-library/react";
import { sendGet } from "../../api/root";
const GET_ALL_SKILLS = "components/skills/GET_ALL_SKILLS";

export const getSkills = () => (dispatch) => {
  if (localStorage.getItem("technologies"))
    localStorage.removeItem("technologies");
  sendGet("technologies")
    .then((result) => {
      if (process.env.NODE_ENV != "production")
        act(() => {
          dispatch({ type: GET_ALL_SKILLS, payload: result.data });
        });
      else dispatch({ type: GET_ALL_SKILLS, payload: result.data });
    })
    .catch((error) => console.error(error));
};

export default function skillsReducer(state = [], { type = "", payload = [] }) {
  switch (type) {
    case GET_ALL_SKILLS:
      return payload;
    default:
      return state;
  }
}
