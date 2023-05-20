import axios from "axios";

const baseURL = process.env.REACT_APP_API_SERVER;

const root = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export function sendGet(custom) {
  return root.get(custom);
}

export function sendPost(custom, data) {
  return root.post(custom, data);
}
