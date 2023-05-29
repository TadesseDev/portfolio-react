import { act } from "@testing-library/react";
import { sendGet } from "../../api/root";
const SET_ALL_RECENT_WORKS = "components/recentWorks/SET_ALL_RECENT_WORKS";
export const getRecentWorks = () => (dispatch) => {
  if (localStorage.getItem("recentWorks"))
    localStorage.removeItem("recentWorks");
  sendGet("projects")
    .then((result) => {
      act(() => { dispatch({ type: SET_ALL_RECENT_WORKS, payload: result.data });});
    })
    .catch((error) => {
       console.error(error);
    });
};

export default function recentWorkReducer(
  state = [],
  { type = "", payload = [] }
) {
  switch (type) {
    case SET_ALL_RECENT_WORKS:
      return payload.map((project) => {
        const tests = [];
        const technologies = [];
        project["technologies"].forEach((element) => {
          if (element["tech_type"] === "Test") tests.push(element);
          else technologies.push(element);
        });
        return {
          project: project["project"],
          technologies,
          tests,
        };
      });
    default:
      return state;
  }
}
