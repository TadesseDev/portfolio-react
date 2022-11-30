import axios from "axios";
export const publicURL = "http://localhost:4000/";
const baseURL = "http://localhost:4000/api/v1/";
const root = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export function sendGet(custom) {
  return root.get(custom);
}
